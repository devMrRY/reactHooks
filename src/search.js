import React, { useState, useEffect, useRef } from "react";

const Search = React.memo(({ getSearchKeyword }) => {
  const styles = {
    searchBar: {
      borderRadius: "25px",
      padding:"5px",
      outline:"none"
    }
  };
  const [text, setText] = useState("");
  const searchRef = useRef(text);
  searchRef.current = text;

  const handleSearch = text => {
    setText(text);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchKeyword(searchRef.current);
    }, 500);
    return () => clearTimeout(timer);
  }, [text, getSearchKeyword]);

  return (
    <>
      <input
      ref={searchRef}
        style={styles.searchBar}
        placeholder="Search by name..."
        onChange={e => handleSearch(e.target.value)}
      />
    </>
  );
});

export default Search;
