import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calculator, Construction, MessageCircle, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const GrandSezhaCalculator = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleWhatsAppClick = () => {
    const message = `Halo TKBM, saya tertarik dengan Grand Sezha. Mohon informasi lebih lanjut tentang kalkulator KPR untuk proyek ini.`;
    
    const whatsappUrl = `https://wa.me/628133138887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm"
      >
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Link to="/kalkulator" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft size={24} className="text-slate-600" />
              <span className="font-semibold text-slate-800">Kembali</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Calculator size={24} className="text-blue-600" />
            <h1 className="text-xl font-bold text-slate-800">Kalkulator Grand Sezha</h1>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Under Development Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            {/* Construction Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-100 rounded-full">
                <Construction size={48} className="text-orange-600" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Kalkulator Grand Sezha
            </h2>
            
            {/* Under Development Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock size={16} />
              Sedang Dalam Pengembangan
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-lg text-slate-600 mb-4">
                Kalkulator KPR untuk proyek Grand Sezha sedang dalam tahap pengembangan. 
                Tim kami sedang bekerja keras untuk menyediakan fitur kalkulator yang lengkap dan akurat.
              </p>
              <p className="text-slate-600">
                Sementara itu, Anda dapat menghubungi tim marketing kami untuk konsultasi langsung 
                mengenai perhitungan KPR dan informasi proyek Grand Sezha.
              </p>
            </div>

            {/* Project Preview */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <img 
                src="/tatakreasi/perumahan-ponorogo-grand-sezha.png"
                alt="Grand Sezha"
                className="w-full max-w-md mx-auto h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-2">Grand Sezha</h3>
              <p className="text-slate-600 mb-4">Perumahan Eksklusif di Tengah Kota Ponorogo</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Lokasi premium eksklusif</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Dekat fasilitas kota</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Desain arsitektur modern</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Akses mudah kemana-mana</span>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-3 max-w-md mx-auto">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={20} />
                Konsultasi via WhatsApp
              </button>
              
              <button
                onClick={() => window.open('tel:+628133138887')}
                className="w-full bg-slate-600 hover:bg-slate-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                Hubungi Kami
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Informasi:</strong> Kalkulator ini akan segera hadir dengan fitur lengkap 
                untuk perhitungan KPR Syariah yang akurat dan mudah digunakan.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GrandSezhaCalculator;
