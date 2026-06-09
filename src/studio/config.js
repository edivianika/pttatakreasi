export const PROMOTION_FORMATS = {
  feed: {
    id: "feed",
    label: "Instagram Feed",
    shortLabel: "Feed",
    width: 1080,
    height: 1080,
  },
  story: {
    id: "story",
    label: "Instagram Story",
    shortLabel: "Story",
    width: 1080,
    height: 1920,
  },
  whatsapp: {
    id: "whatsapp",
    label: "Banner WhatsApp",
    shortLabel: "Banner WA",
    width: 1200,
    height: 628,
  },
};

export const DEFAULT_BRAND_KIT = {
  id: "tatakreasi-global",
  name: "Tata Kreasi Global",
  colors: {
    emerald: "#046A38",
    deepGreen: "#034D28",
    gold: "#C9A227",
    ivory: "#FCF9F2",
    slate: "#24332D",
  },
  fonts: {
    headline: "Noto Serif",
    body: "Manrope",
  },
  ctas: ["Konsultasi Sekarang", "Cek Unit Tersedia", "Jadwalkan Survey"],
  defaultCta: "Konsultasi Sekarang",
  logoUrl: "/logo.png",
};

export const STUDIO_PROJECTS = [
  {
    id: "narraya",
    name: "Narraya Green Residence",
    category: "Premium",
    location: "Pusat Kota Ponorogo",
    heroUrl: "/tatakreasi/perumahan-ponorogo-narraya-green-residence.png",
    sideUrl: "/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-3.png",
    logoUrl: "/narraya-logo.jpeg",
    sourceAssetId: "seed:narraya:fasad-utama",
    sourceHash: "seed-5e6f0db5-narraya",
    accent: "#046A38",
    verifiedClaims: [
      { id: "narraya-location", label: "5 langkah ke Alun-alun Ponorogo" },
      { id: "narraya-syariah", label: "Hunian premium 100% syariah" },
      { id: "narraya-promo", label: "Diskon Rp75 juta untuk 2 pembeli pertama" },
    ],
  },
  {
    id: "grandsezha",
    name: "Grand Sezha",
    category: "Eksklusif",
    location: "Tengah Kota Ponorogo",
    heroUrl: "/tatakreasi/perumahan-ponorogo-grand-sezha.png",
    sideUrl: "/grandsezha/grand-sezha-2.png",
    logoUrl: "/logo.png",
    sourceAssetId: "seed:grandsezha:fasad-utama",
    sourceHash: "seed-38d9bd11-grandsezha",
    accent: "#0F5132",
    verifiedClaims: [
      { id: "grandsezha-location", label: "Lokasi premium di tengah kota" },
      { id: "grandsezha-design", label: "Desain arsitektur modern" },
      { id: "grandsezha-syariah", label: "Skema pembayaran syariah" },
    ],
  },
  {
    id: "sedah",
    name: "Sedah Green Residence",
    category: "Keluarga",
    location: "Sedah, Jenangan, Ponorogo",
    heroUrl: "/tatakreasi/perumahan-ponorogo-sedah-green-residence.png",
    sideUrl: "/sedah/sedah green residence-perumahan syariah ponorogo3.png",
    logoUrl: "/sedah-logo.png",
    sourceAssetId: "seed:sedah:fasad-utama",
    sourceHash: "seed-b04a0a82-sedah",
    accent: "#3B6F44",
    verifiedClaims: [
      { id: "sedah-family", label: "Hunian nyaman untuk keluarga Muslim" },
      { id: "sedah-syariah", label: "Tanpa riba, tanpa denda, tanpa sita" },
      { id: "sedah-green", label: "Lingkungan hijau dan asri" },
    ],
  },
];

export const PROMOTION_TEMPLATES = [
  {
    id: "editorial-hero",
    name: "Editorial Hero",
    description: "Komposisi tenang untuk menonjolkan fasad dan satu pesan utama.",
    tags: ["premium", "launch", "lokasi"],
    tone: "Editorial",
  },
  {
    id: "promo-fokus-harga",
    name: "Promo Fokus Harga",
    description: "Ruang headline lebih tegas untuk promo terbatas atau harga mulai.",
    tags: ["promo", "harga", "urgency"],
    tone: "Komersial",
  },
  {
    id: "syariah-keluarga",
    name: "Syariah Keluarga",
    description: "Narasi hangat untuk hunian keluarga dan prinsip transaksi syariah.",
    tags: ["keluarga", "syariah", "trust"],
    tone: "Hangat",
  },
];

export const DEFAULT_CREATIVE = {
  headline: "Hunian Berkah untuk Keluarga",
  subheadline: "Rumah syariah dengan lingkungan nyaman dan proses yang transparan.",
  cta: DEFAULT_BRAND_KIT.defaultCta,
  claimIds: ["sedah-family", "sedah-syariah"],
  templateId: "editorial-hero",
  backgroundUrl: null,
};

export function getProject(projectId) {
  return STUDIO_PROJECTS.find((project) => project.id === projectId) || STUDIO_PROJECTS[0];
}

export function getTemplate(templateId) {
  return (
    PROMOTION_TEMPLATES.find((template) => template.id === templateId) ||
    PROMOTION_TEMPLATES[0]
  );
}

