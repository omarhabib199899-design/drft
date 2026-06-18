import React from "react";
import "./About.css";
import Reveal from "./Reveal";

// About is now an embedded section that lives directly under the
// Hero on the Home page (no longer a standalone routed page).
const About = () => {
  return (
    <div className="about-wrapper">
      <Reveal>
        <div className="about-header">
          <h1>About Drift</h1>
          <p>Connecting travelers with Egypt's most authentic experiences</p>
        </div>
      </Reveal>

      <div className="about-container">
        <Reveal>
          <section className="about-card story-section">
            <h2 className="our-story">Our Story</h2>
            <p className="story-text">
              Drift was born from a simple idea: every traveler deserves to
              experience the real Egypt, not just the tourist trail. We saw too
              many visitors missing out on the incredible local events, hidden
              cultural experiences, and authentic adventures that make Egypt truly
              magical. From the vibrant beaches of Sahel and El Gouna to the
              ancient wonders of Luxor and Cairo, from the diving paradise of the
              Red Sea to the serene desert oases, Egypt offers endless
              opportunities for unforgettable experiences. Our mission is to make
              these experiences accessible to everyone. Today, Drift connects
              thousands of travelers with local event organizers, tour guides, and
              experience providers across all major Egyptian destinations. We're
              proud to be the bridge between curious travelers and the
              extraordinary experiences waiting for them.
            </p>
          </section>
        </Reveal>

        <div className="values-grid">
          <Reveal delay={0}>
            <div className="about-card">
              <h3 className="about-sec">Authentic Experiences</h3>
              <p className="about-p">
                We partner with local guides and organizers who are passionate
                about sharing the true spirit of Egypt with visitors from around
                the world.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="about-card">
              <h3 className="about-sec">Community First</h3>
              <p className="about-p">
                We believe in supporting local communities and creating
                opportunities for Egyptian entrepreneurs while delivering amazing
                experiences to travelers.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="about-card">
              <h3 className="about-sec">Accessibility</h3>
              <p className="about-p">
                Making Egypt's incredible experiences easy to discover and book
                for everyone, whether you're a first-time visitor or a seasoned
                traveler.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="about-card">
              <h3 className="about-sec">Quality Guaranteed</h3>
              <p className="about-p">
                Every experience on Drift is carefully vetted to ensure safety,
                quality, and authenticity, so you can book with complete
                confidence.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;
