import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, ChevronDown, MapPin, Menu, MessageCircle, X } from "lucide-react";
import { trackPageView, trackLead, trackContact } from "../utils/facebookPixel";
import { trackTikTokPageView, trackTikTokLead, trackTikTokContact } from "../utils/tiktokPixel";
import { LP2026_SEO } from "../constants/siteLp2026";
import { updatePageSEO, getProjectStructuredData } from "../utils/seoUtils";
import { getKeypanoUrl } from "../utils/keypanoUrl";
import "./SedahResidencePage.css";

const navigation = [
  { label: "Pilihan rumah", href: "#pricing" },
  { label: "Kawasan", href: "#kawasan" },
  { label: "Cara memiliki", href: "#features" },
];
const houses = [
  { type: "36", land: "66", bedrooms: "2", bathrooms: "1", image: "/sedah/tipe-36.webp", description: "Langkah pertama, rumah sendiri.", text: "Ruang yang pas untuk memulai kehidupan keluarga, dengan dua kamar tidur dan area bersama." },
  { type: "45", land: "77", bedrooms: "2–3", bathrooms: "1–2", image: "/sedah/tipe-45.webp", description: "Lebih leluasa untuk bertumbuh.", text: "Pilihan dengan luas bangunan dan tanah lebih besar untuk menyesuaikan kebutuhan keluarga Anda." },
];
const faqs = [
  ["Bagaimana sistem pembelian syariahnya?", "Sedah Green Residence menggunakan sistem jual beli syariah tanpa riba, tanpa denda keterlambatan, dan tanpa sita. Tim kami akan menjelaskan akad serta seluruh ketentuan pembayaran sebelum Anda memutuskan."],
  ["Apakah tersedia pembayaran bertahap?", "Tersedia pilihan cash dan pembayaran bertahap langsung ke developer. Hubungi tim kami untuk simulasi DP, tenor, dan angsuran sesuai unit yang Anda pilih."],
  ["Bagaimana dengan legalitas tanah?", "Legalitas tanah berupa SHM (Sertifikat Hak Milik). Dokumen dan proses pengurusan sertifikat dapat Anda diskusikan langsung dengan tim saat konsultasi atau kunjungan."],
  ["Bisa melihat rumah dan lokasi terlebih dahulu?", "Tentu. Jadwalkan survei melalui WhatsApp untuk melihat kawasan, membandingkan tipe rumah, dan mendiskusikan unit yang tersedia. Anda juga bisa memulai dengan virtual tour di halaman ini."],
];

function Brand() {
  return <a className="sgr-brand" href="#home" aria-label="Sedah Green Residence, beranda"><img src="/sedah/brand-logo.png" alt="Sedah Green Residence" width="1080" height="1080" /></a>;
}
function WhatsAppButton({ children = "Jadwalkan survei", onClick, secondary = false, className = "" }) {
  return <button type="button" onClick={onClick} className={`sgr-button ${secondary ? "sgr-button-outline" : ""} ${className}`}>{children}<ArrowUpRight size={18} aria-hidden="true" /></button>;
}
function SectionLabel({ number, children }) {
  return <p className="sgr-eyebrow"><span>{number}</span>{children}</p>;
}
function VirtualTour() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [status, setStatus] = useState("loading");
  const [retry, setRetry] = useState(0);
  const container = useRef(null);
  const timer = useRef(null);
  useEffect(() => {
    const target = container.current;
    if (!target) return;
    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setShouldLoad(true);
      observer.disconnect();
    }, { rootMargin: "240px 0px" });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (!shouldLoad) return;
    timer.current = setTimeout(() => setStatus(current => current === "loading" ? "slow" : current), 20000);
    return () => clearTimeout(timer.current);
  }, [shouldLoad, retry]);
  return <div className="sgr-tour-view">
    <div ref={container} className="sgr-tour-frame">
      {shouldLoad && <iframe key={retry} src={getKeypanoUrl("sedah")} title="Virtual tour 360 derajat Sedah Green Residence" allow="autoplay; fullscreen; accelerometer; gyroscope" allowFullScreen onLoad={() => { clearTimeout(timer.current); setStatus("ready"); }} onError={() => { clearTimeout(timer.current); setStatus("error"); }} />}
      {status === "loading" && <div className="sgr-tour-status" role="status">Virtual tour dimulai otomatis saat Anda mendekati bagian ini…</div>}
      {(status === "slow" || status === "error") && <div className="sgr-tour-status" role="status">Virtual tour belum dapat dimuat.<button type="button" onClick={() => { setStatus("loading"); setRetry(value => value + 1); }}>Coba lagi</button></div>}
    </div>
  </div>;
}

