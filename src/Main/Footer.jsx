import React from "react";
import "./Footer.css";
import Reveal from "./Reveal";

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* CTA Gradient Section */}
      <section className="cta-gradient">
        <Reveal>
          <div className="cta-content">
            <h2>Your Egyptian Adventure Awaits</h2>
            <p>
              Join thousands discovering the magic of Egypt's hidden treasures.
            </p>
            <button className="btn-journey-gold">Start Your Journey</button>
          </div>
        </Reveal>
      </section>
    </footer>
  );
};

export default Footer;
