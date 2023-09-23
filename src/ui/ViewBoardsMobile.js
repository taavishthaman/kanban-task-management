import Boards from "../features/boards/Boards";
import CreateBoard from "../features/boards/CreateBoard";
import ThemeSwitcher from "./ThemeSwitcher";

function ViewBoardsMobile({
  boardData,
  selectedBoard,
  setSelectedBoard,
  selectedBoardData,
  setSelectedBoardData,
}) {
  return (
    <div>
      <Boards
        boardData={boardData}
        selectedBoard={selectedBoard}
        setSelectedBoard={setSelectedBoard}
        selectedBoardData={selectedBoardData}
        setSelectedBoardData={setSelectedBoardData}
      />
      <ThemeSwitcher />
    </div>
  );
}

export default ViewBoardsMobile;
