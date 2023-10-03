import { baseUrl } from "./base";

export async function fetchBoardsService() {
  const url = `${baseUrl}/boards`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export async function setupBoardService(input) {
  const url = `${baseUrl}/boards/setupBoard`;

  const res = await fetch(url, {
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

export async function editBoardService(input) {
  const url = `${baseUrl}/boards/editBoard`;

  const res = await fetch(url, {
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
