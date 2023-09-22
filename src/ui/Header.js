import { styled } from "styled-components";
import Button from "./Button";
import Menus from "./Menus";
import LogoLight from "../assets/company-logo-light.svg";
import LogoDark from "../assets/company-logo-dark.svg";
import Modal from "./Modal";
import AddTask from "../features/tasks/AddTask";
import { useSelector } from "react-redux";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.darkMode ? "var(--color-dark-grey)" : "var(--color-white)"};
  height: 9.6rem;
  grid-column: 2 / -1;
  grid-row: 1 / 2;
  z-index: 10;
  border-bottom: ${(props) =>
    props.darkMode
      ? "1px solid var(--color-lines-dark)"
      : "1px solid var(--color-lines-light)"};
  padding: 0 2.4rem;
  justify-content: space-between;
  transition: width 0.2s;
  white-space: nowrap;
  width: ${(props) => {
    return props.hide === true ? "100vw" : "calc(100vw - 30rem)";
  }};
`;

const BoardName = styled.p`
  color: ${(props) =>
    props.darkMode ? "var(--color-white)" : "var(--color-black)"};
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
  border-right: ${(props) =>
    props.darkMode
      ? "1px solid var(--color-lines-dark)"
      : "1px solid var(--color-lines-light)"};
  height: 9.6rem;
`;

const StyledImg = styled.img``;

function Header({ hide }) {
  const { darkMode } = useSelector((state) => state.app);
  return (
    <StyledHeader hide={hide} darkMode={darkMode}>
      <HeaderLogoContainer>
        {hide && (
          <StyledHiddenLogo darkMode={darkMode}>
            <StyledImg src={darkMode ? LogoDark : LogoLight} />
          </StyledHiddenLogo>
        )}
        <BoardName darkMode={darkMode}>Platform Launch</BoardName>
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
        <Menus>
          <Menus.Menu>
            <Menus.Toggle id={"view"} />
            <Menus.List id={"view"}>
              <Menus.Button type="edit">Edit Task</Menus.Button>
              <Menus.Button type="delete">Delete Task</Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Menus>
      </TaskContainer>
    </StyledHeader>
  );
}

export default Header;
