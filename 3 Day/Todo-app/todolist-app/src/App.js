import React , {useState} from "react";
import UserContext from "./context/login";
import Routes from "./routes";
function App() {

  const [user,setUser] = useState(null);
  const login  = (username) => {
    setUser(
      username,
      login,
    );
   }
  return (
    <UserContext.Provider value={{
      user
    }}>
    <Routes/>
    </UserContext.Provider>
  );
}

export default App;
