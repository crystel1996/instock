import { ChangeEvent, FC, FormEvent } from "react";
import { Alert, Box, Button, Grid, Link, TextField, Typography, styled } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { EmailValidationInterface } from "./interface";

export const EmailValidation: FC<EmailValidationInterface> = (props) => {
    
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
    };

    return  <StyledWrapper 
                container 
                className="email-validation-form-content"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="body1" component="p" className="email-validation-subtitle">Entrez votre adresse e-mail.</Typography>
                <form className="email-validation-form__form-body" onSubmit={handleSubmit}>
                    <Box py={1}>
                        <TextField
                            required
                            id="email-forgot-password"
                            label="Email"
                            type="email"
                            variant="filled"
                            name="email"
                            autoComplete="off"
                            value={props.input.email}
                            onChange={handleChange}
                            className="input-email-validation-text"
                        />
                    </Box>
                    <Box py={1}>
                        <Button className="email-validation-submit" type="submit" variant="contained">Vérifier</Button>
                    </Box>
                    <Box py={1}>
                        <Button component="a" href="/login" className="email-validation-submit" color="secondary" variant="contained">Annuler</Button>
                    </Box>
                </form>
            </StyledWrapper>
}

const StyledWrapper = styled(Grid)`
    color: ${cyan[50]};
    
    .email-validation-subtitle {
        text-align: center;
    }
    .email-validation-form__form-body {
        display: flex;
        flex-direction: column;
        .input-email-validation-text {
            width: 100%;
        }
        .email-validation-submit {
            width: 100%;
        }
        .MuiInputLabel-filled {
            color: ${cyan[50]};
        }
    }
    
    

    .hidden-link {
        display: none;
    }

`;