/* eslint-disable */
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  //🆗🆗[AUTHORIZATION]🆗🆗 so we need to includ all out App inside of an "Protected route" that will check if the user is actually logged in or not, this will give the user acces to the App or not 🆗🆗[AUTHORIZATION]🆗🆗
  const navigate = useNavigate();

  const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // 1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 2. If there is NO authenticated user, redirect tot the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  ); //here we redirect the user to the "Login" page if there wasn't a succes in Authentication/Authorization or there is no "isLoading" state active, "isLoading" means that the App si re-fetching data's from Supabase

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // 4. If there is a user, render the app;
  if (isAuthenticated) {
    return children;
  } else {
    return null;
  }
}

export default ProtectedRoute;
//🆗🆗[AUTHORIZATION]🆗🆗
