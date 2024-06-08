import { gql } from "@apollo/client";
import { createUserFragment } from './createUser.fragment'

export const createUserMutation = gql`

    mutation createUserMutation($input: CreateUserInput!) {
        createUser(input: $input) {
            ...createUser
        }
    }
    ${createUserFragment}
`;