import React, { useState, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const myStyles = () => {
  return {
    table: {
      border: "1px solid black",
      width: "70%"
    },
    td: {
      border: "1px solid black",
      padding: "5px",
      textAlign: "center"
    }
  };
};
const ItemList = ({ itemList, handleDelete, searchKeyword }) => {
  const styles = myStyles();
  const [list, setList] = useState([]);

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
        <td style={styles.td}>
          <FaRegTrashAlt onClick={e => handleDelete(item.name, item.qty)} />
        </td>
      </tr>
    ));

  return (
    <>
      {list.length > 0 && (
        <table style={styles.table}>
          <thead style={{boderCollapse:"separate"}}>
            <tr style={styles.table}>
              <th style={styles.table}>Name</th>
              <th style={styles.table}>Quantity</th>
              <th style={styles.table}>Action</th>
            </tr>
          </thead>
          <tbody>{renderList()}</tbody>
        </table>
      )}
    </>
  );
};

export default ItemList;
