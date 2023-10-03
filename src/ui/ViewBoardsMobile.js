import Boards from "../features/boards/Boards";
import CreateBoard from "../features/boards/CreateBoard";
import ThemeSwitcher from "./ThemeSwitcher";

function ViewBoardsMobile({}) {
  return (
    <div>
      <Boards />
      <ThemeSwitcher />
    </div>
  );
}

export default ViewBoardsMobile;
