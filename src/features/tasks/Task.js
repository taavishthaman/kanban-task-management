import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import Modal from "../../ui/Modal";
import ViewTask from "./ViewTask";

const Container = styled.div`
  padding: 2.3rem 1.6rem;
  border-radius: 8px;
  background-color: var(--color-white);
  margin-bottom: 2rem;
  width: 28rem;
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
    <Draggable draggableId={task.title} index={index}>
      {(provided, snapshot) => {
        return (
          <Modal>
            <Modal.Open opens="view-task">
              <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
              >
                <Title>{task.title}</Title>
                <Subtask>
                  {task.subtasks.filter((task) => task.isCompleted).length} of{" "}
                  {task.subtasks.length} subtasks
                </Subtask>
              </Container>
            </Modal.Open>
            <Modal.Window name="view-task">
              <ViewTask taskData={task} />
            </Modal.Window>
          </Modal>
        );
      }}
    </Draggable>
  );
}

export default Task;
