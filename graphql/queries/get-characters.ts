import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        gender
        image
        type
      }
    }
  }
`;

export default GET_CHARACTERS;
