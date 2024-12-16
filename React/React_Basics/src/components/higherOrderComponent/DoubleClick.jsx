import React, { useState } from "react";
import WithCounter from "./WithCounter";

function DoubleClick({ count, updateCount, name }) {
  return (
    <>
      <div className="btns">
        <button onDoubleClick={updateCount}>
          {name}: {count}
        </button>
      </div>
    </>
  );
}

export default WithCounter(DoubleClick);
