import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SendEmailProfileValidationInput {

    @Field()
    idUser: string;

    @Field()
    subject: string;

    

}