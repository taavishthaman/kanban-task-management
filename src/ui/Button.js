import styled from "styled-components";
import { device } from "../styles/device";

const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background-color: var(--color-main-purple);
  width: 16.4rem;
  height: 4.8rem;
  border-radius: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--color-white);
  height: ${(props) => (props.type === "mobile" ? "3.2rem" : "4.8rem")};
  width: ${(props) => (props.type === "mobile" ? "4.8rem" : "16.4rem")};
  opacity: ${(props) => (props.disabled === true ? "0.5" : "1")};
`;

function Button({ handleClick = null, children, type, disabled }) {
  console.log("Disabled Value ", disabled);
  return (
    <StyledButton
      onClick={disabled ? () => {} : handleClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
