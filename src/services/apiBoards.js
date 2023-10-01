import { baseUrl } from "./base";

export async function fetchBoards() {
  const url = `${baseUrl}/boards`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
