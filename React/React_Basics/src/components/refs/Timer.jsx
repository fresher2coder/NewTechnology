import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const timer = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    console.log("started");
    if (!timer.current) {
      timer.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    clearInterval(timer.current);
    timer.current = null;
    setIsRunning(false);
  };

  const stopTimer = () => {
    clearInterval(timer.current);
    timer.current = null;
    setCount(0);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(timer.current);
      timer.current = null;
    };
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h1 style={{ textAlign: "center" }}>Timer: {count}</h1>
          <div className="btns">
            <button disabled={isRunning} onClick={startTimer}>
              Start
            </button>
            <button disabled={!isRunning} onClick={pauseTimer}>
              Pause
            </button>
            <button disabled={!isRunning} onClick={stopTimer}>
              Stop
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
