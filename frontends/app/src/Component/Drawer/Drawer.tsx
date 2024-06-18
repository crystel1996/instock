import { FC, useMemo } from "react";
import { DrawerComponentInterface } from "./interface";
import { ClickAwayListener, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SxProps, Theme, Toolbar, Typography, styled } from "@mui/material";



export const DrawerComponent: FC<DrawerComponentInterface> = (props) => {

    const handleDrawerClose = () => {
        props.setOpen(false);
    };

    const DrawerSX: SxProps<Theme> = useMemo(() => {
        return {
            width: 240,
            flexShrink: 0,
            display: { xs: props.open ? 'block' : 'none', md: 'flex' }, 
            '& .MuiDrawer-paper': {
                width: 240,
                boxSizing: 'border-box',
            },
        };
    }, [props.open]);

    return  <ClickAwayListener onClickAway={handleDrawerClose}>
                <StyledWrapper sx={DrawerSX} variant="permanent" anchor="left" className="test">
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
            </ClickAwayListener>
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