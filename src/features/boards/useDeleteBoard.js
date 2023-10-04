import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteBoardService } from "../../services/apiBoards";

export default function useDeleteBoard() {
  const queryClient = useQueryClient();

  const { mutate: deleteBoard, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBoardService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board"] });
    },
    onError: (err) => {
      console.log("Some error occured ", err);
    },
  });

  return { isDeleting, deleteBoard };
}
