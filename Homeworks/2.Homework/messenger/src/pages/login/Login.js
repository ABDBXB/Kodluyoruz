import { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import "./Login.css";
import useLogin from "../../hooks/useLogin"
function Login() {
    const { user, login } = useLogin();
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const { pathname } = useLocation();
  
    if (user && pathname === "/login"){return <Redirect to="/chat" />}
  
    return (
      <div className="container">
        <h3>Login to your account</h3><br/>
        <input 
        placeholder="User Name"
          type="text"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input 
        placeholder="First Name"
          type="password"
          name="first_name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input 
        placeholder="Last Name"
          type="password"
          name="last_name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            login({
              username,
              firstName,
              lastName,
            });
          }}
        >
          Login
        </button>
      </div>
    );
  }
  export default Login;
  