import { useQueryClient, useMutation } from "@tanstack/react-query";
import { setupBoardService } from "../../services/apiBoards";

export default function useCreateBoard() {
  const queryClient = useQueryClient();

  const { mutate: createBoard, isLoading: isCreating } = useMutation({
    mutationFn: setupBoardService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board"] });
    },
    onError: (err) => {
      console.log("Some error occured ", err);
    },
  });

  return { isCreating, createBoard };
}
