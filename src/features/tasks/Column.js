import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { colors } from "../../styles/colors";

const Container = styled.div`
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  display: flex;
  color: var(--color-medium-grey);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.4px;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
`;

const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) => {
    if (props.isDraggingOver) {
      return "var(--color-medium-grey)";
    } else if (props.darkMode) {
      return "var(--color-very-dark-grey-dark)";
    } else {
      return "var(--color-light-grey-light)";
    }
  }};

  transition: background-color 0.2s ease;
  overflow-y: scroll;
  min-width: 30rem;
  height: 60.7rem;
`;

const Circle = styled.div`
  display: inline-block;
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 1.2rem;
  background-color: ${(props) => props.color};
`;

function Column({ column, tasks, index }) {
  const { darkMode } = useSelector((state) => state.app);
  return (
    <Container>
      <Title>
        <Circle color={colors[index % colors.length]} />
        {column.name}
      </Title>
      <Droppable droppableId={column._id}>
        {(provided, snapshot) => {
          return (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
              darkMode={darkMode}
            >
              {tasks.map((task, index) => (
                <Task key={task._id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          );
        }}
      </Droppable>
    </Container>
  );
}

export default Column;
