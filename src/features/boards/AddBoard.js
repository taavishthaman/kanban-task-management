import styled from "styled-components";
import Form from "../../ui/Form";
import CrossIcon from "../../assets/icon-cross.svg";
import FormButton from "../../ui/FormButton";

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

function AddBoard() {
  return (
    <Form>
      <FormBody>
        <StyledTitle>Add New Board</StyledTitle>
        <ElementGroup>
          <SubTitle>Name</SubTitle>
          <TextField placeholder="e.g. Web Design" />
        </ElementGroup>
        <ElementGroup>
          <SubTitle>Columns</SubTitle>
          <SubtaskElement>
            <TextField defaultValue={"Todo"}></TextField>
            <Close src={CrossIcon} />
          </SubtaskElement>
          <SubtaskElement>
            <TextField defaultValue={"Doing"}></TextField>
            <Close src={CrossIcon} />
          </SubtaskElement>
          <FormButton type="secondary">+ Add New Column</FormButton>
        </ElementGroup>
        <ElementGroup>
          <FormButton type="primary">Create New Board</FormButton>
        </ElementGroup>
      </FormBody>
    </Form>
  );
}

export default AddBoard;
