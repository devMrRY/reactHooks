import React, { useState, useCallback } from "react";
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
  // debugger;
  const styles = myStyles();
  const [itemList, setItemList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const getItem = useCallback(item => {
    setTimeout(() => {
      setItemList(list => [...list, item]);
      setLoader(false);
    }, 300);
    setLoader(true);
  }, []);

  const getSearchKeyword = useCallback(word => {
    setSearchKeyword(word);
  }, []);

  const handleDelete = useCallback((name, qty) => {
    setItemList(list =>
      list.filter(item => item.name !== name || item.qty !== qty)
    );
  }, []);

  const getSortedList = useCallback(sortedList => {
    setItemList(sortedList);
  }, []);

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
