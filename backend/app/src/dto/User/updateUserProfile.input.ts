import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserProfileInput {

    @Field()
    id: string;

    @Field()
    username: string;

    @Field()
    email: string;

}