import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ title, location, date, imageUrl }) => {
  return (
    <div
      className="experience-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="card-overlay">
        {/* Top Section: City Tag moved to the right and made smaller */}
        <div className="card-top-row">
          <div className="location-tag-small">{location}</div>
        </div>

        {/* Bottom Section: Title and Metadata */}
        <div className="card-bottom-content">
          <h3 className="card-title-compact">{title}</h3>

          <div className="card-meta-compact">
            <span>📍 {location}</span>
            <span>📅 {date}</span>
          </div>

          {/* Book Now button moved to the left and made smaller */}
          <div className="card-footer-row">
            <button className="book-btn-small">Book Now ›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
