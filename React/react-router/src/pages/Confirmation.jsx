// src/pages/Confirmation.jsx

import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const { name, destination, date } = location.state || {};

  return (
    <div>
      <h2>Booking Confirmation</h2>
      {name ? (
        <div>
          <p>Thank you, {name}!</p>
          <p>
            Your ticket to {destination} is booked for {date}.
          </p>
        </div>
      ) : (
        <p>No booking details available.</p>
      )}
    </div>
  );
};

export default Confirmation;
