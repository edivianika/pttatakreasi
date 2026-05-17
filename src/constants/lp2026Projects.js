/**
 * Proyek eksklusif LP2026 — sumber tunggal untuk UI, gambar responsif, dan SEO.
 */
export const LP2026_EXCLUSIVE_PROJECTS = [
  {
    id: "grand-sezha",
    name: "Grand Sezha",
    location: "Jl. Arif Rahman Hakim, Keniten.",
    price: "Rp 530jt - 640jt",
    imageBase: "grand-sezha",
    imageWidth: 1086,
    imageHeight: 1448,
    imageAlt:
      "Grand Sezha Ponorogo — hunian Islami modern, akad syariah, free kanopi dan taman",
    seoDescription:
      "Cluster rumah syariah modern di Ponorogo, akad 100% syariah tanpa riba.",
    features: [
      { icon: "landmark", label: "Desain Modern Kontemporer" },
      { icon: "shield", label: "Keamanan One Gate System" },
      { icon: "trending", label: "Nilai Investasi Sangat Tinggi" },
    ],
    cta: "Detail Unit & Denah",
    ctaClass: "bg-tk-primary text-white hover:bg-tk-primary/90",
    ctaIcon: "arrow",
    whatsappKey: "waProyekGrandSezha",
  },
  {
    id: "narraya",
    name: "Narraya Green Residence",
    badge: "Unit Terbatas",
    badgeClass: "bg-tk-tertiary/90",
    location: "Jl. Noroyono, Area Alun-Alun.",
    price: "Rp 785jt",
    imageBase: "narraya",
    imageWidth: 941,
    imageHeight: 1672,
    imageAlt:
      "Narraya Green Residence Ponorogo — hunian premium syariah di pusat kota, diskon dan akad syar'i",
    seoDescription:
      "Hunian premium syariah di pusat Ponorogo, lokasi strategis dekat alun-alun, akad syar'i.",
    features: [
      { icon: "gem", label: "Spesifikasi Material Premium" },
      { icon: "star", label: "Kawasan Elit Pusat Kota" },
      { icon: "house", label: "Ready Smart Home System" },
    ],
    cta: "Ambil Promo Spesial",
    ctaClass:
      "bg-tk-primary-container text-tk-on-primary-container hover:bg-tk-primary-container/90",
    ctaIcon: "sparkle",
    whatsappKey: "waProyekGrandNaraya",
  },
  {
    id: "sedah-green",
    name: "Sedah Green Residence",
    badge: "Diskon 20 Juta",
    badgeClass: "bg-tk-primary/90",
    location: "Desa Sedah, Jenangan. Area asri.",
    price: "Mulai Rp 224jt",
    imageBase: "sedah-green",
    imageWidth: 1122,
    imageHeight: 1402,
    imageAlt:
      "Sedah Green Residence Ponorogo — hunian idaman keluarga Muslim, akad syariah dan cicilan ringan",
    seoDescription:
      "Perumahan syariah kawasan asri Sedah Jenangan, mulai Rp 224jt dengan diskon 20 juta, cicilan flat tanpa riba.",
    features: [
      { icon: "trees", label: "Lingkungan Asri & Tenang" },
      { icon: "wallet", label: "DP Ringan & Cicilan Flat" },
      { icon: "graduation", label: "Dekat Sarana Pendidikan" },
    ],
    cta: "Cek Ketersediaan Unit",
    ctaClass:
      "bg-tk-surface-container text-tk-primary hover:bg-tk-surface-container-high",
    ctaIcon: "arrow",
    whatsappKey: "waProyekGrandCitySedah",
  },
];

/** URL absolut gambar poster (800px) untuk structured data */
export function projectPosterUrl(origin, imageBase) {
  return `${origin}/images/projects/${imageBase}-800.jpg`;
}
