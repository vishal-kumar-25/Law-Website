import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <i className="fa-solid fa-gavel"></i>
        <span>RightCounsel</span>
      </div>
      <ul className="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
     
      <button className="purchase-button">Purchase Now!</button>
      </ul>
    </nav>
  );
};

export default Navbar;


