import { gql } from "@apollo/client";

export const GenerateUserCodeValidationFragment = gql`

    fragment GenerateUserCodeValidationFragment on UserCodeValidation {
        id
        code
        expiredAt
    }

`;