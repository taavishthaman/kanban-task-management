import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createTasks } from "../../services/apiTasks";

export function useCreateTask() {
  const queryClient = useQueryClient();

  const { mutate: createTask, isLoading: isCreating } = useMutation({
    mutationFn: createTasks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board"] });
    },
    onError: (err) => {
      console.log("Some error occured ", err);
    },
  });

  return { isCreating, createTask };
}
