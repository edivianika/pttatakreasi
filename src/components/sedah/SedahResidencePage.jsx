import React, { useState, useEffect } from "react";
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  Home, 
  Users, 
  CreditCard, 
  Award, 
  Star,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Leaf,
  Building,
  Car,
  TreePine,
  Wifi,
  Camera,
  Play
} from "lucide-react";
import { companyInfo } from "../mockData";

// Hero Section Component
const SedahResidenceHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
      alt: "Tampak Depan Sedah Residence - Hunian Syariah Modern",
      title: "Tampak Depan Perumahan",
      description: "Hunian syariah dengan desain modern dan lingkungan asri"
    },
    {
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop",
      alt: "Rumah Tipe 36 - Desain Minimalis & Fungsional",
      title: "Rumah Tipe 36",
      description: "Desain minimalis dengan 2 kamar tidur, cocok untuk keluarga muda"
    },
    {
      src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&h=800&fit=crop",
      alt: "Rumah Tipe 45 - Spasi Luas & Nyaman",
      title: "Rumah Tipe 45",
      description: "3 kamar tidur dengan ruang keluarga yang luas"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop",
      alt: "Interior Modern - Furnishing Berkualitas",
      title: "Interior Modern",
      description: "Interior berkualitas tinggi dengan finishing premium"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan hunian syariah Sedah Residence. Mohon informasi detail dan cara pembayaran yang mudah.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 overflow-hidden">
      {/* Refined Background Pattern */}
      <div className="absolute inset-0">
        {/* Subtle animated elements */}
        <div className="absolute top-20 left-8 w-24 h-24 md:top-32 md:left-16 md:w-40 md:h-40 bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-8 w-20 h-20 md:top-48 md:right-20 md:w-32 md:h-32 bg-gradient-to-br from-green-400/8 to-emerald-500/8 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-24 left-1/3 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-emerald-300/12 to-green-400/12 rounded-full blur-md animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-green-600/8 to-emerald-700/8 rounded-full blur-lg animate-bounce"></div>
        
        {/* Clean geometric pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.02'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-6 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-8 order-2 lg:order-1">
            {/* Refined Urgency Banner */}
            <div className="relative bg-gradient-to-r from-red-500 to-red-600 text-white p-4 md:p-5 rounded-2xl text-center overflow-hidden shadow-xl border border-red-400/20">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-red-600/10"></div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/5 rounded-full translate-y-6 -translate-x-6"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock size={16} className="text-red-100" />
                  <span className="text-sm md:text-base font-bold">PROMO TERBATAS</span>
                </div>
                <div className="text-xs md:text-sm text-red-100">
                  Hanya 10 unit pertama - Diskon hingga 60 juta
                </div>
              </div>
            </div>

            {/* Refined Main Headline */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 bg-clip-text text-transparent">
                    Sedah
                  </span>
                  <br />
                  <span className="text-gray-900">Residence</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
              </div>
              
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-semibold leading-relaxed">
                  Hunian Syariah Modern dengan
                  <span className="block bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                    Kemudahan Pembayaran
                  </span>
                </p>
                <p className="text-lg md:text-xl text-gray-600 font-medium">
                  100% Halal & Transparan
                </p>
              </div>
            </div>

            {/* Refined Value Propositions */}
            <div className="space-y-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-emerald-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-md flex-shrink-0">
                    <Shield className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-emerald-800 mb-1">100% Syariah</h3>
                    <p className="text-gray-700 text-sm md:text-base">Tanpa Riba, Transparan & Amanah</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-emerald-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-md flex-shrink-0">
                    <CreditCard className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-emerald-800 mb-1">Pembayaran Mudah</h3>
                    <p className="text-gray-700 text-sm md:text-base">DP 5%, Angsuran Ringan, Cicilan Fleksibel</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-emerald-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-md flex-shrink-0">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-emerald-800 mb-1">Developer Terpercaya</h3>
                    <p className="text-gray-700 text-sm md:text-base">15+ Proyek Sukses, 500+ Keluarga Bahagia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Refined Pricing Highlight */}
            <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-8 md:p-10 text-white overflow-hidden shadow-2xl border border-emerald-400/20">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-emerald-600/10"></div>
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 md:w-24 md:h-24 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
              
              <div className="text-center space-y-4 relative z-10">
                <p className="text-lg md:text-xl font-medium text-emerald-100">Mulai Dari</p>
                <div className="space-y-3">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
                    Rp 173 Juta
                  </div>
                  <div className="flex items-center justify-center gap-3 text-base md:text-lg">
                    <span className="line-through text-emerald-200/70">Rp 233 Juta</span>
                    <span className="bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 rounded-xl text-sm md:text-base font-bold shadow-lg">
                      Diskon 60 Juta!
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                  <p className="text-xs md:text-sm text-emerald-100">
                    *Harga promo berlaku untuk 10 unit pertama
                  </p>
                </div>
              </div>
            </div>

            {/* Refined CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="group flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageCircle size={22} className="relative z-10" />
                <span className="relative z-10">Konsultasi Gratis</span>
              </button>
              <button className="group flex-1 bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-600 font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-emerald-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play size={22} className="relative z-10" />
                <span className="relative z-10">Lihat Video</span>
              </button>
            </div>
          </div>

          {/* Refined Right Content - Hero Slideshow */}
          <div className="relative order-1 lg:order-2">
            <div className="relative group">
              <div className="relative w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] rounded-3xl shadow-2xl overflow-hidden border border-emerald-200/30 bg-white/10 backdrop-blur-sm">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-white">
                      <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-white/10">
                        <h3 className="text-lg md:text-2xl font-bold mb-2 drop-shadow-lg">{slide.title}</h3>
                        <p className="text-sm md:text-base text-white/90 drop-shadow-md">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Refined Navigation */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20 backdrop-blur-sm border border-gray-200/50"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20 backdrop-blur-sm border border-gray-200/50"
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Refined Indicators */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white scale-125 shadow-lg' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Refined Floating Cards */}
            <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 bg-white/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-xl z-20 animate-bounce border border-emerald-200/30">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-gray-800">Ready Stock</span>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl p-3 md:p-4 shadow-xl z-20 border border-emerald-400/30">
              <div className="text-center">
                <div className="text-base md:text-lg font-bold">100%</div>
                <div className="text-xs font-medium opacity-90">Syariah</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-20 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

// Sharia Values Section
const ShariaValuesSection = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Syariah",
      description: "Semua transaksi mengikuti prinsip syariah tanpa riba, transparan dan amanah",
      features: ["Tanpa Riba", "Transparan", "Amanah", "Halal"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Pembayaran Mudah",
      description: "Sistem pembayaran yang fleksibel dan menguntungkan untuk semua kalangan",
      features: ["DP 5%", "Angsuran Ringan", "Cicilan Fleksibel", "Tanpa Bunga"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Developer Terpercaya",
      description: "Pengalaman 15+ tahun dengan track record yang terbukti dan terpercaya",
      features: ["15+ Proyek", "500+ Keluarga", "Berpengalaman", "Terpercaya"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">Sedah Residence</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mx-auto"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Hunian syariah modern yang mengutamakan kenyamanan, keamanan, dan kemudahan pembayaran
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-emerald-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-2xl shadow-lg">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {value.description}
                </p>
                <div className="space-y-2">
                  {value.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center gap-2 text-sm text-emerald-600 font-medium bg-emerald-50 rounded-full px-4 py-2 group-hover:bg-emerald-100 transition-colors duration-300">
                      <CheckCircle size={16} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Property Gallery Section
const PropertyGallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      alt: "Tampak Depan Sedah Residence",
      title: "Tampak Depan Perumahan",
      description: "Desain modern dengan konsep hunian syariah"
    },
    {
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
      alt: "Rumah Tipe 36",
      title: "Rumah Tipe 36",
      description: "2 kamar tidur, cocok untuk keluarga muda"
    },
    {
      src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&h=400&fit=crop",
      alt: "Rumah Tipe 45",
      title: "Rumah Tipe 45",
      description: "3 kamar tidur dengan ruang keluarga luas"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      alt: "Interior Modern",
      title: "Interior Modern",
      description: "Furnishing berkualitas tinggi"
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      alt: "Taman & Fasilitas",
      title: "Taman & Fasilitas",
      description: "Lingkungan asri dan fasilitas lengkap"
    },
    {
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
      alt: "Area Komunal",
      title: "Area Komunal",
      description: "Ruang bersama untuk aktivitas keluarga"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Lihat <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">Keindahan</span> Hunian Kami
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mx-auto"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Setiap detail dirancang dengan cermat untuk memberikan kenyamanan maksimal bagi keluarga Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-gray-100">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-2 drop-shadow-lg">{image.title}</h3>
                  <p className="text-sm text-white/90 drop-shadow-md">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3 mx-auto text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Camera size={22} className="relative z-10" />
            <span className="relative z-10">Lihat Galeri Lengkap</span>
          </button>
        </div>
      </div>
    </section>
  );
};

// Easy Payment Section
const EasyPaymentSection = () => {
  const paymentMethods = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "DP Hanya 5%",
      description: "Uang muka terjangkau mulai dari Rp 8.65 juta",
      highlight: "Terjangkau"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Angsuran Ringan",
      description: "Cicilan mulai Rp 1.2 juta per bulan",
      highlight: "Ringan"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tanpa Bunga",
      description: "Sistem syariah tanpa bunga dan riba",
      highlight: "Halal"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fleksibel",
      description: "Pilihan tenor 5, 10, atau 15 tahun",
      highlight: "Fleksibel"
    }
  ];

  const paymentSteps = [
    {
      step: "01",
      title: "Konsultasi Gratis",
      description: "Konsultasi kebutuhan dan budget dengan tim kami"
    },
    {
      step: "02",
      title: "Pilih Unit",
      description: "Pilih unit yang sesuai dengan kebutuhan keluarga"
    },
    {
      step: "03",
      title: "Bayar DP",
      description: "Bayar uang muka hanya 5% dari harga properti"
    },
    {
      step: "04",
      title: "Mulai Cicilan",
      description: "Mulai cicilan bulanan yang ringan dan terjangkau"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">Kemudahan</span> Pembayaran
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mx-auto"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Sistem pembayaran syariah yang mengutamakan kemudahan dan kenyamanan untuk semua kalangan
          </p>
        </div>

        {/* Refined Payment Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {paymentMethods.map((method, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-emerald-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-md">
                    {method.icon}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-3 shadow-md">
                  {method.highlight}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Refined Payment Steps */}
        <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl border border-emerald-400/20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-emerald-600/10"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">
                Cara Pembayaran Mudah
              </h3>
              <p className="text-base md:text-lg text-emerald-100 max-w-2xl mx-auto">
                Hanya 4 langkah sederhana untuk memiliki rumah impian Anda
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {paymentSteps.map((step, index) => (
                <div key={index} className="text-center relative group">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/30">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-emerald-200 transition-colors duration-300">{step.title}</h4>
                  <p className="text-sm text-emerald-100 leading-relaxed">{step.description}</p>
                  
                  {index < paymentSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/30 transform translate-x-4">
                      <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-60" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmad & Siti",
      location: "Resident Sedah Residence",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Alhamdulillah, akhirnya kami bisa memiliki rumah syariah yang nyaman. Pembayarannya sangat mudah dan transparan."
    },
    {
      name: "Budi Santoso",
      location: "Resident Sedah Residence",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Developer yang sangat terpercaya. Proses pembelian lancar, tanpa riba, dan sesuai syariah. Recommended banget!"
    },
    {
      name: "Rina & Agus",
      location: "Resident Sedah Residence",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Fasilitas lengkap, lingkungan asri, dan tetangga yang ramah. Keluarga kami sangat nyaman tinggal di sini."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Kata <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">Mereka</span> Tentang Kami
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mx-auto"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Pengalaman nyata dari keluarga yang telah merasakan kenyamanan tinggal di Sedah Residence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-5 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 shadow-md border-2 border-emerald-100"
                  />
                  <div>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan hunian syariah Sedah Residence. Mohon informasi detail dan cara pembayaran yang mudah.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-emerald-500 to-emerald-700 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-emerald-600/10"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 -translate-x-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 translate-x-12"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Siap Memiliki <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">Rumah Impian</span>?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Konsultasi gratis sekarang dan dapatkan informasi lengkap tentang kemudahan pembayaran
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleWhatsAppClick}
              className="group bg-white text-emerald-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle size={22} className="relative z-10" />
              <span className="relative z-10">Konsultasi Gratis</span>
            </button>
            <button className="group border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone size={22} className="relative z-10" />
              <span className="relative z-10">Hubungi Kami</span>
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-white/90 text-sm space-y-2">
              <p className="flex items-center justify-center gap-2">
                <span className="text-lg">📞</span>
                <span className="font-semibold">{companyInfo.whatsapp}</span>
                <span className="mx-2">|</span>
                <span className="text-lg">📧</span>
                <span className="font-semibold">info@tatakreasi.com</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-lg">🕒</span>
                <span>Senin - Jumat: 08:00 - 17:00 | Sabtu: 08:00 - 15:00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component
const SedahResidencePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SedahResidenceHero />
      <ShariaValuesSection />
      <PropertyGallery />
      <EasyPaymentSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default SedahResidencePage;
