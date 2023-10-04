import styled from "styled-components";
import Form from "../../ui/Form";
import CrossIcon from "../../assets/icon-cross.svg";
import FormButton from "../../ui/FormButton";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useCreateBoard from "./useCreateBoard";
import useEditBoard from "./useEditBoard";

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

const ColumnElement = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

const Close = styled.img`
  height: 1.48rem;
  width: 1.48rem;
  cursor: pointer;
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

const ColumnContainer = styled.div`
  position: relative;
`;

function AddBoard({ boardToEdit = {}, onCloseModal }) {
  const { _id: boardId, ...editValues } = boardToEdit;
  const isEditSession = Boolean(boardId);

  const { darkMode } = useSelector((state) => state.app);
  const [columns, setColumns] = useState(() => {
    return isEditSession
      ? editValues.columns.map((column, i) => {
          return {
            title: column.name,
            id: column._id,
            key: i,
          };
        })
      : [
          { title: "Todo", key: 0 },
          { title: "Doing", key: 1 },
        ];
  });

  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;

  const { isCreating, createBoard } = useCreateBoard();
  const { isEditing, editBoard } = useEditBoard();

  function addColumn() {
    setColumns((columns) => [
      ...columns,
      { title: "New", key: columns.length },
    ]);
  }

  function onSubmit(data) {
    if (isEditSession) {
      const editedData = {
        columns,
        boardId,
        name: data.title,
      };

      editBoard(editedData, {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      });
    } else {
      const { title } = data;
      delete data.title;
      const columnNames = columns.map((column) => column.title);
      console.log("Column Names ", columnNames);
      createBoard(
        {
          name: title,
          columns: columnNames,
        },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  }

  function onError(errors) {
    console.log("Errors ", errors);
  }

  function deleteColumn(index) {
    setColumns((columns) => {
      const updatedColumns = columns.filter((col, i) => col.key !== index);
      return updatedColumns;
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormBody>
        <StyledTitle darkMode={darkMode}>
          {isEditSession ? "Edit Board" : "Add New Board"}
        </StyledTitle>
        <ElementGroup>
          <SubTitle>Name</SubTitle>
          <TextField
            placeholder="e.g. Web Design"
            defaultValue={isEditSession ? editValues.name : ""}
            darkMode={darkMode}
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
          <SubTitle>Columns</SubTitle>
          {columns.map((column, index) => (
            <Column
              title={column.title}
              darkMode={darkMode}
              setColumns={setColumns}
              index={column.key}
              register={register}
              isEditSession={isEditSession}
              error={errors[`column-${index}`]?.message}
              deleteColumn={deleteColumn}
              key={column.key}
            />
          ))}
          <FormButton variation="secondary" type="button" onClick={addColumn}>
            + Add New Column
          </FormButton>
        </ElementGroup>
        <ElementGroup>
          <FormButton variation="primary">
            {isEditSession ? "Save Changes" : "Create New Board"}
          </FormButton>
        </ElementGroup>
      </FormBody>
    </Form>
  );
}

function Column({
  title,
  darkMode,
  setColumns,
  index,
  register,
  isEditSession,
  error,
  deleteColumn,
}) {
  function editColumn(e) {
    const newValue = e.target.value;
    setColumns((columns) => {
      const columnsCopy = columns;
      columnsCopy[index].title = newValue;
      return columnsCopy;
    });
  }

  return (
    <ColumnContainer>
      <ColumnElement>
        <TextField
          index={index}
          defaultValue={title}
          darkMode={darkMode}
          {...register(`column-${index}`, {
            required: `Column-${index} Can't be empty!`,
          })}
          onChange={editColumn}
          error={error}
        ></TextField>
        <Close src={CrossIcon} onClick={() => deleteColumn(index)} />
        {error && <ErrorMessage>Can't be empty!</ErrorMessage>}
      </ColumnElement>
    </ColumnContainer>
  );
}

export default AddBoard;
