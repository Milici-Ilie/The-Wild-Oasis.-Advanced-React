import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef(); ////📤📤[CLICK OUTSIDE THE MODAL]📤📤 also check the <StyledModal/> from bellow were we connect it with the "handleClick" function by using this "ref" variable 👇

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          // console.log("click outside");
          handler(); //this handler actually is "close", but we take if from above, from the function "useOutsideClick(handler)" as an argument from where this HOOK is summoned
        } //here we connect with the <StyledModal/> to create the outside click === "ref.current" represents the content, the "white modal windows" that displayed when the button is clicked in our App., so the DOM will check "contain" if there was selcted/trgetted the button that open the modal
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing] ////📤📤[CLICK OUTSIDE THE MODAL]📤📤
  );

  return ref;
}
