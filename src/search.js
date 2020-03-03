import React, { useState, useEffect, useRef } from "react";

const Search = () => {
  console.log('in search');
  
  const [text, setText] = useState("");
  const textRef=useRef(text)
  textRef.current=text;

  const handleSearch = text => {
    setText(text);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(textRef.current);
    }, 1000);
    return () => clearTimeout(timer);
  }, [text]);

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
