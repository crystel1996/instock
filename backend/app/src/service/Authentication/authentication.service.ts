import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LoginInput } from "src/dto/Login/login.input";
import { User } from "src/model/User/User.entity";
import { Repository } from "typeorm";
import { UserService } from "../User/User.service";
import { HashPassword } from "src/config";
import { JwtService } from "@nestjs/jwt";
import { RegisterInput } from "src/dto/Register/register.input";

@Injectable()
export class AuthenticationService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private userService : UserService,
        private hashPassword: HashPassword,
        private jwtService: JwtService
    ) {}

    async login(input: LoginInput) {

        if (!input.email || !input.password) {
            throw Error("Email et le mot de passe sont indispensables!");
        }

        const user = await this.userService.findUserByColumn(input.email, 'email');

        if (!user) {
            throw new Error('Utilisateur introuvable!');
        }

        const isMatchPassword = await this.hashPassword.comparePassword(input.password, user.password);

        if (!isMatchPassword) {
            throw Error("Mot de passe incorrecte!");
        }

        const payload = { sub: user.id, username: user.email };

        const access_token = await this.jwtService.signAsync(payload);

        return {
            accessToken: access_token
        }

    }

    async register(input: RegisterInput) {
        

        const user = await this.userService.createUser(input);

        const payload = { sub: user.id, username: user.email };

        const access_token = await this.jwtService.signAsync(payload);

        return {
            accessToken: access_token
        }


    }

}