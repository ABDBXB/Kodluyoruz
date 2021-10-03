import {useContext}from "react";
import {UserContext} from "../../context/login"
function useLogin(){ 
    const {user , login } = useContext(UserContext)

}

export default useLogin;