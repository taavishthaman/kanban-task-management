import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useSelector } from "react-redux";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;
  box-shadow: 0px 10px 20px 0px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
  display: block;
  list-style-type: none;
  background-color: ${(props) => {
    return props.darkMode === true
      ? "var(--color-very-dark-grey-dark)"
      : "var(--color-white)";
  }};

  z-index: 10;
  width: 19.2rem;
  height: 9.4rem;
  overflow: hidden;
  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.6rem 1.6rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;

  color: ${(props) => {
    return props.variation === "edit"
      ? "var(--color-medium-grey)"
      : "var(--color-red)";
  }};

  &:hover {
    background-color: ${(props) => {
      return props.darkMode === true
        ? "var(--color-dark-grey)"
        : "var(--color-light-grey-light);";
    }};
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id, variation }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    const rect = e.target.closest("button").getBoundingClientRect();

    const pos = variation === "header" ? { x: 10, y: 80 } : { x: -50, y: 80 };
    setPosition(pos);
    e.preventDefault();

    openId === "" || openId !== id ? open(id) : close();
  }
  return (
    <StyledToggle onClick={(e) => handleClick(e)}>
      <HiEllipsisVertical color="#828FA3" />
    </StyledToggle>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const { ref } = useOutsideClick(close);
  const { darkMode } = useSelector((state) => state.app);

  if (openId !== id) return null;

  return (
    <StyledList position={position} ref={ref} darkMode={darkMode} id="menus">
      {children}
    </StyledList>
  );
}

function Button({ children, icon, onClick, variation }) {
  const { close } = useContext(MenusContext);
  const { darkMode } = useSelector((state) => state.app);

  function handleClick(e) {
    onClick?.();
    close();
  }

  return (
    <li>
      <StyledButton
        onClick={(e) => handleClick(e)}
        variation={variation}
        darkMode={darkMode}
        type={"button"}
      >
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
