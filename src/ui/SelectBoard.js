import { styled, css } from "styled-components";
import IconBoard from "../assets/icon-board.svg";
import IconBoardSelected from "../assets/icon-board-selected.svg";
import { useSelector } from "react-redux";

const variationsBackground = {
  unselected: {
    light: css`
      background-color: var(--color-white);
    `,

    dark: css`
      background-color: var(--color-dark-grey);
    `,
  },
  selected: {
    light: css`
      background-color: var(--color-main-purple);
    `,

    dark: css`
      background-color: var(--color-main-purple);
    `,
  },
};

const variationsColor = {
  unselected: css`
    color: var(--color-medium-grey);
  `,
  selected: css`
    color: var(--color-white);
  `,
};

const StyledSelectBoard = styled.div`
  width: 27.6rem;
  height: 4.8rem;
  border-radius: 0px 100px 100px 0px;
  display: flex;
  gap: 1.6rem;
  padding-left: 3.2rem;
  align-items: center;
  ${(props) => {
    const mode = props.darkMode ? "dark" : "light";
    return variationsBackground[props.variation][mode];
  }}
  cursor: pointer;
`;

const BoardName = styled.p`
  ${(props) => {
    return variationsColor[props.variation];
  }};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BoardIconImg = styled.img``;

function SelectBoard({
  name,
  selected = false,
  setSelectedBoard,
  setSelectedBoardData,
  boardData,
}) {
  const { darkMode } = useSelector((state) => state.app);

  return (
    <StyledSelectBoard
      variation={`${selected ? "selected" : "unselected"}`}
      darkMode={darkMode}
      onClick={() => {
        setSelectedBoard(name);
        setSelectedBoardData(
          boardData.boards.find((data) => data.name === name)
        );
      }}
    >
      <BoardIconImg src={selected ? IconBoardSelected : IconBoard} />
      <BoardName variation={`${selected ? "selected" : "unselected"}`}>
        {name}
      </BoardName>
    </StyledSelectBoard>
  );
}

export default SelectBoard;