export default function SedahResidencePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const mobileNav = useRef(null);
  useEffect(() => {
    document.documentElement.classList.add("sgr-active");
    updatePageSEO({
      title: "Sedah Green Residence — Rumah Syariah Mulai Rp240 Jutaan di Ponorogo",
      description: "Rumah syariah di Sedah, Jenangan, Ponorogo mulai Rp240 jutaan. Pilihan tipe 36/66 dan 45/77, tanpa riba. Lihat kawasan dan jadwalkan survei.",
      keywords: ["Sedah Green Residence", "rumah syariah Ponorogo", "perumahan Sedah Jenangan"],
      image: "/sedah/kawasan.webp", url: "/sedahresidence",
      structuredData: getProjectStructuredData({ name: "Sedah Green Residence", description: "Hunian syariah di Sedah, Jenangan, Ponorogo", price: 240000000, location: "Sedah, Jenangan, Ponorogo", image: "/sedah/kawasan.webp", url: "/sedahresidence", type: "Rumah Syariah" }),
    });
    trackPageView();
    trackTikTokPageView();
    return () => {
      document.documentElement.classList.remove("sgr-active");
      updatePageSEO({ ...LP2026_SEO, image: LP2026_SEO.ogImagePath, url: "/" });
    };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    mobileNav.current?.querySelector("a")?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); }
    };
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [menuOpen]);

  const contact = (intent = "survei", type = "") => {
    const brochure = intent === "brosur";
    const eventName = `${brochure ? "Brochure Request" : "WhatsApp Inquiry"} - Sedah Green Residence`;
    const metadata = { propertyName: "Sedah Green Residence", formSource: "LandingPage", phone: "+628133138887", priceInterest: "240JT" };
    if (brochure) { trackContact(eventName, "Brochure Request"); trackTikTokContact(eventName, "Brochure Request", metadata); }
    else { trackLead(eventName, "WhatsApp Inquiry"); trackTikTokLead(eventName, "WhatsApp Inquiry", metadata); }
    const messages = {
      survei: "Halo Tata Kreasi, saya ingin menjadwalkan survei Sedah Green Residence. Mohon info jadwal dan unit yang tersedia.",
      brosur: "Halo Tata Kreasi, mohon kirimkan brosur Sedah Green Residence beserta daftar harga dan ketersediaan unit terbaru.",
      tipe: `Halo Tata Kreasi, saya tertarik rumah tipe ${type} di Sedah Green Residence. Mohon info harga, ketersediaan unit, dan skema pembayarannya.`,
      pembayaran: "Halo Tata Kreasi, saya ingin konsultasi skema pembayaran Sedah Green Residence. Mohon info DP, tenor, angsuran, dan ketentuan akadnya.",
    };
    window.open(`https://wa.me/628133138887?text=${encodeURIComponent(messages[intent] || messages.survei)}`, "_blank", "noopener,noreferrer");
  };

  return <div className="sgr-page">
    <a href="#main-content" className="sgr-skip">Lewati ke konten</a>
    <header className="sgr-header">
      <div className="sgr-container sgr-header-inner">
        <Brand />
        <nav className="sgr-desktop-nav" aria-label="Navigasi utama">{navigation.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
        <div className="sgr-header-action"><WhatsAppButton onClick={() => contact()}>Atur kunjungan</WhatsAppButton></div>
        <button ref={menuButton} className="sgr-menu-toggle" type="button" aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"} aria-expanded={menuOpen} aria-controls="sgr-mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav ref={mobileNav} id="sgr-mobile-navigation" className="sgr-mobile-nav" aria-label="Navigasi mobile">{[...navigation, { label: "Konsultasi", href: "#contact" }].map(item => <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={18} /></a>)}</nav>}
    </header>

    <main id="main-content">
      <section id="home" className="sgr-hero sgr-container">
        <div className="sgr-hero-copy">
          <p className="sgr-eyebrow sgr-hero-location"><MapPin size={15} />SEDAH, JENANGAN · PONOROGO</p>
          <h1>Ruang untuk pulang.<em>Tempat bertumbuh.</em></h1>
          <p className="sgr-hero-description">Rumah pertama, cerita baru. Temukan hunian syariah di lingkungan asri untuk keseharian yang lebih tenang bersama keluarga.</p>
          <div className="sgr-hero-price"><span>HARGA MULAI</span><strong>Rp240 <small>jutaan</small></strong></div>
          <div className="sgr-hero-actions"><WhatsAppButton onClick={() => contact()} /><a href="#pricing" className="sgr-text-link">Lihat pilihan rumah <ArrowDown size={16} /></a></div>
          <p className="sgr-hero-note"><Check size={15} /> Akad syariah · Tanpa riba, denda, dan sita</p>
        </div>
        <figure className="sgr-hero-figure">
          <div className="sgr-hero-image"><img src="/sedah/kawasan.webp" alt="Visualisasi fasad rumah Sedah Green Residence dengan carport dan pepohonan" width="1600" height="900" fetchPriority="high" /><span className="sgr-image-label">Visualisasi desain</span></div>
          <figcaption><span><span className="sgr-hero-caption-label">SEDAH GREEN RESIDENCE</span><span className="sgr-hero-caption-title">Hunian di tengah suasana hijau</span></span><a href="#virtual-tour" aria-label="Jelajahi Sedah Green Residence melalui virtual tour"><ArrowUpRight size={23} /></a></figcaption>
        </figure>
      </section>

      <div className="sgr-fact-strip"><div className="sgr-container"><p><strong>Syariah</strong><span>Akad langsung dengan developer</span></p><p><strong>2 pilihan tipe</strong><span>36/66 dan 45/77</span></p><p><strong>Sedah, Jenangan</strong><span>Ponorogo, Jawa Timur</span></p><a href="#virtual-tour">Kenali kawasan <ArrowDown size={18} /></a></div></div>

      <section id="pricing" className="sgr-section sgr-container">
        <div className="sgr-section-heading"><div><SectionLabel number="01">PILIHAN RUMAH</SectionLabel><h2>Mulai dari rumah.<br /><em>Lanjutkan dengan cerita Anda.</em></h2></div><div className="sgr-section-aside"><p>Dua pilihan ruang untuk kebutuhan yang berbeda. Pilih yang paling pas untuk keluarga Anda.</p><p className="sgr-price-line">Harga mulai <strong>Rp240 jutaan</strong></p></div></div>
        <div className="sgr-houses">{houses.map(house => <article className="sgr-house" key={house.type}><div className="sgr-house-image"><img src={house.image} alt={`Visualisasi rumah tipe ${house.type} Sedah Green Residence`} loading="lazy" width="1000" height="700" /><span>TIPE {house.type}/{house.land}</span><small>Visualisasi desain</small></div><div className="sgr-house-title"><div><h3>Tipe {house.type}<span>/{house.land}</span></h3><p>{house.description}</p></div><button type="button" onClick={() => contact("tipe", `${house.type}/${house.land}`)} aria-label={`Tanyakan rumah tipe ${house.type}/${house.land}`}><ArrowUpRight size={24} /></button></div><dl className="sgr-specs"><div><dt>Bangunan</dt><dd>{house.type} m²</dd></div><div><dt>Tanah</dt><dd>{house.land} m²</dd></div><div><dt>Kamar tidur</dt><dd>{house.bedrooms}</dd></div><div><dt>Kamar mandi</dt><dd>{house.bathrooms}</dd></div></dl><p className="sgr-house-description">{house.text}</p></article>)}</div>
        <div className="sgr-inclusions"><span>Sudah termasuk</span><p><Check size={17} /> Canopy</p><p><Check size={17} /> Tandon air</p><p><Check size={17} /> Listrik 1.300 watt</p><button type="button" onClick={() => contact("brosur")}>Minta brosur & daftar harga <ArrowUpRight size={16} /></button></div>
      </section>

      <section id="kawasan" className="sgr-neighborhood"><div className="sgr-container sgr-neighborhood-grid"><div className="sgr-neighborhood-copy"><SectionLabel number="02">KEHIDUPAN DI SEDAH</SectionLabel><h2>Dekat dengan alam.<br /><em>Dekat dengan keseharian.</em></h2><p>Di Sedah, Jenangan, hunian berada dalam suasana yang asri dengan akses ke masjid, pesantren, sekolah, dan kebutuhan harian keluarga.</p><div className="sgr-location"><MapPin size={20} /><div><strong>Sedah, Jenangan</strong><span>Ponorogo, Jawa Timur</span></div></div><a className="sgr-text-link" href="#siteplan">Lihat tata kawasan <ArrowDown size={16} /></a></div><figure><img src="/sedah/jalan-kawasan.webp" alt="Visualisasi jalan lingkungan dan deretan hunian Sedah Green Residence" loading="lazy" width="1200" height="675" /><figcaption>Perspektif jalan lingkungan · Visualisasi desain</figcaption></figure></div></section>

      <section id="virtual-tour" className="sgr-section sgr-container"><div className="sgr-section-heading"><div><SectionLabel number="03">JELAJAHI LEBIH DEKAT</SectionLabel><h2>Masuk dulu.<br /><em>Dari mana saja.</em></h2></div><p className="sgr-section-aside">Lihat jalan kawasan, fasad, dan ruang di dalam rumah melalui virtual tour 360°. Lanjutkan dengan kunjungan langsung saat Anda siap.</p></div><VirtualTour /><div className="sgr-tour-footer"><span>Geser pandangan dan pilih titik untuk berpindah ruang.</span><WhatsAppButton secondary onClick={() => contact()}>Lihat langsung di lokasi</WhatsAppButton></div></section>

      <section id="siteplan" className="sgr-siteplan sgr-container"><div className="sgr-siteplan-info"><SectionLabel number="04">TATA KAWASAN</SectionLabel><h2>Kenali letak<br /><em>rumah Anda.</em></h2><p>Lihat susunan blok, akses masuk, dan ruang terbuka sebelum memilih unit.</p><ul><li><span>A</span>Gerbang utama</li><li><span>B</span>Pos satpam</li><li><span>C</span>Taman ruang terbuka hijau</li><li><span>D</span>Area putar balik</li></ul><a className="sgr-text-link" href="/sedah/siteplan-sedah.jpeg" target="_blank" rel="noopener noreferrer">Buka siteplan ukuran penuh <ArrowUpRight size={17} /></a></div><a className="sgr-siteplan-image" href="/sedah/siteplan-sedah.jpeg" target="_blank" rel="noopener noreferrer" aria-label="Buka siteplan Sedah Green Residence ukuran penuh"><img src="/sedah/siteplan-sedah.jpeg" alt="Siteplan Sedah Green Residence, menampilkan blok A sampai D dan fasilitas kawasan" loading="lazy" width="1200" height="900" /></a></section>

      <section id="features" className="sgr-payment"><div className="sgr-container sgr-payment-grid"><div><SectionLabel number="05">CARA MEMILIKI</SectionLabel><h2>Rencana yang jelas.<br /><em>Langkah yang tenang.</em></h2><p>Kami bantu Anda memahami pilihan pembayaran dan ketentuan akad sebelum mengambil keputusan.</p><WhatsAppButton secondary onClick={() => contact("pembayaran")}>Diskusikan pembayaran</WhatsAppButton></div><ol>{[["Pilih rumah Anda", "Bandingkan tipe rumah dan tanyakan ketersediaan unit. Survei kawasan untuk merasakan suasananya secara langsung."], ["Sesuaikan rencana pembayaran", "Diskusikan pilihan cash atau pembayaran bertahap. Minta rincian DP, tenor, dan angsuran untuk unit pilihan."], ["Pahami akadnya", "Pelajari legalitas, hak dan kewajiban, serta jadwal pembayaran. Akad dilakukan langsung dengan developer secara syariah."]].map(([title, text], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>

      <section className="sgr-section sgr-container sgr-faq"><div><SectionLabel number="06">SEBELUM MEMUTUSKAN</SectionLabel><h2>Yang sering<br /><em>ditanyakan.</em></h2><p>Masih ada hal lain?<br /><button className="sgr-text-link" type="button" onClick={() => contact("pembayaran")}>Tanyakan kepada tim kami <ArrowUpRight size={16} /></button></p></div><div className="sgr-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={19} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

      <section id="contact" className="sgr-contact"><div className="sgr-container"><div className="sgr-contact-top"><div><p className="sgr-eyebrow">LANGKAH BERIKUTNYA</p><h2>Yuk, lihat sendiri<br /><em>calon rumah Anda.</em></h2></div><div><p>Ceritakan kebutuhan keluarga Anda. Tim kami siap membantu memilih tipe, menjelaskan pembayaran, dan mengatur kunjungan.</p><WhatsAppButton onClick={() => contact()}><MessageCircle size={18} />Jadwalkan survei via WhatsApp</WhatsAppButton><button type="button" className="sgr-contact-brochure" onClick={() => contact("brosur")}>Ingin lihat brosurnya dulu? <ArrowUpRight size={15} /></button></div></div><div className="sgr-contact-details"><div><span>LOKASI HUNIAN</span><p>Sedah, Jenangan<br />Ponorogo, Jawa Timur</p></div><div><span>MARKETING OFFICE</span><p>Grand Sezha No. B10<br />Jl. Arif Rahman Hakim, Keniten, Ponorogo</p></div><div><span>WAKTU KUNJUNGAN</span><p>Setiap hari, 08.00–17.00 WIB<br />Buat janji melalui WhatsApp</p></div></div></div></section>
    </main>
    <footer className="sgr-footer sgr-container"><Brand /><p>Bagian dari <a href="/">Tata Kreasi</a></p><span>© {new Date().getFullYear()} Sedah Green Residence</span></footer>
    <div className="sgr-mobile-cta"><div><span>Harga mulai</span><strong>Rp240 jutaan</strong></div><WhatsAppButton onClick={() => contact()}>Jadwalkan survei</WhatsAppButton></div>
  </div>;
}
