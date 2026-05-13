import { Link } from "react-router-dom";

import { SITE_ANCHORS, SITE_CONTACT } from "../../constants/siteLp2026";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-tk-primary-fixed/25 bg-tk-primary-container/95 shadow-[0_8px_28px_-8px_rgba(1,45,29,0.55)] backdrop-blur-md supports-[backdrop-filter]:bg-tk-primary-container/90">
      <nav className="mx-auto flex w-full max-w-container-max items-center justify-between gap-4 px-margin-mobile py-3.5 md:px-margin-desktop md:py-4">
        <Link
          to="/"
          className="font-tk-headline text-tk-headline-sm shrink-0 font-bold tracking-tight text-tk-primary-fixed"
        >
          Tata Kreasi
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a
            className="font-tk-body text-tk-label-md border-b-2 border-tk-primary-fixed pb-1 text-tk-primary-fixed"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="font-tk-body text-tk-label-md text-white/85 transition-colors hover:text-tk-primary-fixed"
            href={SITE_ANCHORS.advantages}
          >
            Sharia Benefits
          </a>
          <a
            className="font-tk-body text-tk-label-md text-white/85 transition-colors hover:text-tk-primary-fixed"
            href="#projects"
          >
            Investment
          </a>
          <a
            className="font-tk-body text-tk-label-md text-white/85 transition-colors hover:text-tk-primary-fixed"
            href="#gallery"
          >
            Gallery
          </a>
          <a
            className="font-tk-body text-tk-label-md text-white/85 transition-colors hover:text-tk-primary-fixed"
            href="#faq"
          >
            About Us
          </a>
          <a
            className="font-tk-body text-tk-label-md text-white/85 transition-colors hover:text-tk-primary-fixed"
            href={SITE_ANCHORS.kontak}
          >
            Kontak
          </a>
        </div>
        <a
          href={SITE_CONTACT.waConsultation}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-tk-primary-fixed px-5 py-2.5 font-tk-body text-tk-label-md text-tk-primary shadow-sm transition-all duration-150 ease-in-out hover:bg-tk-primary-fixed-dim hover:shadow-md active:scale-95 md:px-6"
        >
          Konsultasi WA
        </a>
      </nav>
    </header>
  );
}
