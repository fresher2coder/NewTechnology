import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import LeftSideBar from "./components/layout/LeftSideBar";
import RightSideBar from "./components/layout/RightSideBar";

function App() {
  return (
    <>
      <Header />
      <section className="main-content">
        <LeftSideBar />
        <Main />
        <RightSideBar />
      </section>
      <Footer />
    </>
  );
}

export default App;
