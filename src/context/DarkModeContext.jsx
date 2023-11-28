/* eslint-disable */
import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
////📳📳[DARK MODE]📳📳 this will set the state 📳📳[DARK MODE]📳📳

const DarkModeContext = createContext();

//🌑🌑[AUTO DARK MODE]🌑🌑 window.matchMedia("(prefers-color-scheme:dark)").matches ===== check this code bellow in the "DarkModeProvider" function
function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme:dark)").matches,
    "isDarkMode"
  ); //now we must import and includ our entire App inside of "DarkModeProvider", check the "App.jsx" file

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  ); // this will make the change between Dark mode and Light mode

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
//📳📳[DARK MODE]📳📳 📳📳[DARK MODE]📳📳
