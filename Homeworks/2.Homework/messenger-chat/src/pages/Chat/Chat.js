import React, { useState, useEffect, useContext } from "react";
import { Redirect } from 'react-router';
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
  if (!user) return <Redirect to="/login"/>
  return (
    <div className="chat-container">
      <div className="left-side">
        <SearchInput />
        <UserList />
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
