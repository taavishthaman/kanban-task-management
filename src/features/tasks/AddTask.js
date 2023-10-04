import { useForm } from "react-hook-form";
import styled from "styled-components";
import Form from "../../ui/Form";
import CrossIcon from "../../assets/icon-cross.svg";
import FormButton from "../../ui/FormButton";
import Selector from "../../ui/Selector";
import { useSelector } from "react-redux";
import { useCreateTask } from "./useCreateTask";
import { useState, useEffect } from "react";
import { useEditTask } from "./useEditTask";

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
  color: ${(props) => {
    return props.darkMode === true
      ? "var(--color-white)"
      : "var(--color-black)";
  }};
`;

const ElementGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

const SubTitle = styled.div`
  color: var(--color-medium-grey);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TextField = styled.input.attrs({
  type: "input",
})`
  border-radius: 4px;
  border: ${(props) => {
    return props.error
      ? "1px solid var(--color-red)"
      : "1px solid rgba(130, 143, 163, 0.25)";
  }};
  height: 4rem;
  padding: 0.8rem 1.6rem;
  background-color: ${(props) => {
    return props.darkMode === true
      ? "var(--color-dark-grey)"
      : "var(--color-white)";
  }};
  color: ${(props) => {
    return props.darkMode === true
      ? "var(--color-white)"
      : "var(--color-black)";
  }};

  font-size: 1.3rem;
  width: 100%;
  &:focus {
    outline: none;
    border-color: var(--color-main-purple);
  }
  &::placeholder {
    color: ${(props) => {
      return props.darkMode === true
        ? "rgba(255, 255, 255, 0.25)"
        : "rgba(0, 0, 0, 0.25)";
    }};
  }
`;

const TextArea = styled.textarea`
  border-radius: 4px;
  border: "1px solid rgba(130, 143, 163, 0.25)";
  color: var(--color-black);
  padding: 0.8rem 1.6rem;
  height: 11.2rem;
  font-size: 1.3rem;
  resize: none;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: ${(props) => {
    return props.darkMode === true
      ? "var(--color-white)"
      : "var(--color-black)";
  }};
  background-color: ${(props) => {
    return props.darkMode === true
      ? "var(--color-dark-grey)"
      : "var(--color-white)";
  }};
  &:focus {
    outline: none;
    border-color: var(--color-main-purple);
  }
  &::placeholder {
    color: ${(props) => {
      return props.darkMode === true
        ? "rgba(255, 255, 255, 0.25)"
        : "rgba(0, 0, 0, 0.25)";
    }};
    font-family: "Plus Jakarta Sans", sans-serif;
  }
`;

const ErrorMessageMain = styled.p`
  color: var(--color-red);
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.3rem;
  position: absolute;
  right: 1.6rem;
  top: 3rem;
`;

const ErrorMessage = styled.p`
  color: var(--color-red);
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.3rem;
  position: absolute;
  right: 4.2rem;
  top: 0.9rem;
`;

const SubtaskElement = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

const SubtaskContainer = styled.div`
  position: relative;
`;

const Close = styled.img`
  height: 1.48rem;
  width: 1.48rem;
  cursor: pointer;
`;

