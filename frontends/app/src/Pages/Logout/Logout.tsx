import { FC, useEffect } from "react";
import { LogoutPropsInterface } from "./interface";

export const LogoutPage: FC<LogoutPropsInterface> = () => {

    useEffect(() => {
        const handleLogout = () => {
            localStorage.removeItem('accessToken');
        };

        handleLogout();

    }, []);

    return <></>
}