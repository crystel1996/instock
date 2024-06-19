import { gql } from "@apollo/client";

export const SendEmailProfileValidationMutation = gql`

    mutation SendEmailProfileValidationMutation($input: SendEmailProfileValidationInput!) {
        sendEmailProfileValidation(input:$input)
    }

`;