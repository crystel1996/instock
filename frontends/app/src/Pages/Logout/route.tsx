import { RouterInterface } from "../../Router";
import { LogoutPage } from "./Logout";

export const LogoutRoute: RouterInterface[] = [
    {
        path: '/logout',
        element: <LogoutPage />
    }
];