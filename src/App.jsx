import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import './App.css'; // Ensure you have some styling for sections if necessary

function App() {
  return (
    <>
      <Navbar />
      {/* Assign IDs to each section for scrolling */}
      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
