import React, { useState, useEffect, useRef } from "react";

const Search = React.memo(({ getSearchKeyword }) => {
  console.log("in search");
  const styles = {
    searchBar: {
      borderRadius: "25px",
      padding:"5px",
      outline:"none"
    }
  };
  const [text, setText] = useState("");
  const textRef = useRef(text);
  textRef.current = text;

  const handleSearch = text => {
    setText(text);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchKeyword(textRef.current);
    }, 500);
    return () => clearTimeout(timer);
  }, [text, getSearchKeyword]);

  return (
    <>
      <input
        style={styles.searchBar}
        placeholder="Search by name..."
        onChange={e => handleSearch(e.target.value)}
      />
    </>
  );
});

export default Search;
