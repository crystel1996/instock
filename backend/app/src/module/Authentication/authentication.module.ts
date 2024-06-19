import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Code, EmailConfig, HashPassword } from "src/config";
import { User } from "src/model/User/User.entity";
import { UserCodeValidation } from "src/model/User/UserCodeValidation.entity";
import { AuthenticationResolver } from "src/resolvers/Authentication/authentication.resolver";
import { AuthenticationService } from "src/service/Authentication/authentication.service";
import { EmailService } from "src/service/Email/Email.service";
import { UserService } from "src/service/User/User.service";
import { UserCodeValidationService } from "src/service/User/UserCodeValidation.service";


@Module({
    imports: [TypeOrmModule.forFeature([User, UserCodeValidation])],
    providers: [
        UserService,
        HashPassword,
        EmailConfig,
        AuthenticationResolver,
        AuthenticationService,
        EmailService,
        Code,
        UserCodeValidationService
    ],
})
export class AuthenticationModule {}