import { getResidenceSEO } from '../../utils/residenceSeo';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, MapPin, Menu, Play, X } from 'lucide-react';
import { companyInfo } from '../mockData';
import { getKeypanoUrl } from '../../utils/keypanoUrl';
import { updatePageSEO } from '../../utils/seoUtils';
import { LP2026_SEO } from '../../constants/siteLp2026';
import './NarrayaPage.css';

const navItems = [
  { label: 'Tentang Narraya', href: '#overview' },
  { label: 'Koleksi hunian', href: '#residences' },
  { label: 'Jelajahi', href: '#experience' },
];
const floorPlans = [
  { label: 'Lantai dasar', image: '/narraya/denah 1.png', title: 'Ruang untuk berkumpul.', description: 'Dari teras ke ruang tamu, dilanjutkan dengan dapur dan area terbuka. Kamar tidur utama berada di lantai dasar untuk akses yang lebih mudah.', rooms: ['Kamar tidur utama', 'Ruang tamu & dapur', 'Kamar mandi', 'Carport & area terbuka'] },
  { label: 'Lantai atas', image: '/narraya/denah 2.png', title: 'Privasi untuk beristirahat.', description: 'Dua kamar tidur, ruang keluarga, dan balkon memberi tempat untuk menikmati waktu pribadi di lantai atas.', rooms: ['2 kamar tidur', 'Ruang keluarga', 'Kamar mandi', 'Balkon'] },
];
const faqs = [
  ['Di mana lokasi Narraya Green Residence?', 'Narraya berada di Jalan Norroyono, Brotonegaran, Ponorogo, di kawasan pusat kota dengan akses menuju Alun-Alun Ponorogo. Hubungi tim kami untuk titik lokasi dan jadwal kunjungan.'],
  ['Bagaimana pilihan pembayaran dan akadnya?', 'Tersedia pilihan cash dan pembayaran bertahap langsung dengan developer melalui akad syariah. Konsultasikan rincian harga, DP, tenor, serta hak dan kewajiban untuk unit yang Anda pilih.'],
  ['Apa saja garansi yang diberikan?', 'Tersedia garansi perawatan rumah 1 tahun dan garansi struktur 5 tahun. Cakupan, ketentuan, serta prosedur klaim dijelaskan oleh tim kami sebelum akad.'],
  ['Apakah saya bisa melihat rumah terlebih dahulu?', 'Tentu. Anda dapat menjelajahi virtual tour di halaman ini, lalu menjadwalkan kunjungan untuk melihat kawasan dan mendiskusikan unit bersama tim kami.'],
];

function Brand() {
  return (
    <a className="nr-brand" href="#home" aria-label="Narraya Green Residence, beranda">
      <img src="/narraya-logo.jpeg" alt="Narraya Green Residence" width="88" height="88" />
    </a>
  );
}
function Eyebrow({ children, number }) {
  return <p className="nr-eyebrow">{number && <span>{number} /</span>}{children}</p>;
}
function ContactButton({ onClick, children = 'Jadwalkan kunjungan', light = false }) {
  return <button type="button" className={`nr-button${light ? ' nr-button-light' : ''}`} onClick={onClick}>{children}<ArrowUpRight size={17} aria-hidden="true" /></button>;
}
function VirtualTour() {
  const container = useRef(null);
  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState('loading');
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) { setStarted(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
    }, { rootMargin: '200px' });
    if (container.current) observer.observe(container.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!started || status !== 'loading') return;
    const timer = setTimeout(() => setStatus('slow'), 25000);
    return () => clearTimeout(timer);
  }, [started, attempt, status]);
  return (
    <div className="nr-tour" ref={container}>
      {started && <iframe key={attempt} src={getKeypanoUrl('narraya')} title="Virtual tour 360° Narraya Green Residence" allow="autoplay; fullscreen; accelerometer; gyroscope" allowFullScreen onLoad={() => setStatus('ready')} onError={() => setStatus('error')} />}
      {status === 'loading' && <div className="nr-tour-status" role="status"><span className="nr-loader" />Menyiapkan pengalaman 360°…</div>}
      {['slow', 'error'].includes(status) && <div className="nr-tour-status" role="status"><p>Virtual tour belum dapat dimuat.</p><button type="button" onClick={() => { setStatus('loading'); setAttempt(value => value + 1); }}>Muat ulang tur <ArrowRight size={16} /></button></div>}
    </div>
  );
}

