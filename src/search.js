import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");
  const [timer, setTimer]=useState(2000)
  const handleSearch = text => {
    setText(text);
    setTimeout(()=>{
        
    },timer)
  };
  return (
    <>
      <input
        placeholder="Search by name..."
        onChange={e => handleSearch(e.target.value)}
      />
    </>
  );
};

export default Search;
