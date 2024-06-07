import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserMeInput {
    @Field()
    accessToken: string;
}