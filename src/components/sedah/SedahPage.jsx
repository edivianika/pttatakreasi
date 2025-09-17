import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import SedahHero from "./SedahHero";
import SedahPricing from "./SedahPricing";
import SedahLocation from "./SedahLocation";
import SedahGallery from "./SedahGallery";
import SedahTestimonials from "./SedahTestimonials";
import SedahGuarantee from "./SedahGuarantee";
import SedahForm from "./SedahForm";
import SedahFooter from "./SedahFooter";
import { companyInfo } from "../mockData";

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
    const message = "Halo TKBM, saya tertarik dengan promo rumah di Sedah Green Residence. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="sticky-cta block md:hidden fixed bottom-4 left-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl p-4 border-2 border-green-500">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-semibold text-gray-800">
            🏠 Promo Terbatas!
          </div>
          <div className="text-xs text-red-600 font-bold">
            Hanya 10 Unit
          </div>
        </div>
        <button 
          onClick={handleWhatsAppClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <MessageCircle size={18} />
          Konsultasi Sekarang
        </button>
      </div>
    </div>
  );
};

// Floating Action Buttons
const FloatingActions = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan promo rumah di Sedah Green Residence. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${companyInfo.whatsapp}`, '_self');
  };

  return (
    <div className="hidden md:block fixed right-6 bottom-6 z-40 space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
        title="WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          WhatsApp
        </span>
      </button>

      {/* Call Button */}
      <button
        onClick={handleCallClick}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
        title="Telepon"
      >
        <Phone size={24} />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Telepon
        </span>
      </button>
    </div>
  );
};

// Urgency Banner
const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const endTime = now + (7 * 24 * 60 * 60 * 1000); // 7 days from now
      const distance = endTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 text-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <Clock size={16} />
          <span className="font-bold">PROMO TERBATAS!</span>
          <span className="hidden md:inline">Hanya 10 unit pertama dengan diskon 60 juta</span>
          <span className="md:hidden">10 unit terbatas</span>
          <div className="flex items-center gap-1 ml-4">
            <span className="bg-white text-red-600 px-2 py-1 rounded font-bold text-xs">
              {timeLeft.days}d
            </span>
            <span className="bg-white text-red-600 px-2 py-1 rounded font-bold text-xs">
              {timeLeft.hours}h
            </span>
            <span className="bg-white text-red-600 px-2 py-1 rounded font-bold text-xs">
              {timeLeft.minutes}m
            </span>
            <span className="bg-white text-red-600 px-2 py-1 rounded font-bold text-xs">
              {timeLeft.seconds}s
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SedahPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Urgency Banner */}
      <UrgencyBanner />
      
      {/* Main Content */}
      <div className="relative">
        <SedahHero />
        <SedahPricing />
        <SedahLocation />
        <SedahGallery />
        <SedahTestimonials />
        <SedahGuarantee />
        <SedahForm />
        <SedahFooter />
      </div>

      {/* Floating Actions */}
      <FloatingActions />
      
      {/* Sticky Mobile CTA */}
      <StickyCTA />
    </div>
  );
};

export default SedahPage;
