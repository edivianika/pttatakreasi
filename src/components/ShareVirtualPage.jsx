import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Copy, 
  Check,
  ArrowLeft,
  Share2,
  Link as LinkIcon,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ShareVirtualPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [narrayaUrl, setNarrayaUrl] = useState('');
  const [grandSezhaUrl, setGrandSezhaUrl] = useState('');
  const [isCopied, setIsCopied] = useState({ narraya: false, grandsezha: false });
  const [isValid, setIsValid] = useState(false);

  // Initialize default URLs on component mount
  useEffect(() => {
    const baseUrl = window.location.origin;
    setNarrayaUrl(`${baseUrl}/narraya-virtual`);
    setGrandSezhaUrl(`${baseUrl}/gs-virtual`);
  }, []);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Update page title
    document.title = 'Share Virtual Tour - TKBM';

    // Cleanup function
    return () => {
      document.title = 'TKBM - Developer Properti Syariah Terpercaya | Hunian Halal di Ponorogo';
    };
  }, []);

  // Format and validate phone number
  const formatAndValidatePhoneNumber = (number) => {
    // Remove all non-digit characters
    let cleanNumber = number.replace(/\D/g, '');
    
    // Auto-format: if starts with 08, convert to 62
    if (cleanNumber.startsWith('08')) {
      cleanNumber = '62' + cleanNumber.substring(2);
    }
    
    // Check if it's a valid Indonesian phone number
    // Should start with 62 and be 10-13 digits total
    const isValidFormat = /^62\d{9,12}$/.test(cleanNumber);
    
    return {
      isValid: isValidFormat,
      cleanNumber: cleanNumber,
      originalNumber: number
    };
  };

  // Handle phone number input
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    setPhoneNumber(input);
    
    const validation = formatAndValidatePhoneNumber(input);
    setIsValid(validation.isValid);
    
    const baseUrl = window.location.origin;
    
    if (validation.isValid) {
      // If phone number is valid, add wa parameter
      const narrayaUrl = `${baseUrl}/narraya-virtual?wa=${validation.cleanNumber}`;
      const grandSezhaUrl = `${baseUrl}/gs-virtual?wa=${validation.cleanNumber}`;
      setNarrayaUrl(narrayaUrl);
      setGrandSezhaUrl(grandSezhaUrl);
    } else if (input === '') {
      // If input is empty, show default URLs without wa parameter
      setNarrayaUrl(`${baseUrl}/narraya-virtual`);
      setGrandSezhaUrl(`${baseUrl}/gs-virtual`);
    }
    // If input is invalid but not empty, keep current URLs (don't clear them)
  };

  // Copy URL to clipboard
  const handleCopyUrl = async (url, type) => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(prev => ({ ...prev, [type]: true }));
      setTimeout(() => setIsCopied(prev => ({ ...prev, [type]: false })), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(prev => ({ ...prev, [type]: true }));
      setTimeout(() => setIsCopied(prev => ({ ...prev, [type]: false })), 2000);
    }
  };

  // Test the generated URL
  const handleTestUrl = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link
              to="/freelance"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Freelance
            </Link>
          </div>
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/logo.png"
              alt="TKBM Logo"
              className="w-10 h-10 rounded-lg"
            />
            <span className="font-bold text-xl text-slate-800">TKBM</span>
          </Link>
        </div>
      </div>

      <main className="flex-1 py-8">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                <Share2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Share Virtual Tour
              </h1>
              <p className="text-lg text-slate-600 mb-2">
                Link virtual tour Narraya & Grand Sezha tersedia di bawah
              </p>
              <p className="text-sm text-slate-500">
                Cukup masukkan nomor WA Anda 👇 <br />
                Copy link-nya dan share ke media sosial Anda! <br />
                Setiap calon pembeli yang klik link akan langsung chat ke WA Anda 🚀
              </p>
            </div>

            {/* Input Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nomor WhatsApp
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="6281234567890"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                      phoneNumber && !isValid 
                        ? 'border-red-300 bg-red-50' 
                        : phoneNumber && isValid 
                        ? 'border-green-300 bg-green-50' 
                        : 'border-slate-300'
                    }`}
                  />
                  {phoneNumber && isValid && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                  )}
                </div>
                
                {/* Validation Messages */}
                {phoneNumber && !isValid && (
                  <p className="mt-2 text-sm text-red-600">
                    Format nomor tidak valid. Gunakan format: 6281234567890 atau 081234567890
                  </p>
                )}
                {phoneNumber && isValid && (
                  <div className="mt-2 text-sm text-green-600">
                    <p>✓ Nomor WhatsApp valid</p>
                    {formatAndValidatePhoneNumber(phoneNumber).originalNumber !== formatAndValidatePhoneNumber(phoneNumber).cleanNumber && (
                      <p className="text-xs text-slate-500 mt-1">
                        Dikonversi dari {formatAndValidatePhoneNumber(phoneNumber).originalNumber} ke {formatAndValidatePhoneNumber(phoneNumber).cleanNumber}
                      </p>
                    )}
                  </div>
                )}
                
              </div>

              {/* Generated URL Section */}
              {(narrayaUrl || grandSezhaUrl) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t pt-6"
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-4">
                    Link Virtual Tour
                  </label>
                  
                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Narraya Link Card */}
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-sm"></div>
                      <h3 className="text-lg font-bold text-emerald-800">Narraya Green Residence</h3>
                    </div>
                    
                    {/* Project Image */}
                    <div className="mb-4">
                      <img
                        src="/images/narraya-hero.jpg"
                        alt="Narraya Green Residence"
                        className="w-full h-32 object-cover rounded-xl shadow-sm"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      {/* URL Display */}
                      <div className="p-3 bg-white border border-emerald-200 rounded-lg font-mono text-xs break-all shadow-sm">
                        {narrayaUrl}
                      </div>
                      
                      {/* Action Buttons - Mobile Optimized */}
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => handleCopyUrl(narrayaUrl, 'narraya')}
                          className={`flex-1 sm:flex-none px-4 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-md ${
                            isCopied.narraya
                              ? 'bg-green-600 text-white'
                              : 'bg-emerald-600 text-white hover:bg-emerald-700'
                          }`}
                        >
                          {isCopied.narraya ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                        
                        <a
                          href={narrayaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none inline-flex items-center justify-center bg-slate-600 hover:bg-slate-700 text-white px-4 py-3 rounded-lg transition-all transform hover:scale-105 shadow-md gap-2"
                          title="Buka di Tab Baru"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="sm:hidden">Buka</span>
                        </a>
                      </div>
                    </div>
                    </div>

                    {/* Grand Sezha Link Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
                      <h3 className="text-lg font-bold text-blue-800">Grand Sezha</h3>
                    </div>
                    
                    {/* Project Image */}
                    <div className="mb-4">
                      <img
                        src="/images/grandsezha-hero.jpg"
                        alt="Grand Sezha"
                        className="w-full h-32 object-cover rounded-xl shadow-sm"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      {/* URL Display */}
                      <div className="p-3 bg-white border border-blue-200 rounded-lg font-mono text-xs break-all shadow-sm">
                        {grandSezhaUrl}
                      </div>
                      
                      {/* Action Buttons - Mobile Optimized */}
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => handleCopyUrl(grandSezhaUrl, 'grandsezha')}
                          className={`flex-1 sm:flex-none px-4 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-md ${
                            isCopied.grandsezha
                              ? 'bg-green-600 text-white'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          {isCopied.grandsezha ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                        
                        <a
                          href={grandSezhaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none inline-flex items-center justify-center bg-slate-600 hover:bg-slate-700 text-white px-4 py-3 rounded-lg transition-all transform hover:scale-105 shadow-md gap-2"
                          title="Buka di Tab Baru"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="sm:hidden">Buka</span>
                        </a>
                      </div>
                    </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Info Section */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">
                Cara Menggunakan
              </h3>
              <ol className="space-y-2 text-sm text-emerald-700">
                <li className="flex items-start gap-2">
                  <span className="bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">1</span>
                  Masukkan nomor WhatsApp yang valid (format: 6281234567890)
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">2</span>
                  Link virtual tour akan otomatis ter-generate
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">3</span>
                  Copy link dan bagikan ke calon pembeli
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">4</span>
                  Ketika calon pembeli mengklik tombol WhatsApp, akan langsung terhubung ke nomor yang Anda masukkan
                </li>
              </ol>
            </div>

          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container px-4">
          <div className="text-center">
            <p className="text-slate-300 mb-4">
              Developer Properti Syariah Terpercaya di Ponorogo
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/narraya"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Virtual Tour Narraya
              </Link>
              <span className="text-slate-500">•</span>
              <Link
                to="/gs-virtual"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Virtual Tour Grand Sezha
              </Link>
              <span className="text-slate-500">•</span>
              <Link
                to="/"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Beranda
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShareVirtualPage;
