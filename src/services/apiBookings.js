/* eslint-disable */
import { getToday } from "../utils/helpers";
import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constants";

// 📘📘[BOOKING TABLE]📘📘 📘📘[BOOKING TABLE]📘📘
export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",
      { count: "exact" }
    ); //📟📟[PAGINATING BOOKINGS]📟📟 we use this { count: "exact" } when we dont wanna to query the entire data but only the results === also add the "count" down in the destructured variable from "//SORT" category ==== we added also the "page" up in the "getBookings" function 📟📟[PAGINATING BOOKINGS]📟📟

  // .eq("status", "unconfirmed"); // taking data's from API supabase 📚📚[FILTERING BOOKINGS]📚📚 by using this code for exemple ".eq("status", "unconfirmed");" after the acolade of ".select(...) here" we see that this will display all the itmes with "unconfirmed" class, or ".gte("totalPrice", 5000)" = meaning "greater or equal" than 5000, or ".lte("totalPrice", 5000)"= meaning lower or equal. === but this is the hard coded ........ to see the auto implementation go and check the "useBookings.js" file📚📚[FILTERING BOOKINGS]📚📚 ❗❗❗ IMPORTANT === also we need to include the "filter" and "sortBy" in the "getBookings" function

  //FILTER 📚📚[FILTERING BOOKINGS]📚📚
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value); //📚📚[FILTERING BOOKINGS]📚📚 this code will make the filter already be working, but it will not fetch the data automatically, only if the user is reloading the page, so go and check the "queryKey" from "useBookings.js" file from the function "useBookings"

  //SORTING 🧙‍♀️🧙‍♀️[SORTING BOOKINGS]🧙‍♀️🧙‍♀️
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    }); //🧙‍♀️🧙‍♀️[SORTING BOOKINGS]🧙‍♀️🧙‍♀️ this is how we make the auto sort work

  //📟📟[PAGINATING BOOKINGS]📟📟
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  } ////📟📟[PAGINATING BOOKINGS]📟📟

  const { data, error, count } = await query; //📚📚[FILTERING BOOKINGS]📚📚 ---- 📟📟[PAGINATING BOOKINGS]📟📟 here we added the "count" for changing the pages when the buttons are pressed, also need to return this "count". Check down 👇

  if (error) {
    console.log(error);
    throw new Error("Bookings could not be loaded");
  }

  return { data, count }; //📟📟[PAGINATING BOOKINGS]📟📟
}
//📘📘[BOOKING TABLE]📘📘

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

//📚📚[BOOKINGS AND STAYS]📚📚 👇 📚📚[BOOKINGS AND STAYS]📚📚
// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true })); //"getToday" is a function, check it to see

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

//📚📚[BOOKINGS AND STAYS]📚📚 📚📚[BOOKINGS AND STAYS]📚📚
// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}
//📚📚[BOOKINGS AND STAYS]📚📚 👆 📚📚[BOOKINGS AND STAYS]📚📚

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  //🦌🦌[STAYS]🦌🦌 supabade connected code
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
    )
    .order("created_at");

  //🦌🦌[STAYS]🦌🦌 the code bellow is JS, check the lesson 404 for more info's, but we will use the code from above 👆 that is connected to Supabase 🦌🦌[STAYS]🦌🦌
  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))
  //🦌🦌[STAYS]🦌🦌 🦌🦌[STAYS]🦌🦌

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function deleteBooking(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}
