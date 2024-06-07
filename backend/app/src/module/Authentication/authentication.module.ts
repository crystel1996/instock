import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmailConfig, HashPassword } from "src/config";
import { User } from "src/model/User/User.entity";
import { AuthenticationResolver } from "src/resolvers/Authentication/authentication.resolver";
import { AuthenticationService } from "src/service/Authentication/authentication.service";
import { UserService } from "src/service/User/User.service";


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [
        UserService,
        HashPassword,
        EmailConfig,
        AuthenticationResolver,
        AuthenticationService
    ],
})
export class AuthenticationModule {}