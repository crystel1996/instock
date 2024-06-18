import { gql } from "@apollo/client";

export const UpdateUserProfileFragment = gql`

    fragment UpdateUserProfileFragment on User {
        id
        email
        username
    }

`;