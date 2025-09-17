import React from 'react';
import { MessageCircle, Home, CheckCircle } from 'lucide-react';

const SedahPricing = ({ onWhatsAppClick }) => {
  const unitTypes = [
    {
      type: "Tipe 36",
      area: "36 m²",
      rooms: "2 Kamar Tidur",
      features: ["Living Room", "Dapur", "Kamar Mandi", "Teras"],
      originalPrice: "Rp 233 juta",
      promoPrice: "Rp 173 juta",
      discount: "Hemat Rp 60 juta"
    },
    {
      type: "Tipe 45",
      area: "45 m²", 
      rooms: "3 Kamar Tidur",
      features: ["Living Room", "Dapur", "2 Kamar Mandi", "Teras", "Gudang"],
      originalPrice: "Rp 233 juta",
      promoPrice: "Rp 173 juta",
      discount: "Hemat Rp 60 juta"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Tipe & Harga
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Pilih tipe hunian yang sesuai dengan kebutuhan keluarga Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {unitTypes.map((unit, index) => (
              <div key={index} className="bg-[#D6CCC2] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="bg-[#A3B18A] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#3D3D3D] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {unit.type}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Luas {unit.area} • {unit.rooms}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#3D3D3D] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Fasilitas:
                  </h4>
                  <div className="space-y-2">
                    {unit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#A3B18A] flex-shrink-0" />
                        <span className="text-gray-700" style={{ fontFamily: 'Nunito, sans-serif' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="mb-2">
                    <span className="text-lg text-gray-500 line-through" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      {unit.originalPrice}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-[#BFA87B] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {unit.promoPrice}
                  </div>
                  <div className="text-sm font-semibold text-[#A3B18A]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {unit.discount}
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => onWhatsAppClick(`${unit.type} - ${unit.promoPrice}`)}
                  className="w-full bg-[#A3B18A] hover:bg-[#8FA375] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Tanya via WhatsApp
                </button>
              </div>
            ))}
          </div>

          {/* Promo Notice */}
          <div className="mt-12 text-center">
            <div className="bg-[#BFA87B]/10 border border-[#BFA87B]/30 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-[#3D3D3D] font-semibold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                ⚡ Promo terbatas hanya untuk 10 unit pertama
              </p>
              <p className="text-gray-600 text-sm mt-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Segera hubungi kami untuk mendapatkan harga promo ini
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SedahPricing;
