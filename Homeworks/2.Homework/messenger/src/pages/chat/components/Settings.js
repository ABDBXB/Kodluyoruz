import React from "react";
import useLogin from "../../../hooks/useLogin";

function Settings() {
  const { logout } = useLogin();

  return (
  <div className="setting-container">
    <div className="setting__logoutbtn"> <button onClick={logout}>Logout</button></div>
  </div>
    );
}
export default Settings;
