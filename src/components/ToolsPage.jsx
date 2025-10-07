import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wrench, Construction } from 'lucide-react';

const ToolsPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Update page title
    document.title = 'Tools Marketing - TKBM';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100">
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
            <Wrench size={24} className="text-orange-600" />
            <h1 className="text-xl font-bold text-slate-800">Tools Marketing</h1>
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
              Tools Marketing
            </h2>
            
            {/* Under Development Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Construction size={16} />
              Sedang Dalam Pengembangan
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-lg text-slate-600 mb-4">
                Tools Marketing sedang dalam tahap pengembangan. 
                Fitur ini akan menyediakan berbagai tools marketing seperti 
                brosur, flyer, template presentasi, dan materi promosi lainnya.
              </p>
              <p className="text-slate-600">
                Tim development sedang menyiapkan library lengkap dengan 
                template yang dapat disesuaikan untuk kebutuhan marketing.
              </p>
            </div>

            {/* Features Preview */}
            <div className="bg-orange-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-orange-700 mb-4">Tools yang Akan Hadir:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Template Brosur</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Flyer Digital</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Presentasi PowerPoint</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Social Media Posts</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Banner & Poster</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Logo & Branding</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Informasi:</strong> Tools Marketing akan segera hadir dengan 
                berbagai template dan tools yang dapat membantu tim marketing 
                dalam membuat materi promosi yang profesional.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
