import { useQuery } from "@tanstack/react-query";
import { fetchBoardsService } from "../../services/apiBoards";

export default function useBoards() {
  const {
    isLoading,
    data: boards,
    error,
  } = useQuery({ queryKey: ["board"], queryFn: fetchBoardsService });

  return { isLoading, error, boards };
}
