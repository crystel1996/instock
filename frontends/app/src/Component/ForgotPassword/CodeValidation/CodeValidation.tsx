import { ChangeEvent, FC, FormEvent, MouseEvent, useState } from "react";
import { Alert, Box, Button, Grid, Link, TextField, Typography, styled } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { CodeValidationInterface } from "./interface";
import { ForgotPasswordValidation } from "../../../Helper";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GenerateUserCodeValidationMutation, SendEmailResetPasswordMutation, VerifyUserCodeValidationQuery } from "../../../Services/Graphql";

export const CodeValidation: FC<CodeValidationInterface> = (props) => {
    
    const [info, setInfo] = useState<string>();

    const [sendEmailResetPassword] = useMutation(SendEmailResetPasswordMutation, {
        onCompleted: (result) => {
            if (result.sendEmailResetPassword) {
                setInfo("Le code a ete renvoye sur votre email.");
            }
        },
        onError: () => {
            props.setError("Une erreur a été survenue.");
        }
    });

    const [verifyCodeValidation, verifyingCodeValidation] = useLazyQuery(VerifyUserCodeValidationQuery, {
        onCompleted: (result) => {
            console.log(result)
            if (result.verifyUserCodeValidation) {
                props.onChangeStep(2);
            }
        },
        onError: (result) => {
            props.setError(result.message);
        }
    });

    const [generateUserCodeValidation] = useMutation(GenerateUserCodeValidationMutation, {
        onCompleted: () => {
            props.setError(undefined);
            setInfo("Un nouveau code a été renvoyé vers votre email.");
        },
        onError: (result) => {
            props.setError(result.message);
            setInfo(undefined);
        }
    });

    const handleResendCode = async (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();

        await generateUserCodeValidation({
            variables: {
                input: {
                    email: props.input.email,
                    type: "FORGOT_PASSWORD"
                }
            }
        }).then(async(result: any) => {

            if (result.errors) {
                return;
            }

            sendEmailResetPassword({
                variables: {
                    input: {
                        to: props.input.email,
                        subject: "Reinitialisation du mot de passe",
                        template: process.env.REACT_APP_TEMPLATE_RESET_PASSWORD,
                        code: result.data.generateUserCodeValidation.code
                    }
                }
            });
        });
        
    };

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

        const checkCodeValidation = emailValidation.checkCodeValidation();

        if (checkCodeValidation.isValid) {
            props.setError(undefined);
            verifyCodeValidation({
                variables: {
                    input: {
                        email: props.input.email,
                        code: props.input.code,
                        type: "FORGOT_PASSWORD"
                    }
                }
            });
            return;
        }

        props.setError(checkCodeValidation.message);

    };

    return  <StyledWrapper 
                container 
                className="code-validation-form-content"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="body1" component="p" className="code-validation-subtitle">Une code a été envoyé sur votre email. Copiez-le sur le champs ci-dessous.</Typography>
                {props.error && <Alert severity="error">{props.error}</Alert>}
                {info && <Alert severity="info">{info}</Alert>}
                <form className="code-validation-form__form-body" onSubmit={handleSubmit}>
                    <Box py={1}>
                        <TextField
                            required
                            id="code-validation-forgot-password"
                            label="Code"
                            type="text"
                            variant="filled"
                            name="code"
                            autoComplete="off"
                            value={props.input.code}
                            onChange={handleChange}
                            className="input-code-validation-text"
                        />
                    </Box>
                    {props.input.email && (
                        <Box py={1}>
                            <Link onClick={handleResendCode} component="p" className="code-validation-to-resend-code">Code renvoyé?</Link>
                        </Box>
                    )}
                    <Box py={1}>
                        <Button disabled={verifyingCodeValidation.loading} className="code-validation-submit" type="submit" variant="contained">Vérifier</Button>
                    </Box>
                    <Box py={1}>
                        <Button component="a" href="/login" className="code-validation-submit" color="secondary" variant="contained">Annuler</Button>
                    </Box>
                </form>
            </StyledWrapper>
}

const StyledWrapper = styled(Grid)`
    color: ${cyan[50]};
    
    .code-validation-subtitle {
        text-align: center;
    }
    .code-validation-form__form-body {
        display: flex;
        flex-direction: column;
        .input-code-validation-text {
            width: 100%;
        }
        .code-validation-submit {
            width: 100%;
        }
        .MuiInputLabel-filled {
            color: ${cyan[50]};
        }
        .code-validation-to-resend-code {
            color: ${cyan[50]};
            text-decoration: underline;
            cursor: pointer;
        }
    }
    
    

    .hidden-link {
        display: none;
    }

`;