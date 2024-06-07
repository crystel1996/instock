import { FC, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LoginInterface } from "./interface";
import { Login, LoginInputInterface } from "../../Component";
import { LoginQuery } from "../../Services/Graphql/Authentication";

export const LoginPage: FC<LoginInterface> = () => {

    const [error, setError] = useState<string | undefined>(undefined);
    const navigate = useNavigate();

    const [login, loginResult] = useLazyQuery(LoginQuery, {
        onCompleted: (result) => {
            setError(undefined);
            localStorage.setItem('accessToken', result.login.accessToken);
            navigate('/');
        },
        onError: (result) => {
            setError(result.message);
        }
    });

    const handleSubmit = async (input: LoginInputInterface) => {
        login({
            variables: {
                input: {
                    email: input.email,
                    password: input.password
                }
            }
        });
    };

    return <>
        <Login
            onSubmit={handleSubmit}
            error={error}
            loading={loginResult.loading}
        />
    </>
}