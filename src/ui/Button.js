import styled from "styled-components";

const StyledButton = styled.div`
  background-color: var(--color-main-purple);
  width: 16.4rem;
  height: 4.8rem;
  border-radius: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--color-white);
  cursor: pointer;
`;

function Button({ handleClick = null, children }) {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
}

export default Button;
