import { styled } from "styled-components";
import Button from "./Button";
import VerticalDots from "../assets/icon-vertical-ellipsis.svg";
import LogoLight from "../assets/company-logo-light.svg";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  height: 9.6rem;
  grid-column: 2 / -1;
  grid-row: 1 / 2;
  z-index: 10;
  border-bottom: 1px solid var(--color-lines-light);
  padding: 0 2.4rem;
  justify-content: space-between;
`;

const BoardName = styled.p`
  color: var(--color-black);
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

const Dots = styled.img`
  height: 2.2rem;
  cursor: pointer;
`;

const StyledHiddenLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  border-right: 1px solid #e4ebfa;
  height: 9.6rem;
`;

const StyledImg = styled.img``;

function Header({ hide }) {
  return (
    <StyledHeader>
      <HeaderLogoContainer>
        {hide && <LogoHidden />}
        <BoardName>Platform Launch</BoardName>
      </HeaderLogoContainer>
      <TaskContainer>
        <Button>+ Add New Task</Button>
        <Dots src={VerticalDots} />
      </TaskContainer>
    </StyledHeader>
  );
}

function LogoHidden() {
  return (
    <StyledHiddenLogo>
      <StyledImg src={LogoLight} />
    </StyledHiddenLogo>
  );
}

export default Header;
