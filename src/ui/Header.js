import { styled } from "styled-components";
import Button from "./Button";
import Menus from "./Menus";
import LogoLight from "../assets/company-logo-light.svg";
import LogoDark from "../assets/company-logo-dark.svg";
import LogoMobile from "../assets/logo-mobile.svg";
import ChevronUp from "../assets/icon-chevron-up.svg";
import ChevronDown from "../assets/icon-chevron-down.svg";
import Modal from "./Modal";
import AddTask from "../features/tasks/AddTask";
import { useSelector } from "react-redux";
import { device, size } from "../styles/device";
import ViewBoardsMobile from "./ViewBoardsMobile";

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
  @media ${device.tablet} {
    width: ${(props) => {
      return props.hide === true ? "100vw" : "calc(100vw - 26rem)";
    }};
    height: 8rem;
  }

  @media ${device.mobile} {
    height: 6.4rem;
    padding: 0 1.6rem;
  }
`;

const BoardName = styled.p`
  color: ${(props) =>
    props.darkMode ? "var(--color-white)" : "var(--color-black)"};
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media ${device.tablet} {
    font-size: 2rem;
  }

  @media ${device.mobile} {
    font-size: 1.8rem;
  }
`;

const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  @media ${device.tablet} {
    gap: 2.4rem;
  }

  @media ${device.mobile} {
    gap: 1.2rem;
  }
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
  @media ${device.tablet} {
    height: 8rem;
  }
  @media ${device.mobile} {
    border: none;
    width: 4.6rem;
    height: 2.5rem;
  }
`;

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  @media ${device.mobile} {
    gap: 0rem;
  }
`;

const BoardToggler = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledImg = styled.img``;
const StyledChevron = styled.img`
  padding-bottom: 4px;
`;

function Header({
  hide,
  setHide,
  boardData,
  selectedBoard,
  setSelectedBoard,
  selectedBoardData,
  setSelectedBoardData,
}) {
  const { darkMode } = useSelector((state) => state.app);

  if (window.innerWidth <= size.mobile) {
    return (
      <StyledHeader darkMode={darkMode} hide={hide}>
        <HeaderLogoContainer>
          <StyledHiddenLogo darkMode={darkMode}>
            <StyledImg src={LogoMobile} />
          </StyledHiddenLogo>
          <Modal>
            <Modal.Open opens="view-boards">
              <BoardName darkMode={darkMode}>
                <BoardToggler>
                  Platform Launch
                  <div>
                    <StyledChevron src={ChevronUp} />
                  </div>
                </BoardToggler>
              </BoardName>
            </Modal.Open>
            <Modal.Window type="mobile" name="view-boards">
              <ViewBoardsMobile
                boardData={boardData}
                selectedBoard={selectedBoard}
                setSelectedBoard={setSelectedBoard}
                selectedBoardData={selectedBoardData}
                setSelectedBoardData={setSelectedBoardData}
              />
            </Modal.Window>
          </Modal>
        </HeaderLogoContainer>
        <TaskContainer>
          <Modal>
            <Modal.Open opens="add-task">
              <div>
                <Button type="mobile">+</Button>
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
