import { FC, useState, MouseEvent, useMemo, FormEvent, ChangeEvent, useEffect } from "react";
import { ProfileInterface, ProfileUserInput } from "./interface";
import { Grid, Typography, styled, Box, TextField, Button, Alert } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { UpdateUserProfileValidation } from "../../Helper/FormValidation/UpdateUserProfileValidation";
import { ProfileValidation } from "../ProfileValidation";

const DEFAULT_INPUT: ProfileUserInput = {
    id: '',
    email: '',
    username: ''
}

export const Profile: FC<ProfileInterface> = (props) => {
    
    const [toUpdate, setToUpdate] = useState<boolean>(false);
    const [input, setInput] = useState<ProfileUserInput>(DEFAULT_INPUT);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        if(props.user) {
            setInput(props.user);
        }
    }, [props.user]);

    useEffect(() => {
        if(props.error) {
            setError(props.error);
        }
    }, [props.error]);

    const handleToUpdate = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setToUpdate((prev) => !prev);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        setInput((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const updateProfileValidation = new UpdateUserProfileValidation(input);

        const checkValidation = updateProfileValidation.isValid();

        if (!checkValidation.isValid) {
            setError(checkValidation.message);
            return;
        }

        const inputValue: ProfileUserInput = {
            ...input,
            isRelogged: input.email !== props.user.email
        };

        props.onSubmit(inputValue);
    };

    const SUBTITLE = useMemo(() => {
        if (toUpdate) {
            return  <Typography variant="subtitle1">
                        Modification de votre profile.
                    </Typography>
        }
        return  <Typography variant="subtitle1" textAlign="center">
                    Vous pouvez modifier votre profile. 
                    <Typography onClick={handleToUpdate} className="profile__to-update" component="span">Modifier votre profile.</Typography>
                </Typography>
    }, [toUpdate]);

    console.log(props.user)
    
    return  <StyledWrapper 
                container 
                className="profile-container" 
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="h4" className="profile__title">{props.title}</Typography>
                {SUBTITLE}
                {error && <Alert severity="error">{error}</Alert>}
                <form onSubmit={handleSubmit} className="profile__form">
                    <Box py={1}>
                        <TextField
                            required
                            id="user-email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            name="email"
                            autoComplete="off"
                            value={input.email}
                            onChange={toUpdate ? handleChange : undefined}
                            className="profile-input"
                        />
                    </Box>
                    <Box py={1}>
                        <TextField
                            required
                            id="user-username"
                            label="Nom"
                            type="text"
                            variant="outlined"
                            name="username"
                            autoComplete="off"
                            value={input.username}
                            onChange={toUpdate ? handleChange : undefined}
                            className="profile-input"
                        />
                    </Box>
                    {toUpdate && (<Button disabled={props.loading} type="submit" variant="contained">Modifier</Button>)}
                </form>
                {props.user?.accountState === 'NOT_VERIFIED' && (
                    <Box py={1}>
                        <ProfileValidation user={props.user} />
                    </Box>
                )}
            </StyledWrapper>
}


const StyledWrapper = styled(Grid)`

    .profile__title {
        font-weight: bold;
    }

    .profile__to-update {
        text-decoration: underline;
        cursor: pointer;
        color: ${cyan[700]};
    }

    .profile__form {
        display: flex;
        flex-direction: column;
        width: calc(100vw - 76px);
        ${props => props.theme.breakpoints.up('lg')} {
            width: 600px;
        }
        .profile-input {
            width: 100%;
        }
    }

`;