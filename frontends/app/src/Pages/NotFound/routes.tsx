import { RouterInterface } from "../../Router";
import { NotFoundPage } from "./NotFound";

export const NotFoundRoute: RouterInterface[] = [
    {
        path: '*',
        element: <NotFoundPage />
    }
];