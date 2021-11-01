import React , {useContext}from "react";
import useLogin from "../../../hooks/useLogin";
import userContext from "../../../context/userContext";

function Settings() {
  const { logout } = useLogin();
  const {switchTheme,theme} = useContext(userContext);

  return (
  <div className={"setting-container"+theme}>
    <div className="setting__logoutbtn"> <button onClick={logout}>Logout</button>
    <button onClick={()=>{switchTheme();}} >Change To {theme==="dark"?"light":"dark"}</button>
    </div>
  </div>
    );
}
export default Settings;
