import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <div className="footer-brand">LabTestify</div>
        <p className="footer-description">
          Your trusted partner for reliable and accurate laboratory testing
          services.
        </p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/tests">Lab Tests</Link>
          <Link to="/bookings">Bookings</Link>
        </div>
      </div>

      <div className="footer-section">
        <h4>Contact Info</h4>
        <div className="contact-info">
          <p>medicare@gmail.com</p>
          <p>+91 7988779578</p>
          <p>123 Medical Center, Chandigarh</p>
        </div>
      </div>

      <div className="footer-section">
        <h4>Services</h4>
        <div className="services-list">
          <span>Blood Tests</span>
          <span>Urine Analysis</span>
          <span>X-Ray Imaging</span>
          <span>ECG Tests</span>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <span className="footer-copy">
        &copy; {new Date().getFullYear()} Medicare. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
