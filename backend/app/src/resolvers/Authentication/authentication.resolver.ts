import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Code } from "src/config";
import { SendEmailProfileValidationInput } from "src/dto/Email/SendEmailProfileValidation.input";
import { SendEmailResetPasswordInput } from "src/dto/Email/SendEmailResetPassword.input";
import { LoginInput } from "src/dto/Login/login.input";
import { Login } from "src/dto/Login/login.type";
import { ResetPasswordInput } from "src/dto/Password/resetPassword.input";
import { RegisterInput } from "src/dto/Register/register.input";
import { Register } from "src/dto/Register/register.type";
import { User } from "src/model/User/User.entity";
import { AuthenticationService } from "src/service/Authentication/authentication.service";
import { EmailService } from "src/service/Email/Email.service";
import { UserService } from "src/service/User/User.service";
import { UserCodeValidationService } from "src/service/User/UserCodeValidation.service";

@Resolver((of) => User)
export class AuthenticationResolver {
    constructor (
        private authService: AuthenticationService,
        private emailService: EmailService,
        private userService: UserService,
        private userCodeValidation: UserCodeValidationService
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

    @Mutation(() => Boolean, { nullable: true })
    async sendEmailResetPassword(@Args('input') input: SendEmailResetPasswordInput) {

        const variables = {
            code: input.code
        };

        return this.emailService.sendEmail({...input, variables});
    }

    @Mutation(() => Boolean, { nullable: true })
    async sendEmailProfileValidation(@Args('input') input: SendEmailProfileValidationInput) {

        const user = await this.userService.findUserEmailReceiver(input.idUser);

        const codeValidation  = await this.userCodeValidation.generateUserCodeValidation({
            email: user.to,
            type: 'PROFILE_VALIDATION'
        });

        const variables = {
            code: codeValidation.code
        }
        
        return this.emailService.sendEmail({
            subject: input.subject,
            template: "profile validation",
            to: user.to, 
            variables
        });
    }

}