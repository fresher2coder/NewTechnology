import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Confirmation from "../pages/Confirmation";

function AppRouter() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default AppRouter;
