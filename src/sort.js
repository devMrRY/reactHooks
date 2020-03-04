import React, { useState, useEffect } from "react";

const Filter = ({ itemList, getSortedList }) => {
  const [sortBy, setSortBy] = useState("");
  const [reverse, setReverse] = useState(false);

  const handleSortType = sortby => {
    setSortBy(sortby);
  };

  const handleReverse=()=>{
    setReverse(!reverse)
  }

  useEffect(() => {
    switch (sortBy) {
      case "name":
        getSortedList(
          !reverse
            ? [...itemList].sort((first, second) => {
                var x = first.name.toLowerCase();
                var y = second.name.toLowerCase();
                if (x < y) return -1;
                if (x > y) return 1;
                return 0;
              })
            : [...itemList].sort((first, second) => {
                var x = first.name.toLowerCase();
                var y = second.name.toLowerCase();
                if (x < y) return 1;
                if (x > y) return -1;
                return 0;
              })
        );
        break;
      case "qty":
        getSortedList(
          !reverse
            ? [...itemList].sort(
                (first, second) => parseInt(first.qty) - parseInt(second.qty)
              )
            : [...itemList].sort(
                (first, second) => parseInt(second.qty) - parseInt(first.qty)
              )
        );
        break;
      case "time":
        break;
      default:
        break;
    }
  }, [reverse, sortBy]);

  return (
    <>
      <select onChange={e => handleSortType(e.target.value)}>
        <option>name</option>
        <option>qty</option>
        <option>time</option>
      </select>
      <button onClick={e => handleReverse()}>^</button>
    </>
  );
};

export default Filter;
