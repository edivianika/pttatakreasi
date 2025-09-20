import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calculator, Home, MapPin, DollarSign, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCalculatorUsage, trackWhatsAppClick } from '../../utils/facebookPixel';

const NarrayaCalculator = () => {
  const [selectedUnit, setSelectedUnit] = useState('');
  const [discount, setDiscount] = useState(150000000); // 60 juta default
  const [cashLunakTerm, setCashLunakTerm] = useState(2); // 2 tahun default
  const [cashLunakDP, setCashLunakDP] = useState(50); // 50% default
  const [kreditTerm, setKreditTerm] = useState(3); // 3 tahun default
  const [kreditDP, setKreditDP] = useState(30); // 30% default

  const [calculation, setCalculation] = useState({
    unitInfo: null,
    hargaNormal: 0,
    hargaSetelahDiskon: 0,
    dpCashLunak: 0,
    angsuranCashLunak: 0,
    hargaKredit: 0,
    dpKredit: 0,
    angsuranKredit: 0
  });

  // Unit data for Narraya Green Residence
  const unitData = [
    { unit: "A01", lb: 85, lt: 96, hargaCash: 954884250 },
    { unit: "A02", lb: 85, lt: 96, hargaCash: 954884250 },
    { unit: "A03", lb: 85, lt: 96, hargaCash: 954884250 },
    { unit: "A04", lb: 85, lt: 96, hargaCash: 954884250 },
    { unit: "A05", lb: 85, lt: 96, hargaCash: 954884250 },
    { unit: "A06", lb: 85, lt: 96, hargaCash: 954884250 },
    { unit: "A07", lb: 85, lt: 96, hargaCash: 954884250 },
    { unit: "A08", lb: 85, lt: 96, hargaCash: 954884250 },
    { unit: "A09", lb: 85, lt: 96, hargaCash: 954884250 },
    { unit: "A10", lb: 85, lt: 96, hargaCash: 954884250 },
    { unit: "A11", lb: 85, lt: 96, hargaCash: 954884250 },
    { unit: "A12", lb: 85, lt: 96, hargaCash: 954884250 },
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Track calculator usage
    trackCalculatorUsage('Narraya', '');
  }, []);

  // Calculate based on selected unit and options
  useEffect(() => {
    if (!selectedUnit) {
      setCalculation({
        unitInfo: null,
        hargaNormal: 0,
        hargaSetelahDiskon: 0,
        dpCashLunak: 0,
        angsuranCashLunak: 0,
        hargaKredit: 0,
        dpKredit: 0,
        angsuranKredit: 0
      });
      return;
    }

    // Track unit selection
    trackCalculatorUsage('Narraya', selectedUnit);

    const unit = unitData.find(item => item.unit === selectedUnit);
    if (!unit) return;

    // Ensure discount doesn't exceed 60,000,000
    const maxDiscount = 60000000;
    const actualDiscount = Math.min(discount, maxDiscount);
    
    const hargaSetelahDiskon = unit.hargaCash - actualDiscount;

    // Cash Lunak calculation
    const dpCashLunakAmount = hargaSetelahDiskon * (cashLunakDP / 100);
    const angsuranCashLunakAmount = (hargaSetelahDiskon - dpCashLunakAmount) / (cashLunakTerm * 12);

    // Kredit calculation (8% interest rate)
    const dpKreditAmount = hargaSetelahDiskon * (kreditDP / 100);
    const sisaPinjaman = hargaSetelahDiskon - dpKreditAmount;
    const totalBunga = sisaPinjaman * 0.08 * kreditTerm;
    const hargaKredit = hargaSetelahDiskon + totalBunga;
    const angsuranKreditAmount = (sisaPinjaman + totalBunga) / (kreditTerm * 12);

    setCalculation({
      unitInfo: unit,
      hargaNormal: unit.hargaCash,
      hargaSetelahDiskon,
      dpCashLunak: dpCashLunakAmount,
      angsuranCashLunak: angsuranCashLunakAmount,
      hargaKredit,
      dpKredit: dpKreditAmount,
      angsuranKredit: angsuranKreditAmount
    });
  }, [selectedUnit, discount, cashLunakTerm, cashLunakDP, kreditTerm, kreditDP]);

  const handleDiscountChange = (value) => {
    const maxDiscount = 200000000;
    const actualValue = Math.min(parseInt(value) || 0, maxDiscount);
    setDiscount(actualValue);
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
    if (!calculation.unitInfo) return;
    
    // Track WhatsApp click as lead
    trackWhatsAppClick('Narraya Calculator', `Unit ${calculation.unitInfo.unit}`);
    
    const message = `Halo TKBM, saya tertarik dengan Narraya Green Residence Unit ${calculation.unitInfo.unit}. Berdasarkan kalkulator, saya ingin konsultasi lebih lanjut tentang:

Unit: ${calculation.unitInfo.unit} (LT: ${calculation.unitInfo.lt} / LB: ${calculation.unitInfo.lb})
Harga Normal: ${formatCurrency(calculation.hargaNormal)}
Diskon: ${formatCurrency(discount)}
Harga Setelah Diskon: ${formatCurrency(calculation.hargaSetelahDiskon)}

Cash Lunak (${cashLunakTerm} tahun, DP ${cashLunakDP}%):
- DP: ${formatCurrency(calculation.dpCashLunak)}
- Angsuran: ${formatCurrency(calculation.angsuranCashLunak)}

Kredit (${kreditTerm} tahun, DP ${kreditDP}%):
- DP: ${formatCurrency(calculation.dpKredit)}
- Angsuran: ${formatCurrency(calculation.angsuranKredit)}

Mohon informasi lebih lanjut.`;

    
    const whatsappUrl = `https://wa.me/6288219448304?text=${encodeURIComponent(message)}`;
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
          <div className="flex items-center gap-2">
            <Link to="/kalkulator" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
              <div className="p-1 rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors">
                <ArrowLeft size={20} className="text-slate-600" />
              </div>
              <span className="font-medium text-slate-700 text-sm hidden sm:block">Kembali</span>
            </Link>
          </div>
          <div className="flex items-center gap-3 flex-1 justify-center">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-sm border border-slate-200">
              <img 
                src="/narraya-logo.jpeg" 
                alt="Narraya Green Residence Logo" 
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="text-center">
              <h1 className="text-sm sm:text-lg font-bold text-slate-800 leading-tight">
                Price Narraya
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Green Residence
              </p>
            </div>
          </div>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container py-4 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-4">
            {/* House Image Hero */}
            <div className="mb-6 flex justify-center">
              <div className="w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl border border-blue-200">
                <div className="aspect-video relative">
                  <img 
                    src="/tatakreasi/perumahan-ponorogo-narraya-green-residence.png" 
                    alt="Narraya Green Residence" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-xs font-semibold text-slate-800 text-center">
                        Narraya Green Residence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-1">
              Penghitung Harga Perumahan
            </h2>
            <p className="text-slate-600 text-sm mb-3">
              Pilih unit rumah untuk melihat detail harganya.
            </p>
          </div>

          {/* Unit Selection */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
            <label htmlFor="unit-select" className="text-sm font-semibold text-slate-700">
              Pilih Unit:
            </label>
            <select
              id="unit-select"
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 border-2 border-slate-300 rounded-full shadow-sm bg-white text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 cursor-pointer"
            >
              <option value="">-- Pilih Unit --</option>
              {unitData.map((unit) => (
                <option key={unit.unit} value={unit.unit}>
                  {unit.unit}
                </option>
              ))}
            </select>
          </div>

          {/* Site Plan Preview */}
          {selectedUnit && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 rounded-lg p-3 border border-blue-200 mb-4"
            >
              <div className="text-center">
                <p className="text-sm font-semibold text-blue-800">
                  🎯 Unit {selectedUnit} Terpilih
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  Klik unit di site plan untuk melihat detail lengkap
                </p>
              </div>
            </motion.div>
          )}

          {/* Results Container */}
          {selectedUnit && calculation.unitInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Unit Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Unit Info */}
                <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-blue-500">
                  <p className="text-xs font-medium text-slate-500">Nomor Unit</p>
                  <p className="text-lg font-bold text-slate-900 mt-1">
                    {calculation.unitInfo.unit.charAt(0)} - {calculation.unitInfo.unit.substring(1)}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    LT: {calculation.unitInfo.lt} / LB: {calculation.unitInfo.lb}
                  </p>
                </div>

                {/* Harga Normal */}
                <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-teal-500">
                  <p className="text-xs font-medium text-slate-500">Harga Normal</p>
                  <p className="text-lg font-bold text-slate-900 mt-1">
                    {formatCurrency(calculation.hargaNormal)}
                  </p>
                </div>

                {/* Diskon */}
                <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-amber-500">
                  <p className="text-xs font-medium text-slate-500">Diskon</p>
                  <input
                    type="number"
                    value={discount}
                    onChange={(e) => handleDiscountChange(e.target.value)}
                    max="60000000"
                    className="w-full mt-1 p-1 text-xs rounded border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <p className="text-xs font-bold text-slate-600 mt-1">
                    {formatCurrency(discount)}
                  </p>
                </div>
              </div>

              {/* Harga Setelah Diskon */}
              <div className="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-700">
                <p className="text-sm font-medium text-amber-800">Harga Setelah Diskon</p>
                <p className="text-xl font-extrabold text-amber-900 mt-1">
                  {formatCurrency(calculation.hargaSetelahDiskon)}
                </p>
              </div>

              {/* Payment Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Cash Lunak */}
                <div className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-blue-600">
                  <h3 className="text-sm font-bold text-blue-800 mb-2 text-center">Harga Cash Lunak</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-1">
                      <label className="text-xs text-slate-600">Jangka Waktu:</label>
                      <select
                        value={cashLunakTerm}
                        onChange={(e) => setCashLunakTerm(parseInt(e.target.value))}
                        className="w-1/2 px-2 py-1 border rounded text-xs text-center font-medium bg-slate-100"
                      >
                        <option value={1}>1 Tahun</option>
                        <option value={2}>2 Tahun</option>
                        <option value={3}>3 Tahun</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between gap-1">
                      <label className="text-xs text-slate-600">DP Awal (%):</label>
                      <select
                        value={cashLunakDP}
                        onChange={(e) => setCashLunakDP(parseInt(e.target.value))}
                        className="w-1/2 px-2 py-1 border rounded text-xs text-center font-medium bg-slate-100"
                      >
                        <option value={30}>30%</option>
                        <option value={40}>40%</option>
                        <option value={50}>50%</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div>
                      <p className="text-xs font-medium text-slate-500">DP Awal</p>
                      <p className="text-sm font-bold text-blue-900">
                        {formatCurrency(calculation.dpCashLunak)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500">Angsuran</p>
                      <p className="text-sm font-bold text-blue-900">
                        {formatCurrency(calculation.angsuranCashLunak)}
                      </p>
                      <p className="text-xs text-slate-500">
                        {cashLunakTerm * 12} kali angsuran
                      </p>
                    </div>
                  </div>
                </div>

                {/* Kredit */}
                <div className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-rose-600">
                  <h3 className="text-sm font-bold text-rose-800 mb-2 text-center">Harga Kredit</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-1">
                      <label className="text-xs text-slate-600">Jangka Waktu:</label>
                      <select
                        value={kreditTerm}
                        onChange={(e) => setKreditTerm(parseInt(e.target.value))}
                        className="w-1/2 px-2 py-1 border rounded text-xs text-center font-medium bg-slate-100"
                      >
                        <option value={1}>1 Tahun</option>
                        <option value={2}>2 Tahun</option>
                        <option value={3}>3 Tahun</option>
                        <option value={4}>4 Tahun</option>
                        <option value={5}>5 Tahun</option>
                        <option value={6}>6 Tahun</option>
                        <option value={7}>7 Tahun</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between gap-1">
                      <label className="text-xs text-slate-600">DP Awal (%):</label>
                      <select
                        value={kreditDP}
                        onChange={(e) => setKreditDP(parseInt(e.target.value))}
                        className="w-1/2 px-2 py-1 border rounded text-xs text-center font-medium bg-slate-100"
                      >
                        <option value={30}>30%</option>
                        <option value={50}>50%</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div>
                      <p className="text-xs font-medium text-slate-500">Total Harga Kredit</p>
                      <p className="text-sm font-bold text-rose-900">
                        {formatCurrency(calculation.hargaKredit)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500">DP Awal</p>
                      <p className="text-sm font-bold text-rose-900">
                        {formatCurrency(calculation.dpKredit)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500">Angsuran</p>
                      <p className="text-sm font-bold text-rose-900">
                        {formatCurrency(calculation.angsuranKredit)}
                      </p>
                      <p className="text-xs text-slate-500">
                        {kreditTerm * 12} kali angsuran
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Site Plan Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg p-4 shadow-lg border border-slate-200"
              >
                <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-2">
                  <span className="text-lg">📍</span>
                  Site Plan Narraya Green Residence
                </h4>
                <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 border-2 border-slate-200">
                  {/* Site Plan Grid */}
                  <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
                    {/* Left Column - A01, A03, A05, A07, A09, A11 */}
                    <div className="space-y-2">
                      {['A11', 'A09', 'A07', 'A05', 'A03', 'A01'].map((unit, index) => (
                        <motion.div
                          key={unit}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={`relative h-14 rounded-lg border-2 transition-all duration-300 cursor-pointer group ${
                            selectedUnit === unit
                              ? 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-700 shadow-xl scale-105'
                              : 'bg-gradient-to-br from-yellow-200 to-yellow-300 border-yellow-400 hover:from-yellow-300 hover:to-yellow-400 hover:scale-102'
                          }`}
                          onClick={() => setSelectedUnit(unit)}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className={`text-sm font-bold transition-colors duration-300 ${
                              selectedUnit === unit ? 'text-white' : 'text-slate-700 group-hover:text-slate-800'
                            }`}>
                              {unit}
                            </span>
                          </div>
                          {selectedUnit === unit && (
                            <>
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
                              >
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 1, repeat: Infinity }}
                                  className="w-2 h-2 bg-white rounded-full"
                                ></motion.div>
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 rounded-lg border-2 border-blue-300 animate-pulse"
                              ></motion.div>
                            </>
                          )}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Right Column - A02, A04, A06, A08, A10, A12 */}
                    <div className="space-y-2">
                      {['A12', 'A10', 'A08', 'A06', 'A04', 'A02'].map((unit, index) => (
                        <motion.div
                          key={unit}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={`relative h-14 rounded-lg border-2 transition-all duration-300 cursor-pointer group ${
                            selectedUnit === unit
                              ? 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-700 shadow-xl scale-105'
                              : 'bg-gradient-to-br from-yellow-200 to-yellow-300 border-yellow-400 hover:from-yellow-300 hover:to-yellow-400 hover:scale-102'
                          }`}
                          onClick={() => setSelectedUnit(unit)}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className={`text-sm font-bold transition-colors duration-300 ${
                              selectedUnit === unit ? 'text-white' : 'text-slate-700 group-hover:text-slate-800'
                            }`}>
                              {unit}
                            </span>
                          </div>
                          {selectedUnit === unit && (
                            <>
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
                              >
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 1, repeat: Infinity }}
                                  className="w-2 h-2 bg-white rounded-full"
                                ></motion.div>
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 rounded-lg border-2 border-blue-300 animate-pulse"
                              ></motion.div>
                            </>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Central Pathway */}
                  <div className="absolute inset-x-1/2 top-2 bottom-2 w-1 bg-gradient-to-b from-slate-300 to-slate-400 transform -translate-x-1/2 rounded-full"></div>
                  
                  {/* Legend */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-4 text-center"
                  >
                    <div className="inline-flex items-center gap-3 text-xs text-slate-600">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-gradient-to-br from-yellow-200 to-yellow-300 border border-yellow-400 rounded"></div>
                        <span>Unit Tersedia</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-700 rounded"></div>
                        <span>Unit Terpilih</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle size={16} />
                  Konsultasi via WhatsApp
                </button>
                
              </div>

              {/* Terms and Conditions */}
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-800 mb-3 text-center">⚠️ Syarat dan Ketentuan</h4>
                
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <p><strong>Harga dapat berubah sewaktu-waktu</strong> tanpa pemberitahuan sebelumnya. Harga yang tertera di kalkulator ini hanya estimasi dan tidak mengikat.</p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <p><strong>Harga final</strong> akan ditentukan berdasarkan kondisi terkini dan kebijakan perusahaan pada saat pembelian.</p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <p><strong>Untuk informasi harga terbaru dan lengkap</strong>, silakan hubungi admin via WhatsApp untuk konsultasi langsung.</p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <p><strong>Kalkulator ini hanya untuk estimasi</strong> dan tidak menggantikan konsultasi resmi dengan tim sales TKBM.</p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <p><strong>Akad syariah</strong> akan dilakukan sesuai dengan ketentuan yang berlaku dan disepakati bersama.</p>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-amber-100 rounded-lg border border-amber-200">
                  <p className="text-xs text-amber-800 text-center font-semibold">
                    💬 <strong>Hubungi Admin WhatsApp</strong> untuk informasi harga terkini dan konsultasi lengkap
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default NarrayaCalculator;