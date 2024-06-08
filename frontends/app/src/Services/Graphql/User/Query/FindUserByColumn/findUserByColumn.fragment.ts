import { gql } from "@apollo/client";

export const FindUserByColumnFragment = gql`

    fragment FindUserByColumnFragment on User {
        id
        email
    }

`;