import { gql } from "@apollo/client";
import { LoginFragment } from "./login.fragment";

export const LoginQuery = gql`

    query LoginQuery($input: LoginInput!) {
        login(input: $input) {
            ...LoginFragment
        }
    }
    ${LoginFragment}
`;