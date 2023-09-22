import { styled } from "styled-components";
import Button from "./Button";
import VerticalDots from "../assets/icon-vertical-ellipsis.svg";
import LogoLight from "../assets/company-logo-light.svg";
import Modal from "./Modal";
import AddTask from "../features/tasks/AddTask";

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
  transition: width 0.2s;
  white-space: nowrap;
  width: ${(props) => {
    return props.hide === true ? "100vw" : "calc(100vw - 30rem)";
  }};
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
    <StyledHeader hide={hide}>
      <HeaderLogoContainer>
        {hide && <LogoHidden />}
        <BoardName>Platform Launch</BoardName>
      </HeaderLogoContainer>
      <TaskContainer>
        <Modal>
          <Modal.Open opens="add-task">
            <div>
              <Button>+ Add New Task</Button>
            </div>
          </Modal.Open>
          <Modal.Window name="add-task">
            <AddTask />
          </Modal.Window>
        </Modal>
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
