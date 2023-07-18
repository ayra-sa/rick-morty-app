import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterSlice {
  species: string;
  gender: string;
  status: string;
  characterQuery: string;
  locationQuery: string;
  type: string;
  dimension: string;
  episodeQuery: string;
}

const initialState: FilterSlice = {
  species: "",
  gender: "",
  status: "",
  characterQuery: "",
  locationQuery: "",
  type: "",
  dimension: "",
  episodeQuery: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSpecies: (state, action: PayloadAction<string>) => {
      state.species = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setCharacterQuery: (state, action: PayloadAction<string>) => {
      state.characterQuery = action.payload;
    },
    setLocationQuery: (state, action: PayloadAction<string>) => {
      state.locationQuery = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setDimension: (state, action: PayloadAction<string>) => {
      state.dimension = action.payload;
    },
    setEpisodeQuery: (state, action: PayloadAction<string>) => {
      state.episodeQuery = action.payload;
    },
    resetCharacterFilter: (state) => {
      state.species = "";
      state.gender = "";
      state.status = "";
      state.characterQuery = "";
    },
    resetLocationFilter: (state) => {
      state.locationQuery = "";
      state.type = ""
      state.dimension = ""
    },
    resetEpisodeFilter: (state) => {
      state.episodeQuery = "";
    },
  },
});

export const {
  setSpecies,
  setGender,
  setStatus,
  setCharacterQuery,
  setLocationQuery,
  setType,
  setDimension,
  setEpisodeQuery,
  resetCharacterFilter,
  resetEpisodeFilter,
  resetLocationFilter
} = filterSlice.actions;

export default filterSlice.reducer;
