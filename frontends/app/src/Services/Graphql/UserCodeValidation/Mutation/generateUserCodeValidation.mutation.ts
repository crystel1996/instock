import { gql } from "@apollo/client";
import { GenerateUserCodeValidationFragment } from "./generateUserCodeValidation.fragment";

export const GenerateUserCodeValidationMutation = gql`

    mutation GenerateUserCodeValidationMutation($input: GenerateUserCodeValidationInput!) {
        generateUserCodeValidation(input: $input) {
            ...GenerateUserCodeValidationFragment
        }
    }
    ${GenerateUserCodeValidationFragment}
`;