import { FC } from "react";
import { SettingPageInterface } from "./interface";
import { Drawer, Header } from "../../Component";

export const SettingPage: FC<SettingPageInterface> = () => {
    return <>
        <Header />
        <Drawer />
    </>
}