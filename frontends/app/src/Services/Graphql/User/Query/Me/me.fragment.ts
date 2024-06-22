import { gql } from "@apollo/client";

export const MeFragment = gql`

    fragment MeFragment on User {
        username
        id
        accountState
        profilePicture
    }

`;