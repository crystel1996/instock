import { FC, useMemo, useState } from "react";
import { Box, Grid, Link, Typography, styled } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { ForgotPasswordInputInterface, ForgotPasswordInterface } from "./interface";
import ForgotPasswordIllustration from './assets/forgot-password_illustration.jpg'
import { EmailValidation } from "./EmailValidation";
import { CodeValidation } from "./CodeValidation";

const DEFAULT_INPUT: ForgotPasswordInputInterface = {
    email: '',
    code: ''
}

export const ForgotPassword: FC<ForgotPasswordInterface> = () => {
    const [input, setInput] = useState<ForgotPasswordInputInterface>(DEFAULT_INPUT);
    const [error, setError] = useState<string>();
    const [step, setStep] = useState<number>(0);

    const handleChangeStep = (step: number) => {
        setStep(step);
    };

    const FORM_VALIDATION_STEP = useMemo(() => {
        if (step === 0) {
            return  <EmailValidation
                        input={input}
                        setInput={setInput}
                        error={error}
                        setError={setError}
                        onChangeStep={handleChangeStep}
                    />
        }
        if (step === 1) {
            return  <CodeValidation 
                        input={input}
                        setInput={setInput}
                        error={error}
                        setError={setError}
                        onChangeStep={handleChangeStep}
                    />
        }
        return  <EmailValidation
                    input={input}
                    setInput={setInput}
                    error={error}
                    setError={setError}
                    onChangeStep={handleChangeStep}
                />
    }, [step, error, input]);

    return <StyledWrapper container className="forgot-password-container">
        <Grid className="forgot-password-grid-illustration" item lg={6}>
            <Box className="forgot-password-illustration" component="img" alt="Login illustration page desgined by vectorjuice" src={ForgotPasswordIllustration} />
        </Grid>
        <Grid 
            item 
            lg={6} 
            container
            className="forgot-password-form-content"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box className="forgot-password-form-title" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography variant="h1" component="h1">InStock</Typography>
                <Typography variant="body1" component="p" className="forgot-password-subtitle">Suivre le processus pour réinitialiser votre mot de passe et regagner l'accès à votre compte.</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                {FORM_VALIDATION_STEP}
            </Box>
        </Grid>
        <Link className="hidden-link" href="http://www.freepik.com">Designed by vectorjuice / Freepik</Link>
    </StyledWrapper>
}

const StyledWrapper = styled(Grid)`

    background: ${cyan[700]};
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: ${cyan[50]};
    .forgot-password-grid-illustration {
        display: none;
        ${props => props.theme.breakpoints.up('lg')} {
            display: block;
        }
        .forgot-password-illustration {
            width: 100%;
            height: 100vh;
        }
    }
    .forgot-password-form-content {
        .forgot-password-form-title {
            max-width: 380px;
            ${props => props.theme.breakpoints.up('lg')} {
                max-width: 500px;
            }
            .forgot-password-subtitle {
                text-align: center;
            }
        }
        .forgot-password-form__form-body {
            width: 350px;
            ${props => props.theme.breakpoints.up('lg')} {
                width: 450px;
            }
            display: flex;
            flex-direction: column;
            .input-forgot-password-text {
                width: 100%;
            }
            .MuiInputLabel-filled {
                color: ${cyan[50]}
            }
            .forgot-password-to-register, .forgot-password-to-forgot-password {
                color: ${cyan[50]};
                text-decoration: underline;
            }
        }
    }

    .hidden-link {
        display: none;
    }

`;