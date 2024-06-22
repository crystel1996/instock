import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserProfilePictureInput {

    @Field()
    id: string;

    @Field()
    path: string;

}