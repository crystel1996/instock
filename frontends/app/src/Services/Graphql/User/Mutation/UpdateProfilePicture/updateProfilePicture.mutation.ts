import { gql } from "@apollo/client";

export const UpdateProfilePictureMutation = gql`

    mutation UpdateProfilePictureMutation($input: UpdateUserProfilePictureInput!) {
        updateUserProfilePicture(input:$input)
    }

`;