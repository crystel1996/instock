import { FC } from "react";
import { LoginInterface } from "./interface";
import { Login } from "../../Component";

export const LoginPage: FC<LoginInterface> = () => {
    return <>
        <Login />
    </>
}