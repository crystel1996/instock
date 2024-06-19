import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserAccountStateInput {

    @Field()
    id: string;

    @Field()
    accountState: string;

}