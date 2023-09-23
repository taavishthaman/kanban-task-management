import styled from "styled-components";
import { device } from "../styles/device";

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
  height: ${(props) => (props.type === "mobile" ? "3.2rem" : "4.8rem")};
  width: ${(props) => (props.type === "mobile" ? "4.8rem" : "16.4rem")};
`;

function Button({ handleClick = null, children, type }) {
  return (
    <StyledButton onClick={handleClick} type={type}>
      {children}
    </StyledButton>
  );
}

export default Button;
