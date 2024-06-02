import { FC, useState } from "react";
import { 
    AppBar, 
    styled, 
    Container, 
    Toolbar, 
    Typography, 
    Box, 
    IconButton, 
    Menu, 
    MenuItem,
    Button, 
    Tooltip, 
    Avatar, 
    Link 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { cyan } from '@mui/material/colors';
import { HeaderComponentInterface } from "./interface";


const LogoTypography = {
    sx: {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    }
}

const pages = [
    { label: 'Produits', link: '/products' }
];
const settings = [
    { label: 'Paramètre', link: '/setting' },
    { label: 'Deconnexion', link: '/logout' },
];

export const Header: FC<HeaderComponentInterface> = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return <StyledWrapper position="fixed" className="header-content">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={LogoTypography.sx}
                >
                    INSTOCK
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <StyledNavbarMenu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                                <Link className="header-link" href={page.link} textAlign="center">{page.label}</Link>
                            </MenuItem>
                        ))}
                    </StyledNavbarMenu>
                </Box>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    INSTOCK
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page.label}
                        component='a'
                        href={page.link}
                        onClick={handleCloseNavMenu}
                        className="header-link"
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page.label}
                    </Button>
                    ))}
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/50" />
                        </IconButton>
                    </Tooltip>
                    <StyledNavbarMenu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                                <Link className="header-link" href={setting.link} textAlign="center">{setting.label}</Link>
                            </MenuItem>
                        ))}
                    </StyledNavbarMenu>
                </Box>
            </Toolbar>
        </Container>
    </StyledWrapper>
}

const StyledWrapper = styled(AppBar)`

    background-color: ${cyan[700]};
    .header-link {
        text-decoration: none !important;
    }

`;

const StyledNavbarMenu = styled(Menu)`

    .header-link {
        text-decoration: none;
    }

`;