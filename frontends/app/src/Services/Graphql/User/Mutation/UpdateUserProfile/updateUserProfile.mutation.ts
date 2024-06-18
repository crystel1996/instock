import { gql } from "@apollo/client";
import { UpdateUserProfileFragment } from "./updateUserProfile.fragment";

export const UpdateUserProfileMutation = gql`

    mutation UpdateUserProfileMutation($input: UpdateUserProfileInput!) {
        updateUserProfile(input:$input) {
            ...UpdateUserProfileFragment
        }
    }
    ${UpdateUserProfileFragment}
`;