/* eslint-disable */
import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

//💨💨[DASHBOARD]💨💨
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  //📚📚[BOOKINGS AND STAYS]📚📚
  //📈📈[DISPLAYING STATISTICS]📈📈
  const { bookings, isLoading: isLoading1 } = useRecentBookings();

  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  //📈📈[DISPLAYING STATISTICS]📈📈
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;
  //📚📚[BOOKINGS AND STAYS]📚📚
  console.log(bookings);

  return (
    <StyledDashboardLayout>
      {/* 📈📈[DISPLAYING STATISTICS]📈📈 👇 here we summon the "Stats.jsx" file */}
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      {/* 📈📈[DISPLAYING STATISTICS]📈📈 👆 */}
      <TodayActivity />
      {/* 🦌🦌[STAYS]🦌🦌 <TodayActivity/> */}
      <DurationChart confirmedStays={confirmedStays} />
      {/* ⭕⭕[DISPLAYING PIE CHART]⭕⭕ <DurationChart/> */}
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
