import { gql } from "@apollo/client";
import { GetAllSettingMenuByUserFragment } from "./getAllSettingMenuByUser.fragment";

export const GetAllSettingMenuByUserQuery = gql`

    query GetAllSettingMenuByUserQuery($input: GetAllSettingMenuByUserInput!) {
        getAllSettingMenusByUser(input: $input) {
            ...GetAllSettingMenuByUserFragment
        }
    }
    ${GetAllSettingMenuByUserFragment}
`;