import React from "react";

const ItemList = ({itemList}) => {
    console.log('in itemlist');
    
  const renderList = () => {
    return itemList.map((item, i) => (
      <li key={i}>
        {item.name}&nbsp;{item.qty}
      </li>
    ));
  };

  return <>{renderList()}</>;
};

export default ItemList;
