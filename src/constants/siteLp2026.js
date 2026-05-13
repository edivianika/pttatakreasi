/** Nomor WhatsApp CS / konsultasi (tanpa +, tanpa spasi) */
export const SITE_WHATSAPP = "6287716154900";

function waUrl(message) {
  return `https://wa.me/${SITE_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/** Kontak & tautan aksi — satu sumber untuk seluruh CTA landing LP2026 */
export const SITE_CONTACT = {
  email: "info@tatakreasi.com",

  /** Hero — amankan unit / konsultasi awal */
  waHero: waUrl(
    "Halo Tata Kreasi, saya ingin konsultasi untuk hunian syariah di Ponorogo (amankan unit / skema pembayaran). Mohon informasinya."
  ),

  /** Header & CTA umum konsultasi */
  waConsultation: waUrl(
    "Halo Tata Kreasi, saya ingin konsultasi properti syariah Tata Kreasi. Mohon dibantu."
  ),

  /** Kartu keunggulan — tim developer */
  waTimDeveloper: waUrl(
    "Halo Tata Kreasi, saya ingin berkonsultasi dengan tim tentang proyek dan hunian syariah. Terima kasih."
  ),

  /** CTA tengah — diskusi skema untuk keluarga */
  waDiskusiSkema: waUrl(
    "Halo Tata Kreasi, saya ingin diskusi skema syariah yang sesuai untuk keluarga (unit, akad, cicilan). Mohon panduannya."
  ),

  /** CTA penutup — siap pilih hunian */
  waSiapHuni: waUrl(
    "Halo Tata Kreasi, saya siap diskusi memilih hunian berkah syariah di Ponorogo. Mohon dipandu dari proyek hingga akad & legalitas."
  ),

  /** Gallery — detail unit & akad */
  waDetailUnit: waUrl(
    "Halo Tata Kreasi, saya ingin tanya detail unit, harga, dan akad syariah. Mohon informasinya."
  ),

  /** Tombol sekunder di bar CTA (pertanyaan singkat) */
  waTanyaSingkat: waUrl(
    "Halo Tata Kreasi, saya punya pertanyaan singkat tentang hunian syariah. Bisa dibantu?"
  ),

  /** Footer / kontak langsung */
  waFooter: waUrl("Halo Tata Kreasi, saya menghubungi dari website. Mohon informasi hunian syariah Ponorogo."),

  /** WhatsApp per proyek (nama di pesan = nama proyek di halaman) */
  waProyekGrandSezha: waUrl(
    "Halo Tata Kreasi, saya tertarik dengan proyek Grand Sezha. Mohon info detail unit, denah, ketersediaan, dan skema pembayaran syariah. Terima kasih."
  ),
  waProyekGrandCitySedah: waUrl(
    "Halo Tata Kreasi, saya tertarik dengan proyek Grand City Sedah. Mohon info ketersediaan unit, promo, harga, dan skema syariah. Terima kasih."
  ),
  waProyekGrandNaraya: waUrl(
    "Halo Tata Kreasi, saya tertarik dengan proyek Grand Naraya. Mohon info promo spesial, tipe unit, harga, dan akad syariah. Terima kasih."
  ),
};

export const SITE_ANCHORS = {
  advantages: "#advantages",
  projects: "#projects",
  prinsip: "#prinsip",
  faq: "#faq",
  gallery: "#gallery",
  kontak: "#kontak",
};
