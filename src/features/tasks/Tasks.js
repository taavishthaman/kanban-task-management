import { useState, useEffect } from "react";

import EmptyBoard from "../../ui/EmptyBoard";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import NewColumn from "../../ui/NewColumn";

const Container = styled.div`
  display: flex;
  gap: 1.2rem;
`;

function Tasks({ boardData }) {
  // const [tasksData, setTasksData] = useState(initialData);

  const [tasksData, setTasksData] = useState(null);

  useEffect(() => {
    setTasksData(boardData);
  }, [boardData]);

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newTasksData = Object.assign({}, tasksData);
    //Retrieve the task
    const task = newTasksData.columns
      .find((column) => column.name === source.droppableId)
      .tasks.splice(source.index, 1)
      .at(0);

    //Insert the task at its new location
    newTasksData.columns
      .find((column) => column.name === destination.droppableId)
      .tasks.splice(destination.index, 0, task);

    //Update the state
    setTasksData(newTasksData);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {tasksData?.columns?.map((column) => {
          const tasks = column.tasks;
          /* Change key to an ID later */
          return <Column key={column.title} column={column} tasks={tasks} />;
        })}
        <NewColumn />
      </Container>
    </DragDropContext>
  );
}

export default Tasks;
