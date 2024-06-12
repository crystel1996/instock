export interface DrawerComponentInterface {
    menus: DrawerMenuInterface[];
    title: string;
}

export interface DrawerMenuInterface {
    label: string;
    url: string;
    icon: string
}