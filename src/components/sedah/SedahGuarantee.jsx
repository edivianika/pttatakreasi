import React from "react";
import { Shield, CheckCircle, Award, Clock, Users, Home, Star, Phone, MessageCircle } from "lucide-react";

const SedahGuarantee = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan garansi dan keamanan investasi di Sedah Green Residence. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/081331388887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:081331388887`, '_self');
  };

  const guarantees = [
    {
      icon: <Shield className="text-green-600" size={32} />,
      title: "100% Syariah & Halal",
      description: "Semua transaksi sesuai prinsip syariah, tanpa riba, gharar, dan maysir. Sertifikat halal dari MUI.",
      features: [
        "Akad jual beli yang jelas",
        "Tidak ada bunga/riba",
        "Transparan dan amanah",
        "Sertifikat halal MUI"
      ]
    },
    {
      icon: <Award className="text-blue-600" size={32} />,
      title: "Kualitas Terjamin",
      description: "Material berkualitas tinggi dengan standar SNI. Bangunan kokoh dan tahan lama dengan garansi konstruksi.",
      features: [
        "Material berkualitas SNI",
        "Konstruksi tahan gempa",
        "Garansi konstruksi 2 tahun",
        "Inspeksi berkala"
      ]
    },
    {
      icon: <CheckCircle className="text-purple-600" size={32} />,
      title: "Legalitas Lengkap",
      description: "Semua dokumen legalitas lengkap dan sah. Sertifikat tanah, IMB, dan dokumen pendukung lainnya.",
      features: [
        "Sertifikat tanah SHM",
        "IMB yang sah",
        "Dokumen lengkap",
        "Bebas sengketa"
      ]
    },
    {
      icon: <Users className="text-orange-600" size={32} />,
      title: "Pelayanan 24/7",
      description: "Tim customer service siap membantu 24 jam. Maintenance dan perawatan properti berkelanjutan.",
      features: [
        "Customer service 24/7",
        "Maintenance berkala",
        "Respons cepat",
        "Tim profesional"
      ]
    }
  ];

  const trustIndicators = [
    {
      icon: <Home className="text-green-500" size={24} />,
      title: "15+ Proyek Sukses",
      description: "Pengalaman membangun perumahan berkualitas"
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: "500+ Keluarga Bahagia",
      description: "Kepuasan pelanggan yang tinggi"
    },
    {
      icon: <Star className="text-yellow-500" size={24} />,
      title: "4.9/5 Rating",
      description: "Penilaian terbaik dari pelanggan"
    },
    {
      icon: <Shield className="text-purple-500" size={24} />,
      title: "100% Amanah",
      description: "Transparan dan terpercaya"
    }
  ];

  const certifications = [
    {
      name: "Sertifikat Halal MUI",
      description: "Memastikan semua transaksi sesuai syariah"
    },
    {
      name: "ISO 9001:2015",
      description: "Standar manajemen mutu internasional"
    },
    {
      name: "Sertifikat SNI",
      description: "Material dan konstruksi sesuai standar nasional"
    },
    {
      name: "Asuransi Konstruksi",
      description: "Perlindungan selama masa konstruksi"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Garansi</span> & Kepercayaan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami memberikan jaminan penuh untuk kenyamanan dan keamanan investasi Anda. 
            Setiap detail dirancang untuk memberikan kepuasan maksimal.
          </p>
        </div>

        {/* Main Guarantees */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white rounded-xl p-3 shadow-md">
                  {guarantee.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-600">
                    {guarantee.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {guarantee.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 mb-16 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">
            Mengapa Memilih TKBM?
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 rounded-xl p-4 mb-4">
                  {indicator.icon}
                </div>
                <div className="text-2xl font-bold mb-2">
                  {indicator.title}
                </div>
                <div className="text-green-100 text-sm">
                  {indicator.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Sertifikasi & Legalitas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-green-600" size={32} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 mb-16 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            🛡️ Jaminan Uang Kembali 100%
          </h3>
          <p className="text-red-100 mb-6 max-w-3xl mx-auto">
            Jika dalam 30 hari pertama Anda tidak puas dengan kualitas hunian atau pelayanan kami, 
            kami akan mengembalikan uang Anda 100% tanpa potongan apapun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-red-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Konsultasi Gratis
            </button>
            <button
              onClick={handleCallClick}
              className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Hubungi Langsung
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Butuh Informasi Lebih Lanjut?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Tim konsultan kami siap membantu menjawab semua pertanyaan Anda. 
              Konsultasi gratis tanpa kewajiban apapun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-green-600" size={24} />
                  <div className="text-left">
                    <div className="font-bold text-gray-900">WhatsApp</div>
                    <div className="text-gray-600">0813 3138 887</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="flex items-center gap-3">
                  <Clock className="text-blue-600" size={24} />
                  <div className="text-left">
                    <div className="font-bold text-gray-900">Jam Kerja</div>
                    <div className="text-gray-600">08:00 - 17:00 WIB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SedahGuarantee;
