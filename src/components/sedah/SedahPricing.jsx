import React, { useState } from "react";
import { Check, Star, Clock, Users, Home, Shield, AlertTriangle } from "lucide-react";
import { companyInfo } from "../mockData";

const SedahPricing = () => {
  const [remainingUnits, setRemainingUnits] = useState(10);

  const handleWhatsAppClick = (type) => {
    const message = `Halo TKBM, saya tertarik dengan rumah tipe ${type} di Sedah Green Residence. Mohon informasi lebih lanjut.`;
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const pricingData = [
    {
      type: "36",
      name: "Tipe 36",
      originalPrice: 233,
      promoPrice: 173,
      discount: 60,
      features: [
        "2 Kamar Tidur",
        "1 Kamar Mandi",
        "Ruang Tamu + Keluarga",
        "Dapur + Ruang Makan",
        "Carport 1 Mobil",
        "Taman Depan & Belakang"
      ],
      specs: {
        luasTanah: "60 m²",
        luasBangunan: "36 m²",
        kamarTidur: "2",
        kamarMandi: "1",
        carport: "1"
      },
      popular: false
    },
    {
      type: "45",
      name: "Tipe 45",
      originalPrice: 258,
      promoPrice: 198,
      discount: 60,
      features: [
        "3 Kamar Tidur",
        "2 Kamar Mandi",
        "Ruang Tamu + Keluarga",
        "Dapur + Ruang Makan",
        "Carport 2 Mobil",
        "Taman Depan & Belakang",
        "Ruang Jemur"
      ],
      specs: {
        luasTanah: "72 m²",
        luasBangunan: "45 m²",
        kamarTidur: "3",
        kamarMandi: "2",
        carport: "2"
      },
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <AlertTriangle size={16} />
            PROMO TERBATAS - Hanya 10 Unit Pertama!
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pilih <span className="text-green-600">Tipe Rumah</span> Impian Anda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan diskon hingga <strong className="text-red-600">60 juta rupiah</strong> untuk 10 unit pertama. 
            Harga promo terbatas, jangan sampai kehabisan!
          </p>
        </div>


        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                item.popular 
                  ? 'border-green-500 ring-4 ring-green-100' 
                  : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-1">
                    <Star size={16} />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <div className="text-sm text-gray-600 mb-4">
                    Luas Tanah: {item.specs.luasTanah} | Luas Bangunan: {item.specs.luasBangunan}
                  </div>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    Rp {item.promoPrice} Juta
                  </div>
                  <div className="text-lg text-gray-500 mb-2">
                    <span className="line-through">Rp {item.originalPrice} Juta</span>
                  </div>
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold inline-block">
                    Hemat Rp {item.discount} Juta!
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-8 text-center">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <Home size={20} className="text-green-600 mx-auto mb-1" />
                    <div className="text-sm text-gray-600">Kamar Tidur</div>
                    <div className="font-bold text-gray-900">{item.specs.kamarTidur}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <Shield size={20} className="text-green-600 mx-auto mb-1" />
                    <div className="text-sm text-gray-600">Kamar Mandi</div>
                    <div className="font-bold text-gray-900">{item.specs.kamarMandi}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">Fasilitas Lengkap:</h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                        <Check size={16} className="text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleWhatsAppClick(item.type)}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 ${
                    item.popular
                      ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  <Users size={20} className="inline mr-2" />
                  Konsultasi {item.name}
                </button>

                {/* Urgency Note */}
                <div className="mt-4 text-center">
                  <div className="text-sm text-gray-600">
                    <Clock size={14} className="inline mr-1" />
                    Sisa unit terbatas!
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Masih Bingung Pilih Tipe Mana?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Tim konsultan kami siap membantu Anda memilih rumah yang tepat sesuai kebutuhan dan budget.
            </p>
            <button
              onClick={() => handleWhatsAppClick('Konsultasi')}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Users size={20} className="inline mr-2" />
              Konsultasi Gratis Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SedahPricing;
