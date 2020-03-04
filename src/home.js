import React, { useState } from "react";
import Form from "./form";
import ItemList from "./itemList";
import Loader from "./loader";
import Search from "./search";
import Sort from "./sort";

const myStyles = () => {
  return {
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px"
    },
    header: {
      display: "flex",
      padding: "10px"
    }
  };
};
const Home = () => {
  console.log("in home");

  const styles = myStyles();
  const [itemList, setItemList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const getItem = item => {
    setTimeout(() => {
      setItemList([...itemList, item]);
      setLoader(false);
    }, 300);
    setLoader(true);
  };

  const getSearchKeyword = word => {
    setSearchKeyword(word);
  };

  const handleDelete = (name, qty) => {
    const arr = itemList.filter(item => item.name !== name && item.qty !== qty);
    setItemList(arr);
  };

  const getSortedList = sortedList => {
    setItemList(sortedList);
  };

  return (
    <>
      {!loader ? (
        <div style={styles.content}>
          <div style={styles.header}>
            <Search getSearchKeyword={getSearchKeyword} />
            <Sort itemList={itemList} getSortedList={getSortedList} />
          </div>
          <Form getItem={getItem} />
          <ItemList
            itemList={itemList}
            handleDelete={handleDelete}
            searchKeyword={searchKeyword}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
