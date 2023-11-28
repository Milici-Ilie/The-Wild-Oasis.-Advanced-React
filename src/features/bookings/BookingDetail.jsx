/* eslint-disable */
import styled from "styled-components";
//🍈🍈[ SINGLE BOOKING PAGE ]🍈🍈 🍈🍈[ SINGLE BOOKING PAGE ]🍈🍈
import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking(); //🍈🍈[ SINGLE BOOKING PAGE ]🍈🍈connecting with the "useBooking.js" file
  // const booking = {};
  // const status = "checked-in";
  const { checkout, isCheckingOut } = useCheckout(); //📤📤[CHECK OUT BOOKING]📤📤
  const { deleteBooking, isDeleting } = useDeleteBooking(); //💀💀[DELETING A BOOKING]💀💀 💀💀[DELETING A BOOKING]💀💀;

  const moveBack = useMoveBack();
  const navigate = useNavigate(); //{/* ✅✅[CHECKING IN THE GUESTS]✅✅ */}

  if (isLoading) return <Spinner />; //if is loading than display the Spinner load
  if (!booking) return <Empty resourceName="booking" />; //this will bring the guest to the "booking" page if he acces accidentally an invalid page/book

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {/* 🍈🍈[ SINGLE BOOKING PAGE ]🍈🍈 so all the content that is displayed in the page "See more" about the Bookings is in this file "BookingDataBox" file. There we auto fetch data */}

      <ButtonGroup>
        {/* ✅✅[CHECKING IN THE GUESTS]✅✅ also we need to create the "navigate" function */}
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}
        {/* ✅✅[CHECKING IN THE GUESTS]✅✅ */}

        {/* 📤📤[CHECK OUT BOOKING]📤📤 in this case we want to display the button only if the "stauts = "checked-in"" 📤📤[CHECK OUT BOOKING]📤📤*/}
        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}
        {/* 📤📤[CHECK OUT BOOKING]📤📤 📤📤[CHECK OUT BOOKING]📤📤 */}

        {/* 💀💀[DELETING A BOOKING]💀💀 here we create a "Delete" button also in the "More details" page about Bookings === we also want to go back at the previous page after the user deleted a booking */}
        <Modal>
          <Modal.Open opens="delete">
            <Button $variation="danger">Delete booking</Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, { onSettled: () => navigate(-1) })
              }
            />
          </Modal.Window>
        </Modal>
        {/* 💀💀[DELETING A BOOKING]💀💀 */}

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
