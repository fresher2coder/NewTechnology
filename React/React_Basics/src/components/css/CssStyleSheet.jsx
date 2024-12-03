import React from "react";
import "./styles.css";
import Child from "./Child";
function CssStyleSheet() {
  const heading = {
    color: "wheat",
    fontSize: "2rem",
    letterSpacing: "2px",
    marginBottom: "20px",
  };
  return (
    <>
      <div className="con-stylesheet">
        <h1 style={heading}>CSS StyleSheet</h1>
        <p>This is styled using a css style sheet</p>
      </div>
      <Child />
    </>
  );
}

export default CssStyleSheet;
