import { useQueryClient, useMutation } from "@tanstack/react-query";
import { editBoardService } from "../../services/apiBoards";

export default function useCreateBoard() {
  const queryClient = useQueryClient();

  const { mutate: editBoard, isLoading: isEditing } = useMutation({
    mutationFn: editBoardService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board"] });
    },
    onError: (err) => {
      console.log("Some error occured ", err);
    },
  });

  return { isEditing, editBoard };
}
