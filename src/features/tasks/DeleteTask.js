import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormButton from "../../ui/FormButton";
import styled from "styled-components";
import useDeleteTask from "./useDeleteTask";

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

function DeleteTask({ taskData, onCloseModal }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { isDeleting, deleteTask } = useDeleteTask();
  function onSubmit() {
    deleteTask(
      {
        taskId: taskData._id,
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
          Are you sure you want to delete the `{taskData.title}` task and its
          subtasks? This action cannot be reversed.
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

export default DeleteTask;
