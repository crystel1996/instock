import { FC, useEffect, useMemo, useState } from "react";
import { SettingPageInterface } from "../interface";
import { useLazyQuery, useMutation } from "@apollo/client";
import { FindUserProfileQuery, UpdateUserProfileMutation } from "../../../Services/Graphql";
import { Loading, Profile, ProfileUserInput } from "../../../Component";
import { Box, styled } from "@mui/material";

export const SettingProfile: FC<SettingPageInterface> = () => {

    const [error, setError] = useState<string | undefined>(undefined);

    const [loadProfile, loadingProfile] = useLazyQuery(FindUserProfileQuery);
    const [updateUserProfile] = useMutation(UpdateUserProfileMutation, {
        onCompleted: () => {
            window.location.reload();
        },
        onError: (error) => {
            setError(error.message);
        }
    });
    
    const handleLoadProfile = () => {
        loadProfile({
            variables: {
                input: {
                    accessToken: localStorage.getItem('accessToken')
                }
            }
        });
    };

    const handleSubmit = (input: ProfileUserInput) => {
        updateUserProfile({
            variables: {
                input: {
                    id: input.id,
                    email: input.email,
                    username: input.username
                }
            }
        });
    };

    useEffect(() => {
        handleLoadProfile();
    }, []);

    const PROFILE = useMemo(() => {
        if(loadingProfile.loading) {
            return <Loading />
        }
        if (loadingProfile.error) {
            return <></>
        }
        return <Profile onSubmit={handleSubmit} title="Votre profile" user={loadingProfile.data?.me} error={error}/> 
    }, [loadingProfile.data?.me, loadingProfile.loading, loadingProfile.error, error]);
    
    return <StyledWrapper>{PROFILE}</StyledWrapper>
}

const StyledWrapper = styled(Box)`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;