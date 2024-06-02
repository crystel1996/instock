import { RouterInterface } from "../../Router";
import { HomePage } from "./Home";

export const HomeRoute: RouterInterface[] = [
    {
        path: '/',
        element: <HomePage />
    }
];