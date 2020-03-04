import React, { useState, useEffect, useRef } from "react";

const Search = ({ getSearchKeyword }) => {
  // console.log('in search');
  
  const [text, setText] = useState("");
  const textRef=useRef(text)
  textRef.current=text;

  const handleSearch = text => {
    setText(text);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchKeyword(textRef.current)
    }, 300);
    return () => clearTimeout(timer);
  }, [text, getSearchKeyword]);

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
