import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`; // this is used to make the cabins content maximum only 120 rem larger in the horizontal, check down and see where we included the <Outlet/> inside of the <Container/>

function AppLayout() {
  //🈸🈸[APP LAYOUT]🈸🈸
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      {/* 🈸🈸[APP LAYOUT]🈸🈸 with "Outlet" we connect all the Route's (child routes) from the App.jsx file with the "AppLayout", now the "AppLayout" and all the "Route"'s files will be always displayed togher, the "login" and "pagenotfound" pages will not bcs those 2 are not inside of the "AppLayout" body */}
      {/* including the 
      <Main>
        <Outlet />
      </Main> Outlet inside of the <main/> the styles that we declare will apply only to the child inside of the Outlet and not to all the element, for ex. the  <Header />
      <Sidebar /> === for this <main/> to work we included the "Account" file code in our case inside of a <></> fragment ... ❗❗❗ because the rule is to return only one element or a fragment that containes more elements, but not a DIV!!!, check the others files as an exemple */}
    </StyledAppLayout>
  );
}

export default AppLayout;
