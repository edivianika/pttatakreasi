import React, { useEffect, useState } from 'react';
import { MessageCircle, Phone, MapPin, Clock, Award, Shield } from 'lucide-react';
import { companyInfo } from './mockData';

const FinalCTA = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Assalamualaikum TKBM, saya tertarik untuk segera memiliki hunian syariah dari Anda. Mohon informasi lengkap dan jadwal survey lokasi.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:+62${companyInfo.whatsapp.substring(1)}`;
  };

  return (
    <section className="cta-section">
      {/* Enhanced Parallax Background */}
      <div 
        className="parallax-layer"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e4596d6bbf7a?w=1200&h=800&fit=crop')`,
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: 0.3,
        }}
      ></div>
      
      {/* Content */}
      <div className="parallax-content relative z-10 container text-center text-gray-900">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA */}
          <div className="mb-16">
            <div className="float-animation mb-8">
              <h2 className="heading-1 mb-6 text-gray-900">
                Wujudkan Rumah Impian
                <br />
                <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  Tanpa Riba
                </span>
              </h2>
            </div>
            
            <p className="body-large mb-10 text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              Jangan tunggu lagi! Ratusan keluarga telah merasakan keberkahan 
              tinggal di hunian syariah TKBM. Saatnya Anda bergabung dengan komunitas 
              yang penuh berkah dan kebahagiaan.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex justify-center items-center mb-16">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-green-600/30 flex items-center gap-3 min-w-[280px]"
              >
                <MessageCircle size={24} />
                Hubungi Kami via WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-green-200 hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-800 text-lg font-semibold">{companyInfo.whatsappFormatted}</p>
              <p className="text-gray-600 text-sm mt-2">Respons cepat 24/7</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-green-200 hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <MapPin className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lokasi</h3>
              <p className="text-gray-800 text-lg">{companyInfo.address}</p>
              <p className="text-gray-600 text-sm mt-2">Kunjungi kantor kami</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-green-200 hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Clock className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jam Kerja</h3>
              <p className="text-gray-800 text-lg">Senin - Jumat</p>
              <p className="text-gray-600 text-sm mt-2">08:00 - 17:00 WIB</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-green-200 hover:bg-white/90 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Shield className="text-green-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">100% Syariah</h3>
              </div>
              <p className="text-gray-800 text-center font-medium">
                Akad murni tanpa riba, gharar, dan maysir. Terjamin halal dan berkah.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-green-200 hover:bg-white/90 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Award className="text-amber-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Terpercaya</h3>
              </div>
              <p className="text-gray-800 text-center font-medium">
                8+ tahun pengalaman, 500+ keluarga bahagia, developer lokal terbaik.
              </p>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="rounded-3xl p-10 transition-all duration-300">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">🎉 Promo Terbatas!</h3>
              <p className="text-xl text-gray-800 mb-8 leading-relaxed font-medium">
                Dapatkan <span className="font-bold text-2xl bg-amber-500 text-white px-4 py-2 rounded-lg shadow-lg">DISCOUNT DP 10%</span> 
                <br className="hidden sm:block" />
                untuk 50 pembeli pertama di bulan ini. 
                <br />
                <span className="text-amber-700 font-bold">Kesempatan emas ini tidak akan terulang!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  🚀 Ambil Promo Sekarang
                </button>
                <div className="text-gray-700 text-center sm:text-left self-center font-medium">
                  <span className="text-sm">Sisa waktu terbatas</span>
                  <br />
                  <span className="font-bold">Hubungi sekarang!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;