import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode(); //📳📳[DARK MODE]📳📳
  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png"; //📳📳[DARK MODE]📳📳 this will change the text from our Logo

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  ); //📳📳[DARK MODE]📳📳
}

export default Logo;
