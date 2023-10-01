import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import Modal from "../../ui/Modal";
import ViewTask from "./ViewTask";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 2.3rem 1.6rem;
  border-radius: 8px;
  background-color: var(--color-white);
  margin-bottom: 2rem;
  width: 28rem;
  background-color: ${(props) =>
    props.darkMode ? "var(--color-dark-grey)" : "var(--color-white)"};
`;

const Title = styled.p`
  color: ${(props) =>
    props.darkMode ? "var(--color-white)" : "var(--color-black)"};
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
  const { darkMode } = useSelector((state) => state.app);
  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided, snapshot) => {
        return (
          <Modal>
            <Modal.Open opens="view-task">
              <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
                darkMode={darkMode}
              >
                <Title darkMode={darkMode}>{task.title}</Title>
                <Subtask darkMode={darkMode}>
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
