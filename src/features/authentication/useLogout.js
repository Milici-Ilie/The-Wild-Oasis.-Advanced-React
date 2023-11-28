// /* eslint-disable */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

//🧧🧧[USER LOGOUT]🧧🧧
export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient(); //❗❗❗ IMPORTANT FOR SECURITY

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries(); // ❗❗❗❗ IMPORTANT, this will remove the user connection not only from the Browser store, but also from the REDUX cache, very important, this will prevent malicious actors/users to affect our App.
      navigate("/login", { replace: true }); //❗❗❗❗ VERY IMPORTANT TO DO THIS/ FOR SECURITY === i mean the {replace:true}, for malicious users who wants to attack the app
    },
  });

  return { logout, isLoading };
}
//🧧🧧[USER LOGOUT]🧧🧧
