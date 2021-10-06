import React, {useState} from "react";
import UserContext from "../../../context/userContext";

export default function SearchInput() {
  const { theme } = React.useContext(UserContext);
  const [searchword, setSearchWrod] = useState("");

    
    


  return <div className="Searchbar"><input type="text" placeholder="Search" onChange={(e)=>{setSearchWrod(e.target.value); console.log(searchword)}}/></div>;
}
