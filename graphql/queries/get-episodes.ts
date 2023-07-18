import { gql } from "@apollo/client";

const GET_EPISODES = gql`
  query GetEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        count
        pages
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
          status
        }
      }
    }
  }
`;


export default GET_EPISODES