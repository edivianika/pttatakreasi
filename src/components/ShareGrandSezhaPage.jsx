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
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ShareGrandSezhaPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Update page title
    document.title = 'Share Virtual Tour Grand Sezha - TKBM';

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
    
    if (validation.isValid) {
      const baseUrl = window.location.origin;
      const url = `${baseUrl}/gs-virtual?wa=${validation.cleanNumber}`;
      setGeneratedUrl(url);
    } else {
      setGeneratedUrl('');
    }
  };

  // Copy URL to clipboard
  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(generatedUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = generatedUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  // Test the generated URL
  const handleTestUrl = () => {
    window.open(generatedUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/logo.png"
              alt="TKBM Logo"
              className="w-10 h-10 rounded-lg"
            />
            <span className="font-bold text-xl text-slate-800">TKBM</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Share2 className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Share Virtual Tour
              </h1>
              <h2 className="text-xl text-blue-600 font-semibold mb-2">
                Grand Sezha
              </h2>
              <p className="text-lg text-slate-600 mb-2">
                Buat link virtual tour dengan nomor WhatsApp khusus
              </p>
              <p className="text-sm text-slate-500">
                Masukkan nomor WhatsApp untuk membuat link yang akan mengarah ke nomor tersebut
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
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
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
                
                <div className="mt-4 text-xs text-slate-500">
                  <p>Contoh format yang benar:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>6281234567890 (format internasional)</li>
                    <li>081234567890 (akan dikonversi ke 6281234567890)</li>
                    <li>6289679249759</li>
                    <li>089679249759 (akan dikonversi ke 6289679249759)</li>
                  </ul>
                </div>
              </div>

              {/* Generated URL Section */}
              {isValid && generatedUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t pt-6"
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Link Virtual Tour Grand Sezha
                  </label>
                  <div className="flex gap-2">
                    <div className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-sm break-all">
                      {generatedUrl}
                    </div>
                    <button
                      onClick={handleCopyUrl}
                      className={`px-4 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                        isCopied
                          ? 'bg-green-600 text-white'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <button
                      onClick={handleTestUrl}
                      className="flex-1 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <LinkIcon className="w-4 h-4" />
                      Test Link
                    </button>
                    <a
                      href={generatedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-600 text-white hover:bg-slate-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <Smartphone className="w-4 h-4" />
                      Buka di Tab Baru
                    </a>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Info Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                Cara Menggunakan
              </h3>
              <ol className="space-y-2 text-sm text-blue-700">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">1</span>
                  Masukkan nomor WhatsApp yang valid (format: 6281234567890)
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">2</span>
                  Link virtual tour Grand Sezha akan otomatis ter-generate
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">3</span>
                  Copy link dan bagikan ke calon pembeli
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">4</span>
                  Ketika calon pembeli mengklik tombol WhatsApp, akan langsung terhubung ke nomor yang Anda masukkan
                </li>
              </ol>
            </div>

            {/* Example URLs */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Contoh Link yang Dihasilkan
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="font-mono break-all">
                    {window.location.origin}/gs-virtual?wa=6289679249759
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Input: 089679249759 → Output: 6289679249759
                  </div>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="font-mono break-all">
                    {window.location.origin}/gs-virtual?wa=6282131813698
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Input: 6282131813698 → Output: 6282131813698 (tidak berubah)
                  </div>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="font-mono break-all">
                    {window.location.origin}/gs-virtual?wa=6281234567890
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Input: 081234567890 → Output: 6281234567890
                  </div>
                </div>
              </div>
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

export default ShareGrandSezhaPage;
