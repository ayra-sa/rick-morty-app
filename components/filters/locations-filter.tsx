import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import Search from "./search";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  resetLocationFilter,
  setDimension,
  setLocationQuery,
  setType,
} from "@/store/slice/filter-slice";
import { fetchLocationOptions } from "@/lib/fetch-options";
import {
  GET_LOCATION_DIMENSION,
  GET_LOCATION_TYPE,
} from "@/graphql/queries/fetch-queries";
import Select from "./select";
import BadgeFilter from "../badge-filter";
import ButtonReset from "../buttons/button-reset";

type Props = {};

const LocationsFilter = (props: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [typeOptions, setTypeOptions] = useState<string[]>([]);
  const [dimensionOptions, setDimensionOptions] = useState<string[]>([]);

  useEffect(() => {
    fetchDimensionOptions();
    fetchTypeOptions();
  }, []);

  const dispatch = useDispatch();

  const { locationQuery, type, dimension } = useSelector(
    (state: RootState) => state.filter
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setInputValue(searchValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const searchValue = (event.target as HTMLInputElement).value;
      dispatch(setLocationQuery(searchValue));
    }
  };

  const fetchTypeOptions = async () => {
    const typeValue = await fetchLocationOptions(GET_LOCATION_TYPE, "type");
    setTypeOptions(typeValue);
  };

  const fetchDimensionOptions = async () => {
    const dimensionValue = await fetchLocationOptions(
      GET_LOCATION_DIMENSION,
      "dimension"
    );
    setDimensionOptions(dimensionValue);
  };

  const handleType = (event: ChangeEvent<HTMLSelectElement>) => {
    const typeValue = event.target.value;
    dispatch(setType(typeValue));
  };

  const handleDimension = (event: ChangeEvent<HTMLSelectElement>) => {
    const dimensionValue = event.target.value;
    dispatch(setDimension(dimensionValue));
  };

  const handleReset = () => {
    dispatch(resetLocationFilter());
  };

  return (
    <div className="mb-10 w-3/4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div>
          <Search
            value={inputValue}
            handleInputChange={handleChange}
            handleInputKeyDown={handleKeyDown}
            placeholder="Filter by Name..."
          />
        </div>
        <Select
          options={typeOptions}
          handleChangeSelect={handleType}
          selectedName="Type"
          selectedValue={type}
        />
        <Select
          options={dimensionOptions}
          handleChangeSelect={handleDimension}
          selectedName="Dimension"
          selectedValue={dimension}
        />
      </div>

      <div className="flex items-center gap-x-5">
        <div className="flex gap-x-3">
          {locationQuery.length > 0 && <BadgeFilter label={`"${locationQuery}"`} />}
          {type.length > 0 && <BadgeFilter label={type} />}
          {dimension.length > 0 && <BadgeFilter label={dimension} />}
        </div>

        {locationQuery.length > 0 || type.length > 0 || dimension.length > 0 ? (
          <ButtonReset handleReset={handleReset} />
        ) : null}
      </div>
    </div>
  );
};

export default LocationsFilter;
