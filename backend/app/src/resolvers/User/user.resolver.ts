import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "src/dto/User/createUser.input";
import { User } from "src/model/User/User.entity";
import { UserService } from "src/service/User/User.service";

@Resolver((of) => User)
export class UserResolver {
    constructor (
        private userService: UserService
    ) {}

    @Mutation((returns) => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput) {
        return this.userService.createUser(createUserData);
    }

}