import React, { useState } from "react";
import WithCounter from "./WithCounter";

function Hover({ count, updateCount, name }) {
  return (
    <>
      <div className="btns">
        <button onMouseOver={updateCount}>
          {name}: {count}
        </button>
      </div>
    </>
  );
}

export default WithCounter(Hover);
