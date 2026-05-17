import { useEffect } from "react";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  FileText,
  HelpCircle,
  Home,
  MapPin,
  MessageCircle,
  Navigation,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "../ui/button";
import { SITE_WHATSAPP } from "../../constants/siteLp2026";
import {
  removeJsonLdScript,
  setJsonLdScript,
  updateCanonical,
  updateMetaTag,
  updateOGTags,
  updateTitle,
  updateTwitterTags,
} from "../../utils/seoUtils";
import { trackLead, trackPageView, trackProjectView } from "../../utils/facebookPixel";
import {
  trackTikTokLead,
  trackTikTokPageView,
  trackTikTokProjectView,
} from "../../utils/tiktokPixel";

const SEO = {
  title: "Sedah Green Residence | Rumah Syariah Ponorogo Tanpa Riba",
  description:
    "Sedah Green Residence adalah hunian syariah di Ponorogo untuk keluarga Muslim. Skema tanpa riba, tanpa denda, tanpa sita. Cek pricelist dan jadwalkan survey lokasi.",
  keywords:
    "sedah green residence, rumah syariah ponorogo, perumahan syariah ponorogo, rumah tanpa riba ponorogo, rumah keluarga muslim ponorogo",
  image: "/images/projects/sedah-green-800.jpg",
  path: "/sedah-green-residence",
};

const WHATSAPP_MESSAGE =
  "Assalamualaikum, saya tertarik dengan Sedah Green Residence. Mohon info pricelist, unit tersedia, dan jadwal survey lokasinya.";

const waHref = `https://wa.me/${SITE_WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const quickFacts = [
  {
    icon: FileText,
    title: "Mulai Rp 204 jutaan",
    body: "Harga promo dapat berubah: Tipe 36/66 mulai Rp 204.674.887 dan Tipe 45/77 mulai Rp 231.401.929.",
  },
  {
    icon: Home,
    title: "Tipe 36/66 dan 45/77",
    body: "Dua pilihan rumah untuk keluarga muda atau keluarga yang butuh ruang lebih lega.",
  },
  {
    icon: Sparkles,
    title: "Bonus siap huni",
    body: "Bonus pembelian: free canopy, tandon air, dan listrik 1300 watt.",
  },
  {
    icon: Navigation,
    title: "Bisa survey lokasi",
    body: "Cek virtual tour dulu, lalu jadwalkan kunjungan jika cocok dengan kebutuhan keluarga.",
  },
];

const houseTypes = [
  {
    type: "Tipe 36/66",
    icon: Home,
    label: "Mulai Rp 204.674.887",
    points: [
      "Luas tanah 66 m2, luas bangunan 36 m2",
      "2 kamar tidur dan 1 kamar mandi",
      "Cocok untuk pembeli rumah pertama",
    ],
  },
  {
    type: "Tipe 45/77",
    icon: Ruler,
    label: "Mulai Rp 231.401.929",
    points: [
      "Luas tanah 77 m2, luas bangunan 45 m2",
      "2-3 kamar tidur dan 1-2 kamar mandi",
      "Nyaman untuk aktivitas rumah tangga jangka panjang",
    ],
  },
];

const faqItems = [
  {
    question: "Apakah Sedah Green Residence menggunakan skema syariah?",
    answer:
      "Ya. Halaman ini difokuskan untuk hunian dengan skema akad syar'i, tanpa riba, tanpa denda, dan tanpa sita sesuai positioning project.",
  },
  {
    question: "Bagaimana cara cek pricelist dan unit tersedia?",
    answer:
      "Klik tombol WhatsApp, lalu tim Tata Kreasi akan membantu mengirimkan pricelist terbaru, stok unit, dan opsi tipe yang masih tersedia.",
  },
  {
    question: "Apakah bisa survey lokasi dulu?",
    answer:
      "Bisa. Anda dapat menjadwalkan survey lokasi melalui WhatsApp agar tim dapat menyesuaikan waktu kunjungan.",
  },
  {
    question: "Tipe rumah apa saja yang tersedia?",
    answer:
      "Landing page ini menampilkan Tipe 36/66 dan Tipe 45/77. Detail ukuran, spesifikasi, harga, dan stok terbaru sebaiknya dikonfirmasi langsung ke tim sales.",
  },
  {
    question: "Apakah simulasi pembayaran bisa disesuaikan budget?",
    answer:
      "Bisa. Tim akan membantu menghitung gambaran pembayaran berdasarkan pilihan tipe, ketersediaan unit, DP, dan rencana tenor yang nyaman.",
  },
];

function trackWhatsApp(source) {
  trackLead(`${source} - Sedah Green Residence`, "WhatsApp Inquiry");
  trackTikTokLead(`${source} - Sedah Green Residence`, "WhatsApp Inquiry", {
    propertyName: "Sedah Green Residence",
    formSource: source,
    phone: `+${SITE_WHATSAPP}`,
    priceInterest: "Pricelist terbaru",
  });
}

function WhatsAppButton({ children, source, variant = "primary", className = "" }) {
  const baseClass =
    "h-12 rounded-full px-5 text-sm font-semibold sm:h-[52px] sm:px-6";
  const classes =
    variant === "secondary"
      ? `${baseClass} border-[#123225]/20 bg-white text-[#123225] shadow-sm hover:bg-[#f4efe3] ${className}`
      : `${baseClass} bg-[#123225] text-white shadow-lg shadow-[#123225]/20 hover:bg-[#214635] ${className}`;

  return (
    <Button asChild className={classes}>
      <a href={waHref} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp(source)}>
        {children}
      </a>
    </Button>
  );
}

