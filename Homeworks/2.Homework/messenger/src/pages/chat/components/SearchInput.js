import React, { useContext } from "react";
import UserContext from "../../../context/userContext";

export default function SearchInput({handleOnChange}) {
  const {theme}= useContext(UserContext);
  return (
    <div className={"Searchbar"+theme}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
      />
    </div>
  );
}
