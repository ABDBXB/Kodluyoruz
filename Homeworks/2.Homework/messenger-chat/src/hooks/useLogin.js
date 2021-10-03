import { useContext } from "react";
import { UserContext } from "../context/userContext";

function useLogin() {
  const { user, userList, login, logout } = useContext(UserContext);

  return { user, userList, login, logout };
}
export default useLogin;





