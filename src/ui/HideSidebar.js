import { styled } from "styled-components";
import EyeIcon from "../assets/icon-eye.svg";
import { useState } from "react";

const StyledHideSidebar = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: left;
  padding-bottom: 4.8rem;
  padding-left: 3.1rem;
  cursor: pointer;
`;

const Icon = styled.img``;
const HideText = styled.div`
  color: var(--color-medium-grey);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

function HideSidebar({ setHide }) {
  function changeHide() {
    setHide((hide) => !hide);
  }
  return (
    <StyledHideSidebar onClick={changeHide}>
      <Icon src={EyeIcon} />
      <HideText>Hide Sidebar</HideText>
    </StyledHideSidebar>
  );
}

export default HideSidebar;
