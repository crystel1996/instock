import { createBrowserRouter } from "react-router-dom";
import { RouterInterface } from "./interface";
import { LoginRoute, NotFoundRoute, SignUpRoute } from "../Pages";

export const ROUTER = createBrowserRouter([
    ...LoginRoute,
    ...SignUpRoute,
    ...NotFoundRoute
] as RouterInterface[])