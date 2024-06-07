import { createBrowserRouter } from "react-router-dom";
import { RouterInterface } from "./interface";
import { ForgotPasswordRoute, HomeRoute, LoginRoute, LogoutRoute, NotFoundRoute, SignUpRoute } from "../Pages";

export const LIST_ROUTE: RouterInterface[] = [
    ...LoginRoute,
    ...SignUpRoute,
    ...NotFoundRoute,
    ...ForgotPasswordRoute,
    ...HomeRoute,
    ...LogoutRoute
]

export const ROUTER = createBrowserRouter(LIST_ROUTE as RouterInterface[])