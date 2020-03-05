import React, { useRef, useState, useEffect } from "react";

const myStyles = () => {
  return {
    form: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    input: {
      outline: "none",
      padding: "5px",
      border: "none",
      borderBottom: "solid 0.1px black",
      margin: "5px"
    },
    btn: {
      background: "green",
      color: "white",
      padding: "5px",
      borderRadius: "5px",
      border: "none"
    }
  };
};

const Form = React.memo(({ getItem }) => {
  console.log("in form");

  const styles = myStyles();
  const inputRef = useRef();
  const qtyRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const name = inputRef.current.value;
    const qty = qtyRef.current.value;
    getItem({ name, qty, time: new Date().getTime() });
    inputRef.current.value = "";
    qtyRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div style={styles.form}>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} style={styles.input} placeholder="Enter Name" />
        <input
          ref={qtyRef}
          type="number"
          min={0}
          style={styles.input}
          placeholder="qty"
        />
        <input style={styles.btn} type="submit" value="Add" />
      </form>
    </div>
  );
});

export default Form;
