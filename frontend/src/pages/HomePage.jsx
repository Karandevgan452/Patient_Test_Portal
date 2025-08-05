// import React, { useState, useEffect } from "react";
// import "../css/home.css";
// import { useNavigate } from "react-router-dom";
// const HomePage = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const Navigate = useNavigate();
//   // Simulate user info - replace with actual logic
//   const userInfo = { token: false }; // Change to true to test logged-in state

//   useEffect(() => {
//     setIsVisible(true);

//     // Auto-rotate testimonials
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       text: "Quick, convenient, and reliable. Got my test results in just 24 hours!",
//       rating: 5,
//     },
//     {
//       name: "Michael Chen",
//       text: "The online booking system is so easy to use. Highly recommend!",
//       rating: 5,
//     },
//     {
//       name: "Emma Davis",
//       text: "Professional service and accurate results. Will definitely use again.",
//       rating: 5,
//     },
//   ];

//   const features = [
//     {
//       icon: "🔬",
//       title: "Comprehensive Testing",
//       description:
//         "Wide range of lab tests including blood work, diagnostics, and specialized screenings",
//     },
//     {
//       icon: "⚡",
//       title: "Fast Results",
//       description:
//         "Get your test results quickly with our efficient processing and digital delivery",
//     },
//     {
//       icon: "📱",
//       title: "Easy Booking",
//       description:
//         "Book your tests online in just a few clicks with our intuitive platform",
//     },
//     {
//       icon: "🔒",
//       title: "Secure & Private",
//       description:
//         "Your health data is protected with enterprise-grade security and privacy",
//     },
//   ];

//   const popularTests = [
//     { name: "Ultrasound Abdomen", price: "1200", time: "6 hours" },
//     {
//       name: "TSH (Thyroid Stimulating Hormone)",
//       price: "400",
//       time: "24 hours",
//     },
//     {
//       name: "RA Factor (Rheumatoid Arthritis)",
//       price: "650",
//       time: "48 hours",
//     },
//     { name: "X-Ray Chest", price: "400", time: "3 hours" },
//   ];

//   const handleGetStarted = () => {
  
//     if (userInfo?.token) {
//      Navigate("/tests");
//     } else {
//       Navigate("/register");
//     }
//   };

//   const handleBookTest = (testName) => {
//     console.log(`Booking test: ${testName}`);
//     // Add actual booking logic here
//   };

//   const handleViewAllTests = () => {
//    if (userInfo?.token) {
//      Navigate("/tests");
//    } else {
//      Navigate("/register");
//    }
//   };

//   return (
//     <div className={`homepage ${isVisible ? "visible" : ""}`}>
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-background">
//           <div className="floating-elements">
//             <div className="floating-element"></div>
//             <div className="floating-element"></div>
//             <div className="floating-element"></div>
//           </div>
//         </div>

//         <div className="hero-content">
//           <h1 className="hero-title">
//             Your Health,
//             <span className="gradient-text"> Simplified</span>
//           </h1>
//           <p className="hero-subtitle">
//             Book lab tests online, get results fast, and take control of your
//             health journey with our comprehensive digital health platform.
//           </p>

//           <div className="hero-actions">
//             <button className="cta-button primary" onClick={handleGetStarted}>
//               {userInfo?.token ? "Browse Tests" : "Get Started"}
//             </button>
//             <button
//               className="cta-button secondary"
//               onClick={handleViewAllTests}
//             >
//               View Test Catalog
//             </button>
//           </div>

