import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <h1><b>Our Services</b></h1>
      <div className="service-boxes">
        <div className="service-box">
          <h2>Corporate Law</h2>
          <p>Expert legal services for corporate entities, contracts, and disputes.</p>
        </div>
        <div className="service-box">
          <h2>Criminal Law</h2>
          <p>Comprehensive legal defense for all criminal cases.</p>
        </div>
        <div className="service-box">
          <h2>Family Law</h2>
          <p>We handle family disputes, divorce cases, and child custody.</p>
        </div>
        <div className="service-box">
          <h2>Intellectual Property Law</h2>
          <p>Protect your intellectual property with our legal expertise.</p>
        </div>
        <div className="service-box">
          <h2>Employment Law</h2>
          <p>Legal support for employment contracts, disputes, and rights.</p>
        </div>
        <div className="service-box">
          <h2>Tax Law</h2>
          <p>Guidance on tax compliance, disputes, and planning.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
