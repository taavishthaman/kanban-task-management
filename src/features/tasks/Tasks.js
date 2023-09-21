import { useState } from "react";

import EmptyBoard from "../../ui/EmptyBoard";
import initialData from "../../initial-data";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function Tasks({ boardData }) {
  const [tasksData, setTasksData] = useState(initialData);

  // const [tasksData, setTasksData] = useState(boardData);

  console.log(boardData);

  //   if (!tasksData.tasks.length) {
  //     return <EmptyBoard />;
  //   }

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

    const start = tasksData.columns[source.droppableId];
    const finish = tasksData.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newTasksData = {
        ...tasksData,
        columns: {
          ...tasksData.columns,
          [newColumn.id]: newColumn,
        },
      };

      setTasksData(newTasksData);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...tasksData,
      columns: {
        ...tasksData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setTasksData(newState);
    //Call the API after this operation to make changes in the DB
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {tasksData.columnOrder.map((columnId) => {
          const column = tasksData.columns[columnId];

          const tasks = column.taskIds.map((taskId) => tasksData.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}

        {/* {tasksData?.columns.map((column) => {
          const tasks = column.tasks;
          return <Column key={column.title} column={column} tasks={tasks} />;
        })} */}
      </Container>
    </DragDropContext>
  );
}

export default Tasks;
