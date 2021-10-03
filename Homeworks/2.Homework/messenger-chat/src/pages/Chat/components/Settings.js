import React , {useContext} from "react";
import {Redirect,withRouter} from "react-router-dom";
import useLogin from "../../../hooks/useLogin";




 function Settings() {
  const {logout}  = useLogin();
 
  return(<button onClick={logout}>Logout</button>) ;
}
export default Settings;
