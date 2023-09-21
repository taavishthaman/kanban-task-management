import { styled } from "styled-components";
import LogoLight from "../assets/company-logo-light.svg";

const StyledLogo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 9.6rem;
  padding-left: 3.4rem;
`;

const StyledImg = styled.img``;

StyledImg.defaultProps = {
  src: LogoLight,
};

function Logo() {
  return (
    <StyledLogo>
      <StyledImg />
    </StyledLogo>
  );
}

export default Logo;
