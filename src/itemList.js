import React, { useState, useEffect } from "react";

const myStyles = () => {
  return {
    table: {
      border:"1px solid black",
      boderCollapse:"collapse",
      width:"50%"
    },
    td:{
      border:"1px solid black",
      boderCollapse:"collapse",
      padding:"5px"
    }
  };
};
const ItemList = ({ itemList, handleDelete, searchKeyword }) => {
  const styles = myStyles();
  console.log("in itemlist");
  const [list, setList] = useState(itemList);

  useEffect(() => {
    setList(itemList);
  }, [itemList]);

  useEffect(() => {
    const arr = itemList.filter(item => item.name.includes(searchKeyword));
    setList(arr);
  }, [searchKeyword]);

  const renderList = () =>
    list.map((item, i) => (
      <tr key={i}>
        <td style={styles.td}>{item.name}</td>
        <td style={styles.td}>{item.qty}</td>
        <td style={styles.td}><button onClick={e => handleDelete(item.name, item.qty)}>del</button></td>
      </tr>
    ));

  return (
    <table style={styles.table}>
      <tr style={styles.table}>
        <th style={styles.table}>Name</th>
        <th style={styles.table}>Quantity</th>
        <th style={styles.table}>Action</th>
      </tr>
      {renderList()}
    </table>
  );
};

export default ItemList;
