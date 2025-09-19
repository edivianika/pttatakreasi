import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calculator, Home, MapPin, DollarSign, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const SedahCalculator = () => {
  const [selectedUnit, setSelectedUnit] = useState('');
  const [discount, setDiscount] = useState(60000000); // 60 juta default
  const [cashLunakTerm, setCashLunakTerm] = useState(2); // 2 tahun default
  const [cashLunakDP, setCashLunakDP] = useState(50); // 50% default
  const [kreditTerm, setKreditTerm] = useState(5); // 5 tahun default
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

  // Unit data from the HTML
  const unitData = [
    { unit: "A1", lb: 36, lt: 66, hargaCash: 243859872 },
    { unit: "A2", lb: 36, lt: 66, hargaCash: 243859872 },
    { unit: "A3", lb: 36, lt: 66, hargaCash: 243859872 },
    { unit: "A4", lb: 36, lt: 66, hargaCash: 243859872 },
    { unit: "A5", lb: 36, lt: 66, hargaCash: 243859872 },
    { unit: "A6", lb: 36, lt: 66, hargaCash: 243859872 },
    { unit: "A7", lb: 36, lt: 66, hargaCash: 243859872 },
    { unit: "B1", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "B2", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "B3", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "B4", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "B5", lb: 36, lt: 61, hargaCash: 229751548 },
    { unit: "B6", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "B7", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "B8", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "C1", lb: 45, lt: 79, hargaCash: 269449013 },
    { unit: "C2", lb: 45, lt: 72, hargaCash: 263697360 },
    { unit: "C3", lb: 36, lt: 71, hargaCash: 237968195 },
    { unit: "C4", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "D1", lb: 45, lt: 66, hargaCash: 258767372 },
    { unit: "D2", lb: 45, lt: 66, hargaCash: 258767372 },
    { unit: "D3", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "D4", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "D5", lb: 45, lt: 66, hargaCash: 258767372 },
    { unit: "D6", lb: 45, lt: 66, hargaCash: 258767372 },
    { unit: "D7", lb: 45, lt: 66, hargaCash: 258767372 },
    { unit: "D8", lb: 45, lt: 68, hargaCash: 260410701 },
    { unit: "E1", lb: 45, lt: 77, hargaCash: 267805684 },
    { unit: "E2", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "E3", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "E4", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "E5", lb: 36, lt: 70, hargaCash: 237146531 },
    { unit: "E6", lb: 45, lt: 77, hargaCash: 267805684 },
    { unit: "E7", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "E8", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "E9", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "E10", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "E11", lb: 36, lt: 65, hargaCash: 233038207 },
    { unit: "E12", lb: 36, lt: 59, hargaCash: 228108219 },
    { unit: "E13", lb: 36, lt: 62, hargaCash: 230573213 },
    { unit: "E14", lb: 36, lt: 65, hargaCash: 233038207 },
    { unit: "E15", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "E16", lb: 36, lt: 71, hargaCash: 237968195 },
    { unit: "F1", lb: 36, lt: 94, hargaCash: 256866484 },
    { unit: "F2", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "F3", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "F4", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "F5", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "F6", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "F7", lb: 45, lt: 77, hargaCash: 267805684 },
    { unit: "F8", lb: 45, lt: 77, hargaCash: 267805684 },
    { unit: "F9", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "F10", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "F11", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "F12", lb: 36, lt: 66, hargaCash: 233859872 },
    { unit: "F13", lb: 36, lt: 64, hargaCash: 232216542 },
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
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
    const maxDiscount = 60000000;
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
    
    const message = `Halo TKBM, saya tertarik dengan Sedah Green Residence Unit ${calculation.unitInfo.unit}. Berdasarkan kalkulator, saya ingin konsultasi lebih lanjut tentang:

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
    
    const whatsappUrl = `https://wa.me/628133138887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
            <Link to="/kalkulator" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft size={24} className="text-slate-600" />
              <span className="font-semibold text-slate-800">Kembali</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Calculator size={24} className="text-green-600" />
            <h1 className="text-xl font-bold text-slate-800">Kalkulator Sedah</h1>
          </div>
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-1">
              Penghitung Harga Perumahan
            </h2>
            <p className="text-slate-600 text-sm">
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
              className="w-full sm:w-auto px-4 py-2 border-2 border-slate-300 rounded-full shadow-sm bg-white text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 cursor-pointer"
            >
              <option value="">-- Pilih Unit --</option>
              {unitData.map((unit) => (
                <option key={unit.unit} value={unit.unit}>
                  {unit.unit}
                </option>
              ))}
            </select>
          </div>

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
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SedahCalculator;
