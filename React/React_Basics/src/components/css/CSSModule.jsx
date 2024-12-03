import React from "react";
import styles from "./styles.module.css";
import Child from "./Child";
function CssModule() {
  const heading = {
    color: "wheat",
    fontSize: "2rem",
    letterSpacing: "2px",
    marginBottom: "20px",
  };
  return (
    <>
      <div className={styles.conStylesheet}>
        <h1 style={heading}>CSS Module</h1>
        <p>This is styled using a css module</p>
      </div>
      <Child />
    </>
  );
}

export default CssModule;
