import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
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
