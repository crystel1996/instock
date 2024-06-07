import { gql } from "@apollo/client";

export const createUser = gql`

    fragment createUser on User {
        id
        username
        email
    }

`;