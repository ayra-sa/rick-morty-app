import { gql } from "@apollo/client";

export const GET_CHARACTERS_SPECIES = gql`
  query GetCharactersSpecies {
    characters {
      results {
        species
      }
    }
  }
`;

export const GET_CHARACTERS_GENDER = gql`
  query GetCharactersGender {
    characters {
      results {
        gender
      }
    }
  }
`;

export const GET_CHARACTERS_STATUS = gql`
  query GetCharactersStatus {
    characters {
      results {
        status
      }
    }
  }
`;

export const GET_LOCATION_TYPE = gql`
  query GetLocationType {
    locations {
      results {
        type
      }
    }
  }
`;

export const GET_LOCATION_DIMENSION = gql`
  query GetLocationDimension {
    locations {
      results {
        dimension
      }
    }
  }
`;
