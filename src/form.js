import React, { useRef, useState, useEffect } from "react";

const myStyles=()=>{
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
      background: "lightgreen",
      color: "white",
      padding: "5px",
      borderRadius: "5px",
      border: "none"
    }
  };
}

const Form = ({ getItem }) => {
  console.log("in form");

  const styles = myStyles()
  const inputRef = useRef();
  const [name, setName] = useState("");
  const [qty, setQty] = useState("+");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleFormChange = name => setName(name);

  const handleQty = qty => setQty(qty);

  const handleSubmit = e => {
    e.preventDefault();
    getItem({ name, qty });
  };
  return (
    <div style={styles.form}>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          style={styles.input}
          placeholder="Enter Name"
          onChange={e => handleFormChange(e.target.value)}
        />
        <input
          type="number"
          min={0}
          style={styles.input}
          placeholder="qty"
          onChange={e => handleQty(e.target.value)}
        />
        <input style={styles.btn} type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Form;
