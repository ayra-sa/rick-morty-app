import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterSlice {
  species: string;
  gender: string;
  status: string;
  characterQuery: string;
  episodeQuery: string;
}

const initialState: FilterSlice = {
  species: "",
  gender: "",
  status: "",
  characterQuery: "",
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
    setEpisodeQuery: (state, action: PayloadAction<string>) => {
      state.episodeQuery = action.payload;
    },
    resetCharacterFilter: (state) => {
      state.species = ""
      state.gender = ""
      state.status = ""
      state.characterQuery = ""
    }
  },
});

export const { setSpecies, setGender, setStatus, setCharacterQuery, setEpisodeQuery, resetCharacterFilter } = filterSlice.actions

export default filterSlice.reducer