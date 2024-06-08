import { gql } from "@apollo/client";
import { ResetPasswordFragment } from "./resetPassword.fragment";

export const ResetPasswordMutation = gql`

    mutation ResetPasswordMutation($input: ResetPasswordInput!) {
        resetPassword(input:$input) {
            ...ResetPasswordFragment
        }
    }
    ${ResetPasswordFragment}
`;