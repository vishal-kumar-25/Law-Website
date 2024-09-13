import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Image container */}
      <div className="image-container">
        <img 
          src="/law_image4.jpg" 
          alt="Law Firm" 
          className="home-image" 
        />
        {/* Overlay content */}
        <div className="content-overlay">
          <h1>Welcome to Our Law Firm</h1>
          <p>We offer expert legal services for all your needs.</p>
          <p>Our attorneys are skilled in corporate, family, and criminal law.</p>
          <form>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="email-input"
            />
            <button type="submit" className="submit-btn">Get it Now!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
