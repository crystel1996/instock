import { createBrowserRouter } from "react-router-dom";
import { RouterInterface } from "./interface";
import { ForgotPasswordRoute, HomeRoute, LoginRoute, NotFoundRoute, SignUpRoute } from "../Pages";

export const ROUTER = createBrowserRouter([
    ...LoginRoute,
    ...SignUpRoute,
    ...NotFoundRoute,
    ...ForgotPasswordRoute,
    ...HomeRoute
] as RouterInterface[])