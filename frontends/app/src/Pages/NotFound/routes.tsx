import { RouterInterface } from "../../Router";
import { NotFoundPage } from "./NotFound";

export const NotFoundRoute: RouterInterface[] = [
    {
        path: '*',
        accessWithAnonymous: true,
        element: <NotFoundPage />
    }
];