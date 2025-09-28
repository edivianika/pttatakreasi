import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Home, Shield, Star, CheckCircle, Phone, MessageCircle, Menu, X, TrendingUp, Award, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from './mockData';
import Gallery from './Gallery';
import NarrayaHero from './NarrayaHero';

const NarrayaPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan proyek Narraya. Mohon informasi lebih lanjut tentang hunian syariah ini.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "100% Akad Syariah",
      description: "Setiap transaksi menggunakan akad murni syariah tanpa riba, gharar, dan maysir"
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Desain Modern",
      description: "Arsitektur kontemporer dengan fasilitas lengkap dan teknologi terdepan"
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      title: "Lokasi Strategis",
      description: "Berada di jantung Ponorogo dengan akses mudah ke berbagai fasilitas publik"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Komunitas Berkualitas",
      description: "Hunian eksklusif untuk keluarga yang menghargai nilai-nilai syariah"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: "Investasi Tinggi",
      description: "Nilai properti yang terus meningkat dengan potensi keuntungan jangka panjang yang menguntungkan"
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      title: "Berkualitas Bergaransi",
      description: "Kualitas konstruksi terjamin dengan garansi resmi dan standar bangunan terbaik"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-teal-600" />,
      title: "Pembayaran Fleksibel",
      description: "Sistem pembayaran yang mudah dengan berbagai pilihan cicilan sesuai kemampuan finansial"
    }
  ];

  const amenities = [
    "Masjid dengan kapasitas 500 jamaah",
    "Taman bermain anak yang aman dan nyaman",
    "Area olahraga dan fitness center",
    "Kolam renang keluarga",
    "Lapangan futsal dan basket",
    "Area parkir yang luas dan aman",
    "Sistem keamanan 24/7",
    "Taman hijau dan jogging track",
    "Area komersial dan minimarket",
    "Sistem pengelolaan sampah yang ramah lingkungan"
  ];

  const testimonials = [
    {
      name: "Ahmad Rizki",
      role: "Kepala Keluarga",
      content: "Narraya benar-benar mengubah hidup keluarga kami. Lingkungan yang nyaman dan tetangga yang baik membuat kami merasa di rumah sendiri.",
      rating: 5
    },
    {
      name: "Siti Nurhaliza",
      role: "Ibu Rumah Tangga",
      content: "Fasilitas yang lengkap dan keamanan yang terjamin membuat saya tenang membesarkan anak-anak di sini.",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Pengusaha",
      content: "Investasi terbaik yang pernah saya lakukan. Nilai properti terus meningkat dan lingkungan semakin berkembang.",
      rating: 5
    }
  ];

  // Gallery images
  const galleryImages = [
    'https://images.unsplash.com/photo-1560448204-e4596d6bbf7a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753086-5f52b8745d6b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop'
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/narraya-logo.jpeg" 
                alt="Narraya Green Residence Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="font-bold text-lg text-emerald-800">NARRAYA</h1>
                <p className="text-xs text-gray-600">Green Residence</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('overview')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Tentang
              </button>
              <button 
                onClick={() => scrollToSection('details')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Detail Proyek
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Galeri
              </button>
              <button 
                onClick={() => scrollToSection('amenities')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Fasilitas
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Testimoni
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors font-medium flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Konsultasi
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('overview')}
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left px-4 py-2"
                >
                  Tentang
                </button>
                <button 
                  onClick={() => scrollToSection('details')}
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left px-4 py-2"
                >
                  Detail Proyek
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left px-4 py-2"
                >
                  Galeri
                </button>
                <button 
                  onClick={() => scrollToSection('amenities')}
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left px-4 py-2"
                >
                  Fasilitas
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left px-4 py-2"
                >
                  Testimoni
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-emerald-600 text-white px-4 py-3 rounded-full hover:bg-emerald-700 transition-colors font-medium flex items-center gap-2 mx-4"
                >
                  <MessageCircle size={16} />
                  Konsultasi Gratis
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <NarrayaHero />

      {/* Project Overview */}
      <section id="overview" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                Mengapa Memilih Narraya?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Narraya bukan sekadar hunian, melainkan investasi masa depan yang 
                mengutamakan nilai-nilai syariah dan kualitas hidup terbaik
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section id="details" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Detail Proyek Narraya
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Lokasi</h3>
                      <p className="text-sm sm:text-base text-gray-600">Jl. Raya Ponorogo - Madiun KM 5, Ponorogo, Jawa Timur</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Tahap Pembangunan</h3>
                      <p className="text-sm sm:text-base text-gray-600">Tahap 1: 2024-2025 (100 unit) | Tahap 2: 2025-2026 (150 unit)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Home className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Tipe Hunian</h3>
                      <p className="text-sm sm:text-base text-gray-600">2-3-4 Bedroom dengan luas 60-120 m², desain modern dan fungsional</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Kapasitas</h3>
                      <p className="text-sm sm:text-base text-gray-600">250 unit hunian dengan fasilitas lengkap untuk 1000+ penghuni</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
                  alt="Narraya Development"
                  className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl sm:rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Gallery 
              images={galleryImages}
              title="Galeri Proyek Narraya"
              columns={3}
            />
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-12 sm:py-16 lg:py-20 bg-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Fasilitas Lengkap & Modern
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Nikmati kenyamanan hidup terbaik dengan fasilitas yang dirancang 
                khusus untuk memenuhi kebutuhan keluarga muslim modern
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-800 font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Kata Mereka Tentang Narraya
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
                Pengalaman nyata dari keluarga yang telah merasakan berkah tinggal di Narraya
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-emerald-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Siap Memulai Perjalanan Baru?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90 px-4">
              Bergabunglah dengan komunitas Narraya dan rasakan berkah hunian syariah 
              yang nyaman, aman, dan penuh kebahagiaan
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-2xl flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
              >
                <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Konsultasi Gratis</span>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:bg-white hover:text-emerald-600 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
                <Phone size={20} className="sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Hubungi Sales</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <img 
                src="/logo.png" 
                alt="TKBM Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <div>
                <h3 className="font-bold text-base sm:text-lg text-white">TKBM</h3>
                <p className="text-xs text-gray-400">Properti Syariah</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              © 2025 TKBM Properti Syariah. Semua hak dilindungi.
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Wujudkan impian hunian syariah bersama kami
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NarrayaPage;
