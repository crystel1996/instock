import { ChangeEvent, FC, FormEvent } from "react";
import { Alert, Box, Button, Grid, TextField, Typography, styled } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { ResetPasswordInterface } from "./interface";
import { ForgotPasswordValidation } from "../../../Helper";
import { useMutation } from "@apollo/client";
import { ResetPasswordMutation } from "../../../Services/Graphql";

export const ResetPassword: FC<ResetPasswordInterface> = (props) => {

    const [resetPassword, resetingPassword] = useMutation(ResetPasswordMutation, {
        onCompleted: () => {
            window.location.href = "/login";
        },
        onError: (result) => {
            props.setError(result.message);
        }
    });

    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === 'checkbox') {
            props.setInput((prev) => {
                return {
                    ...prev,
                    [e.target.name]: e.target.checked
                }
            });
            return;
        }
        props.setInput((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailValidation = new ForgotPasswordValidation(props.input);

        const checkResetPassword = emailValidation.checkResetPassword();

        if (checkResetPassword.isValid) {

            resetPassword({
                variables: {
                    input: {
                        email: props.input.email,
                        password: props.input.password,
                        confirmPassword: props.input.confirmPassword
                    }
                }
            });
            return;
        }

        props.setError(checkResetPassword.message);

    };

    return  <StyledWrapper 
                container 
                className="reset-password-form-content"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="body1" component="p" className="reset-password-subtitle">Créer votre nouveau mot de passe en remplissant le champs ci-dessous.</Typography>
                {props.error && <Alert severity="error">{props.error}</Alert>}
                <form className="reset-password-form__form-body" onSubmit={handleSubmit}>
                    <Box py={1}>
                        <TextField
                            required
                            id="reset-password-forgot-password"
                            label="Mot de passe"
                            type="password"
                            variant="filled"
                            name="password"
                            autoComplete="off"
                            value={props.input.password}
                            onChange={handleChange}
                            className="input-reset-password-text"
                        />
                    </Box>
                    <Box py={1}>
                        <TextField
                            required
                            id="reset-password-confirm-forgot-password"
                            label="Confirmation"
                            type="password"
                            variant="filled"
                            name="confirmPassword"
                            autoComplete="off"
                            value={props.input.confirmPassword}
                            onChange={handleChange}
                            className="input-reset-password-text"
                        />
                    </Box>
                    <Box py={1}>
                        <Button disabled={resetingPassword.loading} className="reset-password-submit" type="submit" variant="contained">Vérifier</Button>
                    </Box>
                    <Box py={1}>
                        <Button component="a" href="/login" className="reset-password-submit" color="secondary" variant="contained">Annuler</Button>
                    </Box>
                </form>
            </StyledWrapper>
}

const StyledWrapper = styled(Grid)`
    color: ${cyan[50]};
    
    .reset-password-subtitle {
        text-align: center;
    }
    .reset-password-form__form-body {
        display: flex;
        flex-direction: column;
        .input-reset-password-text {
            width: 100%;
        }
        .reset-password-submit {
            width: 100%;
        }
        .MuiInputLabel-filled {
            color: ${cyan[50]};
        }
        .reset-password-to-resend-code {
            color: ${cyan[50]};
            text-decoration: underline;
        }
    }
    
    

    .hidden-link {
        display: none;
    }

`;