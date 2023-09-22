import { useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import EmptyBoard from "./EmptyBoard";
import Toggler from "./Toggler";
import Tasks from "../features/tasks/Tasks";
import data from "../data/data";
import { useSelector } from "react-redux";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: ${(props) => {
    return props.hide === true ? "0 1fr" : "30rem 1fr";
  }};
  transition: grid-template-columns 0.2s ease;
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
`;

function AppLayout() {
  const [hide, setHide] = useState(false);
  const [boardData, setBoardData] = useState(data);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedBoardData, setSelectedBoardData] = useState(null);
  const { darkMode } = useSelector((state) => state.app);

  return (
    <>
      <StyledAppLayout hide={hide}>
        <Sidebar
          hide={hide}
          setHide={setHide}
          boardData={boardData}
          selectedBoard={selectedBoard}
          setSelectedBoard={setSelectedBoard}
          selectedBoardData={selectedBoardData}
          setSelectedBoardData={setSelectedBoardData}
        />
        <div>
          <Header hide={hide} />
          <MainContainer>
            <Main hide={hide} darkMode={darkMode}>
              <Tasks boardData={selectedBoardData} />
              {hide && <Toggler setHide={setHide} />}
            </Main>
          </MainContainer>
        </div>
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
