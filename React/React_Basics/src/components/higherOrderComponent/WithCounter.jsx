import React, { useState } from "react";

const WithCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(props.initialValue);

    const updateCount = () => {
      setCount((prev) => prev + props.incrementValue);
    };

    return (
      <>
        <WrappedComponent {...props} count={count} updateCount={updateCount} />
      </>
    );
  };
};

export default WithCounter;
