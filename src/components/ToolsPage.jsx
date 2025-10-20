import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wrench, ExternalLink, Download, FolderOpen } from 'lucide-react';

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
          {/* Tools Available Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            {/* Folder Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-100 rounded-full">
                <FolderOpen size={48} className="text-orange-600" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Tools Marketing
            </h2>
            
            {/* Available Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Download size={16} />
              Tools Tersedia
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-lg text-slate-600 mb-4">
                Tools Marketing tersedia di Google Drive dengan berbagai materi promosi 
                yang siap digunakan untuk kebutuhan marketing properti.
              </p>
              <p className="text-slate-600">
                Anda dapat mengakses brosur, flyer, template presentasi, dan 
                materi promosi lainnya untuk proyek Narraya, Grand Sezha, dan Green Sedah Residence.
              </p>
            </div>

            {/* Google Drive Link */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Akses Tools Marketing</h3>
              <p className="text-slate-600 mb-6">
                Klik tombol di bawah untuk mengakses folder Google Drive yang berisi semua tools marketing:
              </p>
              
              <a
                href="https://drive.google.com/drive/folders/1AJFikVlbN1mab_1N__iJbQJLWW2p3Fw1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <FolderOpen size={24} />
                <span>Buka Google Drive</span>
                <ExternalLink size={20} />
              </a>
            </div>

            {/* Available Projects */}
            <div className="bg-orange-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-orange-700 mb-4">Proyek yang Tersedia:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span>Narraya Green Residence</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Grand Sezha</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Green Sedah Residence</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Informasi:</strong> Semua tools marketing dapat diunduh dan disesuaikan 
                sesuai kebutuhan. Pastikan Anda memiliki akses Google Drive untuk mengunduh file.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