export default function NarrayaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [floor, setFloor] = useState(0);
  const [showFilm, setShowFilm] = useState(false);
  const menuButton = useRef(null);
  const mobileNav = useRef(null);
  const plan = floorPlans[floor];

  useEffect(() => {
    document.documentElement.classList.add('nr-active');
    updatePageSEO(getResidenceSEO('narraya'));
    return () => {
      document.documentElement.classList.remove('nr-active');
      updatePageSEO({ ...LP2026_SEO, image: LP2026_SEO.ogImagePath, url: '/' });
    };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    mobileNav.current?.querySelector('a')?.focus();
    const onKey = event => {
      if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus(); }
    };
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [menuOpen]);

  const contact = (intent = 'visit') => {
    const messages = {
      visit: 'Halo Tata Kreasi, saya tertarik dengan Narraya Green Residence. Saya ingin menjadwalkan kunjungan. Mohon informasi waktu dan unit yang tersedia.',
      offer: 'Halo Tata Kreasi, mohon kirimkan brosur, penawaran harga terbaru, dan ketersediaan unit Narraya Green Residence.',
      payment: 'Halo Tata Kreasi, saya ingin konsultasi skema pembayaran dan ketentuan akad syariah untuk Narraya Green Residence.',
    };
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(messages[intent] || messages.visit)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="nr-page">
      <a href="#nr-main" className="nr-skip">Lewati ke konten utama</a>
      <header className="nr-header">
        <div className="nr-container nr-header-inner">
          <Brand />
          <nav className="nr-desktop-nav" aria-label="Navigasi utama Narraya">{navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
          <div className="nr-header-cta"><ContactButton onClick={() => contact()}>Atur kunjungan</ContactButton></div>
          <button ref={menuButton} className="nr-menu-toggle" type="button" aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'} aria-controls="nr-mobile-nav" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="nr-mobile-nav" id="nr-mobile-nav" ref={mobileNav} aria-label="Navigasi mobile">{[...navItems, { label: 'Konsultasi', href: '#contact' }].map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={18} /></a>)}</nav>}
      </header>

      <main id="nr-main">
        <section className="nr-hero" id="home">
          <img className="nr-hero-image" src="/narraya/premium/architecture.webp" alt="Visualisasi arsitektur dua lantai Narraya Green Residence, dengan balkon dan carport" width="1200" height="900" fetchPriority="high" />
          <div className="nr-hero-shade" />
          <div className="nr-container nr-hero-content">
            <Eyebrow>NARRAYA GREEN RESIDENCE</Eyebrow>
            <h1>Ketenangan,<br />di jantung<br /><em>Ponorogo.</em></h1>
            <p>Alamat di pusat kota. Ruang untuk keluarga.<br className="nr-desktop-break" /> Sebuah hunian untuk menikmati hidup dengan lebih leluasa.</p>
            <ContactButton light onClick={() => contact()} />
            <a className="nr-hero-explore" href="#overview"><span>KENALI NARRAYA</span><ArrowDown size={18} /></a>
          </div>
          <div className="nr-hero-bottom nr-container"><span><MapPin size={14} /> Jalan Norroyono, Brotonegaran, Ponorogo</span><span>Perspektif arsitektur · Visualisasi desain</span></div>
          <span className="nr-hero-side" aria-hidden="true">NARRAYA / PONOROGO</span>
        </section>

        <section className="nr-intro nr-container nr-section" id="overview">
          <div><Eyebrow number="01">SEBUAH PILIHAN PERSONAL</Eyebrow><h2>Kemewahan adalah<br />merasa <em>di rumah.</em></h2></div>
          <div className="nr-intro-copy"><p>Di antara kesibukan kota, selalu ada keinginan untuk kembali ke tempat yang terasa milik sendiri.</p><p>Narraya Green Residence menghadirkan hunian modern di Jalan Norroyono, Brotonegaran, Ponorogo. Garis arsitektur yang tegas, balkon pribadi, dan ruang bersama dalam dua lantai membentuk keseharian yang lebih nyaman.</p><a className="nr-text-link" href="#residences">Temukan ruang Anda <ArrowRight size={17} /></a></div>
        </section>

        <section className="nr-residence nr-container" id="residences">
          <div className="nr-residence-image"><img src="/narraya/premium/residence.webp" alt="Visualisasi fasad hunian Narraya dengan dua lantai, balkon, dan carport" width="1200" height="900" loading="lazy" /><span>THE RESIDENCE / VISUALISASI DESAIN</span></div>
          <div className="nr-residence-copy"><Eyebrow number="02">RUANG YANG DIPIKIRKAN</Eyebrow><h2>Proporsi yang pas.<br /><em>Karakter yang kuat.</em></h2><p>Fasad modern dengan aksen material hangat. Ruang keluarga di lantai atas. Area terbuka yang memberi jeda. Setiap bagian menghadirkan ruang untuk ritme hidup Anda.</p><dl className="nr-specs"><div><dt>Luas bangunan</dt><dd>65<span>m²</span></dd></div><div><dt>Luas tanah</dt><dd>84<span>m²</span></dd></div><div><dt>Ruang kehidupan</dt><dd>2<span>lantai</span></dd></div></dl><button className="nr-text-link" type="button" onClick={() => contact('offer')}>Minta brosur & penawaran <ArrowUpRight size={17} /></button></div>
        </section>

        <section className="nr-floor-section nr-section" id="details"><div className="nr-container"><div className="nr-section-heading"><div><Eyebrow number="03">DIRANCANG UNTUK KESEHARIAN</Eyebrow><h2>Ruang bersama.<br /><em>Ruang untuk diri sendiri.</em></h2></div><p>Kenali hubungan antarruang dan bayangkan bagaimana keluarga Anda akan mengisinya.</p></div><div className="nr-floor-layout"><div className="nr-floor-image"><a href={plan.image} target="_blank" rel="noopener noreferrer" aria-label={`Buka denah ${plan.label} ukuran penuh`}><img src={plan.image} alt={`Denah ${plan.label} Narraya Green Residence`} width="900" height="1000" loading="lazy" /><span>Lihat denah ukuran penuh <ArrowUpRight size={15} /></span></a></div><div className="nr-floor-copy"><div className="nr-floor-controls" role="group" aria-label="Pilih denah lantai">{floorPlans.map((item, index) => <button key={item.label} type="button" aria-pressed={floor === index} onClick={() => setFloor(index)}>{item.label}</button>)}</div><div aria-live="polite"><h3>{plan.title}</h3><p>{plan.description}</p><ul>{plan.rooms.map(room => <li key={room}><Check size={15} />{room}</li>)}</ul></div><p className="nr-floor-note">Denah referensi hunian dua lantai. Konfirmasikan spesifikasi dan pilihan unit bersama tim kami.</p></div></div></div></section>

        <section className="nr-gallery nr-container nr-section" id="gallery"><div className="nr-section-heading"><div><Eyebrow number="04">DI BALIK FASAD</Eyebrow><h2>Detail yang memberi<br /><em>rasa berbeda.</em></h2></div><p>Nuansa material, cahaya, dan ruang. Sebuah gambaran tentang kehidupan di Narraya.</p></div><div className="nr-gallery-layout"><figure className="nr-gallery-large"><a href="/narraya/premium/living.webp" target="_blank" rel="noopener noreferrer"><img src="/narraya/premium/living.webp" alt="Visualisasi interior ruang keluarga Narraya dengan aksen kayu dan bukaan kaca" width="1200" height="900" loading="lazy" /></a><figcaption><span>01 / RUANG KELUARGA</span><span>Waktu yang terasa lebih dekat.</span></figcaption></figure><figure className="nr-gallery-small"><a href="/narraya/premium/entrance.webp" target="_blank" rel="noopener noreferrer"><img src="/narraya/premium/entrance.webp" alt="Visualisasi gerbang dan penanda kawasan Narraya Green Residence" width="1200" height="900" loading="lazy" /></a><figcaption><span>02 / KEDATANGAN</span><span>Selamat datang di rumah.</span></figcaption></figure></div><p className="nr-visual-note">Gambar merupakan visualisasi desain. Detail akhir mengacu pada spesifikasi unit dan kesepakatan pembelian.</p></section>

        <section className="nr-location"><div className="nr-container nr-location-grid"><div><Eyebrow number="05">ALAMAT YANG BERARTI</Eyebrow><h2>Kota dalam jangkauan.<br /><em>Rumah dalam ketenangan.</em></h2><p>Berlokasi di Jalan Norroyono, Brotonegaran, dekat kawasan Alun-Alun Ponorogo. Memudahkan Anda menjalani kegiatan di pusat kota, lalu kembali menikmati waktu di rumah.</p><a className="nr-text-link" href="https://www.google.com/maps/search/?api=1&query=Jalan+Norroyono+Brotonegaran+Ponorogo" target="_blank" rel="noopener noreferrer">Lihat lokasi di peta <ArrowUpRight size={17} /></a></div><div className="nr-location-panel"><span className="nr-location-coordinate">PONOROGO, JAWA TIMUR</span><MapPin size={34} strokeWidth={1} /><h3>Norroyono.<br /><em>Your address.</em></h3><div><span>Kawasan pusat kota</span><span>Akses Alun-Alun</span><span>Brotonegaran, Ponorogo</span></div></div></div></section>

        <section className="nr-section nr-container" id="experience"><div className="nr-section-heading"><div><Eyebrow number="06">PENGALAMAN NARRAYA</Eyebrow><h2>Kenali lebih dekat.<br /><em>Sebelum melangkah.</em></h2></div><p>Jelajahi kawasan dan rumah dalam tur 360°. Rasakan susunan ruangnya sebelum menjadwalkan kunjungan.</p></div><VirtualTour /><div className="nr-tour-footer"><span>Geser pandangan untuk melihat sekitar dan pilih titik untuk berpindah.</span><button type="button" className="nr-text-link" onClick={() => setShowFilm(!showFilm)} aria-expanded={showFilm} aria-controls="nr-film"><Play size={15} />{showFilm ? 'Tutup video kawasan' : 'Tonton video kawasan'}</button></div>{showFilm && <div id="nr-film" className="nr-film"><iframe src="https://www.youtube.com/embed/LCtM9ZAT0t0?rel=0" title="Video kawasan Narraya Green Residence" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen /></div>}</section>

        <section className="nr-siteplan nr-container"><div><Eyebrow>TATA KAWASAN</Eyebrow><h2>Temukan posisi<br /><em>pilihan Anda.</em></h2><p>Pelajari susunan hunian dan akses kawasan. Tim kami akan membantu Anda mencocokkan preferensi dengan unit yang tersedia.</p><a className="nr-text-link" href="/narraya/slideshow/siteplan narraya-2.png" target="_blank" rel="noopener noreferrer">Buka siteplan lengkap <ArrowUpRight size={17} /></a></div><a className="nr-siteplan-image" href="/narraya/slideshow/siteplan narraya-2.png" target="_blank" rel="noopener noreferrer" aria-label="Buka siteplan Narraya Green Residence"><img src="/narraya/slideshow/siteplan narraya-2.png" alt="Siteplan Narraya yang menunjukkan posisi hunian, pintu masuk, dan fasilitas kawasan" width="1000" height="1000" loading="lazy" /></a></section>

        <section className="nr-assurance"><div className="nr-container"><Eyebrow>KENYAMANAN DALAM MEMILIKI</Eyebrow><div className="nr-assurance-grid"><h2>Rumah yang berkarakter.<br /><em>Proses yang transparan.</em></h2><div><h3>Akad syariah</h3><p>Pembelian langsung dengan developer. Pelajari pilihan pembayaran dan ketentuan akad sebelum memutuskan.</p><button type="button" className="nr-text-link" onClick={() => contact('payment')}>Diskusikan pembayaran <ArrowUpRight size={16} /></button></div><div><h3>Garansi yang jelas</h3><p>Perawatan rumah 1 tahun dan struktur 5 tahun, dengan cakupan serta ketentuan yang dapat Anda pelajari bersama tim.</p><Link className="nr-text-link" to="/kalkulator/narraya">Lihat simulasi pembayaran <ArrowUpRight size={16} /></Link></div></div></div></section>

        <section className="nr-faq nr-container nr-section"><div><Eyebrow>INFORMASI UNTUK ANDA</Eyebrow><h2>Setiap pertanyaan<br /><em>layak dijawab.</em></h2></div><div className="nr-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="nr-contact" id="contact"><div className="nr-container nr-contact-inner"><Eyebrow>UNDANGAN UNTUK ANDA</Eyebrow><h2>Beberapa tempat dilihat.<br /><em>Yang satu ini, dirasakan.</em></h2><p>Luangkan waktu untuk mengenal Narraya secara langsung.<br className="nr-desktop-break" /> Kami siapkan kunjungan sesuai jadwal Anda.</p><ContactButton light onClick={() => contact()}>Jadwalkan kunjungan pribadi</ContactButton><button className="nr-contact-secondary" type="button" onClick={() => contact('offer')}>Minta brosur dan penawaran <ArrowUpRight size={16} /></button></div><div className="nr-container nr-contact-bottom"><span>NARRAYA GREEN RESIDENCE</span><span>Jalan Norroyono, Brotonegaran, Ponorogo</span><span>Melalui tim Tata Kreasi</span></div></section>
      </main>
      <footer className="nr-footer nr-container"><Brand /><a className="nr-related-project" href="/sedahresidence">Sedah Green Residence</a><p>Hunian dengan akad syariah oleh <Link to="/">Tata Kreasi</Link>.</p><span>© {new Date().getFullYear()} Narraya Green Residence</span></footer>
      <div className="nr-mobile-cta"><span>Narraya<span>GREEN RESIDENCE</span></span><ContactButton onClick={() => contact()}>Atur kunjungan</ContactButton></div>
    </div>
  );
}
