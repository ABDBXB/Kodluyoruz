import React from "react";
import useLogin from "../../../hooks/useLogin";

function Settings() {
  const { logout } = useLogin();

  return <button onClick={logout}>Logout</button>;
}
export default Settings;
