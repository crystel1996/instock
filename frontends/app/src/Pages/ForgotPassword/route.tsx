import { RouterInterface } from "../../Router";
import { ForgotPasswordPage } from "./ForgotPassword";

export const ForgotPasswordRoute: RouterInterface[] = [
    {
        path: '/forgot-password',
        accessWithAnonymous: true,
        element: <ForgotPasswordPage />
    }
];