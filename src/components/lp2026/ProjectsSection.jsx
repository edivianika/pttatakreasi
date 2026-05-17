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

import { LP2026_EXCLUSIVE_PROJECTS } from "../../constants/lp2026Projects";
import { SITE_CONTACT } from "../../constants/siteLp2026";
import { ProjectPoster } from "./ProjectPoster";
import { trackLp2026Lead } from "./pixelLead";

const iconStroke = 1.75;

const FEATURE_ICONS = {
  landmark: Landmark,
  shield: ShieldCheck,
  trending: TrendingUp,
  gem: Gem,
  star: Star,
  house: House,
  trees: Trees,
  wallet: Wallet,
  graduation: GraduationCap,
};

function CtaTrailingIcon({ variant }) {
  if (variant === "sparkle") {
    return <Sparkles className="h-4 w-4 shrink-0" strokeWidth={iconStroke} aria-hidden />;
  }
  return <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={iconStroke} aria-hidden />;
}

const PROJECTS_HERO_IMAGE = `${process.env.PUBLIC_URL || ""}/grandsezha/projects-hero-bernuansa-islami.png`;

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-container-max px-margin-mobile py-14 md:px-margin-desktop md:py-20"
    >
      <div className="mb-12 flex flex-col items-start gap-8 md:mb-16 md:flex-row md:gap-12">
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
          <h2
            id="projects-heading"
            className="font-tk-headline mb-6 text-3xl leading-tight text-tk-primary sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl"
          >
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
            alt="Desain modern bernuansa Islami — cuplikan proyek hunian Tata Kreasi"
            src={PROJECTS_HERO_IMAGE}
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover shadow-2xl transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6 md:p-12">
            <div className="max-w-sm rounded-2xl border border-tk-primary-fixed/20 bg-tk-primary-container/90 p-4 backdrop-blur-md sm:p-6 md:p-8">
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

      <ul className="grid list-none grid-cols-1 justify-items-center gap-8 p-0 md:grid-cols-3 md:justify-items-stretch md:gap-8">
        {LP2026_EXCLUSIVE_PROJECTS.map((project) => {
          const whatsappHref = SITE_CONTACT[project.whatsappKey];
          return (
            <li key={project.id} className="w-full max-w-[20rem] sm:max-w-[22rem] md:max-w-none">
              <article
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-tk-outline-variant/30 transition-all duration-500 hover:shadow-2xl"
                itemScope
                itemType="https://schema.org/Product"
              >
                <ProjectPoster
                  imageBase={project.imageBase}
                  alt={project.imageAlt}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  badge={project.badge}
                  badgeClass={project.badgeClass}
                />
                <div className="flex grow flex-col bg-white p-5 sm:p-6 md:p-8">
                  <div className="mb-6">
                    <h3
                      className="font-tk-headline mb-2 text-xl text-tk-primary sm:text-2xl"
                      itemProp="name"
                    >
                      {project.name}
                    </h3>
                    <meta itemProp="description" content={project.seoDescription} />
                    <div className="mb-2 flex items-center gap-2 text-tk-on-surface-variant">
                      <MapPin
                        className="h-4 w-4 shrink-0 text-tk-secondary"
                        strokeWidth={iconStroke}
                        aria-hidden
                      />
                      <span className="text-sm" itemProp="areaServed">
                        {project.location}
                      </span>
                    </div>
                    <div className="font-tk-body text-tk-label-md mb-1 text-xs uppercase tracking-tighter text-tk-on-surface-variant/60">
                      Harga Investasi
                    </div>
                    <p className="text-lg font-bold text-tk-primary sm:text-xl" itemProp="offers">
                      {project.price}
                    </p>
                  </div>
                  <ul className="mb-8 grow list-none space-y-3 p-0">
                    {project.features.map((f) => {
                      const Icon = FEATURE_ICONS[f.icon];
                      return (
                        <li key={f.label} className="flex items-center gap-3">
                          <Icon
                            className="h-5 w-5 shrink-0 text-tk-secondary"
                            strokeWidth={iconStroke}
                            aria-hidden
                          />
                          <span className="text-sm font-medium text-tk-on-surface-variant">
                            {f.label}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackLp2026Lead(`Proyek — ${project.name} (${project.cta})`)
                    }
                    className={`font-tk-body text-tk-label-md flex w-full items-center justify-center gap-2 rounded-xl py-4 text-center transition-all ${project.ctaClass}`}
                    aria-label={`${project.cta} — ${project.name} via WhatsApp`}
                  >
                    {project.cta}
                    <CtaTrailingIcon variant={project.ctaIcon} />
                  </a>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
