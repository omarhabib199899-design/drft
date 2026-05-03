import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./Experiences.css";
import cairoImg from "../assets/cairo.png";
import { useState } from "react";

const Experiences = ({ activeCity, setActiveCity }) => {
  // Mapping cities to icons based on your design
  const cities = [
    { name: "All", icon: "🌍" },
    { name: "Cairo", icon: "🔺" },
    { name: "Alexandria", icon: "🌊" },
    { name: "Sahel", icon: "🌊" },
    { name: "Gouna", icon: "🌊" },
    { name: "Aswan", icon: "🌴" },
    { name: "Hurghada", icon: "🌊" },
    { name: "Luxor", icon: "🔺" },
    { name: "Dahab", icon: "⛰️" },
    { name: "Siwa", icon: "🌴" },
    { name: "Marsa Alam", icon: "🌊" },
  ];

  const experiences = [
    {
      id: 1,
      title: "Pyramids Night Show",
      location: "Cairo",
      date: "Apr 18, 2026",
      tagColor: "#f39c12",
      //use cairoImg
      imageUrl: cairoImg,
    },
    {
      id: 2,
      title: "Sahel Beach Festival",
      location: "Sahel",
      date: "Apr 12, 2026",
      tagColor: "#00d2ff",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Gouna Film Festival",
      location: "Gouna",
      date: "Apr 20, 2026",
      tagColor: "#e74c3c",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      title: "Sharm El Sheikh Diving",
      location: "Sharm El Sheikh",
      date: "Apr 25, 2026",
      tagColor: "#3498db",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 5,
      title: "Luxor Temple Tour",
      location: "Luxor",
      date: "Apr 30, 2026",
      tagColor: "#9b59b6",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 6,
      title: "Aswan Nile Cruise",
      location: "Aswan",
      date: "May 5, 2026",
      tagColor: "#1abc9c",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 7,
      title: "Dahab Mountain Hike",
      location: "Dahab",
      date: "May 10, 2026",
      tagColor: "#e67e22",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 8,
      title: "Siwa Oasis Retreat",
      location: "Siwa",
      date: "May 15, 2026",
      tagColor: "#2ecc71",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 9,
      title: "Marsa Alam Snorkeling",

      location: "Marsa Alam",
      date: "May 20, 2026",
      tagColor: "#2980b9",
      imageUrl: "https://via.placeholder.com/300x200",
    },

    {
      id: 10,
      title: "Alexandria Cultural Fest",
      location: "Alexandria",
      date: "May 25, 2026",
      tagColor: "#8e44ad",

      imageUrl: "https://via.placeholder.com/300x200",
    },
  ];
  const filteredExperiences =
    activeCity === "All"
      ? experiences
      : experiences.filter((exp) => exp.location === activeCity);

  return (
    <section className="section-padding">
      <div className="city-filters">
        {cities.map((city) => (
          <button
            key={city.name}
            /* 4. Update state on click and add 'active' class for styling */
            className={`city-pill ${activeCity === city.name ? "active" : ""}`}
            onClick={() => setActiveCity(city.name)}
          >
            <span className="city-icon">{city.icon}</span>
            {city.name}
          </button>
        ))}
      </div>

      <div className="section-title">
        <h2>
          {activeCity === "All"
            ? "Featured Experiences"
            : `${activeCity} Experiences`}
        </h2>
        <p>Discover the best of Egyptian culture and adventure</p>
      </div>

      <div className="card-layout-grid">
        {/* 5. Map the FILTERED list instead of the full list */}
        {filteredExperiences.length > 0 ? (
          filteredExperiences.map((item) => (
            <ExperienceCard key={item.id} {...item} />
          ))
        ) : (
          <p className="no-results">No experiences found for this city yet.</p>
        )}
      </div>
    </section>
  );
};

export default Experiences;
