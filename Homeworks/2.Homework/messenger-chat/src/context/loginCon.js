import React from "react";

const UserContext = React.createContext({
  user: null,
  userList: [],
  login: () => {},
  logout: () => {},
});

export default UserContext;
