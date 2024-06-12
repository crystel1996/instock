import { gql } from "@apollo/client";

export const GetAllSettingMenuByUserFragment = gql`

    fragment GetAllSettingMenuByUserFragment on SettingMenu {
        id
        code
        type
        url
        label
        icon
    }

`;