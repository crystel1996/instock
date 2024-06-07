import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Register {
    @Field()
    accessToken: string;
}