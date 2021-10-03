import React,{ useState}  from "react";
import { BrowserRouter as Route, HashRouter, Switch,Link ,Redirect} from "react-router-dom";
import Todo from "./pages/Todo";
import useLogin from "./components/hooks/useLogin"
import Login from "./pages/Login";
//import userContext from "./context/login"
function Routes() {
  const {user,logout}  = useLogin();
  return (
    <Route>
      <ul>
        {user ?<> <li> <Link to="Todo" >Todo </Link> </li> <button onClick={logout}> Log Out</button></>: null }
       <li> <Link to="login" >Login </Link> </li> 
        <li> <Link to="signup" >SignUp </Link> </li>

      </ul>
      <Switch>
        {
          user ? (
          <Route path="/Todo">
            <Todo />
          </Route>
          ) :null
        }

          <Route path="/login">
            <Login/>
          </Route>
  
          <Route path="/signup">
          <h1>Sign up</h1>
          </Route>
          
        
        
        

        
      </Switch>
    </Route>
  );
}
export default Routes;