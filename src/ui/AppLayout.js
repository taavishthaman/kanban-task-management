import { useEffect, useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Tasks from "../features/tasks/Tasks";
import { useSelector } from "react-redux";
import Toggler from "./Toggler";
import { size, device } from "../styles/device";
import Modal from "./Modal";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: ${(props) => {
    return props.hide === true ? "0 1fr" : "30rem 1fr";
  }};
  transition: grid-template-columns 0.2s ease;
  @media ${device.tablet} {
    grid-template-columns: ${(props) => {
      return props.hide === true ? "0 1fr" : "26rem 1fr";
    }};
  }

  @media ${device.mobile} {
    grid-template-columns: 0 1fr;
  }
`;

const MainContainer = styled.div``;

const Main = styled.main`
  background-color: blue;
  width: ${(props) => {
    return props.hide === true ? "100vw" : "calc(100vw - 30rem)";
  }};
  transition: width 0.2s ease;
  background-color: ${(props) => {
    return props.darkMode === true
      ? "var(--color-very-dark-grey-dark)"
      : "var(--color-light-grey-light)";
  }};
  padding: 2.4rem;
  overflow-x: scroll;
  height: calc(100vh - 9.6rem);
  position: relative;

  /* Tablet */
  @media ${device.tablet} {
    width: ${(props) => {
      return props.hide === true ? "100vw" : "calc(100vw - 26rem)";
    }};
    height: calc(100vh - 6.4rem);
  }
`;

function AppLayout() {
  const [hide, setHide] = useState(false);
  const { darkMode } = useSelector((state) => state.app);

  useEffect(() => {
    if (window.innerWidth <= size.mobile) {
      setHide(true);
    }
  }, []);

  return (
    <>
      <StyledAppLayout hide={hide}>
        <Sidebar hide={hide} setHide={setHide} />
        <div>
          <Header hide={hide} setHide={setHide} />
          <MainContainer>
            <Main hide={hide} darkMode={darkMode}>
              <Tasks />
              {hide && <Toggler setHide={setHide} />}
            </Main>
          </MainContainer>
        </div>
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
