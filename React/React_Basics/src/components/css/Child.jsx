import React from "react";

function Child() {
  const heading = {
    color: "lightGreen",
    fontSize: "1.5rem",
    letterSpacing: "3px",
    marginBottom: "30px",
  };
  return (
    <>
      <div className="con-stylesheet">
        <h1 style={heading}>Child</h1>
        <p>This is styled using a css style sheet</p>
      </div>
    </>
  );
}

export default Child;
