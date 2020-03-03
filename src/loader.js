import React from "react";
import Logo from "react-loader-spinner";

const Loader = () => {
  const styles = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <div style={styles}>
      <Logo type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loader;
