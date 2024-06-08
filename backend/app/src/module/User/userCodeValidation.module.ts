import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Code, EmailConfig, HashPassword } from "src/config";
import { User } from "src/model/User/User.entity";
import { UserCodeValidation } from "src/model/User/UserCodeValidation.entity";
import { UserCodeValidationResolver } from "src/resolvers/User/userCodeValidation.resolver";
import { UserService } from "src/service/User/User.service";
import { UserCodeValidationService } from "src/service/User/UserCodeValidation.service";


@Module({
  imports: [TypeOrmModule.forFeature([User, UserCodeValidation])],
  providers: [
    UserService,
    UserCodeValidationResolver,
    UserCodeValidationService,
    Code,
    HashPassword,
    EmailConfig
  ],
})
export class UserCodeValidationModule {}