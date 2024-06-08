import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class FindUserByColumnInput {

    @Field()
    value: string;

    @Field()
    column: string;

}