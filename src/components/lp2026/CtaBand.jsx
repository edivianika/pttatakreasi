import { ArrowRight, MessageCircle } from "lucide-react";

import { SITE_ANCHORS, SITE_CONTACT } from "../../constants/siteLp2026";

const stroke = 1.75;

export function CtaBand({
  id,
  eyebrow,
  heading,
  description,
  variant,
  primaryLabel = "Chat WhatsApp",
  primaryHref = SITE_CONTACT.waConsultation,
  secondaryLabel = "Lihat proyek",
  showSecondWhatsapp,
  secondWhatsappHref = SITE_CONTACT.waTanyaSingkat,
  secondWhatsappLabel = "Pesan singkat",
}) {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={
        isDark
          ? "border-y border-tk-primary-fixed/20 bg-tk-primary-container py-14 md:py-16"
          : "py-14 md:py-16"
      }
    >
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div
          className={
            isDark
              ? "rounded-3xl border border-tk-primary-fixed/25 bg-tk-primary/40 px-6 py-10 shadow-inner shadow-black/10 backdrop-blur-sm md:px-12 md:py-12"
              : "rounded-3xl border border-tk-outline-variant/60 bg-tk-surface-container-high px-6 py-10 shadow-sm md:px-10 md:py-12"
          }
        >
          {eyebrow ? (
            <p
              className={`font-tk-body text-tk-label-md mb-3 uppercase tracking-widest ${
                isDark ? "text-tk-primary-fixed" : "text-tk-secondary"
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={`font-tk-headline text-tk-headline-lg mb-4 max-w-2xl text-balance ${
              isDark ? "text-white" : "text-tk-primary"
            }`}
          >
            {heading}
          </h2>
          {description ? (
            <p
              className={`font-tk-body text-tk-body-lg mb-8 max-w-xl leading-relaxed ${
                isDark ? "text-white/85" : "text-tk-on-surface-variant"
              }`}
            >
              {description}
            </p>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-tk-body text-tk-label-md inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 transition-all active:scale-[0.98] ${
                isDark
                  ? "bg-tk-primary-fixed text-tk-primary shadow-lg shadow-black/25 hover:bg-tk-primary-fixed-dim"
                  : "bg-tk-primary text-white shadow-md hover:bg-tk-primary/90"
              }`}
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={stroke} aria-hidden />
            </a>
            <a
              href={SITE_ANCHORS.projects}
              className={`font-tk-body text-tk-label-md inline-flex items-center justify-center rounded-xl border px-7 py-3.5 transition-colors ${
                isDark
                  ? "border-white/35 bg-white/10 text-white hover:bg-white/15"
                  : "border-tk-outline-variant bg-white text-tk-primary hover:bg-tk-surface-container"
              }`}
            >
              {secondaryLabel}
            </a>
            {showSecondWhatsapp ? (
              <a
                href={secondWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-tk-body text-tk-label-md inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 transition-colors ${
                  isDark
                    ? "text-tk-primary-fixed hover:text-white"
                    : "text-tk-secondary hover:text-tk-primary"
                }`}
              >
                <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={stroke} aria-hidden />
                {secondWhatsappLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
