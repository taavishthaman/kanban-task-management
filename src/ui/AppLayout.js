import { useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import EmptyBoard from "./EmptyBoard";
import Toggler from "./Toggler";
import Tasks from "../features/tasks/Tasks";
import data from "../data/data";

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
  background-color: var(--color-light-grey-light);
  padding: 2.4rem;
  overflow-x: scroll;
`;

function AppLayout() {
  const [hide, setHide] = useState(false);
  const [boardData, setBoardData] = useState(data);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedBoardData, setSelectedBoardData] = useState(null);

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
            <Main hide={hide}>
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
