import React, { useState, useEffect } from "react";
import "../css/about.css";
import { useNavigate } from "react-router-dom";
const AboutPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Quick, convenient, and reliable. Got my test results in just 24 hours!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "The online booking system is so easy to use. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emma Davis",
      text: "Professional service and accurate results. Will definitely use again.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-hero-content">
            <h1>About MediCare</h1>
            <p>
              We're revolutionizing healthcare by making lab testing accessible,
              convenient, and transparent. Our digital platform connects
              patients with trusted laboratories for accurate and timely
              results.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="about-container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Choose Your Test</h3>
              <p className="step-description">
                Browse our comprehensive catalog and select the tests you need
              </p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Book Online</h3>
              <p className="step-description">
                Schedule your appointment at your convenient time and location
              </p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Get Results</h3>
              <p className="step-description">
                Receive your results digitally within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="about-container">
          <h2 className="section-title">What Our Patients Say</h2>
          <div className="testimonial-carousel">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial ${
                  index === currentTestimonial ? "active" : ""
                }`}
              >
                <div className="testimonial-content">
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-author">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${
                  index === currentTestimonial ? "active" : ""
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="about-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Take Control of Your Health?</h2>
            <p className="cta-description">
              Join thousands of patients who trust our digital health platform
              for their lab testing needs.
            </p>
            <button
              className="cta-button primary large"
              onClick={() => navigate("/register")}
            >
              Start Your Health Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
