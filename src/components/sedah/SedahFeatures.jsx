import React from 'react';
import { Shield, XCircle, FileX, CreditCard } from 'lucide-react';

const SedahFeatures = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-[#A3B18A]" />,
      title: "Tanpa Riba",
      description: "Akad murni syariah tanpa bunga"
    },
    {
      icon: <XCircle className="w-8 h-8 text-[#A3B18A]" />,
      title: "Tanpa Denda",
      description: "Tidak ada denda keterlambatan"
    },
    {
      icon: <FileX className="w-8 h-8 text-[#A3B18A]" />,
      title: "Tanpa Sita",
      description: "Tidak ada penyitaan aset"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#A3B18A]" />,
      title: "Tanpa BI Checking",
      description: "Tidak perlu cek BI"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Keunggulan Syariah
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Hunian yang aman dan berkah dengan prinsip syariah yang ketat
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-[#F5F5F0] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#A3B18A] group-hover:text-white transition-all duration-300">
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
        </div>
      </div>
    </section>
  );
};

export default SedahFeatures;
