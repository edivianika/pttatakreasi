import React, { useState } from "react";
import { MapPin, Clock, Wifi, Shield, ChevronLeft, ChevronRight } from "lucide-react";

const SedahLocation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan lokasi Sedah Green Residence. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/081331388887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const locationBenefits = [
    {
      icon: <Clock className="text-green-600" size={32} />,
      bgColor: "bg-green-100",
      title: "Akses Cepat",
      description: "Hanya 15 menit ke pusat kota Ponorogo dengan kendaraan pribadi"
    },
    {
      icon: <Shield className="text-blue-600" size={32} />,
      bgColor: "bg-blue-100",
      title: "Lingkungan Aman",
      description: "Area perumahan yang tenang dan aman untuk keluarga"
    },
    {
      icon: <Wifi className="text-purple-600" size={32} />,
      bgColor: "bg-purple-100",
      title: "Infrastruktur Lengkap",
      description: "Listrik, air, internet, dan fasilitas umum sudah tersedia"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % locationBenefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + locationBenefits.length) % locationBenefits.length);
  };

  const locationData = {
    address: "Desa Sedah, Kecamatan Jenangan, Kabupaten Ponorogo, Jawa Timur",
    coordinates: {
      lat: -7.8651,
      lng: 111.4696
    },
    distance: {
      alunAlun: "15 menit",
      terminal: "10 menit",
      rumahSakit: "12 menit",
      sekolah: "8 menit",
      pasar: "5 menit"
    }
  };


  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Lokasi Strategis</span> di
            <br />
            Jenangan, Ponorogo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hunian nyaman dengan akses mudah ke berbagai fasilitas penting. 
            Lokasi yang tepat untuk investasi jangka panjang dan tempat tinggal yang nyaman.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Map & Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200"></div>
              <div className="text-center z-10">
                <MapPin className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Sedah Green Residence
                </h3>
                <p className="text-gray-600 mb-4">
                  {locationData.address}
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  Lihat Lokasi di Maps
                </button>
              </div>
            </div>

            {/* Address Details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="text-green-600" size={24} />
                Alamat Lengkap
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {locationData.address}
              </p>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Koordinat GPS:</strong>
                </p>
                <p className="text-sm font-mono text-gray-800">
                  {locationData.coordinates.lat}, {locationData.coordinates.lng}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Facilities & Nearby Places */}
          <div className="space-y-8">

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">
                Ingin Melihat Lokasi Langsung?
              </h3>
              <p className="text-green-100 mb-6">
                Tim kami siap mengantar Anda melihat lokasi dan memberikan penjelasan lengkap tentang lingkungan sekitar.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-green-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                <MapPin size={20} className="inline mr-2" />
                Jadwalkan Kunjungan
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Info - Slide Cards */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Lokasi Ini?
            </h3>
          </div>
          
          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {locationBenefits.map((benefit, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl p-8 shadow-lg mx-2">
                      <div className="text-center">
                        <div className={`${benefit.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                          {benefit.icon}
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {locationBenefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-green-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SedahLocation;
