import { Args, Query, Resolver } from "@nestjs/graphql";
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

}