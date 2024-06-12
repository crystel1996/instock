import { gql } from "@apollo/client";
import { CreateSettingMenuFragment } from "./createSettingMenu.fragment";

export const CreateSettingMenuMutation = gql`

    mutation CreateSettingMenuMutation($input: CreateSettingMenuInput){
        createSettingMenu(input: $input) {
            ...CreateSettingMenuFragment
        }
    }
    ${CreateSettingMenuFragment}
`;