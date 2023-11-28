import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0, //this "staleTime" is like an "refresh" of the page, we set the seconds and at every 60 sec let's say the page will reload and change all the changes the user did, or simply reload the page App === and if we set it to 0 than the data from our App will always refetched instantly
    },
  },
}); //👑👑[SETTING UP REACT QUERRY]👑👑 after importing the "React Query" named now "tanStack query" we will include our entire App inside of <QueryClientProvider/>, check bellow the entire tree 👑👑[SETTING UP REACT QUERRY]👑👑

//📨📨[REACT-ROUTER ROUTES]📨📨
function App() {
  return (
    <DarkModeProvider>
      {/* 📳📳[DARK MODE]📳📳 📳📳[DARK MODE]📳📳 */}

      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {/* 👑👑[SETTING UP REACT QUERRY]👑👑 we must write this <ReactQueryDevtools/> after we installed the tool in our Terminal "npm i @tanstack/react-query-devtools@4 === or latest" */}
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            {/* 🆗🆗[AUTHORIZATION]🆗🆗 here we included the <AppLayout/> inside of the <ProtectedRoute>... here... </ProtectedRoute>, in this way the App. will be avalable only if the user is loged in === go and check "ProtectedRoute.jsx" file 🆗🆗[AUTHORIZATION]🆗🆗 */}
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              {/*📨📨[REACT-ROUTER ROUTES]📨📨 this is the page that we want to see when we open the App, so to do this we need to include "index", we created the "element" here in this wat just because we dont want a duplicate code with the one from bellow 👇  */}
              <Route path="dashboard" element={<Dashboard />} />

              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              {/* 🍈🍈[ SINGLE BOOKING PAGE ]🍈🍈 connecting the "see details" page */}
              <Route path="checkin/:bookingId" element={<Checkin />} />
              {/* ✅✅[CHECKING IN THE GUESTS]✅✅  */}
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
            {/* 🈸🈸[APP LAYOUT]🈸🈸 we didn't include in the <AppLayout/> the "login" page and the "*" page because those are completley differet pages */}
          </Routes>
        </BrowserRouter>

        {/* 🍄🍄[REACT TOASTER]🍄🍄 "gutter" represents the space between the window and the toaster 🔻🔻 */}
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
        {/* 🍄🍄[REACT TOASTER]🍄🍄 "gutter" represents the space between the window and the toaster 🔼🔼 ===== now go in the "CabinRow.jsx" file and replace the "alerts" with "toast"`*/}
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
