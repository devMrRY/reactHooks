import React, { useRef, useState, useEffect } from "react";

const Form = ({ getItem }) => {
  console.log('in form');
  
  const styles = {
    form: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    qty: {
      width: "50px"
    }
  };
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
      <form onSubmit={ handleSubmit} >
      <input
        ref={inputRef}
        placeholder="Enter Name"
        onChange={e => handleFormChange(e.target.value)}
      />
      <input
        type="number"
        min={0}
        style={styles.qty}
        placeholder="qty"
        onChange={e => handleQty(e.target.value)}
      />
      <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Form;
