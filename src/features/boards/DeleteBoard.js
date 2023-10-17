import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormButton from "../../ui/FormButton";
import styled from "styled-components";
import useDeleteBoard from "./useDeleteBoard";

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledTitle = styled.div`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 38.7rem;
  color: var(--color-red);
`;

const Description = styled.div`
  color: var(--color-medium-grey);
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
`;

function DeleteBoard({ boardData, onCloseModal }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { isDeleting, deleteBoard } = useDeleteBoard();

  function onSubmit() {
    deleteBoard(
      {
        boardId: boardData._id,
      },
      {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormBody>
        <StyledTitle>Delete this board?</StyledTitle>
        <Description>
          Are you sure you want to delete the `{boardData.name}` board? This
          action will remove all columns and tasks and cannot be reversed.
        </Description>
        <ButtonContainer>
          <FormButton variation="delete">Delete</FormButton>
          <FormButton
            variation="secondary"
            type="button"
            onClick={onCloseModal}
          >
            Cancel
          </FormButton>
        </ButtonContainer>
      </FormBody>
    </Form>
  );
}

export default DeleteBoard;
