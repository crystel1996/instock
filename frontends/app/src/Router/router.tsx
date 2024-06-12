import { createBrowserRouter } from "react-router-dom";
import { RouterInterface } from "./interface";
import { ForgotPasswordRoute, HomeRoute, LoginRoute, LogoutRoute, NotFoundRoute, SettingRoute, SignUpRoute } from "../Pages";

export const LIST_ROUTE: RouterInterface[] = [
    ...LoginRoute,
    ...SignUpRoute,
    ...NotFoundRoute,
    ...ForgotPasswordRoute,
    ...HomeRoute,
    ...LogoutRoute,
    ...SettingRoute
]

export const ROUTER = createBrowserRouter(LIST_ROUTE as RouterInterface[])