
import  { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../css/bookings.css";
import API from "../services/api";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleDownloadReport = async (bookingId) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo?.token) {
        alert("User not logged in");
        return;
      }
      const response = await API.get(
        `/report/download`,
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

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
        setLoading(true);
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (!userInfo || !userInfo.token || !userInfo.id) {
          setError("User not logged in.");
          return;
        }

        const res = await API.get(
          `/bookings/${userInfo.id}`,
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
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <div className="bookings-page">
        <div className="bookings-container">
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Loading your bookings...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bookings-page">
      <div className="bookings-container">
        <div className="bookings-header">
          <h1 className="bookings-title">Your Booked Tests</h1>
          <p className="bookings-subtitle">
            View and manage your test bookings and download reports
          </p>
        </div>

        {error && <div className="error">{error}</div>}

        {bookings.length === 0 && !error && (
          <div className="empty-bookings">
            <h3>No bookings found</h3>
            <p>
              You haven't booked any tests yet. Start by browsing our available
              tests.
            </p>
            <a href="/lab-tests" className="browse-tests-btn">
              Browse Tests
            </a>
          </div>
        )}

        <div className="bookings-grid">
          {bookings.map((booking, index) => (
            <div className="booking-card" key={booking._id}>
              <div className="booking-header">
                <h3 className="booking-test-name">{booking.testId?.name}</h3>
                {(() => {
                  const status = index % 2 === 0 ? "Completed" : "Pending";
                  return (
                    <span className={`booking-status ${status.toLowerCase()}`}>
                      {status}
                    </span>
                  );
                })()}
              </div>

              <div className="booking-details">
                <div className="booking-detail">
                  <span className="detail-label">Description:</span>
                  <span className="detail-value">
                    {booking.testId?.description || "No description available"}
                  </span>
                </div>
                <div className="booking-detail">
                  <span className="detail-label">Price:</span>
                  <span className="detail-value">₹{booking.testId?.price}</span>
                </div>
                <div className="booking-detail">
                  <span className="detail-label">Booking Date:</span>
                  <span className="detail-value">
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="booking-detail">
                  <span className="detail-label">Booking Time:</span>
                  <span className="detail-value">
                    {new Date(booking.bookingDate).toLocaleTimeString()}
                  </span>
                </div>
              </div>

              <div className="booking-actions">
                <button
                  className="booking-btn secondary"
                  onClick={() => setSelectedBooking(booking)}
                >
                  View Details
                </button>
                {index % 2 === 0 ? (
                  <button
                    className="booking-btn primary"
                    onClick={() => handleDownloadReport(booking._id)}
                  >
                    Get Report
                  </button>
                ) : (
                  <button
                    className="booking-btn primary disabled"
                    onClick={() =>
                      toast.error(
                        "Report not ready yet. Please wait until it's completed."
                      )
                    }
                  >
                    Get Report
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedBooking && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedBooking(null)}
          >
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedBooking.testId?.name}</h2>
                <button
                  className="close-btn"
                  onClick={() => setSelectedBooking(null)}
                >
                  ×
                </button>
              </div>
              <div className="modal-content">
                <div className="modal-detail">
                  <strong>Full Description:</strong>
                  <p>
                    {selectedBooking.testId?.description ||
                      "No description available"}
                  </p>
                </div>
                <div className="modal-detail">
                  <strong>Price:</strong> ₹{selectedBooking.testId?.price}
                </div>
                <div className="modal-detail">
                  <strong>Booking Date:</strong>{" "}
                  {new Date(selectedBooking.bookingDate).toLocaleDateString()}
                </div>
                <div className="modal-detail">
                  <strong>Booking Time:</strong>{" "}
                  {new Date(selectedBooking.bookingDate).toLocaleTimeString()}
                </div>
                <div className="modal-actions">
                  {(() => {
                    const bookingIndex = bookings.findIndex(
                      (b) => b._id === selectedBooking._id
                    );
                    const isCompleted = bookingIndex % 2 === 0;

                    return isCompleted ? (
                      <button
                        className="booking-btn primary"
                        onClick={() =>
                          handleDownloadReport(selectedBooking._id)
                        }
                      >
                        Download Report
                      </button>
                    ) : (
                      <button
                        className="booking-btn primary disabled"
                        onClick={() =>
                          toast.error(
                            "Report not ready yet. Please wait until it's completed."
                          )
                        }
                      >
                        Download Report
                      </button>
                    );
                  })()}

                  <button
                    className="booking-btn secondary"
                    onClick={() => setSelectedBooking(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
