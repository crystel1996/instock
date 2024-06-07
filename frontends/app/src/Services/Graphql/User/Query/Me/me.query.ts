import { gql } from "@apollo/client";
import { MeFragment } from "./me.fragment";

export const MeQuery = gql`

    query MeQuery($input: UserMeInput!) {
        me(input: $input) {
            ...MeFragment
        }
    }
    ${MeFragment}
`;