import React, { useState, useEffect } from "react";

const myStyles = () => {
  return {
    inputSelect: {
      outline: "none",
      padding: "5px",
      border: "none",
      borderBottom: "solid 0.1px black",
      margin: "5px"
    },
    reverseBtn: {
      padding: "5px",
      border: "none"
    }
  };
};
const Filter = ({ itemList, getSortedList }) => {
  const styles = myStyles();
  const [sortBy, setSortBy] = useState("");
  const [reverse, setReverse] = useState(false);

  const handleSortType = sortby => {
    setSortBy(sortby);
  };

  const handleReverse = () => {
    setReverse(!reverse);
  };

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
      <select
        style={styles.inputSelect}
        onChange={e => handleSortType(e.target.value)}
      >
        <option hidden>sort by</option>
        <option>name</option>
        <option>qty</option>
        <option>time</option>
      </select>
      <button style={styles.reverseBtn} onClick={e => handleReverse()}>
        ^
      </button>
    </>
  );
};

export default Filter;
