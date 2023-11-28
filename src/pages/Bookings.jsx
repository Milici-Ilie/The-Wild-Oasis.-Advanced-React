import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable"; //📘📘[BOOKING TABLE]📘📘
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
        {/* //📚📚[FILTERING BOOKINGS]📚📚 including <BookingTableOperations /> */}
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
