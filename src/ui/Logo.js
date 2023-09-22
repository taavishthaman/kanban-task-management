import { styled } from "styled-components";
import LogoLight from "../assets/company-logo-light.svg";
import LogoDark from "../assets/company-logo-dark.svg";
import { useSelector } from "react-redux";

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
  const { darkMode } = useSelector((state) => state.app);
  return (
    <StyledLogo>
      <StyledImg src={darkMode ? LogoDark : LogoLight} />
    </StyledLogo>
  );
}

export default Logo;
