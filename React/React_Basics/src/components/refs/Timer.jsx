import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const timer = useRef(null);
  const startTimer = () => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h1 style={{ textAlign: "center" }}>Timer: {count}</h1>
          <div className="btns">
            <button onClick={startTimer}>Start</button>
            <button>Pause</button>
            <button>Stop</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
