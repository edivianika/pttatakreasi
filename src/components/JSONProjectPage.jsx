import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  Download, 
  FileText,
  Code,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectKnowledge } from '../data/projectKnowledge';

const JSONProjectPage = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [jsonString, setJsonString] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.title = 'Project Knowledge Base (JSON) - TKBM';
    
    // Convert project knowledge to formatted JSON string
    const formattedJson = JSON.stringify(projectKnowledge, null, 2);
    setJsonString(formattedJson);

    return () => {
      document.title = 'TKBM - Developer Properti Syariah Terpercaya | Hunian Halal di Ponorogo';
    };
  }, []);

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy JSON:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = jsonString;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleDownloadJson = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tkbm-project-knowledge.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link
              to="/freelance"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
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
            className="max-w-6xl mx-auto"
          >
            {/* Header Section */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Project Knowledge Base (JSON)
              </h1>
              <p className="text-lg text-slate-600 mb-2">
                Comprehensive project information for AI agent learning
              </p>
              <p className="text-sm text-slate-500">
                Complete data structure containing all TKBM projects, pricing, features, and tools
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={handleCopyJson}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  isCopied
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isCopied ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    <span>Copy JSON</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadJson}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-slate-600 text-white hover:bg-slate-700 transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download JSON</span>
              </button>
            </div>

            {/* JSON Display */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-slate-800 text-white px-6 py-4 flex items-center gap-3">
                <Code className="w-5 h-5" />
                <span className="font-semibold">Project Knowledge Data</span>
                <div className="ml-auto flex items-center gap-2 text-sm text-slate-300">
                  <FileText className="w-4 h-4" />
                  <span>{jsonString.length.toLocaleString()} characters</span>
                </div>
              </div>
              
              <div className="p-6">
                <pre className="text-sm text-slate-700 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">
                  {jsonString}
                </pre>
              </div>
            </div>

            {/* Info Section */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                Data Structure Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
                <div>
                  <h4 className="font-semibold mb-2">Company Information:</h4>
                  <ul className="space-y-1">
                    <li>• Basic company details</li>
                    <li>• Contact information</li>
                    <li>• Syariah compliance</li>
                    <li>• Achievements & stats</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Projects Data:</h4>
                  <ul className="space-y-1">
                    <li>• Narraya Green Residence</li>
                    <li>• Grand Sezha</li>
                    <li>• Sedah Green Residence</li>
                    <li>• Pricing & specifications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tools & Features:</h4>
                  <ul className="space-y-1">
                    <li>• Virtual tour URLs</li>
                    <li>• Calculator tools</li>
                    <li>• Marketing materials</li>
                    <li>• CS handling tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Additional Data:</h4>
                  <ul className="space-y-1">
                    <li>• Testimonials</li>
                    <li>• Trust badges</li>
                    <li>• SEO information</li>
                    <li>• Page URLs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Usage Instructions */}
            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Usage Instructions
              </h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p>
                  <strong>For AI Agents:</strong> This JSON contains comprehensive information about TKBM's projects, 
                  pricing, features, and tools. Use this data to provide accurate information about our properties 
                  and services.
                </p>
                <p>
                  <strong>Data Updates:</strong> This knowledge base is updated regularly. Check the "lastUpdated" 
                  field for the latest version timestamp.
                </p>
                <p>
                  <strong>Integration:</strong> You can copy the JSON data or download the file for integration 
                  into your AI system or knowledge base.
                </p>
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
                to="/"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Beranda
              </Link>
              <span className="text-slate-500">•</span>
              <Link
                to="/freelance"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Freelance Tools
              </Link>
              <span className="text-slate-500">•</span>
              <Link
                to="/sharevirtual"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Share Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JSONProjectPage;
