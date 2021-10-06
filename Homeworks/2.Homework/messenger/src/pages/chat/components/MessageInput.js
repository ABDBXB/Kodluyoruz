import React,{useState,useContext} from "react";
import UserContext from "../../../context/userContext";

export default function MessageInput() {

  const {handleSenNewMessage} = useContext(UserContext);
  const [message ,setMessage] = useState('');



  return (<div className="MessageInput-container">
    <div className="MessageInput" ><input type="text" placeholder="Type..." onChange={(e)=>{setMessage(e.target.value)}}/></div>
    <div className="Messagesendbtn" ><button onClick={(e)=>{handleSenNewMessage(message); setMessage('')}}>Send</button></div>
    
  </div>);
}
