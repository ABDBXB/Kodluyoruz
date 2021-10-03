import { useState } from "react";
import useLogin from "../components/hooks/useLogin";
import { Redirect, useLocation } from "react-router-dom";
function Login() {
  const { user, login } = useLogin();
  const [username, setUsername] = useState("");
  const [lastname, setUserLastname] = useState("");
  const { pathname } = useLocation();
  if (user && pathname === "/login") return <Redirect to="/Todo" />;
  return (
    <>
      <div>
        <input placeholder="UserName"onChange={(e) => {setUsername(e.target.value); }}></input>

        <input Placeholder="LastName"onChange={(e) => {setUserLastname(e.target.value);}}></input>
        
        <button onClick={() => {login(username);}}>Login</button>
      </div>
    </>
  );
}
export default Login;
