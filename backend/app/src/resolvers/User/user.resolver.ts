import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "src/dto/User/createUser.input";
import { FindUserByColumnInput } from "src/dto/User/findUserByColumn.input";
import { UpdateUserAccountStateInput } from "src/dto/User/updateUserAccountState.input";
import { UpdateUserProfileInput } from "src/dto/User/updateUserProfile.input";
import { UserMeInput } from "src/dto/User/userMe.input";
import { User } from "src/model/User/User.entity";
import { AuthenticationService } from "src/service/Authentication/authentication.service";
import { UserService } from "src/service/User/User.service";

@Resolver((of) => User)
export class UserResolver {
    constructor (
        private userService: UserService,
        private authService: AuthenticationService
    ) {}

    @Query(() => User, { nullable: true })
    me(@Args('input') input: UserMeInput) {
        return this.authService.verify(input.accessToken);
    }

    @Query(() => User, { nullable: true })
    findUserByColumn(@Args('input') input: FindUserByColumnInput) {
        return this.userService.findUserByColumn(input.value, input.column);
    }

    @Mutation((returns) => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput) {
        return this.userService.createUser(createUserData);
    }

    @Mutation(() => User)
    updateUserProfile(@Args('input') input: UpdateUserProfileInput) {
        return this.userService.updateUserProfile(input);
    }

    @Mutation(() => User)
    updateUserAccountState(@Args('input') input: UpdateUserAccountStateInput) {
        return this.userService.updateAccountState(input);
    }

}