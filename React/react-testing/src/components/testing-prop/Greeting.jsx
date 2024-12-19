import React from "react";

function Greeting({ name }) {
  return (
    <>
      <h1 aria-label="message">Welcome {name ? name : "Guest"}!</h1>
    </>
  );
}

export default Greeting;
