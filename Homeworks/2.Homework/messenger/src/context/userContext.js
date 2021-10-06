import React from 'react'

const UserContext = React.createContext({
    user: null,
    theme:"",
    userList : [],
    login:()=>{},
    logout:()=>{},

});

export default UserContext;
