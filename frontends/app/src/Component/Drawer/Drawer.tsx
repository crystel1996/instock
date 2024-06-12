import { FC } from "react";
import { DrawerComponentInterface } from "./interface";
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, styled } from "@mui/material";

const DrawerSX = {
    width: 240,
    flexShrink: 0,
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
                                <ListItemIcon>{menu.icon}</ListItemIcon>
                                <ListItemText primary={menu.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </StyledWrapper>
}

const StyledWrapper = styled(Drawer)`

    & .MuiPaper-root {
        top: 65px;
    }

`;