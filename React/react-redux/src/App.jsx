import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import IncrementCounterApp from "./components/counter/IncrementCounterApp";
import DecrementCounterApp from "./components/counter/DecrementCounterApp";

function App() {
  return (
    <>
      <IncrementCounterApp />
      <DecrementCounterApp />
    </>
  );
}

export default App;
