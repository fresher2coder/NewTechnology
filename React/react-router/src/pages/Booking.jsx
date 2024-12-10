// src/pages/Booking.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    destination: "",
    date: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    //form validation

    navigate("/confirmation", { state: bookingDetails });
  };

  return (
    <div>
      <h2>Book Your Ticket</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={bookingDetails.name}
            onChange={(e) =>
              setBookingDetails({ ...bookingDetails, name: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={bookingDetails.destination}
            onChange={(e) =>
              setBookingDetails({
                ...bookingDetails,
                destination: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="date">Travel Date:</label>
          <input
            type="date"
            id="date"
            value={bookingDetails.date}
            onChange={(e) =>
              setBookingDetails({ ...bookingDetails, date: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
