import { gql } from "@apollo/client";
import { FindUserByColumnFragment } from "./findUserByColumn.fragment";

export const FindUserByColumnQuery = gql`

    query FindUserByColumnFragment($input: FindUserByColumnInput!) {
        findUserByColumn(input: $input) {
            ...FindUserByColumnFragment
        }
    }
    ${FindUserByColumnFragment}
`;