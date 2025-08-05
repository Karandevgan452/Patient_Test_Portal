import React from "react";
import "../css/labtests.css";

export default function TestCard({ test, onBook }) {
  return (
    <div className="test-card">
      <div className="test-card-header">
        <h3>{test.name}</h3>
        <span className="test-price">₹{test.price}</span>
      </div>
      <p className="test-description">{test.description}</p>
      <button className="book-btn" onClick={() => onBook(test._id)}>
        Book Test
      </button>
    </div>
  );
}
