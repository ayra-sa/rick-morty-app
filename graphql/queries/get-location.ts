import { gql } from "@apollo/client";

const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  }
`;


export default GET_LOCATION