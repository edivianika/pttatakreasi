import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SedahFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Apakah benar tanpa riba?",
      answer: "Ya, 100% tanpa riba. Kami menggunakan akad syariah murni seperti musyarakah, murabahah, atau ijarah yang sesuai dengan prinsip syariah Islam. Tidak ada bunga dalam setiap transaksi."
    },
    {
      question: "Bagaimana proses akad syariah?",
      answer: "Proses akad syariah dilakukan dengan transparan dan sesuai syariat. Meliputi: 1) Survey kelayakan, 2) Penandatanganan akad syariah, 3) Pembayaran DP, 4) Proses pembangunan, 5) Serah terima unit. Semua dokumen menggunakan bahasa dan format syariah."
    },
    {
      question: "Biaya apa saja saat akad?",
      answer: "Biaya saat akad meliputi: DP 30% dari harga unit, biaya notaris akad syariah, biaya administrasi, dan PPN. Tidak ada biaya tersembunyi atau denda. Semua biaya dijelaskan transparan sebelum akad."
    },
    {
      question: "Apakah ada garansi bangunan?",
      answer: "Ya, kami memberikan garansi bangunan 1 tahun untuk struktur utama dan 6 bulan untuk finishing. Tim kami akan melakukan perbaikan jika ada kerusakan yang bukan disebabkan oleh kelalaian penghuni."
    },
    {
      question: "Bagaimana sistem pembayaran?",
      answer: "Pembayaran dapat dilakukan dengan: 1) Cash keras (diskon tambahan), 2) DP 30% + cicilan developer (tanpa bank), 3) DP 30% + KPR syariah bank. Semua pembayaran menggunakan akad syariah yang halal."
    },
    {
      question: "Kapan unit siap huni?",
      answer: "Unit akan siap huni dalam 12-18 bulan setelah akad. Progress pembangunan dapat dipantau secara berkala. Kami akan memberikan update progress setiap bulan kepada pembeli."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              FAQ Singkat
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Pertanyaan yang sering diajukan tentang Sedah Green Residence
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#F5F5F0] rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#D6CCC2] transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-[#3D3D3D]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#A3B18A]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#A3B18A]" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-[#A3B18A]/10 border border-[#A3B18A]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3D3D3D] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Masih ada pertanyaan?
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Tim kami siap membantu menjawab semua pertanyaan Anda
              </p>
              <button 
                onClick={() => window.open(`https://wa.me/${companyInfo.whatsapp}?text=Halo TKBM, saya ada pertanyaan tentang Sedah Green Residence`, '_blank')}
                className="bg-[#A3B18A] hover:bg-[#8FA375] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Tanya via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SedahFAQ;
