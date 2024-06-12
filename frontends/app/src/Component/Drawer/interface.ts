import { ReactNode } from "react";

export interface DrawerComponentInterface {
    menus: DrawerMenuInterface[]
}

export interface DrawerMenuInterface {
    label: string;
    url: string;
    icon: ReactNode
}