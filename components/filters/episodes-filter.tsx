import { RootState } from "@/store/store";
import Search from "./search";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import {
  resetEpisodeFilter,
  setEpisodeQuery,
} from "@/store/slice/filter-slice";
import BadgeFilter from "../badge-filter";
import ButtonReset from "../buttons/button-reset";

type Props = {};

const EpisodesFilter = (props: Props) => {
  const { episodeQuery } = useSelector((state: RootState) => state.filter);
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setInputValue(searchValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const searchValue = (event.target as HTMLInputElement).value;
      dispatch(setEpisodeQuery(searchValue)); // Panggil dispatch di sini ketika tombol "Enter" ditekan
    }
  };

  const handleReset = () => {
    dispatch(resetEpisodeFilter());
  };

  return (
    <div className="w-full md:w-1/2 mx-auto mb-10">
      <Search
        value={inputValue}
        placeholder="Filter by name or episode (ex. S01 or S01E02)"
        handleInputChange={handleChange}
        handleInputKeyDown={handleKeyDown}
      />

      <div className="flex items-center gap-x-5">
        {episodeQuery.length > 0 && <BadgeFilter label={episodeQuery} />}

        {episodeQuery.length > 0 && <ButtonReset handleReset={handleReset} />}
      </div>
    </div>
  );
};

export default EpisodesFilter;
