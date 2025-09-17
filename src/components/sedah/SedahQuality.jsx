import React from 'react';
import { Shield, Hammer, Home, CheckCircle } from 'lucide-react';

const SedahQuality = () => {
  const qualityFeatures = [
    {
      icon: <Hammer className="w-8 h-8 text-[#A3B18A]" />,
      title: "Pondasi Kuat",
      description: "Konstruksi berkualitas tinggi dengan material terpilih"
    },
    {
      icon: <Home className="w-8 h-8 text-[#A3B18A]" />,
      title: "Desain Modern Tropis",
      description: "Arsitektur yang sesuai iklim Indonesia"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#A3B18A]" />,
      title: "Material Terpilih",
      description: "Bahan bangunan berkualitas premium"
    }
  ];

  const interiorImages = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e4596d6bbf7a?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Kualitas Bangunan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Pondasi kuat, material terpilih, desain modern tropis
            </p>
          </div>

          {/* Quality Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#F5F5F0] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#3D3D3D] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Interior Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#3D3D3D] mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              Detail Interior
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {interiorImages.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={image}
                    alt={`Interior ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="bg-[#F5F5F0] rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Jaminan Kualitas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A3B18A] flex-shrink-0" />
                  <span className="text-gray-700" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Garansi bangunan 1 tahun
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A3B18A] flex-shrink-0" />
                  <span className="text-gray-700" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Material berkualitas premium
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A3B18A] flex-shrink-0" />
                  <span className="text-gray-700" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Konstruksi sesuai standar
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A3B18A] flex-shrink-0" />
                  <span className="text-gray-700" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Tim profesional berpengalaman
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SedahQuality;
