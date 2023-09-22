import styled, { Textarea } from "styled-components";
import Form from "../../ui/Form";
import CrossIcon from "../../assets/icon-cross.svg";
import FormButton from "../../ui/FormButton";
import Select from "react-select";

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
  color: var(--color-black);
  font-size: 1.3rem;
  width: 100%;
  &:focus {
    outline: none;
    border-color: var(--color-main-purple);
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
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
  &:focus {
    outline: none;
    border-color: var(--color-main-purple);
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
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
  const options = [
    { value: "Todo", label: "Todo" },
    { value: "Doing", label: "Doing" },
    { value: "Done", label: "Done" },
  ];
  return (
    <Form>
      <FormBody>
        <StyledTitle>Add New Task</StyledTitle>
        <ElementGroup>
          <SubTitle>Title</SubTitle>
          <TextField placeholder="e.g. Take coffee break" />
        </ElementGroup>
        <ElementGroup>
          <SubTitle>Description</SubTitle>
          <TextArea
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
            height={"4rem"}
          />
        </ElementGroup>
        <ElementGroup>
          <SubTitle>Subtasks</SubTitle>
          <SubtaskElement>
            <TextField placeholder="e.g. Make coffee"></TextField>
            <Close src={CrossIcon} />
          </SubtaskElement>
          <SubtaskElement>
            <TextField placeholder="e.g. Drink coffee & smile"></TextField>
            <Close src={CrossIcon} />
          </SubtaskElement>
          <FormButton type="secondary">+ Add New Subtask</FormButton>
        </ElementGroup>
        <ElementGroup>
          <SubTitle>Status</SubTitle>
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                "&:hover": { borderColor: "#635FC7" },
                borderColor: "#E4EBFA",
                boxShadow: "none",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "23px",
              }),
              option: (styles, { isSelected }) => {
                return {
                  ...styles,
                  color: "var(--color-medium-grey)",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "23px",
                  backgroundColor: isSelected
                    ? "var(--color-light-grey-light)"
                    : "var(--color-white)",
                };
              },
              placeholder: (defaultStyles) => {
                return {
                  ...defaultStyles,
                  color: "rgba(0, 0, 0, 0.25)",
                };
              },
            }}
            options={options}
          />
        </ElementGroup>
        <ElementGroup>
          <FormButton type="primary">Create Task</FormButton>
        </ElementGroup>
      </FormBody>
    </Form>
  );
}

export default AddTask;
