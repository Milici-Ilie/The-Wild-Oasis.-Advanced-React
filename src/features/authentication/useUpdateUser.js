/* eslint-disable */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";
//🏉🏉[UPDATING USER DATA & AVATAR]🏉🏉

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user); //refatching, reloading the cache from our Redux when we updating the avatar/IMG
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
//🏉🏉[UPDATING USER DATA & AVATAR]🏉🏉 now go and call this function in the "UpdateUserDataForm.jsx" file
