import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title-orange">How It Works</h2>
        <p className="section-subtitle">
          Start your Egyptian adventure in three simple steps.
        </p>

        <div className="steps-wrapper">
          <div className="step-item">
            <div className="step-number orange">1</div>
            <h3>Pick Your City</h3>
            <p>
              Browse through Egypt's most vibrant destinations, from Cairo to
              the Red Sea.
            </p>
          </div>
          <div className="step-item">
            <div className="step-number cyan">2</div>
            <h3>Find Experiences</h3>
            <p>
              Discover unique events, from ancient temple tours to desert
              safaris.
            </p>
          </div>
          <div className="step-item">
            <div className="step-number blue">3</div>
            <h3>Book & Explore</h3>
            <p>
              Reserve your spot and create unforgettable memories across Egypt.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Gradient Section */}
      <section className="cta-gradient">
        <div className="cta-content">
          <h2>Your Egyptian Adventure Awaits</h2>
          <p>
            Join thousands discovering the magic of Egypt's hidden treasures.
          </p>
          <button className="btn-journey-gold">Start Your Journey</button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
