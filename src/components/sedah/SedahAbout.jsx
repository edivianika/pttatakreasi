import React from "react";
import { Shield, Home, Users, Award, CheckCircle, Star } from "lucide-react";

const SedahAbout = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Syariah",
      description: "Mengikuti prinsip-prinsip syariah dalam setiap aspek pembangunan dan transaksi"
    },
    {
      icon: Home,
      title: "Kualitas Premium",
      description: "Dibangun dengan material berkualitas tinggi dan standar konstruksi terbaik"
    },
    {
      icon: Users,
      title: "Komunitas Ramah",
      description: "Lingkungan yang nyaman dan aman untuk keluarga muslim"
    },
    {
      icon: Award,
      title: "Developer Terpercaya",
      description: "15+ tahun pengalaman membangun properti syariah berkualitas"
    }
  ];

  const values = [
    "Transaksi bebas riba dan sesuai syariah",
    "Sertifikat halal untuk setiap unit",
    "Lingkungan yang mendukung ibadah",
    "Fasilitas pendukung gaya hidup syariah"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih <span className="text-green-600">Sedah Green Residence</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hunian syariah yang memadukan kenyamanan modern dengan nilai-nilai Islam, 
            memberikan Anda dan keluarga tempat tinggal yang berkah dan berkualitas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-200">
                <feature.icon className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Hunian Syariah yang <span className="text-green-600">Berkah</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sedah Green Residence hadir sebagai solusi hunian syariah modern di Ponorogo. 
              Setiap aspek pembangunan telah disesuaikan dengan prinsip-prinsip syariah, 
              mulai dari proses transaksi yang bebas riba hingga fasilitas pendukung 
              yang mendukung gaya hidup Islami.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Dengan lokasi strategis di Sedah, Jenangan, Ponorogo, Anda akan merasakan 
              kenyamanan tinggal di lingkungan yang aman, nyaman, dan mendukung aktivitas 
              ibadah keluarga muslim.
            </p>

            {/* Value Points */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Keunggulan Syariah Kami:
              </h4>
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Prestasi & Kepercayaan
            </h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Unit Terjual</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Syariah Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4.9</div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <Star className="fill-current" size={14} />
                  Rating
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="mt-8 p-6 bg-white rounded-xl">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 italic text-sm mb-3">
                "Alhamdulillah, proses pembelian rumah sangat mudah dan sesuai syariah. 
                Developer sangat profesional dan transparan."
              </p>
              <div className="text-xs text-gray-500">
                - Bpk. Ahmad, Owner Sedah Green Residence
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Siap Memiliki Hunian Syariah Impian?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Dapatkan promo terbatas untuk 10 unit pertama dengan diskon hingga 60 juta rupiah. 
            Konsultasi gratis dengan tim ahli kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-green-50 transition-colors duration-200">
              Konsultasi Gratis
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200">
              Lihat Unit Tersedia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SedahAbout;
