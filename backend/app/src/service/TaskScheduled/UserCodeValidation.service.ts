import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { InjectRepository } from "@nestjs/typeorm";
import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";
import { UserCodeValidation } from "src/model/User/UserCodeValidation.entity";
import { LessThan, Repository } from "typeorm";

@Injectable()
export class UserCodeValidationScheduled {

    constructor(
        @InjectRepository(UserCodeValidation) private userCodeValidationRepository: Repository<UserCodeValidation>
    ) {
        dayjs.extend(utc);
    }

    @Cron('00 01 00 * * *')
    async changeStatusUserCodeValidation() {
        const now = dayjs.utc();
        let skip: number = 0;
        let take: number = 12;

        const recursiveValidations = async (skip: number, take: number) => {
            const userCodeValidations = await this.userCodeValidationRepository.find({
                select: {
                    expiredAt: true,
                    status: true,
                },
                where: {
                    status: 'VALIDATED',
                    expiredAt: LessThan(now.toDate())
                },
                skip: skip,
                take: take
            });

            console.log('[USER VALIDATIONS]', userCodeValidations)

            if (userCodeValidations.length === 0) {
                return;
            }

            

            skip = skip + 12;

            recursiveValidations(skip, take);


        }

        recursiveValidations(skip, take);

    }

}