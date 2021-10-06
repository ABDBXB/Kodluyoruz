import { useContext } from "react";
import  UserContext  from "../context/userContext";

function useLogin() {
  const { user, userList, login, logout ,theme} = useContext(UserContext);

  return { user, userList, login, logout,theme };
}
export default useLogin;





