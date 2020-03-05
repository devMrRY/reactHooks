import React, { useState, useEffect } from "react";
import { MdSwapVert } from "react-icons/md";
const myStyles = () => {
  return {
    alignment: {
      display: "flex",
      alignItems: "center"
    },
    inputSelect: {
      outline: "none",
      padding: "5px",
      borderRadius:"5px",
      margin: "5px",
    },
    reverseBtn: {
      padding: "5px",
      border: "none"
    },
  };
};
const Sort = ({ itemList, getSortedList }) => {
  
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
      case "Name":
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
      case "Qty":
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
      case "Time":
        getSortedList(
          !reverse
            ? [...itemList].sort(
                (first, second) => parseInt(first.time) - parseInt(second.time)
              )
            : [...itemList].sort(
                (first, second) => parseInt(second.time) - parseInt(first.time)
              )
        );
        break;
      default:
        break;
    }
  }, [reverse, sortBy]);

  return (
    <div style={styles.alignment}>
      <select
        style={styles.inputSelect}
        onChange={e => handleSortType(e.target.value)}
      >
        <option hidden>sort by</option>
        <option>Name</option>
        <option>Qty</option>
        <option>Time</option>
      </select>
      <MdSwapVert onClick={e => handleReverse()} />
    </div>
  );
};

export default Sort;
