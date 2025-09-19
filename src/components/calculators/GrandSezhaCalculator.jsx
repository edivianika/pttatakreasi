import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calculator, Home, MapPin, DollarSign, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const GrandSezhaCalculator = () => {
  const [formData, setFormData] = useState({
    propertyPrice: 500000000, // 500 juta
    downPayment: 25, // 25%
    loanTerm: 15, // 15 tahun
    interestRate: 0 // 0% (syariah)
  });

  const [calculation, setCalculation] = useState({
    downPaymentAmount: 0,
    loanAmount: 0,
    monthlyPayment: 0,
    totalPayment: 0,
    totalInterest: 0
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  // Calculate KPR
  useEffect(() => {
    const downPaymentAmount = (formData.propertyPrice * formData.downPayment) / 100;
    const loanAmount = formData.propertyPrice - downPaymentAmount;
    const monthlyRate = formData.interestRate / 100 / 12;
    const totalMonths = formData.loanTerm * 12;

    let monthlyPayment = 0;
    if (monthlyRate === 0) {
      // Flat rate calculation for syariah
      monthlyPayment = loanAmount / totalMonths;
    } else {
      // Standard calculation
      monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }

    const totalPayment = monthlyPayment * totalMonths;
    const totalInterest = totalPayment - loanAmount;

    setCalculation({
      downPaymentAmount,
      loanAmount,
      monthlyPayment,
      totalPayment,
      totalInterest
    });
  }, [formData]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleWhatsAppClick = () => {
    const message = `Halo TKBM, saya tertarik dengan Grand Sezha. Berdasarkan kalkulator KPR, saya ingin konsultasi lebih lanjut tentang:
    
Harga Properti: ${formatCurrency(formData.propertyPrice)}
DP: ${formData.downPayment}% (${formatCurrency(calculation.downPaymentAmount)})
Tenor: ${formData.loanTerm} tahun
Cicilan per bulan: ${formatCurrency(calculation.monthlyPayment)}

Mohon informasi lebih lanjut.`;
    
    const whatsappUrl = `https://wa.me/628133138887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
            <Link to="/kalkulator" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft size={24} className="text-slate-600" />
              <span className="font-semibold text-slate-800">Kembali</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Calculator size={24} className="text-blue-600" />
            <h1 className="text-xl font-bold text-slate-800">Kalkulator Grand Sezha</h1>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="text-center mb-6">
              <img 
                src="/tatakreasi/perumahan-ponorogo-grand-sezha.png"
                alt="Grand Sezha"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-700 mb-2">Grand Sezha</h2>
              <p className="text-slate-600">Perumahan Eksklusif</p>
              <div className="flex items-center justify-center gap-2 mt-2 text-slate-600">
                <MapPin size={16} />
                <span className="text-sm">Tengah Kota Ponorogo</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-slate-800">Keunggulan:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-slate-600">Lokasi premium eksklusif</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-slate-600">Dekat fasilitas kota</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-slate-600">Desain arsitektur modern</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-slate-600">Akses mudah kemana-mana</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Input Form */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Kalkulasi KPR Syariah</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Harga Properti
                  </label>
                  <input
                    type="number"
                    value={formData.propertyPrice}
                    onChange={(e) => handleInputChange('propertyPrice', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="500000000"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    {formatCurrency(formData.propertyPrice)}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Down Payment (%)
                  </label>
                  <input
                    type="number"
                    value={formData.downPayment}
                    onChange={(e) => handleInputChange('downPayment', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="25"
                    min="0"
                    max="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tenor (Tahun)
                  </label>
                  <select
                    value={formData.loanTerm}
                    onChange={(e) => handleInputChange('loanTerm', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value={5}>5 Tahun</option>
                    <option value={10}>10 Tahun</option>
                    <option value={15}>15 Tahun</option>
                    <option value={20}>20 Tahun</option>
                    <option value={25}>25 Tahun</option>
                    <option value={30}>30 Tahun</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-blue-50 rounded-2xl p-6 shadow-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Hasil Perhitungan</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="text-slate-700">Harga Properti:</span>
                  <span className="font-semibold text-slate-800">{formatCurrency(formData.propertyPrice)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="text-slate-700">Down Payment ({formData.downPayment}%):</span>
                  <span className="font-semibold text-slate-800">{formatCurrency(calculation.downPaymentAmount)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="text-slate-700">Pinjaman:</span>
                  <span className="font-semibold text-slate-800">{formatCurrency(calculation.loanAmount)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="text-slate-700">Tenor:</span>
                  <span className="font-semibold text-slate-800">{formData.loanTerm} Tahun</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="text-slate-700">Bunga:</span>
                  <span className="font-semibold text-blue-600">0% (Syariah)</span>
                </div>
                
                <div className="flex justify-between items-center py-3 bg-blue-100 rounded-lg px-3">
                  <span className="text-lg font-semibold text-blue-800">Cicilan per Bulan:</span>
                  <span className="text-xl font-bold text-blue-800">{formatCurrency(calculation.monthlyPayment)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-700">Total Pembayaran:</span>
                  <span className="font-semibold text-slate-800">{formatCurrency(calculation.totalPayment)}</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={20} />
                Konsultasi via WhatsApp
              </button>
              
              <button
                onClick={() => window.open('tel:+628133138887')}
                className="w-full bg-slate-600 hover:bg-slate-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                Hubungi Kami
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GrandSezhaCalculator;
