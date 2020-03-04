import React, { useState, useEffect, useCallback } from "react";

const ItemList = ({ itemList, handleDelete, searchKeyword, sortBy }) => {
  console.log("in itemlist");
  const [list, setList] = useState(itemList);

  useEffect(() => {
    setList(itemList);
  }, [itemList]);

  useEffect(() => {
    const arr = itemList.filter(item => item.name.includes(searchKeyword));
    setList(arr);
  }, [searchKeyword]);

  useEffect(() => {
    if (sortBy === "name") {
      const arr = [...list];
      setList(
        arr.sort((first, second) => {
          var x = first.name.toLowerCase();
          var y = second.name.toLowerCase();
          if (x < y) return -1;
          if (x > y) return 1;
          return 0;
        })
      );
    } else if (sortBy === "qty") {
      const arr = [...list];
      setList(
        arr.sort((first, second) => parseInt(first.qty) - parseInt(second.qty))
      );
    }
  }, [sortBy]);

  const renderList = () => {
    const arr = list.map((item, i) => (
      <li key={i}>
        {item.name}&nbsp;{item.qty}&nbsp;
        <button onClick={e => handleDelete(item.name, item.qty)}>del</button>
      </li>
    ));

    return arr;
  };

  return <>{renderList()}</>;
};

export default ItemList;
