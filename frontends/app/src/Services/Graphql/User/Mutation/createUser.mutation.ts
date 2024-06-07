import { gql } from "@apollo/client";
import { createUser as createUserFragment } from './createUser.fragment'

export const createUser = gql`

    mutation createUser($input: CreateUserInput!) {
        createUser(input: $input) {
            ...createUser
        }
    }
    ${createUserFragment}
`;