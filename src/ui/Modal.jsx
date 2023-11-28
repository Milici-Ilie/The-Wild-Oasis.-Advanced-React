/* eslint-disable */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
// import { useOutsideClick } from "../hooks/useOutsideClick";
//💽💽[CONVERT TO COMPOUND COMPONENTS]💽💽
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

//💽💽[CONVERT TO COMPOUND COMPONENTS]💽💽
const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close); //📤📤[CLICK OUTSIDE THE MODAL]📤📤 this is the function that close the Modal when a click is detected outside, check the reusable HOOK in the "useOutsideClick.jsx" file ==== we created this "ref" variable where we store the "close" function to be able to add this down in the <StyledModal ref={ref}>  📤📤[CLICK OUTSIDE THE MODAL]📤📤

  ///////////////// THIS WAS RECREATED IN A CUSTOM HOOK (useOutsideClick.js)/////////////////////
  // const ref = useRef(); ////📤📤[CLICK OUTSIDE THE MODAL]📤📤 also check the <StyledModal/> from bellow were we connect it with the "handleClick" function by using this "ref" variable 👇

  // useEffect(
  //   function () {
  //     function handleClick(e) {
  //       if (ref.current && !ref.current.contains(e.target)) {
  //         // console.log("click outside");
  //         close();
  //       } //here we connect with the <StyledModal/> to create the outside click === "ref.current" represents the content, the "white modal windows" that displayed when the button is clicked in our App., so the DOM will check "contain" if there was selcted/trgetted the button that open the modal
  //     }

  //     document.addEventListener("click", handleClick, true);

  //     return () => document.removeEventListener("click", handleClick, true);
  //   },
  //   [close] ////📤📤[CLICK OUTSIDE THE MODAL]📤📤
  // );
  //📤📤[CLICK OUTSIDE THE MODAL]📤📤 also need to add the "ref={ref}" down in the <StyledModal/> to make this work when we click out the window
  ////////////////// THIS WAS RECREATED IN A CUSTOM HOOK (useOutsideClick.js)//////////////////////////

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
