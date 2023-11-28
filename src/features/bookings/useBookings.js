import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient(); //🔮🔮[PRE-FETCHING]🔮🔮
  const [searchParams] = useSearchParams(); //📚📚[FILTERING BOOKINGS]📚📚 here we want to implement the auto acces to data from the API for filtering the books

  // FILTER ... 📚📚[FILTERING BOOKINGS]📚📚

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue }; //📚📚[FILTERING BOOKINGS]📚📚

  //🧙‍♀️🧙‍♀️[SORTING BOOKINGS]🧙‍♀️🧙‍♀️
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  //🧙‍♀️🧙‍♀️[SORTING BOOKINGS]🧙‍♀️🧙‍♀️ for this to take effect/work we need to pass the variable name "sortBy" down in the "getBookings({...here...})" and also in the "queryKey" ===  and now let's also implement this information in the "getBookings" function from "apiBookings.js"file 🧙‍♀️🧙‍♀️[SORTING BOOKINGS]🧙‍♀️🧙‍♀️

  //PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page")); //📟📟[PAGINATING BOOKINGS]📟📟 we need to pass this "page" variable also down in the "queryFn" => "getBookings" and the same in the "queryKey" ... we also need to pass this "page" variable in the "getBookings" function from "apiBookings.js" file to change the content of the page depending on the page number

  const {
    isLoading,
    data: { data: bookings, count } = {}, //📟📟[PAGINATING BOOKINGS]📟📟 adding "count" for pagination ... now go and check the "BookingTable.jsx" file
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page], //📟📟[PAGINATING BOOKINGS]📟📟
    queryFn: () => getBookings({ filter, sortBy, page }), //📚📚[FILTERING BOOKINGS]📚📚 we need to pass the "filter" variable here and so we send it in the function "getBookings" from "apiBookings.js" file
  });

  // PRE-FETCHING
  //🔮🔮[PRE-FETCHING]🔮🔮 prefetching the data pagination prev/next before even reatching that page for a better experience
  //🔮🔮[PRE-FETCHING]🔮🔮first we need to call the "useQueryClient()" HOOK, check the variable "queryClient" from above 👆 at the beggning of the function
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    //here we want to summon this functionallity only if the page count didn't reach the last page, at the finall page this function of pre-fecthing should stop
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    }); //🔮🔮[PRE-FETCHING]🔮🔮 this HOOK is similiar with "useQuery" HOOK === now if we check in the REDUX tool we can see that when we are at X page the Y page is already loaded, when going to Y page the Z page will be loaded, for a better experience === here we are fixing the "PRE-FETCHING" when the user press "NEXT page"

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  //🔮🔮[PRE-FETCHING]🔮🔮 so here we are fixing the issue of reload for previous pages

  //📘📘[BOOKING TABLE]📘📘📘📘[BOOKING TABLE]📘📘
  return { isLoading, bookings, error, count }; //📟📟[PAGINATING BOOKINGS]📟📟 also return the "count" for pagination
}
