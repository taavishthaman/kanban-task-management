import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteTaskService } from "../../services/apiTasks";

export default function useDeleteTask() {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTaskService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board"] });
    },
    onError: (err) => {
      console.log("Some error occured ", err);
    },
  });

  return { isDeleting, deleteTask };
}
