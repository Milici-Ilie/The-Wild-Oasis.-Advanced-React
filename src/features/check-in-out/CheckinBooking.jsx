/* eslint-disable */
import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings"; //🥓🥓[OPTIONAL BREAKFAST]🥓🥓

// import { useCheckin } from "./useCheckin";

// import { useSettings } from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false); //✅✅[CHECKING IN THE GUESTS]✅✅
  const [addBreakfast, setAddBreakfast] = useState(false); // 🥓🥓[OPTIONAL BREAKFAST]🥓🥓 🥓🥓[OPTIONAL BREAKFAST]🥓🥓
  const { booking, isLoading } = useBooking();
  //✅✅[CHECKING IN THE GUESTS]✅✅ here we display the value/id of the booking ✅✅[CHECKING IN THE GUESTS]✅✅
  const { settings, isLoading: isLoadingSettings } = useSettings(); //🥓🥓[OPTIONAL BREAKFAST]🥓🥓  🥓🥓[OPTIONAL BREAKFAST]🥓🥓

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]); //this will display wich booking is payed and wich not

  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckin(); //connecting with the "useChecking.js" file

  if (isLoading || isLoadingSettings) return <Spinner />; // ✅✅[CHECKING IN THE GUESTS]✅✅ loading spinner until fethces data

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings.breakfastPrice * numNights * numGuests; //🥓🥓[OPTIONAL BREAKFAST]🥓🥓  🥓🥓[OPTIONAL BREAKFAST]🥓🥓

  function handleCheckin() {
    if (!confirmPaid) return;

    // 🥓🥓[OPTIONAL BREAKFAST]🥓🥓 we also need to go and check the "useCheckin.js" file
    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }
  //🥓🥓[OPTIONAL BREAKFAST]🥓🥓

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {/* ✅✅[CHECKING IN THE GUESTS]✅✅ content ✅✅[CHECKING IN THE GUESTS]✅✅  */}

      {/* 🥓🥓[OPTIONAL BREAKFAST]🥓🥓 🥓🥓[OPTIONAL BREAKFAST]🥓🥓  */}
      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </Box>
      )}
      {/* 🥓🥓[OPTIONAL BREAKFAST]🥓🥓  🥓🥓[OPTIONAL BREAKFAST]🥓🥓 */}

      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id="confirm"
          disabled={confirmPaid || isCheckingIn}
          // 🥓🥓[OPTIONAL BREAKFAST]🥓🥓
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
              )}) `}
          {formatCurrency(totalPrice)}
          {/* 🥓🥓[OPTIONAL BREAKFAST]🥓🥓  */}
        </Checkbox>
      </Box>
      {/* ✅✅[CHECKING IN THE GUESTS]✅✅ creating the check in box ✅✅[CHECKING IN THE GUESTS]✅✅ here we created a logic that if the guest payd his booking the button "Check in booking #{bookingId}" will be available to check in the reservation, otherwise if the guest didn't payed this button will not be available and only the check box will be available for paying the booking, and after the user checked this check box than the button will be available to be clicked */}

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
