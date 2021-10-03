import React from 'react'

const UserContext = React.createContext({
    user: null,
    login: ()=>{},

})

export default UserContext;