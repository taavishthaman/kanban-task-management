import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { moveTasks } from "../../services/apiTasks";

export function useMoveTask() {
  const queryClient = useQueryClient();

  const { mutate: moveTask, isLoading: isMoving } = useMutation({
    mutationFn: moveTasks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board"] });
    },
    onError: (err) => {
      console.log("Some error occured ", err);
    },
  });

  return { isMoving, moveTask };
}
