import React, { useState, useEffect } from "react";

const ItemList = ({ itemList, handleDelete, searchKeyword }) => {
  console.log("in itemlist");
  const [list, setList] = useState(itemList);

  useEffect(() => {
    setList(itemList);
  }, [itemList]);

  useEffect(() => {
    const arr = itemList.filter(item => item.name.includes(searchKeyword));
    setList(arr);
  }, [searchKeyword]);

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
