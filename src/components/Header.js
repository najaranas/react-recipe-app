import React, { useRef, useState } from "react";

export default function Header({ searchData, signal }) {
  const inputRef = useRef();
  if (signal === "yes") {
    inputRef.current.value = "";
  }
  const checkData = () => {
    if (inputRef.current.value) {
      searchData(inputRef.current.value);
    }
  };

  return (
    <header>
      <h1>Recipe App</h1>
      <div className="search-field">
        <input
          className="search-input"
          placeholder="Search..."
          ref={inputRef}
        />
        <button onClick={checkData} className="btn">
          {" "}
          Search{" "}
        </button>
      </div>
    </header>
  );
}
