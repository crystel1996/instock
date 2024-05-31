import { ChangeEvent, FC, useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography, styled } from "@mui/material";
import { cyan } from '@mui/material/colors';
import { LoginComponentInterface, LoginInputInterface } from "./interface";
import LogoIllustration from './assets/login_illustration.jpg'

const checkBoxInput = {
    color: cyan[50],
    '&.Mui-checked': {
        color: cyan[50],
    },
};

const DEFAULT_INPUT: LoginInputInterface = {
    email: '',
    password: '',
    rememberMe: false
}

export const Login: FC<LoginComponentInterface> = (props) => {

    const [input, setInput] = useState<LoginInputInterface>(DEFAULT_INPUT);

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

    return <StyledWrapper container className="login-container">
        <Grid className="login-grid-illustration" item lg={6}>
            <Box className="login-illustration" component="img" alt="Login illustration page desgined by vectorjuice" src={LogoIllustration} />
        </Grid>
        <Grid 
            item 
            lg={6} 
            container
            className="login-form-content"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box className="login-form-title" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography variant="h1" component="h1">InStock</Typography>
                <Typography variant="body1" component="p" className="login-subtitle">Bienvenue sur InStockApp : votre plateforme pour suivre les marchés, gérer votre portefeuille et investir en toute confiance.</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <form className="login-form__form-body">
                    <Box py={1}>
                        <TextField
                            required
                            id="email-login"
                            label="Email"
                            type="email"
                            variant="filled"
                            name="email"
                            autoComplete="off"
                            value={input.email}
                            onChange={handleChange}
                            className="input-login-text"
                        />
                    </Box>
                    <Box py={1}>
                        <TextField
                            required
                            id="password-login"
                            label="Mot de passe"
                            type="password"
                            variant="filled"
                            name="password"
                            autoComplete="off"
                            value={input.password}
                            onChange={handleChange}
                            className="input-login-text"
                        />
                    </Box>
                    <FormControlLabel
                        control={<Checkbox sx={checkBoxInput} onChange={handleChange} checked={input.rememberMe} name="rememberMe" />}
                        label="Se souvenir de moi"
                    />
                    <Link className="hidden-link" href="http://www.freepik.com">Mot de passe oublié?</Link>
                    <Button variant="contained">Se connecter</Button>
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
    .login-grid-illustration {
        display: none;
        ${props => props.theme.breakpoints.up('lg')} {
            display: block;
        }
        .login-illustration {
            width: 100%;
            height: 100vh;
        }
    }
    .login-form-content {
        .login-form-title {
            max-width: 380px;
            ${props => props.theme.breakpoints.up('lg')} {
                max-width: 500px;
            }
            .login-subtitle {
                text-align: center;
            }
        }
        .login-form__form-body {
            width: 350px;
            display: flex;
            flex-direction: column;
            .input-login-text {
                width: 100%;
            }
            .MuiInputLabel-filled {
                color: ${cyan[50]}
            }
        }
    }
    .hidden-link {
        display: none;
    }

`;