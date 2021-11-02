import React,{useContext} from "react";
import UserContext from "../../context/userContext";
import {Redirect} from "react-router-dom";


function User() {
    const {closeinfo,userInfo} =useContext(UserContext);
    if (!userInfo) return <Redirect to="/chat"/>
    return (
        <div className="chat-container">
        <div className="left-side">
        
        </div>
        <div className="right-side">
        <p>{userInfo.first_name}</p>
        <button onClick={()=>{closeinfo();}}>exit</button>
        </div>
      </div>
    );
  }
  
export default User;