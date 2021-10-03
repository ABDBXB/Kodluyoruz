import React , {useContext} from "react";
import {Redirect,withRouter} from "react-router-dom";
import UserContext from "../../../context/userContext";




 function Settings() {
  const {logout}  = useContext(UserContext);
  const signout = ()=>{
    logout();

    return( <Redirect to="/login"/>)
    
  
  }

 
  return(<button onClick={signout}>Logout</button>) ;
}
export default withRouter (Settings);
