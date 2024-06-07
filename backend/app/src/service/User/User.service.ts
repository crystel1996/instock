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

        const existUserWithEmail = await this.findUserByColumn(createUserData.email, 'email');

        if (existUserWithEmail) {
            throw new Error("L'adresse email est déja utilisé par un autre utilisateur.");
        }


        const hashedPassword = await this.hashPassword.hashPassword(createUserData.password);

        const userInput: CreateUserInput = {
            ...createUserData,
            email: createUserData.email.trim(),
            password: hashedPassword
        }

        const newUser = this.userRepository.create(userInput);
        return this.userRepository.save(newUser);
    }

    async findUserByColumn(value: string, column: string) {
        const user = await this.userRepository.findOneBy({
            [column]: value
        });

        if (!user) {
            throw new Error('Utilisateur introuvable!')
        }

        return user;

    }

}