import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EmailConfig, HashPassword } from "src/config";
import { CreateUserInput } from "src/dto/User/createUser.input";
import { User } from "src/model/User/User.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private hashPassword: HashPassword,
        private emailConfig: EmailConfig
    ) {}

    async createUser(createUserData: CreateUserInput) {

        if (createUserData.password !== createUserData.confirmPassword) {
            throw new Error("Le mot de passe et la confirmation du mot de passe n'est pas identique!");
        }

        const isValidEmail = this.emailConfig.isValidEmail(createUserData.email)

        if (!isValidEmail) {
            throw new Error("L'email n'est pas valide!");
        }


        const hashedPassword = await this.hashPassword.hashed(createUserData.password);

        const userInput: CreateUserInput = {
            ...createUserData,
            password: hashedPassword
        }

        const newUser = this.userRepository.create(userInput);
        return this.userRepository.save(newUser);
    }

}