function SectionIntro({ eyebrow, title, body, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs font-bold uppercase tracking-normal text-[#8b6f2e]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold leading-tight text-[#123225] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base leading-7 text-[#4e5c50] sm:text-lg">{body}</p>
      ) : null}
    </div>
  );
}

function SedahGreenResidenceLanding() {
  useEffect(() => {
    const origin =
      typeof window !== "undefined" ? window.location.origin : "https://www.tatakreasi.com";
    const canonicalUrl = `${origin}${SEO.path}`;
    const imageUrl = `${origin}${SEO.image}`;

    updateTitle(SEO.title);
    updateMetaTag("title", SEO.title);
    updateMetaTag("description", SEO.description);
    updateMetaTag("keywords", SEO.keywords);
    updateOGTags({
      title: SEO.title,
      description: SEO.description,
      image: imageUrl,
      url: canonicalUrl,
      siteName: "Tata Kreasi",
      locale: "id_ID",
    });
    updateTwitterTags({
      title: SEO.title,
      description: SEO.description,
      image: imageUrl,
    });
    updateCanonical(canonicalUrl);

    setJsonLdScript("sedah-green-residence-landing", {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Sedah Green Residence",
      description: SEO.description,
      image: imageUrl,
      url: canonicalUrl,
      brand: {
        "@type": "Brand",
        name: "Tata Kreasi",
      },
      category: "Residential Real Estate",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "IDR",
        url: canonicalUrl,
      },
    });

    trackPageView();
    trackProjectView("Sedah Green Residence");
    trackTikTokPageView();
    trackTikTokProjectView("Sedah Green Residence");

    return () => {
      removeJsonLdScript("sedah-green-residence-landing");
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#fbf8f1] pb-[calc(5.75rem+env(safe-area-inset-bottom))] text-[#1e261f] md:pb-0">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="Tata Kreasi">
            <img src="/logo.png" alt="" className="h-9 w-9 rounded-lg object-contain" />
            <div className="leading-tight">
              <p className="text-sm font-bold text-white drop-shadow-sm md:text-[#123225]">
                Tata Kreasi
              </p>
              <p className="hidden text-xs text-white/80 drop-shadow-sm sm:block md:text-[#596755]">
                PT Tata Kreasi Bumi Madani
              </p>
            </div>
          </a>

          <WhatsAppButton
            source="Header CTA"
            className="hidden bg-white text-[#123225] hover:bg-[#f4efe3] md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Cek Unit
          </WhatsAppButton>
        </div>
      </header>

      <main>
        <section className="relative bg-[#123225] text-white md:bg-[#fbf8f1] md:text-[#123225]">
          <div className="absolute inset-0 md:hidden">
            <img
              src="/sedah/sedah green residence-perumahan syariah ponorogo.png"
              alt=""
              className="h-full w-full object-cover"
              width="800"
              height="533"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(18,50,37,0.92) 0%, rgba(18,50,37,0.78) 42%, rgba(18,50,37,0.86) 100%)",
              }}
            />
          </div>

          <div className="relative mx-auto grid max-w-6xl items-end gap-8 px-4 pb-8 pt-24 sm:px-6 md:min-h-[720px] md:grid-cols-[1.02fr_0.98fr] md:items-center md:py-24 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-3 py-2 text-xs font-semibold text-white backdrop-blur md:border-[#d9c893] md:bg-[#efe5c8] md:text-[#5d4a18]">
                <Sparkles className="h-4 w-4" />
                Sedah Green Residence
              </div>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-normal text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:text-5xl md:text-[#123225] md:drop-shadow-none lg:text-6xl">
                Rumah Syariah Nyaman di Ponorogo untuk Keluarga Muslim
              </h1>
              <p className="mt-5 text-base leading-7 text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.28)] sm:text-lg md:max-w-xl md:text-[#4e5c50] md:drop-shadow-none">
                Miliki rumah di Sedah, Ponorogo dengan akad syar'i: tanpa riba,
                tanpa denda, dan tanpa sita. Cek pricelist, stok unit, dan jadwal
                survey langsung via WhatsApp.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton source="Hero Pricelist" className="w-full sm:w-auto">
                  <MessageCircle className="h-4 w-4" />
                  Cek Pricelist & Unit Tersedia
                </WhatsAppButton>
                <Button
                  asChild
                  className="h-12 w-full rounded-full border-[#123225]/20 bg-white px-5 text-sm font-semibold text-[#123225] shadow-sm hover:bg-[#f4efe3] sm:h-[52px] sm:w-auto sm:px-6"
                >
                  <a href="#info-penting">
                    <CalendarDays className="h-4 w-4" />
                    Lihat Harga & Tipe
                  </a>
                </Button>
              </div>
              <p className="mt-3 text-center text-xs font-medium text-white/80 md:text-left md:text-[#596755]">
                Langsung WhatsApp. Tidak perlu isi formulir panjang.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {["Tanpa riba", "Tanpa denda", "Tanpa sita"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/18 bg-white/10 px-2 py-3 text-xs font-semibold text-white backdrop-blur md:border-[#e0d3ad] md:bg-white md:px-3 md:text-sm md:text-[#123225]"
                  >
                    <CheckCircle2 className="mb-2 h-4 w-4 text-[#d5b768]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <img
                  src="/sedah/sedah green residence-perumahan syariah ponorogo.png"
                  alt="Fasad rumah Sedah Green Residence Ponorogo"
                  className="aspect-[4/5] w-full rounded-lg object-cover shadow-2xl shadow-[#123225]/20"
                  width="800"
                  height="533"
                  fetchPriority="high"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/92 p-4 shadow-lg backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-normal text-[#8b6f2e]">
                    Project Sedah
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#123225]">
                    Hunian syariah untuk keluarga Muslim di Ponorogo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="info-penting" className="bg-white px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-lg border border-[#eadfca] bg-[#fbf8f1] p-5 md:p-6">
              <p className="text-xs font-bold uppercase tracking-normal text-[#8b6f2e]">
                Harga, tipe, dan survey
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#123225]">
                Yang paling sering dicari calon pembeli.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#596755]">
                Harga awal, pilihan tipe, bonus pembelian, dan opsi survey diringkas supaya
                Anda bisa menilai cocok atau belum sebelum lanjut WhatsApp.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {quickFacts.map(({ icon: Icon, title, body }) => (
                  <article key={title} className="rounded-lg bg-white p-4 shadow-sm">
                    <Icon className="h-5 w-5 text-[#8b6f2e]" />
                    <h3 className="mt-3 text-sm font-semibold text-[#123225]">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#596755]">{body}</p>
                  </article>
                ))}
              </div>
              <WhatsAppButton source="Quick Summary CTA" className="mt-5 w-full sm:w-fit">
                <MessageCircle className="h-4 w-4" />
                Tanya Pricelist & Stok Unit
              </WhatsAppButton>
            </div>
          </div>
        </section>

        <section id="virtual-tour" className="bg-[#edf2e6] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-normal text-[#8b6f2e]">
                Sebelum survey
              </p>
              <h2 className="text-2xl font-semibold leading-tight text-[#123225] sm:text-3xl">
                Lihat gambaran kawasan lewat virtual tour.
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#596755] sm:text-base">
                Virtual tour tetap berguna untuk calon pembeli yang ingin melihat suasana
                kawasan sebelum datang langsung. Link dibuka terpisah agar halaman ini tetap ringan.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-full bg-white px-5 text-sm font-semibold text-[#123225] shadow-sm hover:bg-[#f4efe3]"
                >
                  <a href="/sedah-virtual" target="_blank" rel="noreferrer">
                    <Navigation className="h-4 w-4" />
                    Buka Virtual Tour
                  </a>
                </Button>
                <a
                  href="#tipe-rumah"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-[#123225]"
                >
                  Lihat tipe rumah
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-[#123225] shadow-xl shadow-[#123225]/12">
              <img
                src="/sedah/sedah green residence-perumahan syariah ponorogo2.png"
                alt="Preview kawasan Sedah Green Residence untuk virtual tour"
                className="aspect-[4/3] w-full object-cover opacity-90"
                width="800"
                height="533"
                loading="lazy"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-lg bg-white/92 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-[#123225]">Preview visual sebelum survey</p>
                <p className="mt-1 text-xs leading-5 text-[#596755]">
                  Cocok untuk keluarga yang ingin lihat gambaran kawasan sebelum datang ke lokasi.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <SectionIntro
                eyebrow="Lokasi"
                title="Berada di Sedah, Ponorogo."
                body="Kawasan dirancang untuk keluarga yang mencari suasana hunian lebih tenang, dengan akses konsultasi lokasi dan survey yang mudah dijadwalkan."
              />
              <div className="mt-7 grid gap-3">
                <div className="flex gap-3 rounded-lg border border-[#eadfca] bg-white p-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#8b6f2e]" />
                  <div>
                    <p className="font-semibold text-[#123225]">Sedah, Ponorogo</p>
                    <p className="mt-1 text-sm leading-6 text-[#596755]">
                      Minta pin lokasi dan jadwal survey via WhatsApp agar tim dapat memandu rute.
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-[#596755]">
                  Jadwal survey bisa langsung digabung dalam chat pricelist agar admin menyesuaikan
                  waktu kunjungan dan rute menuju lokasi.
                </p>
              </div>
            </div>
            <img
              src="/sedah/siteplan-sedah.jpeg"
              alt="Siteplan Sedah Green Residence"
              className="aspect-[16/11] w-full rounded-lg object-cover shadow-xl shadow-[#123225]/10"
              width="1600"
              height="1131"
              loading="lazy"
            />
          </div>
        </section>

        <section id="tipe-rumah" className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              eyebrow="Pilihan tipe"
              title="Tipe 36/66 dan 45/77 untuk kebutuhan keluarga yang berbeda."
              body="Pilih tipe berdasarkan kebutuhan ruang, budget, dan rencana tinggal. Detail teknis final mengikuti stok dan pricelist terbaru."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {houseTypes.map(({ type, icon: Icon, label, points }) => (
                <article key={type} className="rounded-lg border border-[#eadfca] bg-[#fbf8f1] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-normal text-[#8b6f2e]">
                        {type}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-[#123225]">{label}</h3>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#123225] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-[#596755]">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#637044]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-[#eadfca] bg-[#fbf8f1] p-5 sm:flex sm:items-center sm:justify-between sm:gap-4">
              <p className="text-sm leading-6 text-[#596755]">
                Detail harga, stok, dan skema pembayaran bisa berubah mengikuti unit tersedia.
              </p>
              <WhatsAppButton source="Type Summary CTA" className="mt-4 w-full sm:mt-0 sm:w-fit">
                <MessageCircle className="h-4 w-4" />
                Cek Stok Tipe Rumah
              </WhatsAppButton>
            </div>
          </div>
        </section>

        <section className="bg-[#edf2e6] px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              eyebrow="Edukasi skema syariah"
              title="Lebih tenang karena prinsipnya dibicarakan sejak awal."
              body="Tujuannya sederhana: keluarga memahami alur pembelian, nilai transaksi, dan konsekuensi akad sebelum mengambil keputusan."
            />
            <div className="mt-8 grid gap-3 md:grid-cols-4">
              {[
                ["Akad jelas", "Nilai dan ketentuan dibicarakan di awal."],
                ["Tanpa riba", "Tidak menggunakan bunga berjalan dalam skema."],
                ["Tanpa denda", "Tidak ada denda keterlambatan yang membebani."],
                ["Tanpa sita", "Penyelesaian diarahkan sesuai kesepakatan akad."],
              ].map(([title, body]) => (
                <article key={title} className="rounded-lg bg-white p-5">
                  <ShieldCheck className="mb-4 h-6 w-6 text-[#637044]" />
                  <h3 className="font-semibold text-[#123225]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#596755]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <SectionIntro
                eyebrow="Trust developer"
                title="Dikembangkan oleh Tata Kreasi."
                body="Tata Kreasi / PT Tata Kreasi Bumi Madani berfokus pada hunian syariah di Ponorogo dengan pendekatan konsultatif dan transparan."
              />
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  ["Brand", "Tata Kreasi"],
                  ["Fokus", "Properti syariah"],
                  ["Area", "Ponorogo"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-[#eadfca] bg-[#fbf8f1] p-4">
                    <p className="text-xs font-bold uppercase tracking-normal text-[#8b6f2e]">
                      {label}
                    </p>
                    <p className="mt-2 font-semibold text-[#123225]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-[#123225] p-6 text-white">
              <Building2 className="h-8 w-8 text-[#d5b768]" />
              <h3 className="mt-5 text-2xl font-semibold">Konsultasi dulu, putuskan dengan tenang.</h3>
              <p className="mt-4 text-sm leading-7 text-white/80">
                Calon pembeli bisa bertanya dulu soal pricelist, stok unit, legalitas,
                akad, dan jadwal survey sebelum mengambil keputusan lebih jauh.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {["Legalitas", "Akad", "Survey"].map((item) => (
                  <div key={item} className="rounded-lg border border-white/14 bg-white/8 px-3 py-3 text-xs font-semibold text-white/86">
                    Bisa ditanyakan: {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionIntro
              eyebrow="FAQ"
              title="Pertanyaan yang sering ditanyakan."
              body="Jawaban singkat sebelum Anda lanjut cek pricelist dan survey lokasi."
              align="center"
            />
            <div className="mt-8 space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-lg border border-[#eadfca] bg-white p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-[#123225]">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 shrink-0 text-[#8b6f2e]" />
                      {item.question}
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[#596755]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#123225] px-4 py-14 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-normal text-[#d5b768]">
              Final CTA
            </p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Siap cek unit Sedah Green Residence yang masih tersedia?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
              Chat tim Tata Kreasi untuk mendapatkan pricelist terbaru, pilihan Tipe 36/66
              dan Tipe 45/77, serta jadwal survey lokasi di Sedah, Ponorogo.
            </p>
              <div className="mt-7 flex justify-center">
                <WhatsAppButton
                  source="Final Pricelist"
                  className="w-full bg-[#d5b768] text-[#123225] hover:bg-[#e1c983] sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  Cek Pricelist & Unit Tersedia
                </WhatsAppButton>
              </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#fbf8f1] px-4 py-8 text-sm text-[#596755] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-[#eadfca] pt-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-[#123225]">Tata Kreasi / PT Tata Kreasi Bumi Madani</p>
            <p className="mt-1">Developer properti syariah di Ponorogo.</p>
          </div>
          <a href={waHref} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("Footer Contact")} className="inline-flex items-center gap-2 font-semibold text-[#123225]">
            <MessageCircle className="h-4 w-4" />
            WhatsApp +{SITE_WHATSAPP}
          </a>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#d9c893] bg-[#fbf8f1]/96 px-4 py-3 shadow-[0_-10px_30px_rgba(18,50,37,0.12)] backdrop-blur md:hidden">
        <WhatsAppButton source="Sticky Mobile CTA" className="w-full">
          <MessageCircle className="h-4 w-4" />
          Cek Pricelist & Unit Tersedia
        </WhatsAppButton>
      </div>
    </div>
  );
}

export default SedahGreenResidenceLanding;
