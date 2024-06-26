import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RegisterInput {

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    confirmPassword: string;

}