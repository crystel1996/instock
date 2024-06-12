import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SettingMenu } from "src/model/Setting/SettingMenu.entity";
import { SettingMenuResolver } from "src/resolvers/Setting/SettingMenu.resolver";
import { SettingMenuService } from "src/service/Setting/settingMenu.service";


@Module({
  imports: [TypeOrmModule.forFeature([SettingMenu])],
  providers: [
    SettingMenuResolver,
    SettingMenuService
  ],
})
export class SettingMenuModule {}