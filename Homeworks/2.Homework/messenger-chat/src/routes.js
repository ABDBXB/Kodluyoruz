import React from "react";
import {
  BrowserRouter as Router,
  HashRouter as HRouter,
  Redirect,
  Link,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import useLogin from "./hooks/useLogin";
import Login from "./pages/login/Login";
import Chat from "./pages/chat/Chat";



function Routes() {
    // truthy ({}, [], 123, "lsdf") -falsy (null)
    const { user, logout } = useLogin();
  
    return (
      <Router>
  
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
  
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <h1>Sign Up</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
  
  export default Routes;