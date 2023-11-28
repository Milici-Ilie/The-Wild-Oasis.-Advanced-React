import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyleSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyleSidebar>
      <Logo />
      <MainNav />
      {/* 📅📅[SAMPLE DATA UPLOADING]📅📅 */}
      <Uploader />
    </StyleSidebar>
  );
} //🥅🥅[MAIN NAVIGATION]🥅🥅 connecting the "Sidebar" with the "Logo" and the "MainNav"

export default Sidebar;

//❗❗❗❗<aside></aside> this one is good for the principal web application, very good for "bare laterale, reclame, etc"
