import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SettingMenu } from "src/model/Setting/SettingMenu.entity";
import { Repository } from "typeorm";

@Injectable()
export class SettingMenuService {

    constructor(
        @InjectRepository(SettingMenu) private settingMenuRepository: Repository<SettingMenu>
    ) {}

    async findAllSettingMenu() {
        return this.settingMenuRepository.find();
    }

}