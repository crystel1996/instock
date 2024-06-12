import { FC } from "react";
import { DrawerComponentInterface } from "./interface";
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SxProps, Theme, Toolbar, Typography, styled } from "@mui/material";

const DrawerSX: SxProps<Theme> = {
    width: 240,
    flexShrink: 0,
    display: { xs: 'none', md: 'flex' }, 
    '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
    },
};

export const DrawerComponent: FC<DrawerComponentInterface> = (props) => {
    return <StyledWrapper sx={DrawerSX} variant="permanent" anchor="left" className="test">
                <Toolbar className="drawer-toolbar__title">
                    <Typography component="h1" align="center" fontWeight="bold">{props.title}</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {props.menus.map((menu) => (
                        <ListItem key={menu.label} disablePadding>
                            <ListItemButton component='a' href={menu.url}>
                                <ListItemIcon>
                                    <div dangerouslySetInnerHTML={{ __html: menu.icon }} />
                                </ListItemIcon>
                                <ListItemText primary={menu.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </StyledWrapper>
}

const StyledWrapper = styled(Drawer)`

    & .MuiPaper-root {
        top: 69px;
    }

    & .drawer-toolbar__title {
        display: flex;
        justify-content: center;
    }

`;