import { RouterInterface } from "../../Router";
import { ForgotPasswordPage } from "./ForgotPassword";
import { ResendCodePage } from "./ResendCode";

export const ForgotPasswordRoute: RouterInterface[] = [
    {
        path: '/forgot-password',
        element: <ForgotPasswordPage />
    },
    {
        path: '/resend-code',
        element: <ResendCodePage />
    }
];