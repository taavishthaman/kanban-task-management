import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledAddButton = styled.div`
  height: 60rem;
  width: 28rem;
  border-radius: 6px;
  background: linear-gradient(
    180deg,
    #e9effa 0%,
    rgba(233, 239, 250, 0.5) 100%
  );
  background: ${(props) =>
    props.darkMode
      ? "linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.13) 100%)"
      : "linear-gradient(180deg,#e9effa 0%,rgba(233, 239, 250, 0.5) 100%)"};
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
  const { darkMode } = useSelector((state) => state.app);
  return (
    <StyledAddButton darkMode={darkMode}>
      <BtnText>+ New Column</BtnText>
    </StyledAddButton>
  );
}

export default NewColumn;
