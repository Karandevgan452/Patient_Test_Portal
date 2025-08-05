// BookingFormModal.jsx
import React, { useState } from "react";
import "../css/TestBookingForm.css";

export default function BookingFormModal({ testId, onClose, onSubmit }) {
  const [bookingDate, setBookingDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookingDate) return alert("Please select a booking date & time");
    onSubmit({ testId, bookingDate });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Select Booking Date & Time</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="datetime-local"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
          />
          <div className="modal-buttons">
            <button type="submit">Book Now</button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
