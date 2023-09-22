import { styled } from "styled-components";
import Logo from "./Logo";
import Boards from "../features/boards/Boards";
import ThemeSwitcher from "./ThemeSwitcher";
import HideSidebar from "./HideSidebar";
import { useSelector } from "react-redux";

const StyledSidebar = styled.aside`
  background-color: ${(props) =>
    props.darkMode ? "var(--color-dark-grey)" : "var(--color-white)"};
  display: flex;
  flex-direction: column;
  grid-row: 1 / -1;
  height: 100vh;
  border: ${(props) =>
    props.darkMode
      ? "1px solid var(--color-lines-dark)"
      : "1px solid var(--color-lines-light)"};
  justify-content: space-between;
`;

function Sidebar({
  hide,
  setHide,
  boardData,
  selectedBoard,
  setSelectedBoard,
  selectedBoardData,
  setSelectedBoardData,
}) {
  const { darkMode } = useSelector((state) => state.app);

  return (
    <StyledSidebar darkMode={darkMode}>
      <div>
        <Logo />
        <Boards
          boardData={boardData}
          selectedBoard={selectedBoard}
          setSelectedBoard={setSelectedBoard}
          selectedBoardData={selectedBoardData}
          setSelectedBoardData={setSelectedBoardData}
        />
      </div>
      <div>
        {!hide && <ThemeSwitcher />}
        <HideSidebar setHide={setHide} />
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
