import "../css/labtestpage.css";

export default function TestCard({ test, onBook }) {
  return (
    <div className="test-card">
      <div className="test-header">
        <div className="test-icon">
          <span>🧪</span>
        </div>
        <h3 className="test-name">{test.name}</h3>
      </div>
      <p className="test-description">{test.description}</p>
      <div className="test-details">
        <div className="test-price">₹{test.price}</div>
        <div className="test-duration">30 min</div>
      </div>
      <button className="book-test-btn" onClick={() => onBook(test._id)}>
        Book Test
      </button>
    </div>
  );
}
