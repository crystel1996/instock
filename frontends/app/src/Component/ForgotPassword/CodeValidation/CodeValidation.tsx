import { ChangeEvent, FC, FormEvent, MouseEvent, useEffect, useState } from "react";
import { Alert, Box, Button, Grid, Link, TextField, Typography, styled } from "@mui/material";
import AES from 'crypto-js/aes';
import { cyan } from "@mui/material/colors";
import { CodeValidationInterface } from "./interface";
import { Email, ForgotPasswordValidation } from "../../../Helper";
import Config from './../../../Config/config.json'
import { useLazyQuery } from "@apollo/client";
import { VerifyUserCodeValidationQuery } from "../../../Services/Graphql";

export const CodeValidation: FC<CodeValidationInterface> = (props) => {
    
    const [emailHashed, setEmailHashed] = useState<string>();
    const [info, setInfo] = useState<string>();

    const [verifyCodeValidation] = useLazyQuery(VerifyUserCodeValidationQuery, {
        onCompleted: (result) => {
            console.log(result)
            if (result.verifyUserCodeValidation) {
                //props.onChangeStep(2);
            }
        },
        onError: (result) => {
            props.setError(result.message);
        }
    });

    useEffect(() => {
        const hashedEmail = AES.encrypt(props.input.email, Config.SECRET_KEY_HMAC).toString();
        setEmailHashed(hashedEmail);
    }, [props.input.email]);

    const handleResendCode = async (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        const emailService = new Email({
            emailReceiver: props.input.email
        });

        await emailService.send().then((result) => {
            if (result.success) {
                props.setError(undefined);
                setInfo(result.message);
            } else {
                setInfo(undefined);
                props.setError(result.message);
            }
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
                    {emailHashed && (
                        <Box py={1}>
                            <Link onClick={handleResendCode} component="p" className="code-validation-to-resend-code">Code renvoyé?</Link>
                        </Box>
                    )}
                    <Box py={1}>
                        <Button className="code-validation-submit" type="submit" variant="contained">Vérifier</Button>
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