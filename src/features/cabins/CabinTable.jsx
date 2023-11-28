/* eslint-disable */
// import { useQuery } from "@tanstack/react-query";
// import styled from "styled-components";
// import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

//🎫🎫[FETCHING CABIN DATA]🎫🎫 👇
function CabinTable() {
  const { isLoading, cabins } = useCabins(); //⚽⚽[REFACTORING]⚽⚽
  const [searchParams] = useSearchParams();

  /*    //🎫🎫[FETCHING CABIN DATA]🎫🎫those are just names from the object that we received from API server, check the "console.log" from bellow to see how to get those data's
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"], //🎫🎫[FETCHING CABIN DATA]🎫🎫with this "queryKey" will identify this Key, so if we read the this "useQuery" in another place with the name of "cabin" this data will be automatically be read from the React Query "Cache/Store" instantly, with no loading

    queryFn: getCabins, //🎫🎫[FETCHING CABIN DATA]🎫🎫this is responsible for actually qurying, basically for fetching the data from the API, most important is that this function must return a "Promise" ======= ❗so we can import the promise from "apiCabins.js" file, the "async function getCabins() {...}"
  });
  //🎫🎫[FETCHING CABIN DATA]🎫🎫 console.log(data);//this "data" was just a name that we give to "useQuery(...)" from above to see the data's that we receive from API */ //⚽⚽ this code was refactored, check the "useCabin.js" file to see the refactored code ⚽⚽[REFACTORING]⚽⚽

  if (isLoading) return <Spinner />; //🎫🎫[FETCHING CABIN DATA]🎫🎫 if the App is "loading" than display this Spinner, "isLoading" if from the "React Query" devtools connected with our API back end server
  if (!cabins.length) return <Empty resourceName="cabins" />; // 📘📘[BOOKING TABLE]📘📘📘📘[BOOKING TABLE]📘📘

  // 1) FILTER
  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  // console.log(filterValue);
  if (filterValue === "all") filteredCabins = cabins; //🎬🎬[SORT/FILTER DISCOUNT & PRICE]🎬🎬🎬🎬[SORT/FILTER DISCOUNT & PRICE]🎬🎬
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // 2) SORT 🧙‍♂️🧙‍♂️[SORTING THE CABINS]🧙‍♂️🧙‍♂️
  //Ascending and Descengind list
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  // console.log(field, direction); test
  const modifier = direction === "asc" ? 1 : -1;

  // function compareText(a, b) {
  //   if (a[field].toLowerCase() < b[field].toLowerCase()) {
  //     return -1 * modifier;
  //   }
  //   if (a[field].toLowerCase() > b[field].toLowerCase()) {
  //     return 1 * modifier;
  //   }
  //   return 0;
  // }

  function compareText(a, b) {
    const textA = a[field] ? a[field].toLowerCase() : "";
    const textB = b[field] ? b[field].toLowerCase() : "";

    if (textA < textB) {
      return -1 * modifier;
    }
    if (textA > textB) {
      return 1 * modifier;
    }
    return 0;
  }

  function compareNumbers(a, b) {
    return (a[field] - b[field]) * modifier;
  }
  const sortedCabins =
    typeof cabins[0][field] === "number"
      ? filteredCabins.sort(compareNumbers)
      : filteredCabins.sort(compareText);

  // console.log(modifier, sortedCabins); test
  //🧙‍♂️🧙‍♂️[SORTING THE CABINS]🧙‍♂️🧙‍♂️

  //🕎🕎[REUSABLE MENU]🕎🕎 we included the "return" content inside of the <Menus> ...here ...</Menus> only to create the reusable Menu, so it will work either without this <Menus></Menus> and with no reconstrure of the code
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  ); //🎫🎫[FETCHING CABIN DATA]🎫🎫 for more info's about the styling of these files, please go and check them
}

export default CabinTable;
//🎫🎫[FETCHING CABIN DATA]🎫🎫we also need to sent the PROP "{cabin}" in the "<CabinRow/>" file
