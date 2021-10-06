import React from 'react'

const UserContext = React.createContext({
    user: null,
    theme:"light",
    userList : [],
    login:()=>{},
    logout:()=>{},

});

export default UserContext;
