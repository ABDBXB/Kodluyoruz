import React,{useState,useContext} from "react";
import UserContext from "../../../context/userContext";

export default function MessageInput() {

  const {handleSenNewMessage} = useContext(UserContext);
  const [message ,setMessage] = useState('');



  return (<div className="MessageInput-container">
    <div className="MessageInput" ><input id="inputmessage" type="text" placeholder="Type..." onChange={(e)=>{setMessage(e.target.value);} }/></div>
    <div className="Messagesendbtn" ><button onClick={(e)=>{if(message){handleSenNewMessage(message); setMessage(''); document.getElementById('inputmessage').value=''; }else{} }}>Send</button></div>
    
  </div>);
}
