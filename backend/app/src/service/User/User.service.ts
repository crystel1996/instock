import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EmailConfig, HashPassword } from "src/config";
import { CreateUserInput } from "src/dto/User/createUser.input";
import { UpdateUserAccountStateInput } from "src/dto/User/updateUserAccountState.input";
import { UpdateUserProfileInput } from "src/dto/User/updateUserProfile.input";
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

        if (!createUserData.email || !createUserData.password || !createUserData.username) {
            throw Error("Tous les champs sont indispensables!");
        }

        if (createUserData.password !== createUserData.confirmPassword) {
            throw new Error("Le mot de passe et la confirmation du mot de passe ne sont pas identiques!");
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

        const newUser = this.userRepository.create({
            ...userInput,
            accountState: "NOT_VERIFIED"
        });
        return this.userRepository.save(newUser);
    }

    async updateUserProfile(input: UpdateUserProfileInput) {
        const user = await this.userRepository.findOne({
            where: {
                id: input.id
            }
        });

        if (!user) {
            throw new Error('Utilisateur introuvable!');
        }

        const isValidEmail = this.emailConfig.isValidEmail(input.email)

        if (!isValidEmail) {
            throw new Error("L'email n'est pas valide!");
        }

        const existUserWithEmail = await this.findUserByColumn(input.email, 'email');

        if (existUserWithEmail && existUserWithEmail?.id !== input.id) {
            throw new Error("L'adresse email est déja utilisé par un autre utilisateur.");
        }

        const userInput = {
            email: input.email,
            username: input.username,
            accountState: "NOT_VERIFIED"
        }

        await this.userRepository.update(user.id, userInput);

        return user;

    }

    async findUserEmailReceiver(id: string) {
        const user = await this.userRepository.findOne({
            where: {
                id: id
            }
        });

        if (!user) {
            throw new Error('Utilisateur introuvable!');
        }

        return {
            to: user.email
        }
    }

    async updateAccountState(input: UpdateUserAccountStateInput) {
        const user = await this.userRepository.findOne({
            where: {
                id: input.id
            }
        });

        if (!user) {
            throw new Error('Utilisateur introuvable!');
        }

        const userInput = {
            accountState: input.accountState
        }

        await this.userRepository.update(user.id, userInput);

        return user;

    }

    async findUserByColumn(value: string, column: string) {
        const user = await this.userRepository.findOne({
            where: {
                [column]: value
            }
        });

        return user;

    }

}