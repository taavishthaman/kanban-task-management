import { useState, useEffect } from "react";

import EmptyBoard from "../../ui/EmptyBoard";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import NewColumn from "../../ui/NewColumn";
import { useMoveTask } from "./useMoveTask";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  gap: 1.2rem;
`;

function Tasks() {
  const [tasksData, setTasksData] = useState(null);
  const { isMoving, moveTask } = useMoveTask();
  const { boards, selectedBoard } = useSelector((state) => state.board);

  useEffect(() => {
    setTasksData(boards.find((board) => board.name === selectedBoard));
  }, [boards, selectedBoard]);

  if (!selectedBoard) {
    return <></>;
  }

  if (!tasksData || !tasksData.columns.length) {
    return <EmptyBoard boardData={tasksData} />;
  }

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

    const newTasksData = JSON.parse(JSON.stringify(tasksData));

    //Retrieve the task
    const task = newTasksData.columns
      .find((column) => column._id === source.droppableId)
      .tasks.splice(source.index, 1)
      .at(0);

    //Insert the task at its new location
    newTasksData.columns
      .find((column) => column._id === destination.droppableId)
      .tasks.splice(destination.index, 0, task);

    //Update the state
    setTasksData(newTasksData);

    //Make the API call
    const dataObj = {
      srcColumnId: source.droppableId,
      destColumnId: destination.droppableId,
      taskId: draggableId,
      destIndex: destination.index,
    };
    moveTask(dataObj);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {tasksData?.columns?.map((column) => {
          const tasks = column.tasks;
          return <Column key={column._id} column={column} tasks={tasks} />;
        })}
        <NewColumn boardData={tasksData} />
      </Container>
    </DragDropContext>
  );
}

export default Tasks;
