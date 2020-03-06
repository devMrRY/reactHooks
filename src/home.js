import React, { useState, useCallback } from "react";
import Form from "./form";
import ItemList from "./itemList";
import Loader from "./loader";
import Search from "./search";
import Sort from "./sort";
import {Paper} from '@material-ui/core'
const myStyles = () => {
  return {
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      width: "50%"
    },
    header: {
      display: "flex",
      padding: "10px"
    }
  };
};
const Home = () => {
  const styles = myStyles();
  const [itemList, setItemList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const getItem = useCallback(item => {

    setTimeout(() => {
      setItemList(list => [...list, item]);
      setLoader(false);
    }, 1000);
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
      {loader && <Loader />}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper
          style={{ display: loader ? "none" : "block" }}
          style={styles.content}
        >
          <div style={styles.header}>
            <Search getSearchKeyword={getSearchKeyword} />
            <Sort itemList={itemList} getSortedList={getSortedList} />
          </div>
          <Form getItem={getItem} />
          <br/>
          <ItemList
            itemList={itemList}
            handleDelete={handleDelete}
            searchKeyword={searchKeyword}
          />
        </Paper>
      </div>
    </>
  );
};

export default Home;
