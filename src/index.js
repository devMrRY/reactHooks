import React from "react";
import ReactDom from "react-dom";
import Home from "./home";

const App = props => {
  return <Home />;
};

ReactDom.render(<App />, document.getElementById("root"));
