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