//           <div className="hero-stats">
//             <div className="stat">
//               <span className="stat-number">50k+</span>
//               <span className="stat-label">Tests Completed</span>
//             </div>
//             <div className="stat">
//               <span className="stat-number">24hr</span>
//               <span className="stat-label">Average Results</span>
//             </div>
//             <div className="stat">
//               <span className="stat-number">99.9%</span>
//               <span className="stat-label">Accuracy Rate</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features-section">
//         <div className="container">
//           <h2 className="section-title">
//             Why Choose Our Digital Health Platform?
//           </h2>
//           <div className="features-grid">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="feature-card"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="feature-icon">{feature.icon}</div>
//                 <h3 className="feature-title">{feature.title}</h3>
//                 <p className="feature-description">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Popular Tests Section */}
//       <section className="popular-tests-section">
//         <div className="container">
//           <h2 className="section-title">Popular Lab Tests</h2>
//           <div className="tests-grid">
//             {popularTests.map((test, index) => (
//               <div
//                 key={index}
//                 className="test-card"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <h3 className="test-name">{test.name}</h3>
//                 <div className="test-details">
//                   <span className="test-price">{test.price}</span>
//                   <span className="test-time">Results in {test.time}</span>
//                 </div>
//                 <button
//                   className="book-test-btn"
//                   onClick={() => handleBookTest(test.name)}
//                 >
//                   Book Now
//                 </button>
//               </div>
//             ))}
//           </div>
//           <div className="view-all-tests">
//             <button className="view-all-btn" onClick={handleViewAllTests}>
//               View All Tests →
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="how-it-works-section">
//         <div className="container">
//           <h2 className="section-title">How It Works</h2>
//           <div className="steps-container">
//             <div className="step">
//               <div className="step-number">1</div>
//               <h3 className="step-title">Choose Your Test</h3>
//               <p className="step-description">
//                 Browse our comprehensive catalog and select the tests you need
//               </p>
//             </div>
//             <div className="step-connector"></div>
//             <div className="step">
//               <div className="step-number">2</div>
//               <h3 className="step-title">Book Online</h3>
//               <p className="step-description">
//                 Schedule your appointment at your convenient time and location
//               </p>
//             </div>
//             <div className="step-connector"></div>
//             <div className="step">
//               <div className="step-number">3</div>
//               <h3 className="step-title">Get Results</h3>
//               <p className="step-description">
//                 Receive your results digitally within 24-48 hours
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials-section">
//         <div className="container">
//           <h2 className="section-title">What Our Patients Say</h2>
//           <div className="testimonial-carousel">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className={`testimonial ${
//                   index === currentTestimonial ? "active" : ""
//                 }`}
//               >
//                 <div className="testimonial-content">
//                   <div className="stars">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <span key={i} className="star">
//                         ⭐
//                       </span>
//                     ))}
//                   </div>
//                   <p className="testimonial-text">"{testimonial.text}"</p>
//                   <p className="testimonial-author">- {testimonial.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="testimonial-dots">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 className={`dot ${
//                   index === currentTestimonial ? "active" : ""
//                 }`}
//                 onClick={() => setCurrentTestimonial(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="container">
//           <div className="cta-content">
//             <h2 className="cta-title">Ready to Take Control of Your Health?</h2>
//             <p className="cta-description">
//               Join thousands of patients who trust our digital health platform
//               for their lab testing needs.
//             </p>
//             <button
//               className="cta-button primary large"
//               onClick={handleGetStarted}
//             >
//               {userInfo?.token
//                 ? "Browse Tests Now"
//                 : "Start Your Health Journey"}
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from "react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Simulate user info - replace with actual logic
  const userInfo = { token: false }; // Change to true to test logged-in state

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "🔬",
      title: "Comprehensive Testing",
      description:
        "Wide range of lab tests including blood work, diagnostics, and specialized screenings",
    },
    {
      icon: "⚡",
      title: "Fast Results",
      description:
        "Get your test results quickly with our efficient processing and digital delivery",
    },
    {
      icon: "📱",
      title: "Easy Booking",
      description:
        "Book your tests online in just a few clicks with our intuitive platform",
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description:
        "Your health data is protected with enterprise-grade security and privacy",
    },
  ];

  const popularTests = [
    { name: "Ultrasound Abdomen", price: "₹1200", time: "6 hours" },
    {
      name: "TSH (Thyroid Stimulating Hormone)",
      price: "₹400",
      time: "24 hours",
    },
    {
      name: "RA Factor (Rheumatoid Arthritis)",
      price: "₹650",
      time: "48 hours",
    },
    { name: "X-Ray Chest", price: "₹400", time: "3 hours" },
  ];

  const handleGetStarted = () => {
    if (userInfo?.token) {
      navigate("/tests");
    } else {
      navigate("/register");
    }
  };

  const handleBookTest = (testName) => {
    console.log(`Booking test: ${testName}`);
    // Add actual booking logic here
  };

  const handleViewAllTests = () => {
    if (userInfo?.token) {
      navigate("/tests");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className={`homepage ${isVisible ? "visible" : ""}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Your Health,
            <span className="gradient-text"> Simplified</span>
          </h1>
          <p className="hero-subtitle">
            Book lab tests online, get results fast, and take control of your
            health journey with our comprehensive digital health platform.
          </p>

          <div className="hero-actions">
            <button className="cta-button primary" onClick={handleGetStarted}>
              {userInfo?.token ? "Browse Tests" : "Get Started"}
            </button>
            <button
              className="cta-button secondary"
              onClick={handleViewAllTests}
            >
              View Test Catalog
            </button>
            <button
              className="cta-button secondary"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50k+</span>
              <span className="stat-label">Tests Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">24hr</span>
              <span className="stat-label">Average Results</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Accuracy Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">
            Why Choose Our Digital Health Platform?
          </h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tests Section */}
      <section className="popular-tests-section">
        <div className="container">
          <h2 className="section-title">Popular Lab Tests</h2>
          <div className="tests-grid">
            {popularTests.map((test, index) => (
              <div
                key={index}
                className="test-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="test-name">{test.name}</h3>
                <div className="test-details">
                  <span className="test-price">{test.price}</span>
                  <span className="test-time">Results in {test.time}</span>
                </div>
                <button
                  className="book-test-btn"
                  onClick={() => handleBookTest(test.name)}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
          <div className="view-all-tests">
            <button className="view-all-btn" onClick={handleViewAllTests}>
              View All Tests →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
