import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { UserProvider } from "./context/UserContext";
import User from "./components/User";

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
