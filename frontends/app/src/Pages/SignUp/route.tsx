import { RouterInterface } from "../../Router";
import { SignUp } from "./SignUp";

export const SignUpRoute: RouterInterface[] = [
    {
        path: '/register',
        accessWithAnonymous: true,
        element: <SignUp />
    }
];