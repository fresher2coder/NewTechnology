import React from "react";

function Child({ add }) {
  return (
    <>
      <div className="btns">
        <button
          onClick={() => {
            add(10, 20);
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default Child;
