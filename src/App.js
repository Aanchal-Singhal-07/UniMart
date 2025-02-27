import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/OverviewSection";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
import Faq from "./components/Faq";
import Feedback from "./components/Feedback";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <OverviewSection />
              </>
            }
          />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;