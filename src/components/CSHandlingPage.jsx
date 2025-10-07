import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Construction } from 'lucide-react';

const CSHandlingPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Update page title
    document.title = 'Customer Handling - TKBM';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-100">
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
            <Users size={24} className="text-green-600" />
            <h1 className="text-xl font-bold text-slate-800">Customer Handling</h1>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Under Development Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            {/* Construction Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-100 rounded-full">
                <Construction size={48} className="text-orange-600" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Customer Handling System
            </h2>
            
            {/* Under Development Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Construction size={16} />
              Sedang Dalam Pengembangan
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-lg text-slate-600 mb-4">
                Sistem Customer Handling sedang dalam tahap pengembangan. 
                Fitur ini akan menyediakan tools untuk manajemen pelanggan, 
                follow-up, dan tracking interaksi dengan customer.
              </p>
              <p className="text-slate-600">
                Tim development sedang bekerja keras untuk menyediakan fitur 
                yang lengkap dan mudah digunakan untuk tim sales dan customer service.
              </p>
            </div>

            {/* Features Preview */}
            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-700 mb-4">Fitur yang Akan Hadir:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Database Customer</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Follow-up Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>History Interaksi</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Reminder Otomatis</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Informasi:</strong> Sistem Customer Handling akan segera hadir dengan 
                fitur lengkap untuk membantu tim sales dalam mengelola hubungan dengan pelanggan.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CSHandlingPage;
