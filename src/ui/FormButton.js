import styled from "styled-components";
import { useSelector } from "react-redux";

const colorMap = {
  primary: {
    background: "var(--color-main-purple)",
    color: "var(--color-white)",
  },
  secondary: {
    background: "#635FC71A",
    color: "var(--color-main-purple)",
  },
};

const StyledButton = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
    if (props.darkMode && props.type === "secondary") {
      return "var(--color-white)";
    }
    return colorMap[props.type]["background"];
  }};
  color: ${(props) => {
    return colorMap[props.type]["color"];
  }};
  border-radius: 2rem;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.3rem;
  cursor: pointer;
`;

function FormButton({ type, children }) {
  const { darkMode } = useSelector((state) => state.app);
  return (
    <StyledButton type={type} darkMode={darkMode}>
      {children}
    </StyledButton>
  );
}

export default FormButton;
