import React from "react";

function Container(props) {
  let { name, children } = props;
  props.name = "Mutable props";
  name = "Mutable";
  return (
    <>
      <div className="card">
        <h1>{props.name}</h1>
        {children}
      </div>
    </>
  );
}

export default Container;
