import { useState } from "react";
import "../css/testbookingform.css";

export default function BookingFormModal({ testId, onClose, onSubmit }) {
  const [bookingDate, setBookingDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookingDate) return alert("Please select a booking date & time");
    onSubmit({ testId, bookingDate });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Select Booking Date & Time</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="bookingDate">Preferred Date & Time</label>
            <input
              id="bookingDate"
              type="datetime-local"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="submit-btn">
              Book Now
            </button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
