import React from "react";
import "./FAQs.css";
import Reveal from "./Reveal";

const FAQs = ({ onNavigate }) => {
  const faqData = [
    { question: "How do I book an event?" },
    { question: "Can I modify my booking after confirmation?" },
    { question: "How do I cancel my reservation?" },
    { question: "Will I receive a confirmation after booking?" },
    { question: "What payment methods do you accept?" },
    { question: "Are there any hidden fees?" },
    { question: "Do you offer airport transfers?" },
    { question: "Can I book activities or tours?" },
    { question: "What happens if my flight is canceled?" },
    { question: "What if I enter incorrect details in my booking?" },
    { question: " How can I contact customer support?" },
    { question: "Do you offer support during my trip?" },
    { question: "Is my personal information secure?" },
    { question: " Do I need travel insurance?" },
    { question: ". Can I change traveler names after booking?" },
  ];
  const faqAnswers = [
    {
      answer:
        "You can easily make a booking through our application by selecting your destination, travel dates, and preferred options, then following the checkout steps.",
    },
    {
      answer:
        "Yes, you can modify your booking depending on the airline, hotel, or service provider’s policies. Log into your account or contact support for assistance.",
    },
    {
      answer:
        "You can cancel your booking from your account dashboard. Cancellation fees may apply depending on the provider’s terms.",
    },
    {
      answer:
        "Yes, a confirmation email with all your booking details will be sent immediately after payment.",
    },
    {
      answer:
        "We accept major credit/debit cards, online payment gateways only.",
    },
    {
      answer:
        "No, all prices shown include applicable taxes and fees unless stated otherwise.",
    },
    {
      answer:
        "Yes, airport transfer services can be added during the booking process.",
    },
    {
      answer:
        "Yes, you can browse and book tours and activities directly from our platform.",
    },
    {
      answer:
        "If your flight is canceled, we will assist you with rebooking or refunds according to the airline’s policy.",
    },
    {
      answer:
        "Contact our support team immediately to correct any mistakes before your travel date.",
    },
    {
      answer:
        "You can reach us via live chat, email, or phone. Support is available 24/7.",
    },
    {
      answer:
        "Yes, our support team is available throughout your journey for any assistance you may need.",
    },
    {
      answer:
        "Yes, we use advanced encryption and security measures to protect your data.",
    },
    {
      answer:
        "Travel insurance is optional but highly recommended for protection against unexpected events.",
    },
    {
      answer:
        "Name changes depend on the airline or service provider and may incur fees.",
    },
  ];
  return (
    <div className="faq-wrapper">
      {/* Shared Navigation */}
      <nav className="nav-glass">
        <button onClick={() => onNavigate("home")} className="nav-btn">
          Home
        </button>
        <button onClick={() => onNavigate("faqs")} className="nav-btn active">
          FAQs
        </button>
      </nav>

      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about Drift</p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <Reveal key={index} delay={Math.min(index * 40, 320)}>
            <details className="faq-item">
              <summary className="faq-question">
                {item.question}
                <span className="arrow">▼</span>
              </summary>
              <div className="faq-answer">
                <p>{faqAnswers[index].answer}</p>
              </div>
            </details>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="faq-footer">
          <p style={{ fontSize: "23px" }}>Still have questions?</p>
          <a
            href="https://wa.me/201500331855"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact"
          >
            Contact Support
          </a>
        </div>
      </Reveal>
    </div>
  );
};

export default FAQs;
