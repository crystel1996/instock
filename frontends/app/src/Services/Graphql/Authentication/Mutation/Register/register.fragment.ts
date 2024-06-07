import { gql } from "@apollo/client";

export const RegisterFragment = gql`

    fragment RegisterFragment on Register {
        accessToken
    }

`;