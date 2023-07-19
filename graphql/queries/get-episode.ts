import { gql } from "@apollo/client";

const GET_EPISODE = gql`
    query GetEpisode($id: ID!) {
        episode(id: $id) {
            id
            name
            air_date
            episode
            characters {
                id
                name
                status
                species
                image
            }
        }
    }
`

export default GET_EPISODE