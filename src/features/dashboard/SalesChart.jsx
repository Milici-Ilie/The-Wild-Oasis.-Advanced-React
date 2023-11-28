/* eslint-disable */
import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  //📊📊[DISPLAYING LINE CHART]📊📊
  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

//📊📊[DISPLAYING LINE CHART]📊📊
function SalesChart({ bookings, numDays }) {
  //with "bookings" and "numDays" we take our actual data from our App bookings, need to pass those in the <SalesChart/> from "DashboardLayout.jsx" file
  const { isDarkMode } = useDarkMode();

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(), //the "subDays" it's a very helpfull library
  }); // this is how we connect our diagram with our App, the logic behind
  // console.log(allDates);
  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      //check the documentation to see how this function works: "format"
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0), //also check the documentation for "isSameDay" and "Date"

      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.extrasPrice, 0),
    };
  }); // now we must pass the "data" variable name in the <AreaChart data={data}/> to connect them
  // console.log(data);

  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#bf6060", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledSalesChart>
      <Heading as="h2">
        Sales from {format(allDates.at(0), "MMM dd yyyy")} &mdash;{" "}
        {format(allDates.at(-1), "MMM dd yyyy")}
      </Heading>

      <ResponsiveContainer height={300} width="100%">
        {/* this <ResponsiveContainer> will auttomatically adjust our diagram container to fit in the content of our site at any size of screens */}
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          {/* this will display the horrizontal months, will take the "label" from the variable above 👆 named "fakeData", the "ticks" will style the bottom line and numbet for months */}
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          {/* on the verticall will display the incoming money */}
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          {/* 📊📊[DISPLAYING LINE CHART]📊📊 this <Tooltip/> will give as the actual value if we hover the diagram line */}
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total sales"
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="Extra sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
//📊📊[DISPLAYING LINE CHART]📊📊
