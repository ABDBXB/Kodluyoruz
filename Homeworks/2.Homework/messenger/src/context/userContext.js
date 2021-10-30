import React from 'react'

const UserContext = React.createContext({
    user: null,
    theme:"light",
    userList : [],
    login:()=>{},
    logout:()=>{},
    handleSenNewMessage:()=>{},

});

export default UserContext;
