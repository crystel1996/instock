import { FC, useEffect, useMemo } from "react";
import { SettingPageInterface } from "./interface";
import { DrawerComponent, DrawerMenuInterface, Header } from "../../Component";
import { useLazyQuery } from "@apollo/client";
import { GetAllSettingMenuByUserQuery } from "../../Services/Graphql/Setting/Query";
import { SettingProfile } from "./Profile";
import { Box, Button, styled } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { cyan } from "@mui/material/colors";

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

    const mainComponent = useMemo(() => {
        return <SettingProfile />
    }, [window.location.pathname])

    return <>
        <Header />
        <StyledContentWrapper>
            <StyledContentSetting bgcolor="red">
                <Button className="page-setting-title-content"  endIcon={<ArrowForward />}>Paramètres</Button>
            </StyledContentSetting>
            <DrawerComponent menus={settingMenu} title="Parametres" />
            {mainComponent}
        </StyledContentWrapper>
    </>
}

const StyledContentWrapper = styled(Box)`

    margin-top: 69px;

`;

const StyledContentSetting = styled(Box)`

    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 56px;
    background: ${cyan[700]};
    width: 100vw;
    height: 56px;
    .page-setting-title-content {
        color: white;
    }
`;

