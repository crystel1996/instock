import { gql } from "@apollo/client";

export const createUserFragment = gql`

    fragment createUserFragment on User {
        id
        username
        email
    }

`;