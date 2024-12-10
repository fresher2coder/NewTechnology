import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <div className="App">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
