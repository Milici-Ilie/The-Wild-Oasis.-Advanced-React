import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

//🧧🧧[USER LOGOUT]🧧🧧
function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
//🧧🧧[USER LOGOUT]🧧🧧 now after we finish to implement our LOGOUT function we must check if the user is loged out from Application, inside our console in the browser, and also from the Redux console tool ["user"]
