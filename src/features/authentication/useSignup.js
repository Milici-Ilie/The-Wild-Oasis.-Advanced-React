/* eslint-disable */
import { useMutation } from "@tanstack/react-query";
import { signup as signApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
//📶📶[USER SIGN UP]📶📶 now check "SignupForm.jsx" file
export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signApi,
    onSuccess: (user) => {
      // console.log(user);
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
    },
  });

  return { signup, isLoading };
}
//📶📶[USER SIGN UP]📶📶
