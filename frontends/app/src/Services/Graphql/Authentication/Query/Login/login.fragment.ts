import { gql } from "@apollo/client";

export const LoginFragment = gql`

    fragment LoginFragment on Login {
        accessToken
    }

`;