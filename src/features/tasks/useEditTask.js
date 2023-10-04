import { useQueryClient, useMutation } from "@tanstack/react-query";
import { editTaskService } from "../../services/apiTasks";

export function useEditTask() {
  const queryClient = useQueryClient();

  const { mutate: editTask, isLoading: isEdititng } = useMutation({
    mutationFn: editTaskService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board"] });
    },
    onError: (err) => {
      console.log("Some error occured ", err);
    },
  });

  return { isEdititng, editTask };
}
