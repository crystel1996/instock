import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { GenerateUserCodeValidationInput } from "src/dto/User/userCodeValidation.input";
import { VerifyUserCodeValidationInput } from "src/dto/User/verifyUserCodeValidation.input";
import { UserCodeValidation } from "src/model/User/UserCodeValidation.entity";
import { UserCodeValidationService } from "src/service/User/UserCodeValidation.service";

@Resolver(() => UserCodeValidation)
export class UserCodeValidationResolver {

    constructor (
        private userCodeValidationService: UserCodeValidationService
    ) {}

    @Query(() => Boolean)
    async verifyUserCodeValidation(@Args('input') input: VerifyUserCodeValidationInput) {
        return this.userCodeValidationService.verifyUserCodeValidation(input);
    }


    @Mutation(() => UserCodeValidation)
    async generateUserCodeValidation(@Args('input') input: GenerateUserCodeValidationInput) {
        return this.userCodeValidationService.generateUserCodeValidation(input);
    }

}