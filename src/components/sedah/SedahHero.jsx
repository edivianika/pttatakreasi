import React from "react";
import { MapPin, Star, Shield, Home, Users, CreditCard, Award, Clock } from "lucide-react";
import { companyInfo } from "../mockData";

const SedahHero = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan promo rumah di Sedah Green Residence. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };


  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      {/* Background Pattern - Optimized for mobile */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-4 w-20 h-20 md:top-20 md:left-10 md:w-32 md:h-32 bg-green-500 rounded-full"></div>
        <div className="absolute top-20 right-4 w-16 h-16 md:top-40 md:right-20 md:w-24 md:h-24 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 md:w-20 md:h-20 bg-green-300 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-16 h-16 md:w-28 md:h-28 bg-green-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content - Mobile Optimized */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1 px-2 sm:px-0">
            {/* Mobile-only urgency banner */}
            <div className="block sm:hidden bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-lg text-center mb-4 mx-2 sm:mx-0">
              <div className="text-sm font-bold">🔥 PROMO TERBATAS!</div>
              <div className="text-xs">Hanya 10 unit pertama dengan diskon 60 juta</div>
            </div>
            {/* Badge - Mobile Responsive */}
            <div className="hidden sm:inline-flex items-center gap-2 bg-red-100 text-red-800 px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-semibold mx-2 sm:mx-0">
              <Clock size={14} className="md:w-4 md:h-4" />
              <span className="hidden sm:inline">PROMO TERBATAS - Hanya 10 Unit Pertama!</span>
            </div>

            {/* Main Headline - Mobile Typography */}
            <div className="space-y-3 md:space-y-4 px-2 sm:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-green-600">Sedah Green</span>
                <br />
                <span className="text-gray-800">Residence</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Hunian Syariah dengan
                <span className="text-green-600 font-bold"> Kemudahan Pembayaran</span>
                <br />
                <span className="text-gray-600">Developer Berpengalaman & Terpercaya</span>
              </p>
            </div>

            {/* Value Proposition - Mobile Stack */}
            <div className="space-y-3 md:space-y-4 px-2 sm:px-0">
              <div className="flex items-start gap-3 text-base md:text-lg text-gray-700">
                <Shield className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <span><strong>100% Syariah</strong> - Tanpa Riba, Transparan & Amanah</span>
              </div>
              <div className="flex items-start gap-3 text-base md:text-lg text-gray-700">
                <CreditCard className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <span><strong>Kemudahan Pembayaran</strong> - Angsuran Ringan, DP Murah, Cicilan Fleksibel</span>
              </div>
              <div className="flex items-start gap-3 text-base md:text-lg text-gray-700">
                <Award className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <span><strong>Developer Berpengalaman</strong> - 15+ Proyek Sukses, 500+ Keluarga Bahagia</span>
              </div>
            </div>

            {/* Pricing Highlight - Mobile Optimized */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl md:rounded-2xl p-4 md:p-6 text-white relative overflow-hidden mx-2 sm:mx-0">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              
              <div className="text-center space-y-2 relative z-10">
                <p className="text-base md:text-lg font-medium">Mulai Dari</p>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    Rp 173 Juta
                  </div>
                  <div className="text-sm md:text-lg opacity-90">
                    <span className="line-through">Rp 233 Juta</span>
                    <span className="ml-1 md:ml-2 bg-red-500 px-2 py-1 rounded text-xs md:text-sm font-bold animate-pulse">
                      Diskon 60 Juta!
                    </span>
                  </div>
                </div>
                <p className="text-xs md:text-sm opacity-90">
                  *Harga promo berlaku untuk 10 unit pertama
                </p>
                <div className="mt-3 pt-3 border-t border-white/20">
                  <p className="text-xs md:text-sm font-medium">
                    💳 DP Mulai 5% • Angsuran Ringan • Cicilan Fleksibel
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button - Single */}
            <div className="px-2 sm:px-0">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl text-base md:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Users size={18} className="md:w-5 md:h-5" />
                Konsultasi Gratis
              </button>
            </div>

            {/* Trust Indicators - Mobile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 text-xs md:text-sm text-gray-600 px-2 sm:px-0">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <CreditCard className="text-green-500" size={14} />
                <span>DP Mulai 5%</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Shield className="text-green-500" size={14} />
                <span>100% Syariah</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start sm:col-span-3 md:col-span-1">
                <Award className="text-blue-500" size={14} />
                <span>15+ Proyek Sukses</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Visual - Mobile First */}
          <div className="relative order-1 lg:order-2 px-2 sm:px-0">
            <div className="relative z-10 group">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
                alt="Sedah Green Residence - Hunian Syariah Berkualitas"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-xl md:rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl md:rounded-2xl"></div>
              
              {/* Overlay Info - Mobile Responsive */}
              <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 shadow-lg">
                <div className="grid grid-cols-2 gap-3 md:gap-4 text-center">
                  <div>
                    <div className="text-lg md:text-2xl font-bold text-green-600">57</div>
                    <div className="text-xs md:text-sm text-gray-600">Unit Tersedia</div>
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-bold text-red-600">10</div>
                    <div className="text-xs md:text-sm text-gray-600">Unit Promo</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards - Mobile Hidden/Adjusted */}
            <div className="hidden sm:block absolute -top-2 -left-2 md:-top-4 md:-left-4 bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-lg z-20 animate-bounce">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm font-semibold text-gray-800">Ready Stock</span>
              </div>
            </div>

            <div className="hidden sm:block absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-green-500 text-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-lg z-20">
              <div className="text-center">
                <div className="text-sm md:text-lg font-bold">100%</div>
                <div className="text-xs">Syariah</div>
              </div>
            </div>

            {/* Mobile-only floating elements */}
            <div className="block sm:hidden absolute -top-2 -right-2 bg-green-500 text-white rounded-lg p-2 shadow-lg z-20">
              <div className="text-center">
                <div className="text-xs font-bold">100%</div>
                <div className="text-xs">Syariah</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave - Mobile Responsive */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default SedahHero;
