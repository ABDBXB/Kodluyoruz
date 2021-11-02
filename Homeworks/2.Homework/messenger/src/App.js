import React,{useState,useEffect} from 'react';
import UserContext from "./context/userContext"
import Routes from "./routes"
import mockUsers from "./mock-users.json";
function App() {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [theme, setTheme] = useState("light");
  const [selectedUser, setSelectedUser] = useState(null);

  const switchTheme = ()=>{
    theme==="light" ? setTheme("dark") : setTheme("light");
    
  };
  const getmoreinfo = (inputuser)=>{
    const user = mockUsers.users.find((user) => user.id === inputuser.id);
    setUserInfo(user);
    
  };
  const closeinfo = ()=>{
    setUserInfo(null);
    
  };

  const selectUser = (userId) => {
    const user = mockUsers.users.find((user) => user.id === userId);
    setSelectedUser(user);

  };

  const login = (username) => {
    
    const userfromlist = mockUsers.users.find((user) => user.username === username.username.toLowerCase());
    const user = {username};

    if(userfromlist){
      setUser(user);
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



const handleSenNewMessage=(messageText)=>{


  setSelectedUser({
    ...selectedUser,
    messages:[
      ...selectedUser.messages,
      {
        id: Math.random(),
        text: messageText,
        sender: user.id,
      },
    ]
  })

}


  return (
    <UserContext.Provider
      value={{
        theme : theme,
        switchTheme,
        user,
        userList: mockUsers.users,
        selectedUser,
        getmoreinfo,
        userInfo,
        closeinfo,
        login,
        logout,
        selectUser,
        handleSenNewMessage,
      }}
    >
      <Routes />
    </UserContext.Provider>
  );
}

export default App;
