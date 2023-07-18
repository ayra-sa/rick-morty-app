import Image from "next/image";
import searchIcon from "../../public/search.svg";
import { ChangeEvent, KeyboardEvent } from "react";

type Props = {
  value: string
  placeholder: string
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleInputKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void
};

const Search = ({value, placeholder, handleInputChange, handleInputKeyDown}: Props) => {
  return (
    // <div className="rounded-md outline-1 outline outline-neutral-400 flex items-center px-3">
    //   <label htmlFor="search">
    //     <Image src={searchIcon} alt="search icon" />
    //   </label>
    // </div>
      <input
        id="search"
        type="text"
        placeholder={placeholder}
        value={value}
        autoComplete="off"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="input input-bordered rounded-md w-full text-inherit focus:outline-none"
      />
  );
};

export default Search;
