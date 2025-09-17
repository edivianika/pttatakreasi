import React from "react";
import { MapPin, Clock, Wifi, Shield } from "lucide-react";

const SedahLocation = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan lokasi Sedah Green Residence. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/081331388887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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

        {/* Bottom Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Lokasi Ini?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-green-600" size={32} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Akses Cepat</h4>
                <p className="text-gray-600">
                  Hanya 15 menit ke pusat kota Ponorogo dengan kendaraan pribadi
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-blue-600" size={32} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Lingkungan Aman</h4>
                <p className="text-gray-600">
                  Area perumahan yang tenang dan aman untuk keluarga
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="text-purple-600" size={32} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Infrastruktur Lengkap</h4>
                <p className="text-gray-600">
                  Listrik, air, internet, dan fasilitas umum sudah tersedia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SedahLocation;
