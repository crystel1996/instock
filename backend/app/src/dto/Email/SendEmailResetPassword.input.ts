import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SendEmailResetPasswordInput {
    @Field()
    to: string;

    @Field()
    subject: string;

    @Field()
    template: string;

    @Field()
    code: string;
}