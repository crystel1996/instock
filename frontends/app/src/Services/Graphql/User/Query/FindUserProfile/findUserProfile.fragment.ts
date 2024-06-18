import { gql } from "@apollo/client";

export const FindUserProfileFragment = gql `

    fragment FindUserProfileFragment on User {
        id
        username
        email
    }

`;