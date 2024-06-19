import { ChangeEvent, FC, FormEvent, useState, MouseEvent } from "react";
import { ProfileValidationInputInterface, ProfileValidationInterface } from "./interface";
import { Alert, Box, Button, TextField, Typography, styled } from "@mui/material";
import { ValidateUserProfileValidation } from "../../Helper";

const DEFAULT_INPUT: ProfileValidationInputInterface = {
    code: '',
    idUser: ''
}

export const ProfileValidation: FC<ProfileValidationInterface> = () => {

    const [input, setInput] = useState<ProfileValidationInputInterface>(DEFAULT_INPUT);
    const [toValidated, setToValidated] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();

    const handleToValidate = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setToValidated((prev) => !prev);
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
        const validation = new ValidateUserProfileValidation(input);
        const checkValidation = validation.isValid();
        if (checkValidation.isValid) {
            return;
        }
        setError(checkValidation.message);
    };

    return <StyledWrapper>
        <Typography variant="h3" className="profile-validation__title">Validation de votre compte</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <Button onClick={handleToValidate} className="toValidation-profile" variant="contained">Valider votre profile</Button>
        {toValidated && (
            <form onSubmit={handleSubmit} className="profile-validation__form">
                <Typography variant="subtitle1"textAlign="center">Remplir le formulaire avec le code envoye a votre email.</Typography>
                <Box py={1}>
                    <TextField
                        required
                        id="code-validation"
                        label="Code validation"
                        type="text"
                        variant="outlined"
                        name="code"
                        autoComplete="off"
                        value={input.code}
                        onChange={handleChange}
                        className="profile-input"
                    />
                </Box>
                <Button disabled={false} type="submit" variant="contained">Valider</Button>
            </form>
        )}
    </StyledWrapper>

}

const StyledWrapper = styled(Box)`

    .profile-validation__title {
        font-weight: bold;
    }

    .profile-validation__form {
        display: flex;
        flex-direction: column;
        ${props => props.theme.breakpoints.up('lg')} {
            width: 100%;
        }
        .profile-input {
            width: 100%;
        }
    }

    .toValidation-profile {
        width: 100%;
    }

`;