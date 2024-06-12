import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateSettingMenuInput } from "src/dto/Setting/CreateSettingMenu.input";
import { GetAllSettingMenuByUserInput } from "src/dto/Setting/GetAllSettingMenuByUser.input";
import { SettingMenu } from "src/model/Setting/SettingMenu.entity";
import { SettingMenuService } from "src/service/Setting/settingMenu.service";

@Resolver(() => SettingMenu)
export class SettingMenuResolver {
    constructor(
        private settingMenuService: SettingMenuService
    ) {}


    @Query(() => [SettingMenu])
    async getAllSettingMenusByUser(@Args('input') input: GetAllSettingMenuByUserInput) {
        return this.settingMenuService.findAllSettingMenu();
    }

    @Mutation(() => SettingMenu)
    async createSettingMenu(@Args('input') input: CreateSettingMenuInput) {
        return this.settingMenuService.createSettingMenu(input);
    }

}