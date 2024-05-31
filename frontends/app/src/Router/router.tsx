import { createBrowserRouter } from "react-router-dom";
import { RouterInterface } from "./interface";
import { LoginRoute, SignUpRoute } from "../Pages";

export const ROUTER = createBrowserRouter([
    ...LoginRoute,
    ...SignUpRoute
] as RouterInterface[])