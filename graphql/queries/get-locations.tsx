import { gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
          name
        }
      }
    }
  }
`;

export default GET_LOCATIONS;
