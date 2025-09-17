import React from 'react';
import { Shield, Heart, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "100% Syariah",
      description: "Komitmen penuh pada prinsip syariah dalam setiap transaksi properti"
    },
    {
      icon: Heart,
      title: "Tanpa Riba & Denda",
      description: "Sistem pembayaran yang adil tanpa bunga dan denda yang memberatkan"
    },
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description: "Hunian berkualitas tinggi dengan material pilihan dan finishing premium"
    },
    {
      icon: Users,
      title: "Komunitas Islami",
      description: "Lingkungan yang kondusif untuk tumbuh kembang keluarga muslim"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Tentang Tata Kreasi Bumi Madani</h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            Developer properti syariah terpercaya di Ponorogo yang berkomitmen 
            menghadirkan hunian berkualitas dengan prinsip syariah yang murni
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h3 className="heading-3 mb-6 text-emerald-700">
              Mengapa Memilih TKBM?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Akad Syariah Murni</h4>
                  <p className="text-gray-600">
                    Setiap transaksi menggunakan akad jual beli yang sesuai dengan 
                    hukum Islam, tanpa unsur riba, gharar, dan maysir
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-amber-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Pengalaman Terpercaya</h4>
                  <p className="text-gray-600">
                    Lebih dari 8 tahun mengembangkan hunian syariah di Ponorogo 
                    dengan track record yang solid dan reputasi yang baik
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Developer Lokal</h4>
                  <p className="text-gray-600">
                    Memahami kebutuhan dan karakteristik masyarakat Ponorogo, 
                    sehingga dapat memberikan solusi hunian yang tepat
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
              alt="TKBM Office Building"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent rounded-2xl"></div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="heading-3 text-emerald-600 mb-1">500+</div>
                <p className="body-small text-gray-600">Keluarga Percaya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="text-emerald-600" size={20} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;