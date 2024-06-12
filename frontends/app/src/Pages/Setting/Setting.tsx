import { FC } from "react";
import { SettingPageInterface } from "./interface";
import { DrawerComponent, DrawerMenuInterface, Header } from "../../Component";

export const SettingPage: FC<SettingPageInterface> = () => {

    const settingMenu: DrawerMenuInterface[] = [];

    return <>
        <Header />
        <DrawerComponent menus={settingMenu} />
    </>
}