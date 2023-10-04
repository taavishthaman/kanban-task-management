import { baseUrl } from "./base";

export async function createTasks(input) {
  const res = await fetch(`${baseUrl}/tasks/setupTask`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const data = await res.json();
  return data;
}

export async function moveTasks(input) {
  const res = await fetch(`${baseUrl}/tasks/moveTask`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const data = await res.json();
  return data;
}

export async function editTaskService(input) {
  const res = await fetch(`${baseUrl}/tasks/editTask`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const data = await res.json();
  return data;
}

export async function deleteTaskService(task) {
  const url = `${baseUrl}/tasks/deleteTask/${task.taskId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return;
}

export async function setSubtaskStatusService(input) {
  console.log(input);
  const res = await fetch(
    `${baseUrl}/subtasks/subtaskStatus/${input.subtaskId}`,
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    }
  );

  const data = await res.json();
  return data;
}
