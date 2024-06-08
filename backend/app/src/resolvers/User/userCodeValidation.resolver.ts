import { Resolver, Query } from "@nestjs/graphql";
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
    async verifyUserCodeValidation(input: VerifyUserCodeValidationInput) {
        return this.userCodeValidationService.verifyUserCodeValidation(input);
    }


    @Query(() => UserCodeValidation)
    async generateUserCodeValidation(input: GenerateUserCodeValidationInput) {
        return this.userCodeValidationService.generateUserCodeValidation(input);
    }

}