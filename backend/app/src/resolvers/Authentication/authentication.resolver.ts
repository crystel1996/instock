import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LoginInput } from "src/dto/Login/login.input";
import { Login } from "src/dto/Login/login.type";
import { ResetPasswordInput } from "src/dto/Password/resetPassword.input";
import { RegisterInput } from "src/dto/Register/register.input";
import { Register } from "src/dto/Register/register.type";
import { User } from "src/model/User/User.entity";
import { AuthenticationService } from "src/service/Authentication/authentication.service";

@Resolver((of) => User)
export class AuthenticationResolver {
    constructor (
        private authService: AuthenticationService
    ) {}

    @Query((returns) => Login)
    async login(@Args('input') input: LoginInput) {
        return this.authService.login(input);
    }

    @Mutation(() => Register)
    async register(@Args('input') input: RegisterInput) {
        return this.authService.register(input);
    }

    @Mutation(() => User)
    async resetPassword(@Args('input') input: ResetPasswordInput) {
        return this.authService.resetPassword(input);
    }


}