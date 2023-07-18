import {  CharactersResponse } from "@/interfaces/characters-interface";
import {  LocationsResponse } from "@/interfaces/locations-interface";
import { Dispatch, SetStateAction } from "react";
import { DocumentNode } from "@apollo/client";
import client from "@/graphql/client";
import { EpisodesResponse } from "@/interfaces/episodes-interface";

interface ResponseData {
  characters?: {
    results: CharactersResponse;
  };
  locations?: {
    results: LocationsResponse;
  };
  episodes?: {
    results: EpisodesResponse;
  };
}

const handleMore = async (
  page: number,
  query: DocumentNode,
  setData: Dispatch<SetStateAction<any[]>>,
  setPage: Dispatch<SetStateAction<number>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  dataProp: keyof ResponseData // Menggunakan keyof untuk menentukan tipe data yang tepat,  harus merupakan salah satu properti yang ada dalam ResponseData
) => {
  setIsLoading(true);

  try {
    const { data } = await client.query<ResponseData>({
      query,
      variables: { page },
    });

    const moreData = data[dataProp]?.results;
    if (Array.isArray(moreData)) {
      setData((prevData) => [...prevData, ...moreData]);
      setPage((prevPage) => prevPage + 1);
    }
  } catch (error) {
    console.error("Error fetching more data:", error);
  } finally {
    setIsLoading(false);
  }
};

export default handleMore