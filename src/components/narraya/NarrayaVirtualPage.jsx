import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  ArrowLeft, 
  Home, 
  MapPin, 
  Star,
  CheckCircle,
  Clock,
  Users,
  Gift
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getKeypanoUrl, checkKeypanoAvailability } from '../../utils/keypanoUrl';
import { companyInfo } from '../mockData';

const NarrayaVirtualPage = () => {
  const [keypanoUrl, setKeypanoUrl] = useState('');
  const [isKeypanoAvailable, setIsKeypanoAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Update page title
    document.title = 'Virtual Tour Narraya Green Residence - TKBM';

    // Set Keypano URL based on environment
    const url = getKeypanoUrl();
    setKeypanoUrl(url);

    // Check if Keypano is available
    checkKeypanoAvailability().then((available) => {
      setIsKeypanoAvailable(available);
      setIsLoading(false);
    });

    // Cleanup function
    return () => {
      document.title = 'TKBM - Developer Properti Syariah Terpercaya | Hunian Halal di Ponorogo';
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan Narraya Green Residence setelah melihat virtual tour. Mohon informasi tentang diskon 100 juta untuk 2 pembeli pertama.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${companyInfo.whatsapp}`, '_self');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-md"
      >
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src="/logo.png"
                alt="TKBM Logo"
                className="w-10 h-10 rounded-lg"
              />
              <span className="font-bold text-xl text-slate-800">TKBM</span>
            </Link>
            <div className="hidden md:block w-px h-6 bg-slate-300"></div>
            <span className="hidden md:block text-sm text-slate-600">Virtual Tour</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Link
              to="/narraya"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Halaman Narraya
            </Link>
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-8 bg-white">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                Virtual Tour 360°
              </h1>
              <h2 className="text-xl md:text-2xl text-emerald-600 font-semibold mb-2">
                Narraya Green Residence
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Jelajahi hunian premium syariah secara virtual dan rasakan pengalaman hunian terbaik
              </p>
              
              {/* Special Offer Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-full px-6 py-3 mb-8"
              >
                <Gift className="w-5 h-5 text-amber-600" />
                <span className="text-amber-800 font-bold text-lg">
                  🎉 DISKON 100 JUTA untuk 2 Pembeli Pertama!
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="py-8 bg-white">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '500px' }}>
                {isLoading ? (
                  <div className="w-full h-full rounded-2xl shadow-2xl bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-600 mx-auto mb-4"></div>
                      <p className="text-gray-600 text-lg">Memuat Virtual Tour...</p>
                      <p className="text-gray-500 text-sm mt-2">Mohon tunggu sebentar</p>
                    </div>
                  </div>
                ) : keypanoUrl ? (
                  <iframe
                    src={keypanoUrl}
                    title="Narraya Green Residence Virtual Tour"
                    className="w-full h-full rounded-2xl shadow-2xl"
                    loading="lazy"
                    allowFullScreen
                    style={{
                      border: 'none',
                      minHeight: '500px'
                    }}
                    onError={() => {
                      console.warn('Keypano iframe failed to load');
                      setIsKeypanoAvailable(false);
                    }}
                  />
                ) : (
                  <div className="w-full h-full rounded-2xl shadow-2xl bg-gray-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🏠</div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        Virtual Tour Sementara Tidak Tersedia
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Silakan hubungi kami untuk informasi lebih lanjut
                      </p>
                      <button
                        onClick={handleWhatsAppClick}
                        className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors text-lg font-semibold"
                      >
                        <MessageCircle className="inline w-5 h-5 mr-2" />
                        Hubungi WhatsApp
                      </button>
                    </div>
                  </div>
                )}
                
                {!isKeypanoAvailable && keypanoUrl && !isLoading && (
                  <div className="absolute inset-0 bg-white bg-opacity-95 rounded-2xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🏠</div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        Virtual Tour Sementara Tidak Tersedia
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Silakan hubungi kami untuk informasi lebih lanjut tentang Narraya Green Residence
                      </p>
                      <button
                        onClick={handleWhatsAppClick}
                        className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors text-lg font-semibold"
                      >
                        <MessageCircle className="inline w-5 h-5 mr-2" />
                        Hubungi WhatsApp
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                  <span>💡</span>
                  <span>Gunakan mouse atau sentuh layar untuk menjelajahi lingkungan Narraya</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jangan Sampai Kehabisan!
              </h2>
              <p className="text-xl mb-8 text-emerald-100">
                Promo terbatas hanya untuk 2 pembeli pertama dengan diskon 100 juta
              </p>
              
              {/* Special Offer Details */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Hanya 2 Unit</h3>
                    <p className="text-emerald-100">Promo terbatas untuk 2 pembeli pertama</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Gift className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Diskon 100 Juta</h3>
                    <p className="text-emerald-100">Hemat hingga 100 juta rupiah</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Clock className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Waktu Terbatas</h3>
                    <p className="text-emerald-100">Segera hubungi kami sekarang</p>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 flex items-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Hubungi via WhatsApp
                </button>
                <button
                  onClick={handlePhoneClick}
                  className="bg-emerald-800 text-white hover:bg-emerald-900 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 flex items-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  {companyInfo.whatsapp}
                </button>
              </div>

              <div className="mt-8 text-emerald-100">
                <p className="text-sm">
                  📍 Lokasi: Jl. Noroyono Brotonegaran, Ponorogo
                </p>
                <p className="text-sm mt-1">
                  🏠 Hunian Premium Syariah • 100% Halal • Tanpa Riba
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
                Mengapa Memilih Narraya Green Residence?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
                    title: "100% Syariah",
                    description: "Akad jual beli sesuai syariah Islam, tanpa riba dan denda"
                  },
                  {
                    icon: <MapPin className="w-8 h-8 text-emerald-600" />,
                    title: "Lokasi Strategis",
                    description: "5 langkah ke Alun-alun Ponorogo, akses mudah ke fasilitas umum"
                  },
                  {
                    icon: <Home className="w-8 h-8 text-emerald-600" />,
                    title: "Kualitas Premium",
                    description: "Bangunan berkualitas tinggi dengan desain modern tropis"
                  },
                  {
                    icon: <Star className="w-8 h-8 text-emerald-600" />,
                    title: "Fasilitas Lengkap",
                    description: "Mushola, taman, area bermain anak, dan keamanan 24 jam"
                  },
                  {
                    icon: <Users className="w-8 h-8 text-emerald-600" />,
                    title: "Komunitas Islami",
                    description: "Lingkungan yang nyaman untuk keluarga muslim"
                  },
                  {
                    icon: <Gift className="w-8 h-8 text-emerald-600" />,
                    title: "Promo Terbatas",
                    description: "Diskon 100 juta untuk 2 pembeli pertama"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-emerald-50 transition-colors"
                  >
                    <div className="flex justify-center mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="TKBM Logo"
                className="w-10 h-10 rounded-lg"
              />
              <span className="font-bold text-xl">TKBM</span>
            </div>
            <p className="text-slate-300 mb-6">
              Developer Properti Syariah Terpercaya di Ponorogo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-full transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi WhatsApp
              </button>
              <Link
                to="/narraya"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Lihat Halaman Narraya
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NarrayaVirtualPage;
