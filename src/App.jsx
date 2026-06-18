import React, { useState } from "react";
import "./App.css";
import Home from "./Main/home";
import About from "./Main/About";
import FAQs from "./Main/FAQs";
import Footer from "./Main/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="App">
      {currentPage === "home" && <Home onNavigate={setCurrentPage} />}

      {currentPage === "about" && <About onNavigate={setCurrentPage} />}

      {currentPage === "faqs" && <FAQs onNavigate={setCurrentPage} />}

      <Footer />
    </div>
  );
}
export default App;
