import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  padding: 2.3rem 1.6rem;
  border-radius: 8px;
  background-color: var(--color-white);
  margin-bottom: 2rem;
`;

const Title = styled.p`
  color: var(--color-black);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Subtask = styled.p`
  color: var(--color-medium-grey);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 0.8rem;
`;

function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Title>{task.content}</Title>
            <Subtask>0 of 6 subtasks</Subtask>
          </Container>
        );
      }}
    </Draggable>
  );
}

export default Task;
