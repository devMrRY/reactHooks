import React, { useState } from "react";

const ItemList = ({ itemList }) => {
  console.log("in itemlist");

  const [list, setList] = useState(itemList);
  const handleDelete = index => {
    setList(list.filter((l, i) => i != index));
  };

  const renderList = () => {
    return list.map((item, i) => (
      <li key={i}>
        {item.name}&nbsp;{item.qty}&nbsp;
        <button onClick={e => handleDelete(i)}>del</button>
      </li>
    ));
  };

  return <>{renderList()}</>;
};

export default ItemList;
