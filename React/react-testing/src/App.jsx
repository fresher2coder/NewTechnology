import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserList from "./components/testing-mock-api/UserList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserList />
    </>
  );
}

export default App;
