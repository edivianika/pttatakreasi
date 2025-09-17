import React, { useState } from "react";
import { User, Phone, Mail, Home, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";

const SedahForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    houseType: "",
    budget: "",
    message: "",
    source: "Website Sedah"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const houseTypes = [
    { value: "36", label: "Tipe 36 (2 KT, 1 KM)" },
    { value: "45", label: "Tipe 45 (3 KT, 2 KM)" },
    { value: "both", label: "Kedua Tipe" },
    { value: "consultation", label: "Butuh Konsultasi" }
  ];

  const budgetRanges = [
    { value: "150-200", label: "Rp 150 - 200 Juta" },
    { value: "200-250", label: "Rp 200 - 250 Juta" },
    { value: "250-300", label: "Rp 250 - 300 Juta" },
    { value: "300+", label: "Rp 300 Juta+" },
    { value: "consultation", label: "Butuh Konsultasi" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama lengkap harus diisi";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon harus diisi";
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "Format nomor telepon tidak valid";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.houseType) {
      newErrors.houseType = "Pilih tipe rumah yang diminati";
    }

    if (!formData.budget) {
      newErrors.budget = "Pilih range budget";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Send to WhatsApp
      const message = `Halo TKBM, saya tertarik dengan Sedah Green Residence.

Nama: ${formData.name}
Telepon: ${formData.phone}
Email: ${formData.email || 'Tidak diisi'}
Tipe Rumah: ${houseTypes.find(t => t.value === formData.houseType)?.label}
Budget: ${budgetRanges.find(b => b.value === formData.budget)?.label}
Pesan: ${formData.message || 'Tidak ada pesan tambahan'}

Mohon informasi lebih lanjut. Terima kasih.`;

      const whatsappUrl = `https://wa.me/081331388887?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan Sedah Green Residence. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/081331388887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={40} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Terima Kasih!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Formulir Anda telah berhasil dikirim. Tim kami akan segera menghubungi Anda 
                dalam waktu 1x24 jam untuk memberikan informasi lengkap.
              </p>
              <div className="bg-green-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-green-800">
                  <strong>Tips:</strong> Pastikan nomor WhatsApp Anda aktif untuk memudahkan komunikasi.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200"
              >
                Kirim Formulir Lain
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Konsultasi</span> Gratis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dapatkan informasi lengkap dan konsultasi gratis dari tim ahli kami. 
              Kami siap membantu mewujudkan impian hunian syariah Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Isi Formulir Konsultasi
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor Telepon/WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email (Opsional)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* House Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipe Rumah yang Diminati *
                  </label>
                  <select
                    name="houseType"
                    value={formData.houseType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 ${
                      errors.houseType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Pilih tipe rumah</option>
                    {houseTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.houseType && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.houseType}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Range Budget *
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 ${
                      errors.budget ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Pilih range budget</option>
                    {budgetRanges.map((budget) => (
                      <option key={budget.value} value={budget.value}>
                        {budget.label}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.budget}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pesan Tambahan (Opsional)
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 text-gray-400" size={20} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 resize-none"
                      placeholder="Tuliskan pertanyaan atau kebutuhan khusus Anda..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Kirim Konsultasi
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info & Benefits */}
            <div className="space-y-8">
              {/* Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Keuntungan Konsultasi
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Konsultasi Gratis</h4>
                      <p className="text-gray-600 text-sm">Tanpa biaya apapun, tim ahli siap membantu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Respon Cepat</h4>
                      <p className="text-gray-600 text-sm">Dijawab dalam waktu 1x24 jam</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Informasi Lengkap</h4>
                      <p className="text-gray-600 text-sm">Detail harga, fasilitas, dan prosedur</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Kunjungan Langsung</h4>
                      <p className="text-gray-600 text-sm">Jadwalkan kunjungan ke lokasi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Butuh Bantuan Cepat?
                </h3>
                <p className="text-green-100 mb-6">
                  Hubungi langsung tim kami untuk mendapatkan informasi instan.
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-white text-green-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp Langsung
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Informasi Kontak</h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>0813 3138 887</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} />
                    <span>WhatsApp: 0813 3138 887</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home size={16} />
                    <span>Ponorogo, Jawa Timur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SedahForm;
