import styled from "styled-components";
import TogglerIcon from "../assets/toggler.svg";
import { device } from "../styles/device";

const StyledToggler = styled.img`
  position: absolute;
  left: 0;
  bottom: 3.2rem;
  cursor: pointer;
  @media ${device.mobile} {
    display: none;
  }
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
