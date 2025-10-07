import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, ChevronDown, Copy, Check } from 'lucide-react';

const CSHandlingPage = () => {
  const [currentProject, setCurrentProject] = useState('Sedah Green Residence');
  const [sapaan, setSapaan] = useState('Pak/Bu');
  const [openAccordion, setOpenAccordion] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Update page title
    document.title = 'Customer Handling - TKBM';
  }, []);

  // Data Keberatan dan Jawaban
  const sedahObjectionData = [
    // Kategori Lokasi & Akses
    {
      objection: "Lokasinya kok agak jauh ya, di pinggiran begitu?",
      title: "Lokasinya kok agak jauh ya, di plosok begitu…",
      answer: `Betul [Sapaan] 😊, lokasinya memang sedikit lebih jauh. Justru ini adalah *keuntungan ganda* untuk [Sapaan]:

1.  *Harga Jauh Lebih Terjangkau*. Dapat rumah baru dengan harga yang sangat kompetitif.
2.  *Lingkungan Tenang dan Asri*. Bebas polusi, ideal untuk keluarga.

Pikirkan ini sebagai *investasi terbaik* 📈. Beli sekarang saat harga perdana, dan nilai properti akan naik tinggi seiring kawasan berkembang!`
    },
    {
      objection: "Akses ke fasilitas umum kota jauh tidak ya?",
      title: "Lokasinya kok sepertinya jauh dari fasilitas umum kota?",
      answer: `Justru ini *titik tengah* yang ideal, [Sapaan]. Kita tidak di tengah keramaian, tapi *_tetap dekat_* dengan kebutuhan esensial:

- *Pasar Mlilir* hanya 8 menit.
- *UIN Ponorogo* hanya 10 menit.
- *RSUD Dolopo* hanya 20 menit.

[Sapaan] bisa menikmati *_ketenangan hunian_* tanpa kehilangan akses ke fasilitas penting. 👍`
    },
    {
      objection: "Jalan masuknya kecil/curam tidak, ya?",
      title: "Akses ke kawasan jalannya terlalu kecil/masih curam.",
      answer: `Kami memahami kekhawatiran [Sapaan]. Akses utama memang sedang kami tingkatkan. Namun, fokus kami ada di *kualitas hidup* di dalam perumahan:

- *_Row Jalan internal_* kami *6-7 meter*, sangat lebar dan nyaman untuk dua mobil.
- Peningkatan akses adalah *komitmen developer*. Kami pastikan, saat serah terima, akses akan jauh lebih baik dan *prestisius*.`
    },
    // Kategori Keberatan Teknis & Pembangunan
    {
      objection: "Indennya lama sekali, sampai 1,5 tahun?",
      title: "Sistem indent terlalu lama, saya maunya rumah siap huni.",
      answer: `Wajar mencari siap huni, [Sapaan]. Tapi masa inden *_1 tahun hingga 1,5 tahun_* justru memberikan *3 keuntungan istimewa* ini:

1. *Bisa Custom Denah Gratis*. Rumah benar-benar sesuai selera dan kebutuhan keluarga.
2. *Harga Jauh Lebih Hemat* daripada rumah siap huni.
3. *Kualitas Bangunan Terjamin* karena diawasi dari nol.

Tunggu sebentar, untung selamanya! 😊`
    },
    {
      objection: "Kenapa belum terlihat progress pembangunan?",
      title: "Saya belum melihat progress pembangunan di kawasan.",
      answer: `Saat ini memang masih tahap *Pre-selling*, fokusnya di *legalitas dan persiapan lahan*. Tapi ini poin krusial, [Sapaan]:

- Kami adalah *proyek ke-3 developer*. Kami *terbukti* amanah dan *pasti membangun*.
- Progres fisik akan *cepat* dimulai setelah kuota penjualan tahap awal terpenuhi.

Saat [Sapaan] membeli sekarang, Anda mendapatkan *harga terbaik* sebelum pondasi terlihat. *Keuntungan ada di tahap awal!*`
    },
    {
      objection: "Rumah contohnya bisa dilihat di mana, ya?",
      title: "Rumah contohnya bisa dilihat di mana ya? Kan belum ada.",
      answer: `Kami belum menyediakan rumah contoh di *_Sedah Green Residence_* 🙏.

Tapi, kami siap mengajak [Sapaan] berkunjung ke proyek kami yang sudah jadi, *_Grand Sezha_*. *Konsep, desain, dan kualitas materialnya sama persis*.

Ini cara terbaik untuk *membuktikan kualitas* sebelum [Sapaan] memutuskan. Bagaimana, mau dijadwalkan?`
    },
    // Kategori Desain & Tipe
    {
      objection: "Apakah ada tipe yang 3 kamar tidur?",
      title: "Apakah ada tipe rumah dengan 3 kamar tidur?",
      answer: `Desain standar kami memang *2 kamar tidur* (Tipe 36 & 45).

Namun, kami punya *solusi fleksibel* untuk kebutuhan 3 kamar [Sapaan]:
- *Custom Tata Letak Gratis* untuk menambah kamar.
- Tentu dengan *biaya tambahan yang kompetitif*, disesuaikan dengan luas bangunan yang diminta.

Ini memastikan [Sapaan] dapat rumah idaman yang *benar-benar pas*! 😊`
    },
    {
      objection: "Apakah ada opsi rumah 2 lantai?",
      title: "Apakah ada opsi rumah 2 lantai?",
      answer: `Saat ini fokus utama kami adalah *rumah 1 lantai yang berkualitas* dan *sangat terjangkau*.

Namun, [Sapaan] bisa mengajukan *request upgrade 2 lantai*. Dengan *biaya tambahan yang kompetitif*, kami akan menghitung ulang dan membangun sesuai kebutuhan [Sapaan] dari awal.

Manfaatkan *Custom Tata Letak Gratis* untuk merancang rumah 2 lantai impian Anda!`
    },
    // Kategori Keuangan & Legalitas
    {
      objection: "DP-nya besar, bisa dicicil/dikurangi tidak?",
      title: "DP yang diminta terlalu besar, apakah bisa dicicil/dikurangi?",
      answer: `Kami sangat menghargai komitmen [Sapaan] 🤝. DP memang krusial, tapi kami *sangat fleksibel*.

Kami bisa tawarkan skema *cicilan DP* hingga _[... bulan]_ *tanpa bunga*, atau skema DP yang lebih ringan dengan penyesuaian angsuran.

Prinsip kami adalah *_musyawarah_*. Kapan [Sapaan] ada waktu agar kita bisa bahas simulasi DP terbaik?`
    },
    {
      objection: "Kenapa tidak KPR Bank? Apakah ada BI Checking?",
      title: "Skema pembayarannya bagaimana? Kok tidak KPR Bank? Apakah ada BI Checking?",
      answer: `Tepat sekali! Kami menggunakan skema *_Kredit Syariah Murni_* 🌙. Ini *kebebasan finansial* untuk [Sapaan]:

- *Tanpa KPR Bank* dan *Tanpa BI Checking* (proses super mudah).
- *Angsuran FLAT* (*Tanpa Riba*) sepanjang tenor.
- *Tanpa Denda & Sita* (jauh lebih tenang).

Ini bukan hanya rumah, tapi *_investasi berkah_*.`
    },
    {
      objection: "Harganya kemahalan, ada yang lebih murah di tempat lain?",
      title: "Harganya kemahalan/ada yang lebih murah?",
      answer: `Harga kami *sangat rasional*, [Sapaan]. Dengan harga ini, Anda mendapatkan *paket lengkap*:

- *Rumah Syariah* (_Tanpa Riba, Denda, Sita_).
- *_Jaminan Kualitas_* (Garansi Struktur 5 Tahun).
- *Lingkungan Asri* dengan *_Row Jalan 6-7 meter_*.

Kami juga bisa bantu dengan *opsi pembayaran bertahap* agar [Sapaan] tetap bisa memiliki rumah impian.`
    },
    {
      objection: "Saya khawatir developer tidak amanah atau tidak selesai membangun?",
      title: "Saya khawatir developernya tidak amanah/tidak selesai membangun.",
      answer: `Wajar sekali [Sapaan] khawatir, membeli properti harus amanah! Kami adalah PT. Tata Kreasi Bumi Madani.

- Ini adalah *_proyek ke-3 kami_*. Kami *terbukti* sukses menyelesaikan proyek sebelumnya (*Grand Sezha*).
- Kami menjamin komitmen kami pada *_kualitas dan penyelesaian tepat waktu_*.

[Sapaan] tidak perlu khawatir, *kami bukan developer musiman*. 😊`
    },
    {
      objection: "Bagaimana legalitas tanah dan izin pembangunannya?",
      title: "Bagaimana dengan legalitas tanah dan izin pembangunan? Apakah sudah aman?",
      answer: `Untuk legalitas, [Sapaan] *pasti aman* ✅:

- *_Tanah 100% sudah milik developer_*.
- Perizinan sedang berjalan di *_BPN_*.
- Kami menjamin [Sapaan] akan mendapatkan sertifikat *_SHM (Sertifikat Hak Milik)_* di akhir.

Semua proses didasari *Akad Jual Beli* di Notaris untuk kepastian hukum.`
    },
    {
      objection: "Kapan sertifikat akan saya dapatkan?",
      title: "Kapan saya mendapatkan sertifikat? Karena inden, apakah sertifikatnya aman?",
      answer: `Tentu aman, [Sapaan] ✅. Hak rumah *100% milik [Sapaan]* sejak awal akad.

Sertifikat unit (_SHM_) akan kami serahkan setelah *pembangunan rumah selesai* dan *pelunasan pembayaran*. Kepemilikan [Sapaan] dijamin penuh oleh *akad jual beli* di Notaris.`
    },
    {
      objection: "Bagaimana potensi kenaikan harga (investasi) ke depan?",
      title: "Bagaimana nilai jualnya ke depan? Nanti malah sepi.",
      answer: `Justru ini *rahasia investor pintar*, [Sapaan] 📈. Saat ini [Sapaan] mendapatkan *harga perdana* karena kawasan masih tumbuh.

Fokus kami membangun perumahan *prestisius*. Artinya, potensi *_capital gain_* di Sedah Green Residence bisa *melonjak tinggi* dalam 3-5 tahun seiring perkembangan fasilitas. *Membeli sekarang adalah kuncinya*.`
    },
    {
      objection: "Apa saja spesifikasi bangunan dan jaminannya?",
      title: "Apa saja spesifikasi bangunan dan material yang digunakan? Apakah kualitasnya bagus?",
      answer: `Kami menjamin *kualitas terbaik* ✨, [Sapaan], apalagi ini rumah impian Anda:

- Pondasi: *Menerus* (*Sloof Gantung, Cakar Ayam, Stroos*).
- Dinding: *_Bata Ringan_*.
- Atap: *Baja Ringan* dan penutup *Beton Cor* yang kokoh.
- Lantai: *Keramik ukuran 40x40* yang berkualitas.
- Fasilitas: Air *Sumur Pompa Listrik*, Listrik *1300 Watt*, Closet *Jongkok*, dan *Kusen Kayu Jati*.
- Jaminan Purna Jual: *Garansi Struktur 5 Tahun* dan *Garansi Perawatan 1 Tahun*.

Kami pastikan Anda *_tenang_*, karena ada jaminan dari developer.`
    },
    {
      objection: "Apakah lokasinya rawan banjir?",
      title: "Apakah lokasinya rawan banjir karena dekat sungai/dam?",
      answer: `[Sapaan] bisa tenang, karena area perumahan ini sudah melalui *_kajian tata ruang_* dan *dinyatakan aman dari potensi banjir* ✅.

Justru kedekatan dengan sungai membuat suasana lingkungan lebih *sejuk, asri, dan nyaman*. Kami menjamin *hunian sehat* yang aman dari banjir.`
    },
    {
      objection: "Fasilitas internalnya hanya RTH dan Playground saja?",
      title: "Fasilitas perumahan hanya RTH dan Playground saja? Kurang lengkap rasanya.",
      answer: `Fokus kami adalah *kenyamanan* dan *efisiensi biaya*, [Sapaan]. Fasilitas utama kami adalah:

1. *_Keamanan One Gate System_* dan *Row Jalan 6-7 meter* (prioritas utama).
2. *Taman RTH* dan *Playground*.

Kami menghindari fasilitas mahal yang membuat *_iuran bulanan (IPL) menjadi berat_*. Kami ingin [Sapaan] bisa berhemat setiap bulan. 👍`
    }
  ];

  const narrayaObjectionData = [
    {
      objection: "Harganya tinggi sekali, ada yang lebih murah di tempat lain?",
      title: "Harga rumahnya tinggi, di tempat lain bisa dapat lebih murah.",
      answer: `Betul [Sapaan] 😊, ada yang menawarkan harga lebih rendah. Tapi yang perlu dilihat adalah *_value_-nya*.

Di Narraya, [Sapaan] tidak hanya membeli bangunan—tapi juga:
* *Lokasi Super Strategis* di jantung Ponorogo (akses cepat ke fasilitas kota).
* *Kawasan Private* dan *One Gate System* dengan keamanan 24 jam.
* *Spesifikasi Bangunan Premium* yang awet & minim perawatan.

Harga boleh lebih tinggi, tapi *nilainya jauh lebih besar*. Ini seperti beli emas kualitas tinggi—lebih tahan waktu & cepat naik nilainya 📈`
    },
    {
      objection: "Dengan harga segitu, takut overprice tidak ya?",
      title: "Harga segitu takut overprice.",
      answer: `Wajar sekali [Sapaan] punya kekhawatiran seperti itu 🙏.

Yang penting bukan hanya harga saat ini, tapi *apa yang didapat* & *potensi jangka panjangnya*:
* Lokasi di *_tengah kota itu langka_* (*scarce*). *Supply terbatas*, permintaan terus naik.
* Kualitas bangunan & kawasan premium akan menjaga nilai properti tetap tinggi.

Jadi bukan overprice… tapi *_lokasi dan kualitasnya yang memang premium_* 🏡✨`
    },
    {
      objection: "DP besar/cicilan berat, apakah ada solusi pembayaran?",
      title: "DP besar / cicilan berat untuk harga segitu.",
      answer: `Bisa banget kita *custom skema pembayaran* agar ringan, [Sapaan]!

* *Angsuran flat*, tanpa denda, tanpa BI checking.
* *DP bisa dicicil bertahap* sesuai kemampuan [Sapaan].
* Proses langsung ke developer → *_lebih fleksibel_* dibanding bank.

Fokus kami bukan bikin berat, tapi bantu [Sapaan] bisa memiliki rumah impian dengan nyaman dan legalitas jelas ✅`
    },
    {
      objection: "Kalau untuk investasi, lama tidak ya balik modalnya?",
      title: "Kalau untuk investasi, butuh waktu lama balik modalnya?",
      answer: `Justru ini *rahasia investor pintar*, [Sapaan] 📈.

* *Harga Perdana*. Saat ini [Sapaan] mendapatkan harga terbaik karena kawasan masih tumbuh.
* *Potensi Capital Gain* 3–5 tahun ke depan sangat tinggi seiring fasilitas sekitar berkembang.
* Lokasi inti kota juga *_menarik penyewa_*, jadi [Sapaan] dapat kombinasi *capital gain* + *rental yield*.

Membeli sekarang saat harga perdana = *posisi emas*.`
    },
    {
      objection: "Apakah harga properti akan turun setelah dibeli?",
      title: "Takut harga turun setelah beli.",
      answer: `Properti premium di *_lokasi pusat kota_* itu ibarat emas—*nilainya tahan banting* 🛡️.

* *Supply Sangat Terbatas*. Tidak bisa dikembangkan lagi.
* Akses ke fasilitas utama menjamin *permintaan selalu tinggi*.
* Kualitas bangunan & lingkungan menjaga *nilai jual tetap stabil*.

Bahkan saat pasar fluktuatif, properti Narraya biasanya *_bertahan paling baik dan pulih paling cepat_*.`
    },
    {
      objection: "Apakah biaya perawatan rumah premium mahal?",
      title: "Perawatannya mahal ya kalau rumah premium?",
      answer: `Justru *sebaliknya* [Sapaan]. Karena kita pakai *_material premium_*:

* *Tahan Lama*. Beton bertulang, bata ringan, atap UPVC baja ringan, kusen & pintu jati, granite tile 60×60.
* *Minim Perawatan Besar*, hanya perawatan rutin biasa.

*Total Cost of Ownership* (biaya total kepemilikan) justru *lebih efisien* dalam jangka panjang. Bayangkan seperti beli kendaraan mewah berkualitas — lebih awet, jarang rewel 🚗✨`
    },
    {
      objection: "Saya khawatir developer tidak kredibel atau tidak amanah?",
      title: "Harga tinggi, takut kalau proyek tidak kredibel.",
      answer: `Ini pertanyaan bagus, [Sapaan] 👍. Kepercayaan adalah yang utama.

Untuk *kredibilitas developer*, kami bisa ajak [Sapaan] lihat langsung *proyek kami sebelumnya* (_Grand Sezha_).

Dari sana, [Sapaan] akan lihat *_standar kualitas dan komitmen_* kami, bukan hanya janji di brosur. Kalau berkenan, kita atur jadwal *site visit* singkat, biar semuanya lebih jelas dan tenang 😊.`
    }
  ];

  const placeholderData = (projectName) => [
    {
      objection: `Data Belum Tersedia untuk ${projectName}`,
      title: "Mohon maaf, skrip penanganan keberatan untuk proyek ini masih dalam tahap penyusunan.",
      answer: `Mohon maaf [Sapaan], data skrip penanganan keberatan untuk proyek *${projectName}* saat ini belum tersedia. Untuk informasi terkait proyek ini, silakan hubungi tim manajemen.`
    }
  ];

  const projectData = {
    'Sedah Green Residence': sedahObjectionData,
    'Narraya Green Residence': narrayaObjectionData,
    'Grand Sezha': placeholderData('Grand Sezha')
  };

  const handleSapaanChange = (e) => {
    setSapaan(e.target.value);
  };

  const handleProjectChange = (projectName) => {
    setCurrentProject(projectName);
    setOpenAccordion(null);
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  const formatAnswer = (answer) => {
    return answer.replace(/\[Sapaan\]/g, sapaan);
  };

  const currentData = projectData[currentProject] || [];

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
            <Link to="/freelance" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft size={24} className="text-slate-600" />
              <span className="font-semibold text-slate-800">Kembali</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Users size={24} className="text-green-600" />
            <h1 className="text-xl font-bold text-slate-800">Customer Handling</h1>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Utama */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-t-xl shadow-lg"
          >
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Pusat Penanganan Keberatan Prospek</h1>
            <p className="text-gray-600 text-sm">Pilih proyek di bawah ini untuk menampilkan panduan respons yang sesuai.</p>
          </motion.div>

          {/* Tabs Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex border-b border-gray-200 bg-gray-50"
          >
            {Object.keys(projectData).map((projectName) => (
              <button
                key={projectName}
                onClick={() => handleProjectChange(projectName)}
                className={`tab-button text-gray-700 -mb-[3px] ${
                  currentProject === projectName ? 'active' : ''
                }`}
              >
                {projectName}
              </button>
            ))}
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-b-xl shadow-lg mt-0"
          >
            {/* Input Sapaan */}
            <div className="mb-6 border-b pb-4">
              <p className="text-gray-600 mb-4">Gunakan panduan di bawah untuk merespon keberatan pelanggan. Klik pada keberatan untuk melihat dan menyalin jawabannya. **Jangan lupa isi Sapaan Kustom di bawah.**</p>
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <label htmlFor="sapaanInput" className="text-lg font-medium text-gray-700 whitespace-nowrap">Sapaan Kustom:</label>
                <input
                  type="text"
                  id="sapaanInput"
                  value={sapaan}
                  onChange={handleSapaanChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 text-gray-800 shadow-sm"
                  placeholder="Contoh: Bapak/Ibu, Kak, Mas, Mbak"
                />
              </div>
              <p className="mt-3 text-sm text-gray-500">Pratinjau Sapaan: *{sapaan}*</p>
            </div>

            {/* Daftar Accordion Keberatan */}
            <div className="space-y-4">
              {currentData.map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Header */}
                  <div
                    className="flex justify-between items-center p-4 sm:p-6 bg-white hover:bg-green-50 cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-base sm:text-lg font-semibold text-gray-800">{data.objection}</span>
                    <ChevronDown
                      size={20}
                      className={`text-green-600 transform transition-transform duration-300 ${
                        openAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* Content */}
                  {openAccordion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 bg-white"
                    >
                      <div className="p-4 sm:p-6 space-y-4">
                        {/* Judul Keberatan Pelanggan */}
                        <h3 className="text-gray-500 font-medium italic">Pertanyaan Pelanggan: "{data.title}"</h3>

                        {/* Jawaban Utama */}
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-sm font-semibold text-green-700 mb-2">JAWABAN SIAP COPY (Konversional)</p>
                          <div className="text-gray-800 whitespace-pre-line mb-3">
                            {formatAnswer(data.answer)}
                          </div>
                          <button
                            onClick={() => copyToClipboard(formatAnswer(data.answer), index)}
                            className="copy-button px-3 py-1 bg-green-600 text-white text-xs rounded-lg flex items-center hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                          >
                            {copiedIndex === index ? (
                              <>
                                <Check size={16} className="mr-1" />
                                <span>Berhasil Disalin!</span>
                              </>
                            ) : (
                              <>
                                <Copy size={16} className="mr-1" />
                                <span>Salin Jawaban</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .tab-button {
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          font-weight: 600;
          border-bottom: 3px solid transparent;
          transition: all 0.2s;
          flex-grow: 1;
          text-align: center;
        }
        .tab-button.active {
          border-color: #10b981;
          color: #059669;
        }
        .tab-button:hover:not(.active) {
          color: #34d399;
        }
      `}</style>
    </div>
  );
};

export default CSHandlingPage;
