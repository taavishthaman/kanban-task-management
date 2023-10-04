import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { moveTasks } from "../../services/apiTasks";

export function useMoveTask() {
  const queryClient = useQueryClient();

  const { mutate: moveTask, isLoading: isMoving } = useMutation({
    mutationFn: moveTasks,
    onSuccess: () => {
      setTimeout(() => {
        //This hack seems to be working better than default behaviour
        queryClient.invalidateQueries({ queryKey: ["board"] });
      }, 3000);
    },
    onError: (err) => {
      console.log("Some error occured ", err);
    },
  });

  return { isMoving, moveTask };
}
