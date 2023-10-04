import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Form from "../../ui/Form";
import styled from "styled-components";
import StyledCheckbox from "../../ui/StyledCheckbox";
import Menus from "../../ui/Menus";
import { useSelector } from "react-redux";
import Selector from "../../ui/Selector";
import Modal from "../../ui/Modal";
import AddTask from "./AddTask";
import DeleteTask from "./DeleteTask";
import { useSetSubtaskStatus } from "./useSetSubtaskStatus";

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const StyledDescription = styled.div`
  color: var(--color-medium-grey);
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.3rem;
`;

const SubtasksContainer = styled.div``;

const SubHeading = styled.div`
  color: var(--color-medium-grey);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Subtasks = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Subtask = styled.div`
  border-radius: 4px;
  /* background-color: var(--color-light-grey-light); */
  background-color: ${(props) => {
    return props.darkMode === true
      ? "var(--color-very-dark-grey-dark)"
      : "var(--color-light-grey-light)";
  }};
  min-height: 4rem;
  display: flex;
  align-items: center;
  padding: 1.2rem;
  color: ${(props) => {
    return props.darkMode === true
      ? "var(--color-white)"
      : "var(--color-black)";
  }};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  gap: 1.6rem;
`;

const SelectDiv = styled.div`
  margin-top: 8px;
`;

function ViewTask({ taskData }) {
  const { title, description, subtasks } = taskData;

  const { darkMode } = useSelector((state) => state.app);
  const { selectedBoard, boards } = useSelector((state) => state.board);
  const [selectorOptions, setSelectorOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [defaultOption, setDefaultOption] = useState(null);
  const { isSetting, setSubtaskStatus } = useSetSubtaskStatus();

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
        columnOptions.filter((option) => option.id === taskData.columnId)
      );
    }
  }, [boards, selectedBoard, taskData.columnId]);

  function onChangeHandler(view, event, subtask) {
    setSubtaskStatus(
      {
        subtaskId: subtask._id,
        completed: view,
      },
      {
        onSuccess: (data) => {},
      }
    );
  }

  return (
    <Modal>
      <Form>
        <FormBody>
          <StyledHeader>
            <StyledTitle darkMode={darkMode}>{title}</StyledTitle>
            <Modal.Window name="edit-task">
              <AddTask taskToEdit={taskData} />
            </Modal.Window>
            <Modal.Window name="delete-task">
              <DeleteTask taskData={taskData} />
            </Modal.Window>
            <Menus>
              <Menus.Menu>
                <Menus.Toggle id={"view"} />
                <Menus.List id={"view"}>
                  <Modal.Open opens="edit-task">
                    <Menus.Button variation="edit">Edit Task</Menus.Button>
                  </Modal.Open>
                  <Modal.Open opens="delete-task">
                    <Menus.Button variation="delete">Delete Task</Menus.Button>
                  </Modal.Open>
                </Menus.List>
              </Menus.Menu>
            </Menus>
          </StyledHeader>
          {description && <StyledDescription>{description}</StyledDescription>}
          {subtasks && (
            <SubtasksContainer>
              <SubHeading>
                Subtasks ({subtasks.filter((task) => task.completed).length} of{" "}
                {subtasks.length})
              </SubHeading>
              <Subtasks>
                {subtasks.map((subtask) => (
                  <Subtask darkMode={darkMode}>
                    <StyledCheckbox
                      checked={subtask.completed}
                      subtask={subtask}
                      onChangeHandler={onChangeHandler}
                    />
                    {subtask.name}
                  </Subtask>
                ))}
              </Subtasks>
            </SubtasksContainer>
          )}
          <div>
            <SubHeading>Current Status</SubHeading>
            <SelectDiv>
              <Selector
                options={selectorOptions}
                onChangeHandler={setSelectedOption}
                defaultValue={defaultOption}
                disabled={true}
              />
            </SelectDiv>
          </div>
        </FormBody>
      </Form>
    </Modal>
  );
}

export default ViewTask;
