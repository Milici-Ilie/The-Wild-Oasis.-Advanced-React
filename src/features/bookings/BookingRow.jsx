/* eslint-disable */
import styled from "styled-components";
import { format, isToday } from "date-fns";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate(); //🍈🍈[ SINGLE BOOKING PAGE ]🍈🍈 we need this variable to create the 3 dots menu for more info's about the "bookings" === now after creating the connection with the page for more details we must create the content for that page, so go and check the "App.js" and "Booking.jsx" files for more info's 🍈🍈[ SINGLE BOOKING PAGE ]🍈🍈
  const { checkout, isCheckingOut } = useCheckout(); //📤📤[CHECK OUT BOOKING]📤📤
  const { deleteBooking, isDeleting } = useDeleteBooking(); //💀💀[DELETING A BOOKING]💀💀 💀💀[DELETING A BOOKING]💀💀;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>

      <Modal>
        {/* 💀💀[DELETING A BOOKING]💀💀 we must wrap the entire content inside of our <Modal/> to display a pop-up question before the user delete a cabin/element 💀💀[DELETING A BOOKING]💀💀 */}
        {/* 🍈🍈[ SINGLE BOOKING PAGE ]🍈🍈 here we create the content of the 3 dots menu for "more details" ===== also we need to create this variable "navigate" so check up at the beggining of the function "BookingRow" */}
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See details
            </Menus.Button>

            {/* ✅✅[CHECKING IN THE GUESTS]✅✅ creating the button for "check-in" content === ❗ note that not all the bookings can be "check-in" we must exclude those who are already checked in or the checked out ones === now the "check-in" button will appear only at the Bookings with "unconfirmed" status ===== now we want something similar also in the "BookingDetail.jsx" file */}
            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </Menus.Button>
            )}
            {/* ✅✅[CHECKING IN THE GUESTS]✅✅ */}

            {/* 📤📤[CHECK OUT BOOKING]📤📤 in this case we want to display the button only if the "stauts = "checked-in"" 📤📤[CHECK OUT BOOKING]📤📤*/}
            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
              >
                Check out
              </Menus.Button>
            )}
            {/* 📤📤[CHECK OUT BOOKING]📤📤 📤📤[CHECK OUT BOOKING]📤📤 */}

            {/* 💀💀[DELETING A BOOKING]💀💀 check the <Modal.Open/> where we created the "Delete" button */}
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        {/* 💀💀[DELETING A BOOKING]💀💀 check the <Modal.Window/> from bellow, this will display the question for deleteing the booking === this butto will be displayed in our "3 dots" menu from the left side of every booking, we have another "Delete" button also in the "BookingDetail.jsx" file, where is the page detail about the booking, go and check the file === there also we need the <Modal/>  */}
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="booking"
            disabled={isDeleting}
            onConfirm={() => deleteBooking(bookingId)}
          />
        </Modal.Window>

        {/* 🍈🍈[ SINGLE BOOKING PAGE ]🍈🍈 */}
        {/* 💀💀[DELETING A BOOKING]💀💀 */}
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
