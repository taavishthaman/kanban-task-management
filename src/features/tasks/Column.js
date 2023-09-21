import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  border-radius: 2px;
  width: 28rem;
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
  flex-grow: 1;
  transition: background-color 0.2s ease;
  min-height: 100px;
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
        {column.title}
      </Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => {
          return (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
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
