import styled from "styled-components";
import LightIcon from "../assets/icon-light-theme.svg";
import DarkIcon from "../assets/icon-dark-theme.svg";
import Switch from "react-switch";
import { useState } from "react";

const StyledThemeSwitcher = styled.div`
  width: 25.1rem;
  margin-left: 2.4rem;
  margin-bottom: 2rem;
  height: 4.8rem;
  background-color: var(--color-light-grey-light);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-radius: 5px;
`;

const ThemeIcon = styled.img``;

function ThemeSwitcher() {
  function handleChange() {}

  return (
    <StyledThemeSwitcher>
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
      />
      <ThemeIcon src={DarkIcon} />
    </StyledThemeSwitcher>
  );
}

export default ThemeSwitcher;
