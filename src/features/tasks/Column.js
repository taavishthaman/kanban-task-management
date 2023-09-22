import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

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
  background-color: ${(props) =>
    props.isDraggingOver
      ? "var(--color-medium-grey)"
      : "var(--color-light-grey-light)"};
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
  background-color: #49c4e5;
`;

function Column({ column, tasks }) {
  return (
    <Container>
      <Title>
        <Circle />
        {column.name}
      </Title>
      <Droppable droppableId={column.name}>
        {(provided, snapshot) => {
          return (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {tasks.map((task, index) => (
                <Task key={task.title} task={task} index={index} />
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
