import { gql } from "@apollo/client";

export const CreateSettingMenuFragment = gql`

    fragment CreateSettingMenuFragment on SettingMenu {
        id
        code
        type
        url
        label
        icon
    }

`;