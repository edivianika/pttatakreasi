import React from 'react';
import { MessageCircle, Shield, DollarSign, TrendingUp } from 'lucide-react';
import { companyInfo } from './mockData';
import { HeroAnimatedText, SubtitleAnimatedText } from './AnimatedText';
import AnimatedText from './AnimatedText';
import { HeroBackgroundPaths } from './ui/hero-background-paths';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan hunian syariah premium Anda. Mohon informasi lebih lanjut tentang proyek yang tersedia.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="hero-section parallax-hero relative">
      {/* Animated Background Paths */}
      <HeroBackgroundPaths />
      
      <div className="container relative z-10">
        <div className="hero-content fade-in-up">
          {/* Main Headlines with Animation */}
          <div className="mb-6">
            <h1 className="heading-1 mb-4">
              <HeroAnimatedText 
                texts={[
                  "Hunian Syariah Premium",
                  "Rumah Impian Keluarga Muslim",
                  "Investasi Masa Depan Terbaik",
                  "Lingkungan Islami & Harmonis",
                  "Properti Syariah Terpercaya"
                ]}
                interval={3500}
                className="text-gray-900"
              />
            </h1>
            <div className="mb-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-600 min-h-[1.2em]">
                <AnimatedText 
                  texts={[
                    "di Jantung Ponorogo",
                    "dengan Akad 100% Halal",
                    "Harga Transparan & Fair",
                    "Angsuran Ringan & Mudah",
                    "Fasilitas Lengkap & Modern"
                  ]}
                  interval={3000}
                  animationType="slide"
                  className="block"
                />
              </div>
            </div>
          </div>
          
          <p className="body-large mb-8 max-w-2xl mx-auto text-gray-600">
            Wujudkan impian rumah idaman dengan akad 100% syariah, 
            harga transparan, dan angsuran yang tidak memberatkan
          </p>

          {/* Trust Indicators with Animation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="trust-badge">
              <Shield size={16} />
              <AnimatedText 
                texts={["100% Akad Syariah", "Tanpa Riba", "Halal & Berkah"]}
                interval={4000}
                animationType="fade"
                className="text-sm font-semibold"
              />
            </div>
            <div className="trust-badge">
              <DollarSign size={16} />
              <AnimatedText 
                texts={["Harga Fix", "Transparan", "Tidak Naik"]}
                interval={4500}
                animationType="fade"
                className="text-sm font-semibold"
              />
            </div>
            <div className="trust-badge">
              <TrendingUp size={16} />
              <AnimatedText 
                texts={["Angsuran Flat", "Mudah & Ringan", "Investasi Cerdas"]}
                interval={5000}
                animationType="fade"
                className="text-sm font-semibold"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleWhatsAppClick}
              className="btn-primary text-lg px-8 py-4"
            >
              <MessageCircle size={20} />
              Konsultasi via WhatsApp
            </button>
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Lihat Proyek Kami
            </button>
          </div>

        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl float-animation z-5"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-amber-200/30 rounded-full blur-xl float-animation z-5" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;