import { Character } from "./characters-interface";
import { Info } from "./info";

export interface LocationInterface {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
  [key: string]: any
}

export interface LocationsResponse {
  locations: {
    info: Info;
    results: LocationInterface[];
  };
}

export interface LocationFullData {
  location: LocationInterface[]
}
