import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Alert, Box, Button, Grid, Link, TextField, Typography, styled } from "@mui/material";
import { cyan } from '@mui/material/colors';
import { RegisterComponentInterface, RegisterInputInterface } from "./interface";
import LogoIllustration from './assets/register_illustration.jpg'
import { RegisterValidation } from "../../Helper";

const DEFAULT_INPUT: RegisterInputInterface = {
    email: '',
    password: '',
    confirmPassword: '',
    userName: ''
}

export const Register: FC<RegisterComponentInterface> = (props) => {

    const [input, setInput] = useState<RegisterInputInterface>(DEFAULT_INPUT);
    const [error, setError] = useState<string>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === 'checkbox') {
            setInput((prev) => {
                return {
                    ...prev,
                    [e.target.name]: e.target.checked
                }
            });
            return;
        }
        setInput((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const registerValidation = new RegisterValidation(input);

        const checkRegisterValidity = registerValidation.checkRegisterValidity();

        if (checkRegisterValidity?.isValid) {
            console.log('[INPUT', input);
            return;
        }

        setError(checkRegisterValidity?.message);

    };

    return <StyledWrapper container className="register-container">
        <Grid className="register-grid-illustration" item lg={6}>
            <Box className="register-illustration" component="img" alt="Register illustration page desgined by vectorjuice" src={LogoIllustration} />
        </Grid>
        <Grid 
            item 
            lg={6} 
            container
            className="register-form-content"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box className="register-form-title" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                {error && <Alert severity="error">{error}</Alert>}
                <Typography variant="h1" component="h1">InStock</Typography>
                <Typography variant="body1" component="p" className="register-subtitle">Rejoignez StockApp dès maintenant et commencez à investir pour un avenir financier sécurisé.</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <form className="register-form__form-body" onSubmit={handleSubmit}>
                    <Box py={1}>
                        <TextField
                            required
                            id="userName-register"
                            label="Nom"
                            type="text"
                            variant="filled"
                            name="userName"
                            autoComplete="off"
                            value={input.userName}
                            onChange={handleChange}
                            className="input-register-text"
                        />
                    </Box>
                    <Box py={1}>
                        <TextField
                            required
                            id="email-register"
                            label="Email"
                            type="email"
                            variant="filled"
                            name="email"
                            autoComplete="off"
                            value={input.email}
                            onChange={handleChange}
                            className="input-register-text"
                        />
                    </Box>
                    <Box py={1}>
                        <TextField
                            required
                            id="password-register"
                            label="Mot de passe"
                            type="password"
                            variant="filled"
                            name="password"
                            autoComplete="off"
                            value={input.password}
                            onChange={handleChange}
                            className="input-register-text"
                        />
                    </Box>
                    <Box py={1}>
                        <TextField
                            required
                            id="confirm-password-register"
                            label="Confirmation du mot de passe"
                            type="password"
                            variant="filled"
                            name="confirmPassword"
                            autoComplete="off"
                            value={input.confirmPassword}
                            onChange={handleChange}
                            className="input-register-text"
                        />
                    </Box>
                    <Button type="submit" variant="contained">S'inscrire</Button>
                    <Box py={1}>
                        <Typography component="p" variant="body2">Vous avez déjà une compte? <Link className="register-to-login" href="/login">Connectez vous ici.</Link></Typography>
                    </Box>
                </form>
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
    .register-grid-illustration {
        display: none;
        ${props => props.theme.breakpoints.up('lg')} {
            display: block;
        }
        .register-illustration {
            width: 100%;
            height: 100vh;
        }
    }
    .register-form-content {
        .register-form-title {
            max-width: 380px;
            ${props => props.theme.breakpoints.up('lg')} {
                max-width: 500px;
            }
            .register-subtitle {
                text-align: center;
            }
        }
        .register-form__form-body {
            width: 350px;
            ${props => props.theme.breakpoints.up('lg')} {
                width: 450px;
            }
            display: flex;
            flex-direction: column;
            .input-register-text {
                width: 100%;
            }
            .MuiInputLabel-filled {
                color: ${cyan[50]}
            }
            .register-to-login {
                color: ${cyan[50]};
                text-decoration: underline;
            }
        }
    }
    .hidden-link {
        display: none;
    }

`;