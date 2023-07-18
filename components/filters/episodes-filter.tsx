import { RootState } from "@/store/store"
import Search from "./search"
import { useDispatch, useSelector } from "react-redux"
import { ChangeEvent, KeyboardEvent } from "react"
import { setEpisodeQuery } from "@/store/slice/filter-slice"

type Props = {}

const EpisodesFilter = (props: Props) => {
  const {episodeQuery} = useSelector((state: RootState) => state.filter)
  const dispatch = useDispatch()

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value
    dispatch(setEpisodeQuery(searchValue))
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const searchValue = (event.target as HTMLInputElement).value;
      dispatch(setEpisodeQuery(searchValue)); // Panggil dispatch di sini ketika tombol "Enter" ditekan
    }
  };

  console.log(episodeQuery)
  
  return (
    <div>
      <input
        type="text"
        defaultValue={episodeQuery}
        onKeyDown={handleKeyDown} // Tambahkan atribut onKeyDown untuk menangani peristiwa tombol ditekan
      />
    </div>
  );
  



  // return (
  //   <div className="w-3/5">
  //       <Search value={episodeQuery} placeholder="Filter by name or episode (ex. S01 or S01E02)" handleInputChange={handleSearch} handleInputKeyDown={handleKeyDown} />
  //   </div>
  // )
}

export default EpisodesFilter