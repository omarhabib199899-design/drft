import React from "react";
import "./Hero.css";
import driftLogo from "../assets/drift-logo.jpeg";
import About from "./About";

// The Home component receives the onNavigate function as a prop to handle navigation
const Home = ({ onNavigate }) => {
  return (
    <>
      <div className="hero-wrapper">
        {/* 1. Floating Nav */}
        <nav className="nav-glass">
          <button onClick={() => onNavigate("home")} className="nav-btn active">
            Home
          </button>
          <button onClick={() => onNavigate("faqs")} className="nav-btn">
            FAQs
          </button>
        </nav>

        {/* 2. Dark gradient hero background */}
        <div className="hero-dark-bg">
          <div className="hero-glow hero-glow-teal"></div>
          <div className="hero-glow hero-glow-orange"></div>
        </div>

        {/* 3. The Centered Overlay (Drift + Tagline) */}
        <div className="hero-content">
          <div className="logo-wrap">
            <img src={driftLogo} alt="Drift Logo" className="drift-logo-img" />
          </div>
          <h1 className="drift-title">Drift</h1>
          <p className="tagline">
            Explore Egypt's hidden gems and unforgettable experiences
          </p>
        </div>
      </div>

      {/* 4. About Us now lives right under the Hero on the Home page */}
      <About />
    </>
  );
};

export default Home;
