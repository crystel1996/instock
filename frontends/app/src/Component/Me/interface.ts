import { ReactNode } from "react";
import { RouterInterface } from "../../Router";

export interface MePropsInterface {
    children: ReactNode;
    listRoutes: RouterInterface[];
}