import { Dispatch } from "react";

export interface DrawerComponentInterface {
    menus: DrawerMenuInterface[];
    open: boolean;
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    title: string;
}

export interface DrawerMenuInterface {
    label: string;
    url: string;
    icon: string
}