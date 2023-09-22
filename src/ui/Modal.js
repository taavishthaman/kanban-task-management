import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useSelector } from "react-redux";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => {
    return props.darkMode === true
      ? "var(--color-dark-grey)"
      : "var(--color-white)";
  }};
  border-radius: 6px;
  padding: 3.2rem;
  transition: all 0.5s;
  width: 48rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-backdrop);
  z-index: 1000;
  transition: all 0.5s;
`;

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

function Window({ name, children }) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClick(close);
  const { darkMode } = useSelector((state) => state.app);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref} darkMode={darkMode}>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
