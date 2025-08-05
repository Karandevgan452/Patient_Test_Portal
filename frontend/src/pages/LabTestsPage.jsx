import  { useEffect, useState } from "react";
import TestCard from "../components/TestCard";
import TestBookingForm from "../components/TestBookingForm";
import "../css/labTestPage.css";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import API from "../services/api";

const LabTestsPage = () => {
  const [tests, setTests] = useState([]);
  const [error, setError] = useState("");
  const [selectedTestId, setSelectedTestId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const fetchTests = async () => {
      try {
        setLoading(true);
        const res = await API.get("/tests");
        setTests(res.data);
      } catch (err) {
        toast.error("Failed to fetch tests.");
        console.error(err);
        setError("Failed to fetch tests.");
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  const handleBookTest = (testId) => {
    setSelectedTestId(testId);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedTestId(null);
  };

  const handleBookingSubmit = async ({ testId, bookingDate }) => {
    try {
      const res = await API.post(
        "/bookings",
        {
          testId,
          patientId: userInfo.id,
          bookingDate,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      toast.success("Test booked successfully!");
      navigate("/bookings");
    } catch (err) {
      toast.error(
        "Booking failed: " + err.response?.data?.message || err.message
      );
    } finally {
      handleModalClose();
    }
  };

  if (loading) {
    return (
      <div className="lab-tests-page">
        <div className="lab-tests-container">
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Loading available tests...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lab-tests-page">
      <div className="lab-tests-container">
        <div className="lab-tests-header">
          <h1 className="lab-tests-title">Available Lab Tests</h1>
          <p className="lab-tests-subtitle">
            Browse our comprehensive range of diagnostic tests and book your
            appointment online
          </p>
        </div>

        {error && <div className="error">{error}</div>}

        {tests.length === 0 && !error && (
          <div className="no-results">
            <h3>No tests available</h3>
            <p>Please check back later for available tests.</p>
          </div>
        )}

        <div className="tests-grid">
          {tests.map((test) => (
            <TestCard key={test._id} test={test} onBook={handleBookTest} />
          ))}
        </div>

        {showModal && (
          <TestBookingForm
            testId={selectedTestId}
            onClose={handleModalClose}
            onSubmit={handleBookingSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default LabTestsPage;