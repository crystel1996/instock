import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class VerifyUserCodeValidationInput {

    @Field()
    email: string;

    @Field()
    code: string;

    @Field()
    type: string;

}