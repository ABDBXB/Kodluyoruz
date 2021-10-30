import React, { useState,useEffect } from "react";
import UserContext from "./context/login";
import Routes from "./routes";
function App() {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser(username);
    localStorage.setItem("UserinLocal",username);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("UserinLocal");
  };


  useEffect(() => {
   const userNameFromStroge = localStorage.getItem("UserinLocal");
   if(userNameFromStroge){
     setUser(userNameFromStroge);
   }
  }, [])
  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,

      }}
    >
      <Routes />
    </UserContext.Provider>
  );
}

export default App;
