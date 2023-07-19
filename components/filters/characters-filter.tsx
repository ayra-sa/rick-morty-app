import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import Search from "./search";
import {
  GET_CHARACTERS_GENDER,
  GET_CHARACTERS_SPECIES,
  GET_CHARACTERS_STATUS,
} from "@/graphql/queries/fetch-queries";
import Select from "./select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  setGender,
  setCharacterQuery,
  setSpecies,
  setStatus,
  resetCharacterFilter,
} from "@/store/slice/filter-slice";
import BadgeFilter from "../badge-filter";
import ButtonReset from "../buttons/button-reset";
import { fetchCharacterOptions } from "@/lib/fetch-options";

type Props = {};

const CharactersFilter = (props: Props) => {
  const [speciesOptions, setSpeciesOptions] = useState<string[]>([]);
  const [genderOptions, setGenderOptions] = useState<string[]>([]);
  const [statusOptions, setStatusOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    fetchSpeciesOptions();
    fetchGenderOptions();
    fetchStatusOptions();
  }, []);

  const fetchSpeciesOptions = async () => {
    const speciesValue = await fetchCharacterOptions(GET_CHARACTERS_SPECIES, "species");
    setSpeciesOptions(speciesValue);
  };

  const fetchGenderOptions = async () => {
    const genderValue = await fetchCharacterOptions(GET_CHARACTERS_GENDER, "gender");
    setGenderOptions(genderValue);
  };

  const fetchStatusOptions = async () => {
    const statusValue = await fetchCharacterOptions(GET_CHARACTERS_STATUS, "status");
    setStatusOptions(statusValue);
  };

  const { species, gender, status, characterQuery } = useSelector(
    (state: RootState) => state.filter
  );
  const dispatch = useDispatch();

  const handleSpecies = (event: ChangeEvent<HTMLSelectElement>) => {
    const speciesValue = event.target.value;
    dispatch(setSpecies(speciesValue));
  };

  const handleGender = (event: ChangeEvent<HTMLSelectElement>) => {
    const genderValue = event.target.value;
    dispatch(setGender(genderValue));
  };

  const handleStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    const statusValue = event.target.value;
    dispatch(setStatus(statusValue));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setInputValue(searchValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const searchValue = (event.target as HTMLInputElement).value;
      dispatch(setCharacterQuery(searchValue)); // Panggil dispatch di sini ketika tombol "Enter" ditekan
      // setInputValue("")
    }
  };

  const handleReset = () => {
    dispatch(resetCharacterFilter());
  };

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
        <Search
          value={inputValue}
          placeholder="Filter by Name..."
          handleInputChange={handleChange}
          handleInputKeyDown={handleKeyDown}
        />
        <Select
          options={speciesOptions}
          selectedName="Species"
          selectedValue={species}
          handleChangeSelect={handleSpecies}
        />
        <Select
          options={genderOptions}
          selectedName="Gender"
          selectedValue={gender}
          handleChangeSelect={handleGender}
        />
        <Select
          options={statusOptions}
          selectedName="Status"
          selectedValue={status}
          handleChangeSelect={handleStatus}
        />
      </div>

      <div className="flex items-center gap-x-5">
        <div className="flex gap-x-2">
          {characterQuery.length > 0 && <BadgeFilter label={characterQuery} />}
          {species.length > 0 && <BadgeFilter label={species} />}
          {gender.length > 0 && <BadgeFilter label={gender} />}
          {status.length > 0 && <BadgeFilter label={status} />}
        </div>

        {species.length > 0 ||
        gender.length > 0 ||
        status.length > 0 ||
        characterQuery.length > 0 ? <ButtonReset handleReset={handleReset} /> : null}
      </div>
    </div>
  );
};

export default CharactersFilter;
