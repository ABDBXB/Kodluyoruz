import React, { useState } from "react";
import UserContext from "../../../context/userContext";
import useLogin from "../../..//hooks/useLogin";

export default function SearchInput({handleOnChange}) {
  return (
    <div className="Searchbar">
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
