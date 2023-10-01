import { useQuery } from "@tanstack/react-query";
import { fetchBoards } from "../../services/apiBoards";

export default function useBoards() {
  const {
    isLoading,
    data: boards,
    error,
  } = useQuery({ queryKey: ["board"], queryFn: fetchBoards });

  return { isLoading, error, boards };
}
