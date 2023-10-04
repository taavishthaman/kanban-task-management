import { styled } from "styled-components";
import SelectBoard from "../../ui/SelectBoard";
import CreateBoard from "./CreateBoard";
import { device } from "../../styles/device";
import useBoards from "./useBoards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setBoards, setSelectedBoard } from "./boardSlice";

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

function Boards() {
  const { isLoading, boards: boardData } = useBoards();
  const { selectedBoard } = useSelector((state) => state.board);
  const dispatch = useDispatch();
  useEffect(() => {
    if (boardData?.data?.data && boardData?.data?.data.length > 0) {
      dispatch(setBoards(boardData.data.data));
      if (!selectedBoard) {
        dispatch(setSelectedBoard(boardData.data.data[0].name));
      } else {
        if (boardData.data.data.find((board) => board.name === selectedBoard)) {
          dispatch(setSelectedBoard(selectedBoard));
        } else {
          dispatch(setSelectedBoard(boardData.data.data[0].name));
        }
      }
    } else {
      dispatch(setBoards([]));
      dispatch(setSelectedBoard(""));
    }
  }, [boardData, dispatch, selectedBoard]);

  if (isLoading) {
    return <></>;
  }

  return (
    <StyledBoards>
      <BoardsStatus>All Boards ({boardData.data.data.length})</BoardsStatus>
      <AllBoards>
        {boardData &&
          boardData.data.data.map((boards) => (
            <SelectBoard name={boards.name} boardData={boardData} />
          ))}
        <CreateBoard />
      </AllBoards>
    </StyledBoards>
  );
}

export default Boards;
