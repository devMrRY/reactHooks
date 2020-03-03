import React, { useRef, useState, useEffect } from "react";

const Form = ({ getItem }) => {
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
  const qtyRef = useRef();
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
    inputRef.current.value = "";
    qtyRef.current.value = "";
  };
  return (
    <div style={styles.form}>
      <input
        ref={inputRef}
        placeholder="Enter Name"
        onChange={e => handleFormChange(e.target.value)}
      />
      <input
        ref={qtyRef}
        type="number"
        min={0}
        style={styles.qty}
        placeholder="qty"
        onChange={e => handleQty(e.target.value)}
      />
      <input type="submit" value="Add" onClick={e => handleSubmit(e)} />
    </div>
  );
};

export default Form;
