import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import styled from "styled-components";
import VerticalDots from "../../assets/icon-vertical-ellipsis.svg";
import Select from "react-select";
import StyledCheckbox from "../../ui/StyledCheckbox";

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
`;

const Dots = styled.img`
  height: 2rem;
  cursor: pointer;
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
  background-color: var(--color-light-grey-light);
  min-height: 4rem;
  display: flex;
  align-items: center;
  padding: 1.2rem;
  color: var(--color-black);
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
  const options = [
    { value: "Todo", label: "Todo" },
    { value: "Doing", label: "Doing" },
    { value: "Done", label: "Done" },
  ];
  return (
    <Form>
      <FormBody>
        <StyledHeader>
          <StyledTitle>{title}</StyledTitle>
          <Dots src={VerticalDots} />
        </StyledHeader>
        {description && <StyledDescription>{description}</StyledDescription>}
        {subtasks && (
          <SubtasksContainer>
            <SubHeading>Subtasks (2 of 3)</SubHeading>
            <Subtasks>
              {subtasks.map((subtask) => (
                <Subtask>
                  <StyledCheckbox />
                  {subtask.title}
                </Subtask>
              ))}
            </Subtasks>
          </SubtasksContainer>
        )}
        <div>
          <SubHeading>Current Status</SubHeading>
          <SelectDiv>
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
          </SelectDiv>
        </div>
      </FormBody>
    </Form>
  );
}

export default ViewTask;
