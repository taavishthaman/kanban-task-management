import { styled } from "styled-components";
import Logo from "./Logo";
import Boards from "../features/boards/Boards";
import ThemeSwitcher from "./ThemeSwitcher";
import HideSidebar from "./HideSidebar";

const StyledSidebar = styled.aside`
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  grid-row: 1 / -1;
  height: 100vh;
  border: 1px solid var(--color-lines-light);
  justify-content: space-between;
`;

function Sidebar({
  setHide,
  boardData,
  selectedBoard,
  setSelectedBoard,
  selectedBoardData,
  setSelectedBoardData,
}) {
  return (
    <StyledSidebar>
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
        <ThemeSwitcher />
        <HideSidebar setHide={setHide} />
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
