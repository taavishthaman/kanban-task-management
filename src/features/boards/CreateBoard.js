import styled from "styled-components";
import IconAddBoard from "../../assets/icon-add-board.svg";

const StyledExportButton = styled.div`
  width: 27.6rem;
  height: 4.8rem;
  display: flex;
  gap: 1.6rem;
  padding-left: 3.2rem;
  align-items: center;
  cursor: pointer;
`;

const CreateBoardText = styled.p`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: var(--color-main-purple);
`;

const BoardIconImg = styled.img``;

function CreateBoard() {
  return (
    <StyledExportButton>
      <BoardIconImg src={IconAddBoard} />
      <CreateBoardText>+ Create New Board</CreateBoardText>
    </StyledExportButton>
  );
}

export default CreateBoard;
