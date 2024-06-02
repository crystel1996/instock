import { createBrowserRouter } from "react-router-dom";
import { RouterInterface } from "./interface";
import { ForgotPasswordRoute, LoginRoute, NotFoundRoute, SignUpRoute } from "../Pages";

export const ROUTER = createBrowserRouter([
    ...LoginRoute,
    ...SignUpRoute,
    ...NotFoundRoute,
    ...ForgotPasswordRoute
] as RouterInterface[])