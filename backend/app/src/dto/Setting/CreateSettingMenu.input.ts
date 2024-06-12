import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateSettingMenuInput {

    @Field()
    code!: string;

    @Field()
    label!: string;

    @Field()
    url!: string;

    @Field()
    icon: string;

    @Field()
    type: string;

}