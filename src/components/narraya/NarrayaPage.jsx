import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Home, Shield, Star, CheckCircle, Phone, MessageCircle, Menu, X, TrendingUp, Award, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../mockData';
import Gallery from '../Gallery';
import NarrayaHero from './NarrayaHero';

const NarrayaPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan proyek Narraya. Mohon informasi lebih lanjut tentang hunian syariah ini.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
    '/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-1.png',
    '/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-2.png',
    '/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-3.png',
    '/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-4.png',
    '/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-5.png',
    '/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-6.png',
    '/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-7.png',
    '/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-8.png',
    '/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-9.png',
    '/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-10.png',
    '/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-11.png'
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <NarrayaHero 
        onWhatsAppClick={handleWhatsAppClick}
        onContactClick={handleWhatsAppClick}
      />


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

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 justify-items-center">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 w-full max-w-xs">
                  <div className="flex justify-center mb-3 sm:mb-6">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 text-center leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Second row with 3 items centered */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 justify-items-center mt-3 sm:mt-6 lg:mt-8 max-w-4xl mx-auto">
              {features.slice(4, 7).map((feature, index) => (
                <div key={index + 4} className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 w-full max-w-xs">
                  <div className="flex justify-center mb-3 sm:mb-6">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 text-center leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Call to Action with Video */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                <span className="text-emerald-600">INVESTASI</span> SEKARANG JUGA!
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto px-4 mb-4 sm:mb-6">
                Kapan lagi bisa punya hunian eksklusif dan modern paling strategis di Ponorogo.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
                Narraya Residence bukan sekadar tempat tinggal, tapi juga pilihan investasi cerdas dengan nilai yang terus meningkat dari tahun ke tahun.
              </p>
            </div>

            {/* YouTube Video Embed */}
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/LCtM9ZAT0t0?rel=0&modestbranding=1&showinfo=0&controls=1&disablekb=1&fs=1&iv_load_policy=3&cc_load_policy=0&start=0&end=0&loop=0&playlist=LCtM9ZAT0t0"
                  title="Narraya Residence - Video Investasi"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Caption */}
              <p className="text-center text-sm sm:text-base text-gray-500 mt-4 sm:mt-6">
                Tonton video untuk melihat keunggulan dan potensi investasi Narraya Residence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section id="details" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            

            {/* Siteplan Section */}
            <div className="mb-16 sm:mb-20">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Siteplan Narraya Green Residence
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Layout cluster dengan 12 unit hunian tipe 85 yang strategis dan nyaman
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
                <div className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center">
                  <img 
                    src="/narraya/slideshow/siteplan narraya-2.png" 
                    alt="Siteplan Narraya Green Residence" 
                    className="max-w-full max-h-[600px] object-contain"
                  />
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
                  <div className="bg-emerald-50 p-3 rounded-lg text-center">
                    <div className="font-semibold text-emerald-800">A. Gerbang Utama</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="font-semibold text-blue-800">B. Pos Satpam</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="font-semibold text-green-800">C. Taman</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <div className="font-semibold text-purple-800">D. Area Putar Balik</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-center">
                    <div className="font-semibold text-red-800">E. Jl. Noroyono</div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-center">
                    <div className="font-semibold text-yellow-800">F. Rumah Warga Sekitar</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hunian Nyaman dengan Garansi Nyata */}
            <div className="mb-16 sm:mb-20">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Hunian Nyaman dengan Garansi Nyata
                </h3>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                    Kami tidak hanya membangun rumah, tetapi juga memberikan jaminan ketenangan bagi Anda dan keluarga:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-emerald-50 rounded-xl p-6 border-l-4 border-emerald-500">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">🛠️</div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">Garansi Perawatan Rumah 1 Tahun</h4>
                          <p className="text-gray-700">Setiap detail rumah tetap terjaga.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">🏗️</div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">Garansi Struktur Rumah 5 Tahun</h4>
                          <p className="text-gray-700">Konstruksi kokoh dan tahan lama.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 text-center">
                      Desain rumah kami dirancang dengan konsep hunian sehat:
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-4xl mb-3">🌞</div>
                        <p className="text-gray-700 font-medium">Pencahayaan alami yang optimal</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-4xl mb-3">🌬️</div>
                        <p className="text-gray-700 font-medium">Sirkulasi udara lancar</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-4xl mb-3">⚡</div>
                        <p className="text-gray-700 font-medium">Efisiensi energi untuk kenyamanan jangka panjang</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-4xl mb-3">🌿</div>
                        <p className="text-gray-700 font-medium">Lingkungan hijau dan sehat</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-8 text-center">
                    <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                      <span className="font-bold text-emerald-700">Hasilnya, rumah Anda bukan hanya tempat tinggal,</span> 
                      <br className="hidden sm:block" />
                      <span className="text-gray-700">tapi investasi masa depan yang sehat, hemat, dan penuh ketenangan.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Denah Lantai */}
            <div className="mb-16 sm:mb-20">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Denah Lantai Tipe 85
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Layout 2 lantai dengan desain modern dan fungsional (LB: 85 m² | LT: 96 m²)
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Lantai 1 */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                  <h4 className="text-lg font-bold text-center mb-6 bg-emerald-600 text-white py-3 rounded-lg">
                    Denah Lantai 1
                  </h4>
                  <div className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center min-h-[300px]">
                    <img 
                      src="/narraya/denah 1.png" 
                      alt="Denah Lantai 1 Narraya Green Residence" 
                      className="max-w-full max-h-[500px] object-contain"
                    />
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 border-b pb-2">Keterangan Lantai 1</h5>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span>Teras</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span>Ruang Tamu</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span>Kamar Mandi Bawah</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span>Kamar Tidur Utama</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span>Akses Tangga Naik</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span>Dapur</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span>Open Space</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span>Carport</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lantai 2 */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                  <h4 className="text-lg font-bold text-center mb-6 bg-blue-600 text-white py-3 rounded-lg">
                    Denah Lantai 2
                  </h4>
                  <div className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center min-h-[300px]">
                    <img 
                      src="/narraya/denah 2.png" 
                      alt="Denah Lantai 2 Narraya Green Residence" 
                      className="max-w-full max-h-[500px] object-contain"
                    />
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 border-b pb-2">Keterangan Lantai 2</h5>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span>Kamar Tidur</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span>Kamar Mandi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span>Kamar Tidur</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span>Akses Tangga Turun</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span>Ruang Keluarga</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span>Balkon</span>
                      </div>
                    </div>
                  </div>
                </div>
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



      {/* CTA Section */}
       <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-slate-800">
            
            {/* Limited Offer Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              Penawaran Terbatas - Hanya 2 Unit Pertama
            </div>

             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-800">
               Hemat <span className="text-emerald-600">150 Juta</span>
             </h2>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-slate-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-right">
                  <p className="text-base text-slate-600 mb-2">Harga Normal</p>
                  <p className="text-2xl sm:text-3xl font-bold text-slate-400 line-through">Rp 950 Juta</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-base text-emerald-600 mb-2">Harga Promo</p>
                  <p className="text-3xl sm:text-4xl font-bold text-emerald-700">Rp 800 Juta</p>
                </div>
              </div>
            </div>

            <p className="text-lg sm:text-xl mb-8 text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Dapatkan hunian syariah premium di lokasi strategis Ponorogo dengan 
              <span className="font-semibold text-emerald-600"> diskon istimewa 150 juta</span> 
              untuk 2 keluarga pertama yang bergabung dengan komunitas Narraya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <MessageCircle size={20} />
                <span>Download Brosur</span>
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-transparent border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                <span>Hubungi Sales</span>
              </button>
            </div>


            <p className="text-sm text-slate-500">
              *Penawaran terbatas untuk 2 pembeli pertama yang menandatangani booking fee. Syarat dan ketentuan berlaku.
            </p>
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
