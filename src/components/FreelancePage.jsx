import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Users, 
  BookOpen, 
  Tool, 
  ArrowRight,
  Home,
  MessageCircle,
  Phone
} from 'lucide-react';

const FreelancePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Update page title
    document.title = 'Freelance Tools - TKBM';
  }, []);

  const menuItems = [
    {
      title: 'Kalkulator / Price Project',
      description: 'Tools untuk menghitung harga proyek properti',
      icon: <Calculator className="h-8 w-8" />,
      link: '/kalkulator',
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Customer Handling',
      description: 'Sistem manajemen pelanggan dan follow-up',
      icon: <Users className="h-8 w-8" />,
      link: '/cshandling',
      color: 'green',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      iconColor: 'text-green-600'
    },
    {
      title: 'Tutorial',
      description: 'Panduan dan tutorial untuk tim sales',
      icon: <BookOpen className="h-8 w-8" />,
      link: '/tutorial',
      color: 'purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-800',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Tools Marketing',
      description: 'Brosur, flyer, dan tools marketing lainnya',
      icon: <Tool className="h-8 w-8" />,
      link: '/tools',
      color: 'orange',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-800',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm"
      >
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Home size={24} className="text-slate-600" />
              <span className="font-semibold text-slate-800">Beranda</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Tool size={24} className="text-blue-600" />
            <h1 className="text-xl font-bold text-slate-800">Freelance Tools</h1>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Freelance Tools
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Kumpulan tools dan resources untuk membantu tim sales dan marketing 
              dalam menjalankan tugas sehari-hari dengan lebih efektif.
            </p>
          </motion.div>

          {/* Menu Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <Link
                  to={item.link}
                  className={`block p-6 rounded-2xl ${item.bgColor} ${item.borderColor} border-2 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${item.bgColor} ${item.borderColor} border`}>
                      <div className={item.iconColor}>
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${item.textColor} mb-2 group-hover:underline`}>
                        {item.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
                        <span>Akses Tool</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Tools Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-sm text-slate-600">Tools Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-slate-600">Access</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Free</div>
                <div className="text-sm text-slate-600">Usage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">Easy</div>
                <div className="text-sm text-slate-600">Interface</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Butuh Bantuan?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Jika Anda mengalami kesulitan menggunakan tools atau membutuhkan bantuan teknis, 
              jangan ragu untuk menghubungi tim support kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/628133138887"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp Support
              </a>
              <a
                href="tel:+628133138887"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone size={20} />
                Call Support
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FreelancePage;
