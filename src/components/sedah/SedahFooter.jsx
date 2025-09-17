import React from "react";
import { MapPin, Phone, Mail, MessageCircle, Home, Users, Shield, Star, Clock, ArrowUp } from "lucide-react";
import { companyInfo } from "../mockData";

const SedahFooter = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan Sedah Green Residence. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${companyInfo.whatsapp}`, '_self');
  };

  const handleEmailClick = () => {
    window.open(`mailto:info@tkbm.co.id`, '_self');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Tipe 36", href: "#pricing" },
    { name: "Tipe 45", href: "#pricing" },
    { name: "Lokasi", href: "#location" },
    { name: "Galeri", href: "#gallery" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Garansi", href: "#guarantee" }
  ];

  const features = [
    { name: "100% Syariah", icon: <Shield size={20} /> },
    { name: "Harga Transparan", icon: <Star size={20} /> },
    { name: "Developer Terpercaya", icon: <Users size={20} /> },
    { name: "Fasilitas Lengkap", icon: <Home size={20} /> }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                {companyInfo.name}
              </h3>
              <p className="text-gray-300 text-lg">
                {companyInfo.tagline}
              </p>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Developer properti syariah terpercaya di Ponorogo sejak 2015. 
              Kami berkomitmen memberikan hunian berkualitas dengan prinsip syariah 
              yang transparan dan amanah.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-green-400">{feature.icon}</span>
                  <span>{feature.name}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {companyInfo.projects}
                </div>
                <div className="text-sm text-gray-400">Proyek Sukses</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {companyInfo.clients}
                </div>
                <div className="text-sm text-gray-400">Keluarga Bahagia</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-400">
              Menu Cepat
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-400">
              Kontak Kami
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-green-400 mt-1" size={20} />
                <div>
                  <div className="text-gray-300 text-sm">
                    {companyInfo.address}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">
                    Desa Sedah, Jenangan, Ponorogo
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-green-400" size={20} />
                <button
                  onClick={handleCallClick}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  {companyInfo.whatsappFormatted}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="text-green-400" size={20} />
                <button
                  onClick={handleWhatsAppClick}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  WhatsApp
                </button>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-green-400" size={20} />
                <button
                  onClick={handleEmailClick}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  info@tkbm.co.id
                </button>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-green-400" size={20} />
                <div className="text-gray-300 text-sm">
                  08:00 - 17:00 WIB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Siap Mewujudkan Impian Hunian Syariah?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Jangan lewatkan kesempatan emas ini! Promo terbatas hanya untuk 10 unit pertama 
              dengan diskon hingga 60 juta rupiah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-green-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Konsultasi Sekarang
              </button>
              <button
                onClick={handleCallClick}
                className="bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Hubungi Langsung
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 {companyInfo.name}. All rights reserved. | 
              <span className="ml-1">Developer Properti Syariah Terpercaya</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-gray-400 text-sm">
                Est. {companyInfo.established}
              </div>
              <button
                onClick={scrollToTop}
                className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-all duration-200"
                title="Kembali ke atas"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:scale-110 group"
          title="WhatsApp"
        >
          <MessageCircle size={24} />
          <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            WhatsApp
          </span>
        </button>
      </div>
    </footer>
  );
};

export default SedahFooter;
