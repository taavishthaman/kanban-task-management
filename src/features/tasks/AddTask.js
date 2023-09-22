import styled from "styled-components";
import Form from "../../ui/Form";
import CrossIcon from "../../assets/icon-cross.svg";
import FormButton from "../../ui/FormButton";
import Selector from "../../ui/Selector";
import { useSelector } from "react-redux";

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
  border: 1px solid rgba(130, 143, 163, 0.25);
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
  border: 1px solid rgba(130, 143, 163, 0.25);
  color: var(--color-black);
  padding: 0.8rem 1.6rem;
  height: 11.2rem;
  font-size: 1.3rem;
  resize: none;
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
  }
`;

const SubtaskElement = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

const Close = styled.img`
  height: 1.48rem;
  width: 1.48rem;
  cursor: pointer;
`;

function AddTask() {
  const { darkMode } = useSelector((state) => state.app);
  return (
    <Form>
      <FormBody>
        <StyledTitle darkMode={darkMode}>Add New Task</StyledTitle>
        <ElementGroup>
          <SubTitle>Title</SubTitle>
          <TextField placeholder="e.g. Take coffee break" darkMode={darkMode} />
        </ElementGroup>
        <ElementGroup>
          <SubTitle>Description</SubTitle>
          <TextArea
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
            height={"4rem"}
            darkMode={darkMode}
          />
        </ElementGroup>
        <ElementGroup>
          <SubTitle>Subtasks</SubTitle>
          <SubtaskElement>
            <TextField
              placeholder="e.g. Make coffee"
              darkMode={darkMode}
            ></TextField>
            <Close src={CrossIcon} />
          </SubtaskElement>
          <SubtaskElement>
            <TextField
              placeholder="e.g. Drink coffee & smile"
              darkMode={darkMode}
            ></TextField>
            <Close src={CrossIcon} />
          </SubtaskElement>
          <FormButton type="secondary">+ Add New Subtask</FormButton>
        </ElementGroup>
        <ElementGroup>
          <SubTitle>Status</SubTitle>
          <Selector />
        </ElementGroup>
        <ElementGroup>
          <FormButton type="primary">Create Task</FormButton>
        </ElementGroup>
      </FormBody>
    </Form>
  );
}

export default AddTask;
