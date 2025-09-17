import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TrustBadges from "./components/TrustBadges";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import NarrayaPage from "./components/NarrayaPage";
import SedahPage from "./components/sedah/SedahPage";
import { MessageCircle } from "lucide-react";
import { companyInfo } from "./components/mockData";

// Sticky Mobile CTA Component
const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan hunian syariah Anda. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="sticky-cta block md:hidden">
      <button 
        onClick={handleWhatsAppClick}
        className="btn-primary w-full"
      >
        <MessageCircle size={16} />
        Konsultasi via WhatsApp
      </button>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <TrustBadges />
      <Testimonials />
      <FinalCTA />
      <StickyCTA />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/narraya" element={<NarrayaPage />} />
          <Route path="/sedah" element={<SedahPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
