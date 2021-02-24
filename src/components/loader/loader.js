import React from "react";
import "./loader.css";

const Loader = ({ height }) => {
  return (
    <div className="loaderWrapper" style={height && { height: height }}>
      <div className="loader" />
    </div>
  );
};

export default Loader;
