import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmailConfig, HashPassword } from "src/config";
import { User } from "src/model/User/User.entity";
import { UserResolver } from "src/resolvers/User/user.resolver";
import { UserService } from "src/service/User/User.service";


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserResolver,
    UserService,
    HashPassword,
    EmailConfig
  ],
})
export class UsersModule {}