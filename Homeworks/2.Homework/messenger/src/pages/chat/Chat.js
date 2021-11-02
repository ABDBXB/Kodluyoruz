import React, { useState, useContext } from "react";
import { Redirect } from 'react-router';
import UserContext from "../../context/userContext"
import "./Chat.css";

import SearchInput from "./components/SearchInput";
import Settings from "./components/Settings";
import UserHeader from "./components/UserHeader";
import UserList from "./components/UserList";
import MessageInput from "./components/MessageInput";
import Messages from "./components/Messages";
import useLogin from "../../hooks/useLogin";

function Chat() {
  const {user}=useLogin();
  const {userInfo}=useContext(UserContext);
  const [searchword, setSearchWrod] = useState("");
  
  if (!user) return <Redirect to="/login"/>
  if (userInfo) return <Redirect to="/user"/>
  
  return (
    <div className="chat-container">
      <div className="left-side">
        <SearchInput searchWord={searchword} handleOnChange={setSearchWrod} />
        <UserList searchWord={searchword} />
        <Settings />
      </div>
      <div className="right-side">
        <UserHeader />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
}

export default Chat;
