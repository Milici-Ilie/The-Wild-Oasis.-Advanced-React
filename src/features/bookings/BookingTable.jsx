/* eslint-disable */
import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
// import Pagination from "../../ui/Pagination";

//📘📘[BOOKING TABLE]📘📘
function BookingTable() {
  const { bookings, isLoading, count } = useBookings();
  //📟📟[PAGINATING BOOKINGS]📟📟the pagination bookings, changing the pages with content can be done by calculating the length of this Array [bookings], but we will do it now by using the "supabase" options, so go and check first the "apiBookings.js" file === also the "count" is necessar for pagination, we also need to pass down in the <Pagination count={here}/>
  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        {/* 📄📄[REUSABLE PAGINATION]📄📄 📟📟[PAGINATING BOOKINGS]📟📟 passing the "count" for pagination */}
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
        {/* 📄📄[REUSABLE PAGINATION]📄📄 📟📟[PAGINATING BOOKINGS]📟📟 passing the "count" for pagination */}
      </Table>
    </Menus>
  );
}

export default BookingTable;
