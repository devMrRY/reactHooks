import React, { useState } from "react";
import Form from "./form";
import ItemList from "./itemList";
import Loader from "./loader";
import Search from "./search";

const Home = () => {
  const styles = {
    form: {
      display: "flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center",
      padding:"10px"
    }
  };
  const [itemList, setItemList] = useState([]);
  const [loader, setLoader] = useState(false);
  const getItem = item => {
    setTimeout(() => {
      setItemList([...itemList, item]);
      setLoader(false);
    }, 2000);
    setLoader(true);
  };
  return (
    <>
      {!loader ? (
        <div style={styles.form}>
          <Search />
          <br/>
          <Form getItem={getItem} />
          <ItemList itemList={itemList} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
