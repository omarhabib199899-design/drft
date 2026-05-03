import React from "react";
import "./Hero.css";
// Importing assets using your file names from the sidebar
import heroImg from "../assets/hero.png";
import homeBanner from "../assets/homeBanner.png";
import { useState } from "react";
import About from "./About";
import cairoImg from "../assets/cairo.png";
import sahelImg from "../assets/sahel.png";
import gounaImg from "../assets/gouna.png";
import sharmImg from "../assets/sharm.png";
import banner from "../assets/new.png";

// The Home component receives the onNavigate function as a prop to handle navigation
//i want to go rto about page when i click on about us button in the nav bar, and go to home page when i click on home button in the nav bar
const Home = ({ onNavigate, activeCity, setActiveCity }) => {
  return (
    <div className="hero-wrapper">
      {/* 1. Floating Nav */}
      <nav className="nav-glass">
        {/* Now onNavigate will be recognized as the function passed from App.jsx */}
        <button onClick={() => onNavigate("home")} className="nav-btn active">
          Home
        </button>
        <button onClick={() => onNavigate("about")} className="nav-btn">
          About Us
        </button>
        <button onClick={() => onNavigate("faqs")} className="nav-btn">
          FAQs
        </button>
      </nav>

      {/* 2. The 4-Box Background Grid */}
      <div className="bg-grid">
        <div
          className="grid-cell"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${cairoImg})`,
          }}
        >
          <div className="city-text">
            <h3 style={{ opacity: 0.4 }}>Cairo</h3>
            <p style={{ opacity: 0.4 }}>234 events</p>
          </div>
        </div>
        <div
          className="grid-cell"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${sahelImg})`,
          }}
        >
          <div className="city-text">
            <h3 style={{ opacity: 0.4 }}>Sahel</h3>
            <p style={{ opacity: 0.4 }}>156 events</p>
          </div>
        </div>
        <div
          className="grid-cell"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${gounaImg})`,
          }}
        >
          <div className="city-text">
            <h3 style={{ opacity: 0.4 }}>Gouna</h3>
            <p style={{ opacity: 0.4 }}>198 events</p>
          </div>
        </div>
        <div
          className="grid-cell"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${sharmImg})`,
          }}
        >
          <div className="city-text">
            <h3 style={{ opacity: 0.4 }}>Sharm El Sheikh</h3>
            <p style={{ opacity: 0.4 }}>167 events</p>
          </div>
        </div>
      </div>

      {/* 3. The Centered Overlay (Drift + Search) */}
      <div className="hero-content">
        <div className="logo-wrap">
          {/* <span className="plane-icon">✈️</span>
          <h1 className="drift-title">Drift</h1> */}
          <img src={banner} alt="Drift Banner" srcset="" />
        </div>
        <p className="tagline">
          Explore Egypt's hidden gems and unforgettable experiences
        </p>

        {/* <div className="search-bar-pill">
          <span className="pin-icon">📍</span>
          <input
            type="text"
            placeholder="Which Egyptian city are you exploring?"
          />
          <button className="discover-button">Discover</button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
