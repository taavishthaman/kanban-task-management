import styled from "styled-components";
import LightIcon from "../assets/icon-light-theme.svg";
import DarkIcon from "../assets/icon-dark-theme.svg";
import Switch from "react-switch";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../features/appSlice";

const StyledThemeSwitcher = styled.div`
  width: 25.1rem;
  margin-left: 2.4rem;
  margin-bottom: 2rem;
  height: 4.8rem;
  background-color: ${(props) =>
    props.darkMode
      ? "var(--color-very-dark-grey-dark)"
      : "var(--color-light-grey-light)"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-radius: 5px;
`;

const ThemeIcon = styled.img``;

function ThemeSwitcher() {
  const { darkMode } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  function handleChange() {
    dispatch(changeMode(!darkMode));
  }

  return (
    <StyledThemeSwitcher darkMode={darkMode}>
      <ThemeIcon src={LightIcon} />
      <Switch
        uncheckedIcon={false}
        checkedIcon={false}
        offColor="#635FC7"
        onColor="#635FC7"
        handleDiameter={14}
        height={20}
        width={40}
        onChange={handleChange}
        checked={darkMode}
      />
      <ThemeIcon src={DarkIcon} />
    </StyledThemeSwitcher>
  );
}

export default ThemeSwitcher;
