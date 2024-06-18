import { FC, useEffect } from "react";
import { SettingPageInterface } from "../interface";
import { useLazyQuery } from "@apollo/client";
import { FindUserProfileQuery } from "../../../Services/Graphql";
import { Profile } from "../../../Component";

export const SettingProfile: FC<SettingPageInterface> = () => {
    const [loadProfile] = useLazyQuery(FindUserProfileQuery);
    
    const handleLoadProfile = () => {
        loadProfile({
            variables: {
                input: {
                    accessToken: localStorage.getItem('accessToken')
                }
            }
        });
    };

    useEffect(() => {
        handleLoadProfile();
    }, []);
    
    return <Profile />
}