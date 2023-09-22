import styled from "styled-components";

const StyledAddButton = styled.div`
  height: 60rem;
  width: 28rem;
  border-radius: 6px;
  background: linear-gradient(
    180deg,
    #e9effa 0%,
    rgba(233, 239, 250, 0.5) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4.3rem;
  padding: 0 5.5rem;
  cursor: pointer;
`;

const BtnText = styled.div`
  color: var(--color-medium-grey);
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 17rem;
`;

function NewColumn() {
  return (
    <StyledAddButton>
      <BtnText>+ New Column</BtnText>
    </StyledAddButton>
  );
}

export default NewColumn;
