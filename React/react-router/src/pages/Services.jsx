// src/pages/Services.jsx
import { NavLink, Outlet } from "react-router-dom";
import Service1 from "../components/Service1";
import Service3 from "../components/Service3";
// import ServicesOverview from "../components/ServicesOverview"; // Import the overview component

const Services = () => {
  return (
    <div>
      <h2>Our Services</h2>
      <nav className="services-nav">
        <ul>
          <li>
            <NavLink to="service1">Service 1</NavLink>
          </li>
          <li>
            <NavLink to="service2">Service 2</NavLink>
          </li>
          <li>
            <NavLink to="service3">Service 3</NavLink>
          </li>
        </ul>
      </nav>
      {/* This will render the matched child route */}
      <Outlet />
    </div>
  );
};

export default Services;
