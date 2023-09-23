import { styled } from "styled-components";
import SelectBoard from "../../ui/SelectBoard";
import CreateBoard from "./CreateBoard";
import { device } from "../../styles/device";

const StyledBoards = styled.div``;
const BoardsStatus = styled.div`
  color: var(--color-medium-grey);
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 2.4px;
  line-height: normal;
  padding-left: 3.2rem;
  padding-top: 0.5rem;
  @media ${device.tablet} {
    padding-left: 2.4rem;
  }

  @media ${device.mobile} {
    padding: 1.6rem 2.4rem;
  }
`;

const AllBoards = styled.div`
  padding-top: 1.9rem;
`;

function Boards({
  boardData,
  selectedBoard,
  setSelectedBoard,
  selectedBoardData,
  setSelectedBoardData,
}) {
  console.log("Board Data ", boardData);
  return (
    <StyledBoards>
      <BoardsStatus>All Boards (3)</BoardsStatus>
      <AllBoards>
        {boardData &&
          boardData.boards.map((boards) => (
            <SelectBoard
              name={boards.name}
              selected={selectedBoard === boards.name}
              setSelectedBoard={setSelectedBoard}
              setSelectedBoardData={setSelectedBoardData}
              boardData={boardData}
            />
          ))}
        <CreateBoard />
      </AllBoards>
    </StyledBoards>
  );
}

export default Boards;
