import React, { useState } from "react";

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
