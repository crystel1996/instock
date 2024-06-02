import { RouterInterface } from "../../Router";
import { LoginPage } from "./Login";

export const LoginRoute: RouterInterface[] = [
    {
        path: '/login',
        element: <LoginPage />
    }
];