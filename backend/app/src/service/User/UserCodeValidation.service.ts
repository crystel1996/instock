import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GenerateUserCodeValidationInput } from "src/dto/User/userCodeValidation.input";
import { UserCodeValidation } from "src/model/User/UserCodeValidation.entity";
import { Repository } from "typeorm";
import { UserService } from "./User.service";
import { Code } from "src/config";
import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";
import { VerifyUserCodeValidationInput } from "src/dto/User/verifyUserCodeValidation.input";

@Injectable()
export class UserCodeValidationService {
    constructor(
        @InjectRepository(UserCodeValidation) private userCodeValidationRepository: Repository<UserCodeValidation>,
        private userService: UserService,
        private code: Code
    ) {
        dayjs.extend(utc);
    }

    async countGeneratedCodeByEmail(email: string, type: string, status: string) {
        return this.userCodeValidationRepository.count({
            where: {
                email: email,
                type,
                status
            }
        });
    }

    async generateUserCodeValidation(input: GenerateUserCodeValidationInput) {
        const generatedCount = await this.countGeneratedCodeByEmail(input.email.trim(), input.type, 'EXPIRED');


        if (generatedCount === 3) {
            throw new Error("Vous avez dépassé le nombre maximum de tentatives autorisées. Veuillez réessayer plus tard ou contacter le support technique pour obtenir de l'aide.");
        }

        const user = await this.userService.findUserByColumn(input.email.trim(), 'email');

        if (!user) {
            throw new Error("Utilisateur introuvable");
        }

        const generatedCode = this.code.generate(4);

        const now = dayjs.utc();

        const newUserCodeValidation = this.userCodeValidationRepository.create({
            code: generatedCode,
            idUser: user.id,
            email: user.email,
            expiredAt: now.add(1, 'hours').toDate(),
            type: input.type,
            status: 'VALIDATED'
        });
        return this.userCodeValidationRepository.save(newUserCodeValidation);

    }

    async verifyUserCodeValidation(input: VerifyUserCodeValidationInput) {
        
        const user = await this.userService.findUserByColumn(input.email.trim(), 'email');

        if (!user) {
            throw new Error("Utilisateur introuvable");
        }

        const codeValidation = await this.userCodeValidationRepository.findOneBy({
            email: input.email.trim(),
            idUser: user.id,
            code: input.code.trim(),
            type: input.type
        });

        if (!codeValidation) {
            throw new Error("Code invalide!");
        }

        const now = dayjs.utc();

        console.log('TEST', {
            check: dayjs(codeValidation.expiredAt).isBefore(now),
            expiredAt: codeValidation.expiredAt,
            now: now
        });
        
        if (dayjs(codeValidation.expiredAt).isBefore(now)) {
            throw new Error("Code expiré");
        }

        codeValidation.status = 'EXPIRED';

        await this.userCodeValidationRepository.save(codeValidation);

        return true;

    }

}