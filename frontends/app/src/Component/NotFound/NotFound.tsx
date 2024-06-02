import { FC } from "react";
import { NotFoundComponentInterface } from "./interface";
import { Box, Grid, Link, Typography, styled } from "@mui/material";
import { cyan } from "@mui/material/colors";

export const NotFound: FC<NotFoundComponentInterface> = () => {

    return <StyledWrapper container className="notFound-container">
        <Grid 
            item 
            container
            className="login-form-content"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography variant="h1" component="h1">404 Not Found!</Typography>
                <Typography variant="body2" component="p">Désolé, la page que vous recherchez semble introuvable. Veuillez vérifier l'URL ou retourner à la <Link className="notFound-to-home" href="/">page d'accueil</Link></Typography>
            </Box>
        </Grid>
    </StyledWrapper>

}

const StyledWrapper = styled(Grid)`

    background: ${cyan[700]};
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: ${cyan[50]};
    text-align: center;
    .notFound-to-home {
        color: ${cyan[50]};
        text-decoration: underline;
    }

`;