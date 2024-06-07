import { RouteObject } from "react-router-dom";

export interface RouteConfigInterface {
    accessWithAnonymous?: boolean
}

export type RouterInterface  = RouteObject & RouteConfigInterface;