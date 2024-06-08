import { gql } from "@apollo/client";

export const VerifyUserCodeValidationQuery = gql`

    query VerifyUserCodeValidationQuery($input: VerifyUserCodeValidationInput!) {
        verifyUserCodeValidation(input: $input)
    }

`;