import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, MapPin, Home, Shield, Phone, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../mockData';
import SedahHero from './SedahHero';
import SedahFeatures from './SedahFeatures';
import SedahGallery from './SedahGallery';
import SedahPricing from './SedahPricing';
import SedahLocation from './SedahLocation';
import SedahQuality from './SedahQuality';
import SedahPromo from './SedahPromo';
import SedahForm from './SedahForm';
import SedahFAQ from './SedahFAQ';
import SedahFooter from './SedahFooter';

const SedahPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = (context = "Sedah Green Residence") => {
    const message = `Halo TKBM, saya tertarik dengan proyek ${context}. Mohon informasi lebih lanjut tentang promo dan unit yang tersedia.`;
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="TKBM Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="font-bold text-lg text-[#3D3D3D]">TKBM</h1>
                <p className="text-xs text-gray-600">Properti Syariah</p>
              </div>
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-[#A3B18A] transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <SedahHero onWhatsAppClick={handleWhatsAppClick} />

      {/* Features Section */}
      <SedahFeatures />

      {/* Gallery Section */}
      <SedahGallery />

      {/* Pricing Section */}
      <SedahPricing onWhatsAppClick={handleWhatsAppClick} />

      {/* Location Section */}
      <SedahLocation />

      {/* Quality Section */}
      <SedahQuality />

      {/* Promo Section */}
      <SedahPromo onWhatsAppClick={handleWhatsAppClick} />

      {/* Form Section */}
      <SedahForm onWhatsAppClick={handleWhatsAppClick} />

      {/* FAQ Section */}
      <SedahFAQ />

      {/* Footer */}
      <SedahFooter />
    </div>
  );
};

export default SedahPage;
