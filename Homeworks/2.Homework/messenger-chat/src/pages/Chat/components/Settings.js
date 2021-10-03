import React , {useContext} from "react";
import UserContext from "../../../context/userContext";

export default function Settings() {
  const {logout}  = useContext(UserContext);
  return(<button onClick={logout}>Logout</button>) ;
}
