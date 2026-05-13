import {
  ArrowRight,
  Building2,
  HardHat,
  Home,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import { SITE_ANCHORS, SITE_CONTACT } from "../../constants/siteLp2026";
import { Reveal } from "./Reveal";
import { trackLp2026Lead } from "./pixelLead";

const iconStroke = 1.75;

const headlineClass =
  "transition-transform duration-300 ease-out will-change-transform group-hover/card:-translate-y-0.5";

const ctaLinkClass =
  "font-tk-body text-tk-label-md mt-4 inline-flex items-center gap-2 transition-all group-hover/card:gap-3 md:mt-6";

export function AdvantagesSection() {
  return (
    <section
      id="advantages"
      className="relative overflow-hidden bg-gradient-to-b from-tk-surface-container-low/40 via-tk-background to-tk-background py-10 md:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[min(42vh,360px)] w-[min(100%,1400px)] -translate-x-1/2 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(27,67,50,0.06),transparent_65%)] md:h-[min(50vh,480px)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <header className="mb-6 border-b border-tk-outline-variant/30 pb-6 md:mb-8 md:max-w-3xl md:pb-8 lg:max-w-4xl">
          <p className="font-tk-body text-tk-label-md mb-3 uppercase tracking-widest text-tk-secondary">
            Keunggulan
          </p>
          <h2 className="text-balance">
            <span className="font-tk-headline block text-2xl font-semibold leading-[1.2] tracking-tight text-tk-primary sm:text-[1.65rem] md:text-3xl lg:text-[2.125rem]">
              Komitmen TataKreasi Group
            </span>
            <span className="font-tk-body text-tk-body-lg mt-2 block max-w-2xl text-base font-normal leading-relaxed text-tk-on-surface-variant md:mt-3 md:text-lg">
              Kami menghadirkan hunian yang:
            </span>
          </h2>
        </header>

        <div className="relative flex snap-x snap-proximity gap-2.5 overflow-x-auto overscroll-x-contain pb-2 touch-pan-x no-scrollbar md:grid md:min-h-[400px] md:grid-cols-2 md:gap-6 md:snap-none md:overflow-visible md:pb-0 md:touch-auto lg:min-h-[420px]">
          <div className="group/card relative z-10 flex min-h-[min(36svh,13.5rem)] min-w-[76vw] snap-center flex-col justify-end overflow-hidden rounded-2xl border border-white/15 bg-black p-4 shadow-[0_20px_48px_-16px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-white/25 hover:shadow-2xl md:row-span-2 md:min-h-full md:min-w-0 md:rounded-3xl md:p-7 lg:p-8">
            <img
              alt="Latar hunian modern bernuansa hijau dengan motif islami halus"
              src={`${process.env.PUBLIC_URL || ""}/images/advantages-prinsip-syariah-bg.png`}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1.2s] ease-out group-hover/card:scale-[1.03]"
            />
            <div className="relative z-10 flex flex-col items-start gap-0 text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.75)]">
              <Reveal variant="fade-icon">
                <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-tk-secondary/80 bg-black/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-[2px] transition-all duration-300 group-hover/card:border-tk-secondary group-hover/card:shadow-[0_0_20px_-4px_rgba(255,198,151,0.4)] md:mb-6 md:h-14 md:w-14 lg:h-16 lg:w-16">
                  <ShieldCheck
                    className="h-6 w-6 text-tk-secondary-fixed md:h-8 md:w-8 lg:h-9 lg:w-9"
                    strokeWidth={iconStroke}
                    aria-hidden
                  />
                </div>
              </Reveal>
              <Reveal variant="text-focus" delay={95}>
                <h3 className={`${headlineClass} font-tk-headline`}>
                  <span className="block text-base font-medium leading-snug text-white/95 md:text-lg">
                    Berlandaskan
                  </span>
                  <span className="mt-1.5 block text-2xl font-semibold leading-[1.15] tracking-tight text-amber-100 drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] md:mt-2 md:text-4xl md:leading-[1.12] lg:text-[2.5rem]">
                    Prinsip Syariah
                  </span>
                </h3>
              </Reveal>
              <Reveal variant="fade-up" delay={140}>
                <div
                  className="my-3 h-[3px] w-12 rounded-full bg-gradient-to-r from-tk-secondary via-tk-secondary-fixed to-tk-secondary-fixed-dim shadow-[0_0_12px_rgba(255,198,151,0.35)] md:my-5"
                  aria-hidden
                />
              </Reveal>
              <Reveal variant="fade-up" delay={220}>
                <p className="font-tk-body text-tk-body-md max-w-md text-sm leading-relaxed text-white/[0.92] md:text-base">
                  Skema kepemilikan murni syariah tanpa perantara bank, denda, atau sita unit untuk
                  ketenangan hati Anda.
                </p>
              </Reveal>
              <Reveal variant="fade-up" delay={280}>
                <a
                  href={SITE_ANCHORS.prinsip}
                  className={`${ctaLinkClass} text-tk-secondary-fixed hover:text-white`}
                >
                  Lihat prinsip keberkahan
                  <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                </a>
              </Reveal>
            </div>
          </div>

          <div className="mt-0 flex h-full min-h-0 flex-row gap-2.5 px-0 md:row-span-2 md:flex md:flex-col md:gap-6">
            <div className="group/card relative flex min-h-[min(30svh,11.5rem)] min-w-[68vw] snap-center flex-col justify-end overflow-hidden rounded-2xl border border-tk-secondary/15 bg-white p-4 shadow-md ring-1 ring-black/[0.03] transition-all duration-500 hover:shadow-lg md:h-full md:min-h-0 md:min-w-0 md:flex-1 md:rounded-3xl md:p-6 lg:p-7">
              <Home
                className="pointer-events-none absolute -bottom-2 -right-1 h-24 w-24 text-tk-secondary/[0.1] transition-transform duration-700 group-hover/card:scale-105 md:h-36 md:w-36"
                strokeWidth={1}
                aria-hidden
              />
              <img
                alt=""
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDymMx7uVJumeBTPCXe_UHjivP9mgriUkB5JR2eDnMZPtJzeO_y81MH-1v1b-OsXMA1SHwIloukGLvvmurEZipq1qtcUBGat-EEQRwwlIWa0SSZ2Tf6CZtmhcx3LCZSKR19UwGRbupVziOHK1hK3dAo3oKs4PncTut3W0DaVRpZ4mE6YqG2NO6NOQdF-RefG_vZE6l-8JWi3a8Tqld3JpUOfQwncBUHsLFYnUl5clB8NvSqyAHhPDtezNdFe1cb_WMG206HN5SW8Dw"
                className="absolute inset-0 h-full w-full object-cover opacity-[0.08] transition-transform duration-[1.1s] group-hover/card:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(165deg,white_0%,rgba(255,250,248,0.97)_45%,rgba(255,243,235,0.35)_100%)]" />
              <div className="relative z-10 flex flex-col items-start">
                <Reveal variant="fade-icon">
                  <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-tk-secondary-container shadow-sm ring-1 ring-tk-secondary/30 transition-all duration-300 group-hover/card:-translate-y-0.5 group-hover/card:shadow-md md:mb-4 md:h-12 md:w-12">
                    <HardHat
                      className="h-6 w-6 text-tk-on-secondary-container md:h-7 md:w-7"
                      strokeWidth={iconStroke}
                      aria-hidden
                    />
                  </div>
                </Reveal>
                <Reveal variant="text-focus" delay={90}>
                  <h3
                    className={`${headlineClass} font-tk-headline text-tk-headline-md mb-2 max-w-[95%] text-xl tracking-tight text-tk-primary md:mb-3 md:text-2xl lg:text-[1.65rem]`}
                  >
                    Garansi Bangunan 5 Tahun
                  </h3>
                </Reveal>
                <div
                  className="mb-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-tk-secondary to-tk-secondary-fixed opacity-90"
                  aria-hidden
                />
                <Reveal variant="fade-up" delay={210}>
                  <p className="font-tk-body text-tk-body-md max-w-sm text-pretty text-sm leading-relaxed text-tk-on-surface-variant md:text-[0.9375rem]">
                    Komitmen kualitas premium dengan jaminan struktur dan finishing bangunan jangka
                    panjang.
                  </p>
                </Reveal>
                <Reveal variant="fade-up" delay={270}>
                  <a
                    href={SITE_ANCHORS.projects}
                    className={`${ctaLinkClass} text-tk-secondary hover:text-tk-primary`}
                  >
                    Jelajahi proyek &amp; unit
                    <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </a>
                </Reveal>
              </div>
            </div>

            <div className="group/card relative flex min-h-[min(30svh,11.5rem)] min-w-[68vw] snap-center flex-col justify-end overflow-hidden rounded-2xl border border-tk-primary-fixed/25 bg-white p-4 shadow-md ring-1 ring-black/[0.03] transition-all duration-500 hover:shadow-lg md:h-full md:min-h-0 md:min-w-0 md:flex-1 md:rounded-3xl md:p-6 lg:p-7">
              <Leaf
                className="pointer-events-none absolute -bottom-2 -right-1 h-24 w-24 text-tk-primary-fixed/[0.12] transition-transform duration-700 group-hover/card:rotate-6 md:h-36 md:w-36"
                strokeWidth={1}
                aria-hidden
              />
              <img
                alt=""
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy7EoNP3VrC4gbKLCO7dS5b3H08O0i5JeruzjKlys4lG1ytPAZfmHjSQHEKAPsj_PRh96bKoIahYn2CrQCaAb7647ECrPJhjnQtswDAMqLFOQYf3yUfG5_yCezOVQhsOiQezyW3nY0zLbh0TApxk16s0SZ1UwbEx1UzsPJljbx9NcIYzUjQ0OOmxZoOL-KR_H60bw7wVL3Md9VjZLIeHdlRzx_98QmuVZPMaDhx-ct2STIz0sPacKQDXGFOYsxq75m_bfuczkt0kE"
                className="absolute inset-0 h-full w-full object-cover opacity-[0.08] transition-transform duration-[1.1s] group-hover/card:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(165deg,white_0%,rgba(248,252,250,0.98)_50%,rgba(193,236,212,0.12)_100%)]" />
              <div className="relative z-10 flex flex-col items-start">
                <Reveal variant="fade-icon">
                  <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-tk-primary-fixed shadow-sm ring-1 ring-tk-primary/25 transition-all duration-300 group-hover/card:-translate-y-0.5 group-hover/card:shadow-md md:mb-4 md:h-12 md:w-12">
                    <Building2
                      className="h-6 w-6 text-tk-primary md:h-7 md:w-7"
                      strokeWidth={iconStroke}
                      aria-hidden
                    />
                  </div>
                </Reveal>
                <Reveal variant="text-focus" delay={90}>
                  <h3
                    className={`${headlineClass} font-tk-headline text-tk-headline-md mb-2 max-w-[95%] text-xl tracking-tight text-tk-primary md:mb-3 md:text-2xl lg:text-[1.65rem]`}
                  >
                    Developer Berpengalaman
                  </h3>
                </Reveal>
                <div
                  className="mb-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-tk-primary-fixed to-tk-primary-fixed-dim opacity-95"
                  aria-hidden
                />
                <Reveal variant="fade-up" delay={210}>
                  <p className="font-tk-body text-tk-body-md max-w-sm text-pretty text-sm leading-relaxed text-tk-on-surface-variant md:text-[0.9375rem]">
                    Rekam jejak terpercaya dalam membangun kawasan hunian eksklusif yang
                    mengedepankan estetika.
                  </p>
                </Reveal>
                <Reveal variant="fade-up" delay={270}>
                  <a
                    href={SITE_CONTACT.waTimDeveloper}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackLp2026Lead("Keunggulan — Konsultasi tim developer (WhatsApp)")}
                    className={`${ctaLinkClass} text-tk-primary hover:text-tk-primary-container`}
                  >
                    Konsultasi dengan tim kami
                    <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
