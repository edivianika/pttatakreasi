import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calculator, Home, MapPin, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CalculatorPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const projects = [
    {
      id: 'narraya',
      name: 'Narraya Green Residence',
      type: 'Perumahan Premium',
      price: 'Mulai 800 Jutaan',
      location: 'Jl. Noroyono Brotonegaran, Ponorogo',
      description: 'Hunian premium dengan lokasi strategis di jantung kota Ponorogo',
      image: '/tatakreasi/perumahan-ponorogo-narraya-green-residence.png',
      features: [
        '5 langkah ke Alun-alun Ponorogo',
        'Lokasi super strategis',
        'Hunian modern tropis',
        'Fasilitas lengkap'
      ],
      color: 'emerald',
      route: '/kalkulator/narraya'
    },
    {
      id: 'sedah',
      name: 'Sedah Green Residence',
      type: 'Cluster Islami',
      price: 'Mulai 180 Jutaan',
      location: 'Desa Sedah, Jenangan, Ponorogo',
      description: 'Cluster islami yang nyaman dengan fasilitas lengkap untuk keluarga',
      image: '/tatakreasi/perumahan-ponorogo-sedah-green-residence.png',
      features: [
        'Harga terjangkau berkualitas',
        'Cluster bernuansa islami',
        'Mushola terintegrasi',
        'Area bermain anak'
      ],
      color: 'green',
      route: '/kalkulator/sedah'
    },
    {
      id: 'grandsezha',
      name: 'Grand Sezha',
      type: 'Perumahan Eksklusif',
      price: 'Mulai 500 Jutaan',
      location: 'Tengah Kota Ponorogo',
      description: 'Hunian eksklusif di tengah kota dengan kemudahan akses terbaik',
      image: '/tatakreasi/perumahan-ponorogo-grand-sezha.png',
      features: [
        'Lokasi premium eksklusif',
        'Dekat fasilitas kota',
        'Desain arsitektur modern',
        'Akses mudah kemana-mana'
      ],
      color: 'blue',
      route: '/kalkulator/grandsezha'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-700',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        accent: 'text-emerald-600'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        button: 'bg-green-600 hover:bg-green-700',
        accent: 'text-green-600'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        button: 'bg-blue-600 hover:bg-blue-700',
        accent: 'text-blue-600'
      }
    };
    return colorMap[color] || colorMap.emerald;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm"
      >
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Link to="/freelance" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft size={24} className="text-slate-600" />
              <span className="font-semibold text-slate-800">Kembali</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Calculator size={24} className="text-emerald-600" />
            <h1 className="text-xl font-bold text-slate-800">Kalkulator KPR</h1>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Pilih Proyek untuk Kalkulasi
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hitung cicilan KPR syariah untuk proyek pilihan Anda dengan mudah dan transparan
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <Link to={project.route} className="block">
                  {/* Project Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${colors.button} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {project.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-sm font-bold">
                        {project.price}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-600 mb-3">
                        <MapPin size={16} />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 ${colors.accent} rounded-full`}></div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <div className={`${colors.button} text-white w-full py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 group-hover:shadow-lg`}>
                        <div className="flex items-center justify-center gap-2">
                          <Calculator size={18} />
                          Hitung Cicilan
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Mengapa Pilih Kalkulator KPR Syariah?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign size={32} className="text-emerald-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Harga Transparan</h4>
                <p className="text-sm text-slate-600">Tidak ada biaya tersembunyi, semua harga jelas dan transparan</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home size={32} className="text-emerald-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">100% Syariah</h4>
                <p className="text-sm text-slate-600">Akad murni syariah tanpa riba, gharar, dan maysir</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-emerald-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Konsultasi Gratis</h4>
                <p className="text-sm text-slate-600">Tim ahli siap membantu perhitungan yang sesuai kebutuhan</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CalculatorPage;
