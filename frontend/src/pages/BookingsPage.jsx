// src/pages/BookingsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/bookings.css";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleDownloadReport = async (bookingId) => {
    try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo?.token) {
      alert("User not logged in");
      return;
    }
      const response = await axios.get(
        `http://localhost:3000/api/report/download`,{
        
          responseType: "blob", // Important for binary file
          headers : {
            Authorization : `Bearer ${userInfo.token}` ,
          },
    });

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "TestReport.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading report:", error);
      alert("Failed to download report.");
    }
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (!userInfo || !userInfo.token || !userInfo.id) {
          setError("User not logged in.");
          return;
        }

        const res = await axios.get(
          `http://localhost:3000/api/bookings/${userInfo.id}`,
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );

        setBookings(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch bookings.");
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="bookings-page">
      <h2>Your Booked Tests</h2>
      {error && <p className="error">{error}</p>}

      {bookings.length === 0 && !error && <p>You have no bookings yet.</p>}

      <div className="bookings-grid">
        {bookings.map((booking) => (
          <div className="booking-card" key={booking._id}>
            <h3>{booking.testId?.name}</h3>
            <p>{booking.testId?.description?.slice(0, 60)}...</p>
            <p>
              <strong>Price:</strong> ₹{booking.testId?.price}
            </p>
            <p>
              <strong>Booking Date:</strong>{" "}
              {new Date(booking.bookingDate).toLocaleDateString()}
            </p>
            <button
              className="secondary"
              onClick={() => setSelectedBooking(booking)}
            >
              View
            </button>{" "}
            <button onClick={() => handleDownloadReport(booking._id)}>
              Get Report
            </button>
          </div>
        ))}
      </div>
      {selectedBooking && (
        <div className="modal-overlay" onClick={() => setSelectedBooking(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedBooking.testId?.name}</h2>
            <p>
              <strong>Full Description:</strong>{" "}
              {selectedBooking.testId?.description}
            </p>
            <p>
              <strong>Price:</strong> ₹{selectedBooking.testId?.price}
            </p>
            <p>
              <strong>Booking Date:</strong>{" "}
              {new Date(selectedBooking.bookingDate).toLocaleString()}
            </p>
            <button onClick={() => setSelectedBooking(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingsPage;
