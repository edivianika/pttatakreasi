import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { HeroAnimatedText, SubtitleAnimatedText } from './AnimatedText';

const HeroVideo = ({ 
  fallbackImage,
  title,
  subtitle,
  description,
  onWhatsAppClick,
  onContactClick 
}) => {

  return (
    <div className="relative h-screen overflow-hidden bg-[#020617]">
      {/* Dark Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
        }}
      />
      
      {/* Image Background */}
      <div className="absolute inset-0 z-10">
        <img
          src={fallbackImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/60" />
      </div>


      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
                Narraya
              </h1>
              <HeroAnimatedText 
                texts={[
                  "Hunian Syariah Premium",
                  "Lingkungan Islami & Harmonis", 
                  "Investasi Masa Depan",
                  "Keluarga Bahagia & Berkah"
                ]}
                interval={4000}
                className="text-emerald-300"
              />
            </div>
            <div className="mb-6 sm:mb-8">
              <SubtitleAnimatedText 
                texts={[
                  "di Jantung Ponorogo",
                  "dengan Fasilitas Lengkap",
                  "untuk Keluarga Muslim",
                  "dengan Akad Syariah"
                ]}
                interval={3500}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              />
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed px-2">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button 
                onClick={onWhatsAppClick}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
              >
                <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Konsultasi Sekarang</span>
              </button>
              <button 
                onClick={onContactClick}
                className="bg-white/20 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:bg-white/30 border border-white/30 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
              >
                <Phone size={20} className="sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Hubungi Kami</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroVideo;
