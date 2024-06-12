import { FC, useEffect, useMemo } from "react";
import { SettingPageInterface } from "./interface";
import { DrawerComponent, DrawerMenuInterface, Header } from "../../Component";
import { useLazyQuery } from "@apollo/client";
import { GetAllSettingMenuByUserQuery } from "../../Services/Graphql/Setting/Query";

export const SettingPage: FC<SettingPageInterface> = () => {

    const [getAllSettingMenuByUser, allSettingMenuByUser] = useLazyQuery(GetAllSettingMenuByUserQuery);

    useEffect(() => {
        const fetchAllSettingByUser = () => {
            getAllSettingMenuByUser({
                variables: {
                    input: {
                        type: ["INFORMATION"]
                    }
                }
            });
        }

        fetchAllSettingByUser();

    }, []);

    const settingMenu: DrawerMenuInterface[] = useMemo(() => {

        if (allSettingMenuByUser.data?.getAllSettingMenusByUser?.length > 0) {
            return (allSettingMenuByUser.data?.getAllSettingMenusByUser || []).map((menu: any) => {
                return {
                    label: menu.label,
                    url: menu.url,
                    icon: menu.icon
                }
            });
        }

        return []; 
    }, [allSettingMenuByUser.data?.getAllSettingMenusByUser]);

    return <>
        <Header />
        <DrawerComponent menus={settingMenu} />
    </>
}