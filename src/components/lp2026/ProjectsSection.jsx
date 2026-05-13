import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Gem,
  GraduationCap,
  House,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  TrendingUp,
  Trees,
  Wallet,
} from "lucide-react";

import { SITE_CONTACT } from "../../constants/siteLp2026";

const iconStroke = 1.75;

const projects = [
  {
    name: "Grand Sezha",
    badge: "Ready Stock",
    badgeClass: "bg-tk-secondary/90",
    location: "Jl. Arif Rahman Hakim, Keniten.",
    price: "Rp 530jt - 640jt",
    image: `${process.env.PUBLIC_URL || ""}/images/projects-grand-sezha.png`,
    features: [
      { Icon: Landmark, label: "Desain Modern Kontemporer" },
      { Icon: ShieldCheck, label: "Keamanan One Gate System" },
      { Icon: TrendingUp, label: "Nilai Investasi Sangat Tinggi" },
    ],
    cta: "Detail Unit & Denah",
    ctaClass: "bg-tk-primary text-white hover:bg-tk-primary/90",
    ctaIcon: "arrow",
    whatsappHref: SITE_CONTACT.waProyekGrandSezha,
  },
  {
    name: "Grand City Sedah",
    badge: "Promo Akhir Tahun",
    badgeClass: "bg-tk-primary/90",
    location: "Desa Sedah, Jenangan. Area asri.",
    price: "Rp 230jt - 270jt",
    image: `${process.env.PUBLIC_URL || ""}/images/projects-grand-city-sedah.png`,
    features: [
      { Icon: Trees, label: "Lingkungan Asri & Tenang" },
      { Icon: Wallet, label: "DP Ringan & Cicilan Flat" },
      { Icon: GraduationCap, label: "Dekat Sarana Pendidikan" },
    ],
    cta: "Cek Ketersediaan Unit",
    ctaClass:
      "bg-tk-surface-container text-tk-primary hover:bg-tk-surface-container-high",
    ctaIcon: "arrow",
    whatsappHref: SITE_CONTACT.waProyekGrandCitySedah,
  },
  {
    name: "Grand Naraya",
    badge: "Unit Terbatas",
    badgeClass: "bg-tk-tertiary/90",
    location: "Jl. Noroyono, Area Alun-Alun.",
    price: "Rp 785jt",
    image: `${process.env.PUBLIC_URL || ""}/images/projects-grand-naraya.png`,
    features: [
      { Icon: Gem, label: "Spesifikasi Material Premium" },
      { Icon: Star, label: "Kawasan Elit Pusat Kota" },
      { Icon: House, label: "Ready Smart Home System" },
    ],
    cta: "Ambil Promo Spesial",
    ctaClass:
      "bg-tk-primary-container text-tk-on-primary-container hover:bg-tk-primary-container/90",
    ctaIcon: "sparkle",
    whatsappHref: SITE_CONTACT.waProyekGrandNaraya,
  },
];

function CtaTrailingIcon({ variant }) {
  if (variant === "sparkle") {
    return <Sparkles className="h-4 w-4 shrink-0" strokeWidth={iconStroke} aria-hidden />;
  }
  return <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={iconStroke} aria-hidden />;
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-container-max px-margin-mobile py-20 md:px-margin-desktop"
    >
      <div className="mb-16 flex flex-col items-start gap-12 md:flex-row">
        <div className="md:w-1/3">
          <div className="mb-6 flex items-center gap-2">
            <Sprout
              className="h-6 w-6 shrink-0 text-tk-primary"
              strokeWidth={iconStroke}
              aria-hidden
            />
            <span className="font-tk-body text-tk-label-md uppercase tracking-widest text-tk-secondary">
              PROYEK EKSKLUSIF
            </span>
          </div>
          <h2 className="font-tk-headline mb-8 text-5xl leading-tight text-tk-primary md:text-6xl">
            Proyek Eksklusif di Ponorogo
          </h2>
          <p className="font-tk-body text-tk-body-lg mb-10 text-tk-on-surface-variant">
            Pilihan lokasi strategis dengan desain arsitektur modern untuk gaya hidup Islami yang
            berkualitas.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-tk-primary text-white transition-colors hover:bg-tk-primary/90"
              aria-label="Proyek sebelumnya"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-tk-outline-variant text-tk-primary transition-colors hover:bg-tk-surface-container"
              aria-label="Proyek berikutnya"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
          </div>
        </div>
        <div className="group relative aspect-video w-full overflow-hidden rounded-[2rem] md:w-2/3">
          <img
            alt="Cuplikan proyek unggulan Tata Kreasi"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3XulmX5E1F2nDtvAi58GeWTVnAWethT4ayKEFNOTrzIqR5saNl53IEG_jE1Zlsi4v9BgWiRfU-MjOAa8MuQLJUbaVQXNfE4N_hWOFF3hj1GU9mG9uNcG7RJSbf53vc5ZfhQsDHVJ-sDfmrC7Ul6o1TUTi61V6gTNaNh38Kfn7eWbExAK7kl8C6Ow31B-FBtvCof3o-6b973deXyNtDOIjwW6iidYNXzm2Cs2j6gtOIeovL6av_OwKO2QroYOVIsW-aPiTq0jHAIE"
            className="absolute inset-0 h-full w-full object-cover shadow-2xl transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-12">
            <div className="max-w-sm rounded-2xl border border-tk-primary-fixed/20 bg-tk-primary-container/90 p-8 backdrop-blur-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-tk-primary-fixed/20">
                <Building2
                  className="h-5 w-5 text-tk-primary-fixed"
                  strokeWidth={iconStroke}
                  aria-hidden
                />
              </div>
              <h3 className="font-tk-headline text-tk-headline-sm mb-2 text-white">
                Desain Modern Bernuansa Islami
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-tk-primary-fixed-dim">
                Harmoni antara estetika modern dan nilai-nilai Islami untuk kehidupan yang lebih
                bermakna.
              </p>
              <div className="h-1 w-12 bg-tk-primary-fixed" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                alt={project.name}
                src={project.image}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute left-6 top-6 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm ${project.badgeClass}`}
              >
                {project.badge}
              </div>
            </div>
            <div className="flex grow flex-col bg-white p-8">
              <div className="mb-6">
                <h3 className="font-tk-headline mb-2 text-2xl text-tk-primary">{project.name}</h3>
                <div className="mb-2 flex items-center gap-2 text-tk-on-surface-variant">
                  <MapPin
                    className="h-4 w-4 shrink-0 text-tk-secondary"
                    strokeWidth={iconStroke}
                    aria-hidden
                  />
                  <span className="text-sm">{project.location}</span>
                </div>
                <div className="font-tk-body text-tk-label-md mb-1 text-xs uppercase tracking-tighter text-tk-on-surface-variant/60">
                  Harga Investasi
                </div>
                <p className="text-xl font-bold text-tk-primary">{project.price}</p>
              </div>
              <div className="mb-8 grow space-y-3">
                {project.features.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <f.Icon
                      className="h-5 w-5 shrink-0 text-tk-secondary"
                      strokeWidth={iconStroke}
                      aria-hidden
                    />
                    <span className="text-sm font-medium text-tk-on-surface-variant">{f.label}</span>
                  </div>
                ))}
              </div>
              <a
                href={project.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-tk-body text-tk-label-md flex w-full items-center justify-center gap-2 rounded-xl py-4 text-center transition-all ${project.ctaClass}`}
              >
                {project.cta}
                <CtaTrailingIcon variant={project.ctaIcon} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
