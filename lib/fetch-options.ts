import client from "@/graphql/client";
import { CharactersResponse } from "@/interfaces/characters-interface";
import { LocationsResponse } from "@/interfaces/locations-interface";
import { DocumentNode } from "@apollo/client";

export const fetchCharacterOptions = async (
  fetchQuery: DocumentNode,
  property: string
) => {
  try {
    const { data } = await client.query<CharactersResponse>({
      query: fetchQuery,
    });

    const options = data.characters.results.map((result) => result[property]);
    const uniqueOptions = options.filter(
      (option, index, self) => self.indexOf(option) === index
    );
    return uniqueOptions;
    // setOptions(uniqueOptions)
    // setelah mendapatkan semua spesies dalam array allSpecies, gunakan fungsi filter untuk mempertahankan elemen yang hanya muncul sekali dalam array dengan memeriksa indeks pertama munculnya elemen menggunakan indexOf. Ini akan memberikan daftar spesies yang unik dalam array uniqueSpecies.
  } catch (error) {
    console.error(`Error fetching options:`, error);
    return [];
  }
};

export const fetchLocationOptions = async (
  fetchQuery: DocumentNode,
  property: string
) => {
  try {
    const { data } = await client.query<LocationsResponse>({
      query: fetchQuery,
    });

    const options = data.locations.results.map((result) => result[property]);
    const uniqueOptions = options.filter(
      (option, index, self) => self.indexOf(option) === index
    );
    return uniqueOptions;
    // setOptions(uniqueOptions)
    // setelah mendapatkan semua spesies dalam array allSpecies, gunakan fungsi filter untuk mempertahankan elemen yang hanya muncul sekali dalam array dengan memeriksa indeks pertama munculnya elemen menggunakan indexOf. Ini akan memberikan daftar spesies yang unik dalam array uniqueSpecies.
  } catch (error) {
    console.error(`Error fetching options:`, error);
    return [];
  }
};