function AddTask({ taskToEdit = {}, onCloseModal }) {
  const { _id: taskId, ...editValues } = taskToEdit;

  const { darkMode } = useSelector((state) => state.app);
  const isEditSession = Boolean(taskId);

  const { isCreating, createTask } = useCreateTask();
  const { isEditing, editTask } = useEditTask();

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  console.log("Edit Values ", editValues);

  const [subtasks, setSubtasks] = useState(() => {
    return isEditSession
      ? editValues.subtasks.map((subtask, index) => {
          return {
            ...subtask,
            key: index,
            placeholder: "e.g. My new subtask",
          };
        })
      : [
          { placeholder: "e.g. Make coffee", key: 0 },
          { placeholder: "e.g. Drink coffee & smile", key: 1 },
        ];
  });

  const { selectedBoard, boards } = useSelector((state) => state.board);
  const [selectorOptions, setSelectorOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [defaultOption, setDefaultOption] = useState(null);

  useEffect(() => {
    if (selectedBoard) {
      const columnOptions = boards
        .filter((board) => board.name === selectedBoard)
        .at(0)
        .columns.map((column) => {
          return {
            label: column.name,
            value: column.name,
            id: column._id,
          };
        });

      setSelectorOptions(columnOptions);
      setSelectedOption(columnOptions[0]);
      setDefaultOption(
        columnOptions.filter((option) => option.id === editValues.columnId)
      );
    }
  }, [boards, editValues.columnId, selectedBoard]);

  function onSubmit(data) {
    if (isEditSession) {
      const editedTaskData = {
        title: data.title,
        description: data.description,
        taskId,
        columnId: selectedOption.id,
      };

      if (subtasks && subtasks.length > 0) {
        const subtaskList = subtasks.map((subtask) => {
          const subObj = {
            name: subtask.name,
          };
          if (subtask._id) {
            subObj["id"] = subtask._id;
          }

          return subObj;
        });
        editedTaskData.subtasks = subtaskList;
      }

      editTask(editedTaskData, {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      });
    } else {
      const taskData = {
        title: data.title,
        status: selectedOption.value,
        parentId: selectedOption.id,
        columnId: selectedOption.id,
      };

      delete data.title;
      if (data.description) {
        taskData.description = data.description;
        delete data.description;
      }

      if (subtasks && subtasks.length > 0) {
        const subtaskList = subtasks.map((subtask) => subtask.name);
        taskData.subtasks = subtaskList;
      }

      createTask(taskData, {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  function addSubtask() {
    setSubtasks((subtasks) => {
      return [
        ...subtasks,
        { placeholder: "e.g. My new subtask", key: subtasks.length },
      ];
    });
  }

  function onError(errors) {
    console.log("Errors ", errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormBody>
        <StyledTitle darkMode={darkMode}>
          {isEditSession ? "Edit Task" : "Add New Task"}
        </StyledTitle>
        <ElementGroup>
          <SubTitle>Title</SubTitle>
          <TextField
            placeholder="e.g. Take coffee break"
            darkMode={darkMode}
            type="text"
            id="title"
            disabled={isCreating}
            {...register("title", {
              required: "Can't be empty!",
            })}
            error={errors?.title?.message}
          />
          {errors?.title?.message && (
            <ErrorMessageMain>{errors?.title?.message}</ErrorMessageMain>
          )}
        </ElementGroup>
        <ElementGroup>
          <SubTitle>Description</SubTitle>
          <TextArea
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
            height={"4rem"}
            darkMode={darkMode}
            {...register("description")}
          />
        </ElementGroup>
        <ElementGroup>
          <SubTitle>Subtasks</SubTitle>
          {subtasks.map((subtask, index) => (
            <Subtask
              index={subtask.key}
              darkMode={darkMode}
              placeholder={subtask.placeholder}
              subtasks={subtasks}
              setSubtasks={setSubtasks}
              isCreating={isCreating}
              register={register}
              isEditSession={isEditSession}
              error={errors[`subtask-${index}`]?.message}
            />
          ))}
          <FormButton variation="secondary" type="button" onClick={addSubtask}>
            + Add New Subtask
          </FormButton>
        </ElementGroup>
        <ElementGroup>
          <SubTitle>Status</SubTitle>
          <Selector
            options={selectorOptions}
            register={register}
            isEditSession={isEditSession}
            onChangeHandler={setSelectedOption}
            defaultValue={defaultOption}
          />
        </ElementGroup>
        <ElementGroup>
          <FormButton variation="primary">
            {isEditSession ? "Save Changes" : "Create Task"}
          </FormButton>
        </ElementGroup>
      </FormBody>
    </Form>
  );
}

function Subtask({
  index,
  darkMode,
  placeholder,
  setSubtasks,
  subtasks,
  isCreating,
  register,
  isEditSession,
  error,
}) {
  function deleteSubtask() {
    setSubtasks((subtasks) => subtasks.filter((sub, i) => sub.key !== index));
  }

  function onChangeHandler(e) {
    setSubtasks((subtasks) =>
      subtasks.map((subtask, i) => {
        if (i === index) {
          subtask.name = e.target.value;
        }
        return subtask;
      })
    );
  }

  return (
    <SubtaskContainer>
      <SubtaskElement>
        <TextField
          index={index}
          placeholder={placeholder}
          darkMode={darkMode}
          disabled={isCreating}
          {...register(`subtask-${index}`, {
            required: `Subtask-${index} Can't be empty!`,
          })}
          error={error}
          onChange={(e) => onChangeHandler(e)}
          //Fix this line
          defaultValue={isEditSession ? subtasks[index]?.name : ""}
        ></TextField>
        <Close src={CrossIcon} onClick={deleteSubtask} />
      </SubtaskElement>
      {error && <ErrorMessage>Can't be empty!</ErrorMessage>}
    </SubtaskContainer>
  );
}

export default AddTask;
