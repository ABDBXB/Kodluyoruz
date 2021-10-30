import { useState,useContext } from "react";
import { Redirect, useLocation } from "react-router-dom";
import "./Login.css";
import useLogin from "../../hooks/useLogin";
import userContext from "../../context/userContext";
function Login() {
    const {switchTheme,theme} = useContext(userContext);
    const { user, login } = useLogin();
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const { pathname } = useLocation();
  
    if (user && pathname === "/login"){return <Redirect to="/chat" />}
  
    return (
      <div className={"container"+theme}>
        <h3>Login to your account</h3><br/><br/>
        <input 
        placeholder="User Name / Please Login With: luke !!"
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
        <button className="loginbutton"
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
        <button onClick={()=>{switchTheme();}} >Change To {theme==="dark"?"light":"dark"}</button>
      </div>
    );
  }
  export default Login;
  