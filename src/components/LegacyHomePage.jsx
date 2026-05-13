import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

import About from "./About";
import FinalCTA from "./FinalCTA";
import Header from "./Header";
import Hero from "./Hero";
import { companyInfo } from "./mockData";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import TrustBadges from "./TrustBadges";

/** Sticky mobile CTA — hanya dipakai di beranda klasik */
const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message =
      "Halo TKBM, saya tertarik dengan hunian syariah Anda. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="sticky-cta block md:hidden">
      <button type="button" onClick={handleWhatsAppClick} className="btn-primary w-full">
        <MessageCircle size={16} />
        Konsultasi via WhatsApp
      </button>
    </div>
  );
};

/**
 * Beranda TKBM versi sebelum LP2026 (Header + Hero + About + …).
 * Diakses di `/home-classic` sebagai cadangan setelah beranda utama diganti LP2026.
 */
export default function LegacyHomePage() {
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
}
