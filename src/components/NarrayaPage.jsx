import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Home, Shield, Star, CheckCircle, Phone, MessageCircle, Menu, X, TrendingUp, Award, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from './mockData';
import Gallery from './Gallery';
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 justify-items-center">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 justify-items-center mt-3 sm:mt-6 lg:mt-8 max-w-4xl mx-auto">
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
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&showinfo=0"
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
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                Detail Proyek Narraya
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Lihat detail lengkap siteplan, spesifikasi bangunan, dan denah lantai hunian modern Narraya Green Residence
              </p>
            </div>

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
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-6xl mb-4">🗺️</div>
                    <p className="text-lg sm:text-xl font-semibold text-gray-700">Siteplan Image</p>
                    <p className="text-sm text-gray-500 mt-2">Upload gambar siteplan di sini</p>
                  </div>
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

            {/* Spesifikasi & Fasilitas */}
            <div className="mb-16 sm:mb-20">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Spesifikasi & Fasilitas
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Spesifikasi Bangunan */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 text-center bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-3 rounded-lg">
                    Spesifikasi Bangunan
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Pondasi</h5>
                      <p className="text-gray-600 text-sm">• Tiang Pancang Staruss</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Struktur</h5>
                      <p className="text-gray-600 text-sm">• Beton Bertulang</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Dinding</h5>
                      <p className="text-gray-600 text-sm">• Bata Ringan</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Atap</h5>
                      <p className="text-gray-600 text-sm">• Penutup: Atap UPVC<br/>• Rangka: Baja Ringan</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Lantai</h5>
                      <p className="text-gray-600 text-sm">• R. Utama: Granite Tile 60x60<br/>• KM: Dinding dan Lantai Keramik</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Plafond</h5>
                      <p className="text-gray-600 text-sm">• Rangka: Baja Ringan</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Pintu dan Jendela</h5>
                      <p className="text-gray-600 text-sm">• Kusen Jati<br/>• Daun Pintu dan Jendela Jati<br/>• Kaca Ketebalan 5 mm</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Sanitary</h5>
                      <p className="text-gray-600 text-sm">• Ex Amstard</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Utilitas</h5>
                      <p className="text-gray-600 text-sm">• Air Bersih: PDAM<br/>• Listrik: 1300 Watt</p>
                    </div>
                  </div>
                </div>

                {/* Fasilitas */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg">
                    Fasilitas
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">Bangunan</h5>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>🏠 Luas Tanah: 96 m²</p>
                        <p>🏡 Luas Bangunan: 85 m²</p>
                        <p>🏢 2 Lantai</p>
                        <p>🛏️ 3 Kamar Tidur</p>
                        <p>🛁 2 Kamar Mandi</p>
                        <p>👥 Ruang Tamu</p>
                        <p>👨‍👩‍👧‍👦 Ruang Keluarga</p>
                        <p>🌿 Taman Belakang</p>
                        <p>🚗 Carport Luas (2 mobil)</p>
                        <p>🔧 Ruang Service Tertutup</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">Kawasan</h5>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>🔒 Keamanan 24 Jam</p>
                        <p>🛣️ Row Jalan 6 Meter</p>
                        <p>🎮 Play Ground</p>
                        <p>🌳 Taman Hijau</p>
                        <p>📚 One Gate System</p>
                      </div>
                    </div>
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
                  <div className="aspect-square w-full bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🏠</div>
                      <p className="text-lg font-semibold text-gray-700">Denah Lantai 1</p>
                      <p className="text-sm text-gray-500 mt-2">Upload gambar denah lantai 1</p>
                    </div>
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
                  <div className="aspect-square w-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🏠</div>
                      <p className="text-lg font-semibold text-gray-700">Denah Lantai 2</p>
                      <p className="text-sm text-gray-500 mt-2">Upload gambar denah lantai 2</p>
                    </div>
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
                <span className="text-sm sm:text-base">Download Brosur</span>
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
