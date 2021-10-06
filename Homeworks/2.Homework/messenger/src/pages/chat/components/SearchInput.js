import React, {useState} from "react";
import UserContext from "../../../context/userContext";

export default function SearchInput() {
  const {search , setSearch} = useState("");
  const { selectedUser } = React.useContext(UserContext);


    
    


  return <div className="Searchbar"><input type="text" placeholder="Search" onChange={(e)=>{setSearch(e.target.value)}}/></div>;
}
