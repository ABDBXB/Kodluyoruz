import React  from "react";
import { BrowserRouter as Route, HashRouter, Switch,Link } from "react-router-dom";
import Todo from "./pages/Todo";
import useLogin from "./components/hooks/useLogin"
function Routes() {
  const {user}  = useLogin();
  return (
    <Route>
      <ul>
        <li> <Link to="Todo" >Todo </Link> </li>
        <li> <Link to="login" >Login </Link> </li>
        <li> <Link to="signup" >SignUp </Link> </li>

      </ul>
      <Switch>
        <Route path="/Todo">
          <Todo />
        </Route>

        <Route path="/login">
        <h1>Login</h1>
        </Route>
        <Route path="/signup">
        <h1>Sign up</h1>
        </Route>
      </Switch>
    </Route>
  );
}
export default Routes;