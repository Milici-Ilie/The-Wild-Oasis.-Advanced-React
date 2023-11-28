/* eslint-disable */

import { useSearchParams } from "react-router-dom";
import Select from "./Select";

//🧙‍♂️🧙‍♂️[SORTING THE CABINS]🧙‍♂️🧙‍♂️
function SortBy({ options }) {
  const [searchParams, setSearchParamas] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParamas(searchParams);
  }

  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}
//🧙‍♂️🧙‍♂️[SORTING THE CABINS]🧙‍♂️🧙‍♂️ also pass the prop in the "Select" function from the "Select.jsx" file
export default SortBy;
