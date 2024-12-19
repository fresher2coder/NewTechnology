import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import IncrementCounterApp from "./components/counter/IncrementCounterApp";
import DecrementCounterApp from "./components/counter/DecrementCounterApp";
import IncrementByAmountApp from "./components/counter/IncreamentByAmountApp";
import TodoApp from "./components/todo/TodoApp";
import PatientRoute from "./routes/PatientRoute";

function App() {
  return (
    <>
      {/* counter  */}
      {/* <IncrementCounterApp />
      <DecrementCounterApp />
      <IncrementByAmountApp /> */}

      {/* todo-list  */}
      {/* <TodoApp /> */}

      {/* patient history  */}
      <PatientRoute />
    </>
  );
}

export default App;
