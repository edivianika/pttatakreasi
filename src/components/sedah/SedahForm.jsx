import React, { useState } from 'react';
import { MessageCircle, User, Phone, Home, FileText } from 'lucide-react';
import { companyInfo } from '../mockData';

const SedahForm = ({ onWhatsAppClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    unitType: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `Halo TKBM, saya tertarik dengan Sedah Green Residence.

Data Saya:
- Nama: ${formData.name}
- WhatsApp: ${formData.whatsapp}
- Tipe Unit: ${formData.unitType || 'Belum dipilih'}
- Catatan: ${formData.notes || 'Tidak ada'}

Mohon informasi lebih lanjut tentang promo dan unit yang tersedia.`;

    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-[#F5F5F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Form Lead Ringkas
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Isi form di bawah ini untuk mendapatkan informasi lengkap dan promo terbaik
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-[#3D3D3D] mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <User size={16} className="inline mr-2" />
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A3B18A] focus:border-transparent transition-all duration-300"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              {/* WhatsApp Field */}
              <div>
                <label className="block text-sm font-semibold text-[#3D3D3D] mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <Phone size={16} className="inline mr-2" />
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A3B18A] focus:border-transparent transition-all duration-300"
                  placeholder="08xxxxxxxxxx"
                />
              </div>

              {/* Unit Type Field */}
              <div>
                <label className="block text-sm font-semibold text-[#3D3D3D] mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <Home size={16} className="inline mr-2" />
                  Pilih Tipe Unit
                </label>
                <select
                  name="unitType"
                  value={formData.unitType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A3B18A] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Pilih tipe unit</option>
                  <option value="Tipe 36 - Rp 173 juta">Tipe 36 - Rp 173 juta</option>
                  <option value="Tipe 45 - Rp 173 juta">Tipe 45 - Rp 173 juta</option>
                  <option value="Belum memutuskan">Belum memutuskan</option>
                </select>
              </div>

              {/* Notes Field */}
              <div>
                <label className="block text-sm font-semibold text-[#3D3D3D] mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <FileText size={16} className="inline mr-2" />
                  Catatan (Opsional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A3B18A] focus:border-transparent transition-all duration-300"
                  placeholder="Tuliskan pertanyaan atau kebutuhan khusus Anda..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#A3B18A] hover:bg-[#8FA375] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <MessageCircle size={20} />
                Kirim & Hubungi Saya
              </button>
            </form>

            {/* Privacy Notice */}
            <div className="mt-6 text-center text-sm text-gray-500" style={{ fontFamily: 'Nunito, sans-serif' }}>
              <p>
                Data Anda aman dan hanya akan digunakan untuk keperluan informasi properti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SedahForm;
