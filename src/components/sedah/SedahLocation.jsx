import React from 'react';
import { MapPin, School, ShoppingCart, Heart, Car } from 'lucide-react';

const SedahLocation = () => {
  const facilities = [
    {
      icon: <School className="w-6 h-6 text-[#A3B18A]" />,
      text: "Dekat sekolah SD, SMP, SMA"
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-[#A3B18A]" />,
      text: "Pasar tradisional & modern"
    },
    {
      icon: <Heart className="w-6 h-6 text-[#A3B18A]" />,
      text: "Rumah Sakit terdekat 5 menit"
    },
    {
      icon: <Car className="w-6 h-6 text-[#A3B18A]" />,
      text: "Akses jalan utama Ponorogo"
    }
  ];

  return (
    <section className="py-16 bg-[#F5F5F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Lokasi & Akses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Strategis di Sedah, Jenangan, Ponorogo dengan akses mudah ke berbagai fasilitas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-[#A3B18A] mx-auto mb-4" />
                  <p className="text-[#3D3D3D] font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Sedah, Jenangan, Ponorogo
                  </p>
                  <p className="text-gray-600 text-sm mt-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Jawa Timur
                  </p>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-[#3D3D3D] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Fasilitas Terdekat
              </h3>
              <div className="space-y-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-white rounded-full p-3 shadow-sm">
                      {facility.icon}
                    </div>
                    <p className="text-gray-700 font-medium" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      {facility.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <h4 className="font-bold text-[#3D3D3D] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Keunggulan Lokasi:
                </h4>
                <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <li>• Lingkungan asri dan tenang</li>
                  <li>• Jalan lingkungan lebar dan rapi</li>
                  <li>• Akses mudah ke pusat kota Ponorogo</li>
                  <li>• Dekat dengan area komersial</li>
                  <li>• Transportasi umum mudah dijangkau</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SedahLocation;
