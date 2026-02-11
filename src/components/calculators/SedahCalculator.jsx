import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calculator, Home, MapPin, DollarSign, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCalculatorUsage, trackWhatsAppClick } from '../../utils/facebookPixel';

const SedahCalculator = () => {
  const [selectedUnit, setSelectedUnit] = useState('');
  const [discount, setDiscount] = useState(15000000); // 15 juta default
  const [cashLunakTerm, setCashLunakTerm] = useState(2); // 2 tahun default
  const [cashLunakDP, setCashLunakDP] = useState(50); // 50% default
  const [cashLunakDPMode, setCashLunakDPMode] = useState('persen'); // 'persen' or 'manual'
  const [cashLunakDPManual, setCashLunakDPManual] = useState(0); // DP manual in rupiah
  const [kreditTerm, setKreditTerm] = useState(3); // 5 tahun default
  const [kreditDP, setKreditDP] = useState(30); // 30% default
  const [kreditDPMode, setKreditDPMode] = useState('persen'); // 'persen' or 'manual'
  const [kreditDPManual, setKreditDPManual] = useState(0); // DP manual in rupiah

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
    { "unit": "A01", "lb": 45, "lt": 83, "hargaCash": 269048494, "sold": true },
    { "unit": "A02", "lb": 45, "lt": 123, "hargaCash": 365439334 },
    { "unit": "A03", "lb": 45, "lt": 104, "hargaCash": 319653685 },
    { "unit": "A04", "lb": 45, "lt": 106, "hargaCash": 324473227 },
    { "unit": "A05", "lb": 45, "lt": 77, "hargaCash": 254589868 },
    { "unit": "A06", "lb": 45, "lt": 77, "hargaCash": 254589868, "sold": true },
    { "unit": "A07", "lb": 45, "lt": 85, "hargaCash": 273868036 },
    { "unit": "A08", "lb": 36, "lt": 66, "hargaCash": 219674887, "sold": true },
    { "unit": "A09", "lb": 36, "lt": 66, "hargaCash": 219674887, "sold": true },
    { "unit": "A10", "lb": 36, "lt": 66, "hargaCash": 219674887, "sold": true },
    { "unit": "A11", "lb": 36, "lt": 66, "hargaCash": 219674887, "sold": true },
    { "unit": "A12", "lb": 36, "lt": 68, "hargaCash": 224494429, "sold": true },

    { "unit": "B01", "lb": 36, "lt": 66, "hargaCash": 219674887, "sold": true },
    { "unit": "B02", "lb": 36, "lt": 66, "hargaCash": 219674887 },
    { "unit": "B03", "lb": 36, "lt": 66, "hargaCash": 219674887 },
    { "unit": "B04", "lb": 36, "lt": 66, "hargaCash": 219674887, "sold": true },
    { "unit": "B05", "lb": 36, "lt": 86, "hargaCash": 267870307, "sold": true },
    { "unit": "B06", "lb": 36, "lt": 87, "hargaCash": 270280078 },
    { "unit": "B07", "lb": 36, "lt": 87, "hargaCash": 270280078 },
    { "unit": "B08", "lb": 36, "lt": 83, "hargaCash": 260640994 },
    { "unit": "B09", "lb": 36, "lt": 89, "hargaCash": 275099620 },

    { "unit": "C01", "lb": 45, "lt": 78, "hargaCash": 273499639 },
    { "unit": "C02", "lb": 45, "lt": 77, "hargaCash": 254589868 },
    { "unit": "C03", "lb": 45, "lt": 77, "hargaCash": 254589868 },
    { "unit": "C04", "lb": 45, "lt": 97, "hargaCash": 302785288 },
    { "unit": "C05", "lb": 45, "lt": 97, "hargaCash": 302785288 },
    { "unit": "C06", "lb": 45, "lt": 77, "hargaCash": 254589868 },
    { "unit": "C07", "lb": 45, "lt": 78, "hargaCash": 256999639 },
    { "unit": "C08", "lb": 45, "lt": 67, "hargaCash": 245492158 },
    { "unit": "C09", "lb": 45, "lt": 68, "hargaCash": 246401929 },
    { "unit": "C10", "lb": 45, "lt": 68, "hargaCash": 246401929 },
    { "unit": "C11", "lb": 45, "lt": 69, "hargaCash": 248811700 },
    { "unit": "C12", "lb": 45, "lt": 65, "hargaCash": 243672616 },

    { "unit": "D01", "lb": 36, "lt": 95, "hargaCash": 289558246 },
    { "unit": "D02", "lb": 36, "lt": 66, "hargaCash": 219674887 },
    { "unit": "D03", "lb": 36, "lt": 66, "hargaCash": 219674887 },
    { "unit": "D04", "lb": 36, "lt": 66, "hargaCash": 219674887 },
    { "unit": "D05", "lb": 36, "lt": 66, "hargaCash": 219674887 },
    { "unit": "D06", "lb": 36, "lt": 66, "hargaCash": 219674887 },
    { "unit": "D07", "lb": 36, "lt": 66, "hargaCash": 219674887 },
    { "unit": "D08", "lb": 36, "lt": 66, "hargaCash": 219674887 },
    { "unit": "D09", "lb": 36, "lt": 66, "hargaCash": 219674887 },
    { "unit": "D10", "lb": 36, "lt": 66, "hargaCash": 219674887 },
    { "unit": "D11", "lb": 36, "lt": 66, "hargaCash": 219674887 },
    { "unit": "D12", "lb": 36, "lt": 66, "hargaCash": 219674887 },
    { "unit": "D13", "lb": 36, "lt": 72, "hargaCash": 234133513 }
  ]
  
  
    

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Track calculator usage
    trackCalculatorUsage('Sedah', '');
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
    trackCalculatorUsage('Sedah', selectedUnit);

    // Scroll to pricing section when unit is selected
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing-section');
      if (pricingSection) {
        pricingSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);

    const unit = unitData.find(item => item.unit === selectedUnit);
    if (!unit) return;

    // Ensure discount doesn't exceed 20,000,000
    const maxDiscount = 20000000;
    const actualDiscount = Math.min(discount, maxDiscount);
    
    const hargaSetelahDiskon = unit.hargaCash - actualDiscount;

    // Cash Lunak calculation
    const minDPCashLunak = hargaSetelahDiskon * 0.3; // minimal 30% dari harga rumah
    let dpCashLunakAmount;
    if (cashLunakDPMode === 'manual') {
      // Use manual DP: minimal 30%, maksimal 100% dari harga setelah diskon
      dpCashLunakAmount = Math.max(minDPCashLunak, Math.min(cashLunakDPManual, hargaSetelahDiskon));
    } else {
      // Use percentage DP
      dpCashLunakAmount = hargaSetelahDiskon * (cashLunakDP / 100);
    }
    const angsuranCashLunakAmount = (hargaSetelahDiskon - dpCashLunakAmount) / (cashLunakTerm * 12);

    // Kredit calculation (8% interest rate)
    const minDPKredit = hargaSetelahDiskon * 0.3; // minimal 30% dari harga rumah
    let dpKreditAmount;
    if (kreditDPMode === 'manual') {
      // Use manual DP: minimal 30%, maksimal 100% dari harga setelah diskon
      dpKreditAmount = Math.max(minDPKredit, Math.min(kreditDPManual, hargaSetelahDiskon));
    } else {
      // Use percentage DP
      dpKreditAmount = hargaSetelahDiskon * (kreditDP / 100);
    }
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
  }, [selectedUnit, discount, cashLunakTerm, cashLunakDP, cashLunakDPMode, cashLunakDPManual, kreditTerm, kreditDP, kreditDPMode, kreditDPManual]);

  const handleDiscountChange = (value) => {
    const maxDiscount = 20000000;
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
    trackWhatsAppClick('Sedah Calculator', `Unit ${calculation.unitInfo.unit}`);
    
    const message = `Halo TKBM, saya tertarik dengan Sedah Green Residence Unit ${calculation.unitInfo.unit}. Berdasarkan kalkulator, saya ingin konsultasi lebih lanjut tentang:

Unit: ${calculation.unitInfo.unit} (LT: ${calculation.unitInfo.lt} / LB: ${calculation.unitInfo.lb})
Harga Normal: ${formatCurrency(calculation.hargaNormal)}
Diskon: ${formatCurrency(discount)}
Harga Setelah Diskon: ${formatCurrency(calculation.hargaSetelahDiskon)}

Cash Lunak (${cashLunakTerm} tahun, DP ${cashLunakDPMode === 'persen' ? cashLunakDP + '%' : formatCurrency(cashLunakDPManual)}):
- DP: ${formatCurrency(calculation.dpCashLunak)}
- Angsuran: ${formatCurrency(calculation.angsuranCashLunak)}

Kredit (${kreditTerm} tahun, DP ${kreditDPMode === 'persen' ? kreditDP + '%' : formatCurrency(kreditDPManual)}):
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
                src="/sedah-logo.png" 
                alt="Sedah Green Residence Logo" 
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="text-center">
              <h1 className="text-sm sm:text-lg font-bold text-slate-800 leading-tight">
                Price Sedah
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-1">
              <br />
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
              className="w-full sm:w-auto px-4 py-2 border-2 border-slate-300 rounded-full shadow-sm bg-white text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 cursor-pointer"
            >
              <option value="">-- Pilih Unit --</option>
              {unitData.map((unit) => (
                <option 
                  key={unit.unit} 
                  value={unit.unit}
                  disabled={unit.sold}
                  style={unit.sold ? { color: '#ef4444', fontStyle: 'italic' } : {}}
                >
                  {unit.unit} {unit.sold ? '(SOLD)' : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Site Plan Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg p-4 shadow-lg border border-slate-200 mb-6"
          >
            <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-2">
              <span className="text-lg">📍</span>
              Site Plan Sedah Green Residence
            </h4>
            <div className="relative">
              <img 
                src="/sedah/siteplan-sedah.jpeg" 
                alt="Site Plan Sedah Green Residence"
                className="w-full h-auto rounded-lg border border-slate-200 shadow-sm"
              />
            </div>
          </motion.div>

          {/* Results Container */}
          {selectedUnit && calculation.unitInfo && (
            <motion.div
              id="pricing-section"
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
                    max="20000000"
                    className="w-full mt-1 p-1 text-xs rounded border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <p className="text-xs text-slate-500 mt-0.5">Maks: Rp 20.000.000</p>
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
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-1">
                        <label className="text-xs text-slate-600">DP Awal:</label>
                        <div className="flex gap-1">
                          <button
                            type="button"
                            onClick={() => setCashLunakDPMode('persen')}
                            className={`px-2 py-1 text-xs rounded border transition-colors ${
                              cashLunakDPMode === 'persen'
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                            }`}
                          >
                            %
                          </button>
                          <button
                            type="button"
                            onClick={() => setCashLunakDPMode('manual')}
                            className={`px-2 py-1 text-xs rounded border transition-colors ${
                              cashLunakDPMode === 'manual'
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                            }`}
                          >
                            Rp
                          </button>
                        </div>
                      </div>
                      {cashLunakDPMode === 'persen' ? (
                        <div className="flex items-center justify-between gap-1">
                          <label className="text-xs text-slate-600">DP (%):</label>
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
                      ) : (
                        <div className="space-y-1">
                          <label className="text-xs text-slate-600">DP (Rupiah):</label>
                          <input
                            type="number"
                            value={cashLunakDPManual || ''}
                            onChange={(e) => {
                              const value = parseInt(e.target.value) || 0;
                              setCashLunakDPManual(value);
                            }}
                            placeholder="Min 30% dari harga"
                            min={calculation.hargaSetelahDiskon > 0 ? Math.round(calculation.hargaSetelahDiskon * 0.3) : 0}
                            max={calculation.hargaSetelahDiskon}
                            className="w-full px-2 py-1 border rounded text-xs text-center font-medium bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                          {calculation.hargaSetelahDiskon > 0 && (
                            <p className="text-xs text-slate-500 text-center">
                              Min 30%: {formatCurrency(Math.round(calculation.hargaSetelahDiskon * 0.3))} — Maks: {formatCurrency(calculation.hargaSetelahDiskon)}
                            </p>
                          )}
                        </div>
                      )}
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
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-1">
                        <label className="text-xs text-slate-600">DP Awal:</label>
                        <div className="flex gap-1">
                          <button
                            type="button"
                            onClick={() => setKreditDPMode('persen')}
                            className={`px-2 py-1 text-xs rounded border transition-colors ${
                              kreditDPMode === 'persen'
                                ? 'bg-rose-600 text-white border-rose-600'
                                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                            }`}
                          >
                            %
                          </button>
                          <button
                            type="button"
                            onClick={() => setKreditDPMode('manual')}
                            className={`px-2 py-1 text-xs rounded border transition-colors ${
                              kreditDPMode === 'manual'
                                ? 'bg-rose-600 text-white border-rose-600'
                                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                            }`}
                          >
                            Rp
                          </button>
                        </div>
                      </div>
                      {kreditDPMode === 'persen' ? (
                        <div className="flex items-center justify-between gap-1">
                          <label className="text-xs text-slate-600">DP (%):</label>
                          <select
                            value={kreditDP}
                            onChange={(e) => setKreditDP(parseInt(e.target.value))}
                            className="w-1/2 px-2 py-1 border rounded text-xs text-center font-medium bg-slate-100"
                          >
                            <option value={30}>30%</option>
                            <option value={50}>50%</option>
                          </select>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <label className="text-xs text-slate-600">DP (Rupiah):</label>
                          <input
                            type="number"
                            value={kreditDPManual || ''}
                            onChange={(e) => {
                              const value = parseInt(e.target.value) || 0;
                              setKreditDPManual(value);
                            }}
                            placeholder="Min 30% dari harga"
                            min={calculation.hargaSetelahDiskon > 0 ? Math.round(calculation.hargaSetelahDiskon * 0.3) : 0}
                            max={calculation.hargaSetelahDiskon}
                            className="w-full px-2 py-1 border rounded text-xs text-center font-medium bg-white focus:outline-none focus:ring-1 focus:ring-rose-500"
                          />
                          {calculation.hargaSetelahDiskon > 0 && (
                            <p className="text-xs text-slate-500 text-center">
                              Min 30%: {formatCurrency(Math.round(calculation.hargaSetelahDiskon * 0.3))} — Maks: {formatCurrency(calculation.hargaSetelahDiskon)}
                            </p>
                          )}
                        </div>
                      )}
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

export default SedahCalculator;
