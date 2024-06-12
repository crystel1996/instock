import { FC } from "react";
import { DrawerComponentInterface } from "./interface";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SxProps, Theme, styled } from "@mui/material";

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

`;