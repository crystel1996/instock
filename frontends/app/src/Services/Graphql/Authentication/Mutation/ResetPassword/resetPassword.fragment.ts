import { gql } from "@apollo/client";

export const ResetPasswordFragment = gql`

    fragment ResetPasswordFragment on User {
        id
        email
    }

`;