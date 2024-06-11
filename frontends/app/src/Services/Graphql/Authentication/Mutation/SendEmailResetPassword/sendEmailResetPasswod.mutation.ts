import { gql } from "@apollo/client";

export const SendEmailResetPasswordMutation = gql`

    mutation SendEmailResetPasswordMutation($input: SendEmailResetPasswordInput!) {
        sendEmailResetPassword(input:$input)
    }

`;