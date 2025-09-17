import React from 'react';
import { Shield, DollarSign, Home, Star, Award, Users, Heart, CheckCircle } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Syariah",
      description: "Tanpa riba, gharar, dan maysir",
      color: "emerald"
    },
    {
      icon: DollarSign,
      title: "Harga Transparan",
      description: "Tidak ada biaya tersembunyi",
      color: "blue"
    },
    {
      icon: Home,
      title: "Developer Lokal",
      description: "Terpercaya sejak 2015",
      color: "amber"
    },
    {
      icon: Star,
      title: "Fasilitas Islami",
      description: "Mushola dan lingkungan kondusif",
      color: "purple"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Sertifikat Halal MUI",
      description: "Akad dan proses terjamin halal"
    },
    {
      icon: Users,
      title: "Komunitas Solid",
      description: "Lingkungan islami yang harmonis"
    },
    {
      icon: Heart,
      title: "Pelayanan Terbaik",
      description: "Customer service yang responsif"
    },
    {
      icon: CheckCircle,
      title: "Legal Lengkap",
      description: "SHM, IMB, dan surat lengkap"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: "bg-emerald-100 text-emerald-600 border-emerald-200",
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      amber: "bg-amber-100 text-amber-600 border-amber-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200"
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Keunggulan TKBM</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Mengapa ribuan keluarga mempercayakan hunian impian mereka kepada kami
          </p>
        </div>

        {/* Main Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {badges.map((badge, index) => (
            <div key={index} className="group">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${getColorClasses(badge.color)}`}>
                  <badge.icon size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{badge.title}</h3>
                <p className="text-gray-600 text-sm">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="heading-3 text-emerald-700 mb-4">Prestasi & Pengakuan</h3>
            <p className="body-medium text-gray-600">
              Berbagai pencapaian yang membuktikan komitmen kami pada kualitas dan kepercayaan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <achievement.icon className="text-emerald-600" size={20} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/50">
            <div className="text-center">
              <div className="heading-2 text-emerald-600 mb-1">500+</div>
              <p className="body-small text-gray-600">Unit Terjual</p>
            </div>
            <div className="text-center">
              <div className="heading-2 text-emerald-600 mb-1">15+</div>
              <p className="body-small text-gray-600">Proyek Selesai</p>
            </div>
            <div className="text-center">
              <div className="heading-2 text-emerald-600 mb-1">4.9/5</div>
              <p className="body-small text-gray-600">Rating Kepuasan</p>
            </div>
            <div className="text-center">
              <div className="heading-2 text-emerald-600 mb-1">8+</div>
              <p className="body-small text-gray-600">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;