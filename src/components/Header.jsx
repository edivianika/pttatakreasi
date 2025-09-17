import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { companyInfo } from './mockData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan hunian syariah Anda. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="font-bold text-lg text-emerald-800">TKBM</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Properti Syariah</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-emerald-600 transition-colors"
          >
            Beranda
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-emerald-600 transition-colors"
          >
            Tentang Kami
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-emerald-600 transition-colors"
          >
            Proyek
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-gray-700 hover:text-emerald-600 transition-colors"
          >
            Testimoni
          </button>
          <button 
            onClick={handleWhatsAppClick}
            className="btn-primary"
          >
            <Phone size={16} />
            Konsultasi
          </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 md:hidden">
          <nav className="flex flex-col p-4 gap-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Tentang Kami
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Proyek
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Testimoni
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="btn-primary mt-4"
            >
              <Phone size={16} />
              Konsultasi WhatsApp
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;