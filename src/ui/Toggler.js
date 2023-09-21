import styled from "styled-components";
import TogglerIcon from "../assets/toggler.svg";

const StyledToggler = styled.img`
  position: absolute;
  left: 0;
  bottom: 12.8rem;
  cursor: pointer;
`;

function Toggler({ setHide }) {
  return (
    <StyledToggler
      src={TogglerIcon}
      onClick={() => {
        setHide(false);
      }}
    ></StyledToggler>
  );
}

export default Toggler;
