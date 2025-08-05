// src/pages/LabTestsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import TestCard from "../components/TestCard";
import TestBookingForm from "../components/TestBookingForm";
import "../css/labtests.css";
import { toast } from "react-toastify";

const LabTestsPage = () => {
  const [tests, setTests] = useState([]);
  const [error, setError] = useState("");
  const [selectedTestId, setSelectedTestId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/tests");
        setTests(res.data);
      } catch (err) {
        toast.error("Failed to fetch tests.");
        console.error(err);
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
//         console.log("Booking submission →", {
//   testId,
//   patientId: userInfo.id,
//   bookingDate,
// });

      const res = await axios.post(
        "http://localhost:3000/api/bookings",
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
    } catch (err) {
      toast.error("Booking failed: " + err.response?.data?.message || err.message);
    } finally {
      handleModalClose();
    }
  };

  return (
    <div className="lab-tests-page">
      <div style={{ paddingTop: "80px" }}></div>
      <h2>Available Lab Tests</h2>
      {error && <p className="error">{error}</p>}
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
  );
};

export default LabTestsPage;