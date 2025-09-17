import React from 'react';
import { MessageCircle, CheckCircle } from 'lucide-react';

const SedahHero = ({ onWhatsAppClick }) => {
  return (
    <section className="pt-16 relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#A3B18A]/90 to-[#A3B18A]/70"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <CheckCircle size={16} />
            <span className="text-sm font-medium">Tanpa Riba • Tanpa Denda • Tanpa Sita • Tanpa BI Checking</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Hunian Syariah Modern
            <br />
            <span className="text-[#BFA87B]">di Sedah, Ponorogo</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl mb-8 text-white/95 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
            57 unit rumah tropis elegan. Harga mulai <span className="line-through opacity-70">Rp 233 juta</span> — 
            kini <span className="font-bold text-[#BFA87B]">promo Rp 173 juta</span>. 
            Diskon hingga <span className="font-bold text-[#BFA87B]">Rp 60 juta</span> untuk 10 unit pertama.
          </p>

          {/* CTA Button */}
          <button 
            onClick={() => onWhatsAppClick("Hero Section")}
            className="bg-[#A3B18A] hover:bg-[#8FA375] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Cek Unit & Dapatkan Promo
          </button>

          {/* Additional Info */}
          <div className="mt-8 text-white/80 text-sm">
            <p>✨ Promo terbatas untuk 10 unit pertama</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F5F5F0] to-transparent"></div>
    </section>
  );
};

export default SedahHero;
