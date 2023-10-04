import { styled } from "styled-components";
import Button from "./Button";
import Modal from "./Modal";
import AddBoard from "../features/boards/AddBoard";

const StyledEmptyBoard = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3.2rem;
`;

const EmptyText = styled.p`
  color: var(--color-medium-grey);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

function EmptyBoard({ boardData }) {
  return (
    <Modal>
      <StyledEmptyBoard>
        <EmptyText>
          This board is empty. Create a new column to get started.
        </EmptyText>
        <Modal.Open opens="edit-board">
          <ButtonContainer>
            <Button>+ Add New Column</Button>
          </ButtonContainer>
        </Modal.Open>
        <Modal.Window name="edit-board">
          <AddBoard boardToEdit={boardData} />
        </Modal.Window>
      </StyledEmptyBoard>
    </Modal>
  );
}

export default EmptyBoard;
