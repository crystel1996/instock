import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class GetAllSettingMenuByUserInput {
    
    @Field(() => [String])
    type: string[];
}