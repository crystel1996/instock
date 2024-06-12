import { RouterInterface } from "../../Router";
import { SettingPage } from "./Setting";

export const SettingRoute: RouterInterface[] = [
    {
        path: '/setting',
        element: <SettingPage />
    },
    {
        path: '/my-profile',
        element: <SettingPage />
    }
];