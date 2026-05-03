import React, { useState } from "react";
import "./App.css";
import Home from "./Main/home";
import About from "./Main/About";
import Experiences from "./Main/Experiences";
import FAQs from "./Main/FAQs";
import Footer from "./Main/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeCity, setActiveCity] = useState("All"); // The one source of truth

  return (
    <div className="App">
      {currentPage === "home" && (
        <>
          <Home
            onNavigate={setCurrentPage}
            activeCity={activeCity}
            setActiveCity={setActiveCity}
          />
          <Experiences activeCity={activeCity} setActiveCity={setActiveCity} />
        </>
      )}

      {currentPage === "about" && <About onNavigate={setCurrentPage} />}

      {currentPage === "faqs" && <FAQs onNavigate={setCurrentPage} />}

      <Footer />
    </div>
  );
}
export default App;
