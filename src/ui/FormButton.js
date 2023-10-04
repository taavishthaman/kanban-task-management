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
  delete: {
    background: "var(--color-red)",
    color: "var(--color-white)",
  },
};

const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
    if (props.darkMode && props.variation === "secondary") {
      return "var(--color-white)";
    }
    return colorMap[props.variation]["background"];
  }};
  color: ${(props) => {
    return colorMap[props.variation]["color"];
  }};
  border-radius: 2rem;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.3rem;
`;

function FormButton({ variation, type, onClick, children }) {
  const { darkMode } = useSelector((state) => state.app);
  return (
    <StyledButton
      variation={variation}
      type={type}
      onClick={onClick}
      darkMode={darkMode}
    >
      {children}
    </StyledButton>
  );
}

export default FormButton;
