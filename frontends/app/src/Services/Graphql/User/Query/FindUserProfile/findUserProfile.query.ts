import { gql } from "@apollo/client";
import { FindUserProfileFragment } from "./findUserProfile.fragment";

export const FindUserProfileQuery = gql`

    query FindUserProfileFragment($input: UserMeInput!) {
        me(input: $input) {
            ...FindUserProfileFragment
        }
    }
    ${FindUserProfileFragment}
`;