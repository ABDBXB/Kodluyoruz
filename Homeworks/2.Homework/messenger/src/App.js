import React,{useState,useEffect} from 'react';
import UserContext from "./context/userContext"
import Routes from "./routes"
import mockUsers from "./mock-users.json";
function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = (userId) => {
    const user = mockUsers.users.find((user) => user.id === userId);
    setSelectedUser(user);

  };

  const login = (username) => {
    
    const userfromlist = mockUsers.users.find((user) => user.username === username.username.toLowerCase());
    const user = {username};

    if(userfromlist){
      setUser(user);
      console.log(user);
      localStorage.setItem("username", JSON.stringify(user));
    }
    
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("username");
  };

  

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem("username");

    if (userNameFromStorage) {
      const userObject = JSON.parse(userNameFromStorage);
      console.log(userObject);
      setUser(userObject);
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        theme : "light",
        user,
        userList: mockUsers.users,
        selectedUser,
        login,
        logout,
        selectUser,
      }}
    >
      <Routes />
    </UserContext.Provider>
  );
}

export default App;
