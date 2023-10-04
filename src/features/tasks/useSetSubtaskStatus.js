import { useQueryClient, useMutation } from "@tanstack/react-query";
import { setSubtaskStatusService } from "../../services/apiTasks";

export function useSetSubtaskStatus() {
  const queryClient = useQueryClient();

  const { mutate: setSubtaskStatus, isLoading: isSetting } = useMutation({
    mutationFn: setSubtaskStatusService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board"] });
    },
    onError: (err) => {
      console.log("Some error occured ", err);
    },
  });

  return { isSetting, setSubtaskStatus };
}
