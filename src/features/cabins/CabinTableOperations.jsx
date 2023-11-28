import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

//🎬🎬[SORT/FILTER DISCOUNT & PRICE]🎬🎬 creating the content by importing the <TableOperations/> and <Filter/> === now we must export this file in our "Cains.jsx" file 🎬🎬[SORT/FILTER DISCOUNT & PRICE]🎬🎬

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      {/* //🧙‍♂️🧙‍♂️[SORTING THE CABINS]🧙‍♂️🧙‍♂️ here we created the posibility to sort the cabins depending on the name, alphabetic order, price and capacity 🧙‍♂️🧙‍♂️[SORTING THE CABINS]🧙‍♂️🧙‍♂️*/}

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (low first)" },
          { value: "regularPrice-desc", label: "Sort by price (high first)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
        ]}
      />
    </TableOperations>
  );
}

{
  /* //🧙‍♂️🧙‍♂️[SORTING THE CABINS]🧙‍♂️🧙‍♂️  🧙‍♂️🧙‍♂️[SORTING THE CABINS]🧙‍♂️🧙‍♂️*/
}

export default CabinTableOperations;
