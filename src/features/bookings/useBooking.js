import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";
//🍈🍈[ SINGLE BOOKING PAGE ]🍈🍈
export function useBooking() {
  const { bookingId } = useParams(); //🍈🍈[ SINGLE BOOKING PAGE ]🍈🍈 for calling the id

  // console.log("Booking ID:", bookingId);
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId], //✅✅[CHECKING IN THE GUESTS]✅✅ we need the "bookingId" here to connect the check in box with the booking itself

    queryFn: () => getBooking(bookingId),
    retry: false, //this will stop the REACT QUERY to sarch for 3 times for data, so if there is no data it should stop immediatly
  });

  return { isLoading, booking, error };
}
