import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import styled from "styled-components";
import StyledCheckbox from "../../ui/StyledCheckbox";
import Menus from "../../ui/Menus";
import { useSelector } from "react-redux";
import Selector from "../../ui/Selector";

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

  return (
    <Form>
      <FormBody>
        <StyledHeader>
          <StyledTitle darkMode={darkMode}>{title}</StyledTitle>
          <Menus>
            <Menus.Menu>
              <Menus.Toggle id={"view"} />
              <Menus.List id={"view"}>
                <Menus.Button type="edit">Edit Task</Menus.Button>
                <Menus.Button type="delete">Delete Task</Menus.Button>
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
                  <StyledCheckbox />
                  {subtask.name}
                </Subtask>
              ))}
            </Subtasks>
          </SubtasksContainer>
        )}
        <div>
          <SubHeading>Current Status</SubHeading>
          <SelectDiv>
            <Selector />
          </SelectDiv>
        </div>
      </FormBody>
    </Form>
  );
}

export default ViewTask;
