import { gql } from "@apollo/client";
import { RegisterFragment } from "./register.fragment";

export const RegisterMutation = gql`

    mutation RegisterMutation($input: RegisterInput!) {
        register(input: $input) {
            ...RegisterFragment
        }
    }
    ${RegisterFragment}
`;