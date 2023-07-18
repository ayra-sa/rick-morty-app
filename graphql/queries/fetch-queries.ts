import { gql } from "@apollo/client";

export const GET_CHARACTERS_SPECIES = gql`
    query GetCharactersSpecies {
        characters {
            results {
                species
            }
        }
    }
`

export const GET_CHARACTERS_GENDER = gql`
    query GetCharactersGender {
        characters {
            results {
                gender
            }
        }
    }
`

export const GET_CHARACTERS_STATUS = gql`
    query GetCharactersStatus {
        characters {
            results {
                status
            }
        }
    }
`