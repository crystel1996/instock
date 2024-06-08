import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class GenerateUserCodeValidationInput {

    @Field()
    email: string;

    @Field()
    type: string;

}