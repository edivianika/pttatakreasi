import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '../mockData';

const SedahFooter = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan Sedah Green Residence. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMapsClick = () => {
    window.open('https://maps.google.com/?q=Sedah,+Jenangan,+Ponorogo', '_blank');
  };

  return (
    <footer className="bg-[#3D3D3D] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="TKBM Logo" 
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h3 className="font-bold text-lg text-white">TKBM</h3>
                  <p className="text-xs text-gray-400">Properti Syariah</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Developer properti syariah terpercaya dengan pengalaman 8+ tahun. 
                Menyediakan hunian berkualitas dengan akad syariah yang aman dan berkah.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Kontak Kami
              </h4>
              <div className="space-y-3">
                <button 
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <MessageCircle size={18} />
                  <span style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {companyInfo.whatsappFormatted}
                  </span>
                </button>
                <button 
                  onClick={handleMapsClick}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <MapPin size={18} />
                  <span style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Sedah, Jenangan, Ponorogo
                  </span>
                </button>
              </div>
            </div>

            {/* Project Info */}
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Sedah Green Residence
              </h4>
              <div className="space-y-2 text-sm text-gray-300" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <p>57 unit rumah tropis elegan</p>
                <p>Tipe 36 & 45 m²</p>
                <p>Promo mulai Rp 173 juta</p>
                <p>100% Akad Syariah</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="border-t border-gray-600 pt-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Tertarik dengan Sedah Green Residence?
              </h3>
              <p className="text-gray-300 mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Hubungi tim marketing kami sekarang untuk informasi lengkap dan jadwalkan kunjungan
              </p>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-[#A3B18A] hover:bg-[#8FA375] text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-3 mx-auto"
              >
                <MessageCircle size={20} />
                Hubungi via WhatsApp
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-600 pt-6 mt-8">
            <div className="text-center text-gray-400 text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
              <p>© 2024 TKBM Properti Syariah. Semua hak dilindungi.</p>
              <p className="mt-1">Wujudkan impian hunian syariah bersama kami</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SedahFooter;
