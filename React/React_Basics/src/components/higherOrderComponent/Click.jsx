import React, { useState } from "react";
import WithCounter from "./WithCounter";

function Click({ count, updateCount, name }) {
  return (
    <>
      <div className="btns">
        <button onClick={updateCount}>
          {name}: {count}
        </button>
      </div>
    </>
  );
}

export default WithCounter(Click);
