import { FC, useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { SignUpInterface } from "./interface";
import { Register, RegisterInputInterface } from "../../Component";
import { RegisterMutation } from "../../Services/Graphql";

export const SignUp: FC<SignUpInterface> = () => {

    const navigate = useNavigate();
    const [error, setError] = useState<string | undefined>(undefined);
    const [register, registerResult] = useMutation(RegisterMutation, {
        onCompleted: (result) => {
            setError(undefined);
            localStorage.setItem('accessToken', result.register.accessToken);
            navigate('/');
        },
        onError: (result) => {
            setError(result.message);
        }
    });

    const handleSubmit = (input: RegisterInputInterface) => {
        register({
            variables: {
                input: {
                    email: input.email,
                    username: input.userName,
                    password: input.password,
                    confirmPassword: input.confirmPassword
                }
            }
        });
    };

    return <>
        <Register
            onSubmit={handleSubmit}
            error={error}
            loading={registerResult.loading}
        />
    </>
}