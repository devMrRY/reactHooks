import React from "react";

const Filter = ({getSort}) => {

  return (
    <>
      <select onChange={e=>getSort(e.target.value)}>
        <option>name</option>
        <option>qty</option>
        <option>time</option>
      </select>
      {/* <button>^</button> */}
    </>
  );
};

export default Filter;
