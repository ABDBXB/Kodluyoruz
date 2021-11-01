import React from "react";
import  UserContext  from "../../../context/userContext";

export default function UserHeader() {
  const { theme,selectedUser } = React.useContext(UserContext);

  if (!selectedUser) return null;

  return (<div className={"userheader"+theme}>
    <div className="user-header__userimage"><img src="https://via.placeholder.com/150" alt="noPhoto" /></div>
    <div className={"user-header__username"+theme}><p>{`${selectedUser.first_name} ${selectedUser.last_name}`}</p></div>
    <div className={"user-header__usermorebtn"+theme}><button>?</button></div>
    
    </div>);
}
