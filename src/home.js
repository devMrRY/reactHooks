import React, { useState } from "react";
import Form from "./form";
import ItemList from "./itemList";
import Loader from "./loader";
import Search from "./search";
import Sort from "./sort";

const Home = () => {
  console.log("in home");

  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px"
    }
  };
  const [itemList, setItemList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortBy, setSortBy] = useState("");

  const getItem = item => {
    setTimeout(() => {
      setItemList([...itemList, item]);
      setLoader(false);
    }, 100);
    setLoader(true);
  };

  const getSearchKeyword = word => {
    setSearchKeyword(word);
  };

  const handleDelete = (name, qty) => {
    const arr = itemList.filter(item => item.name != name && item.qty != qty);
    setItemList(arr);
  };

  const getSort = sortBy => {
    console.log("in getSort");
    setSortBy(sortBy);
  };

  return (
    <>
      {!loader ? (
        <div style={styles.form}>
          <Search getSearchKeyword={getSearchKeyword} />
          <Sort getSort={getSort} />
          <br />
          <Form getItem={getItem} />
          <ItemList
            itemList={itemList}
            handleDelete={handleDelete}
            searchKeyword={searchKeyword}
            sortBy={sortBy}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
