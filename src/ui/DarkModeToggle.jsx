import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";
//📳📳[DARK MODE]📳📳

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  ); //creating the Button, changing from moon to sun
}

export default DarkModeToggle;
//📳📳[DARK MODE]📳📳 now we must export this Button to our "HeaderMenu.jsx" file
