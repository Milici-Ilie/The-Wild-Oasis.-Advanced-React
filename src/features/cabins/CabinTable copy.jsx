/* eslint-disable */
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import { useSearchParams } from "react-router-dom";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

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

  const filterValue = searchParams.get("discount");
  console.log(filterValue);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} /> //🎫🎫[FETCHING CABIN DATA]🎫🎫we also need to sent the PROP "{cabin}" in the "<CabinRow/>" file
      ))}
    </Table>
  ); //🎫🎫[FETCHING CABIN DATA]🎫🎫 for more info's about the styling of these files, please go and check them
}

export default CabinTable;
