import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Confirmation from "../pages/Confirmation";
import Services from "../pages/Services";
import Service1 from "../components/Service1";
import Service2 from "../components/Service2";
import Service3 from "../components/Service3";
import ServicesOverview from "../components/ServicesOverview";
import Users from "../pages/Users";
import User from "../components/User";

function AppRouter() {
  const loggedUser = false;
  return (
    <>
      <Router>
        {!loggedUser && (
          <MainLayout>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/confirmation" element={<Confirmation />} />

              <Route path="/services" element={<Services />}>
                <Route index element={<ServicesOverview />} />
                <Route path="service1" element={<Service1 />} />
                <Route path="service2" element={<Service2 />} />
                <Route path="service3" element={<Service3 />} />
              </Route>

              <Route path="/users" element={<Users />}>
                <Route path=":userId" element={<User />} />
              </Route>
            </Routes>
          </MainLayout>
        )}

        {loggedUser && <h1>User Layout</h1>}
      </Router>
    </>
  );
}

export default AppRouter;
