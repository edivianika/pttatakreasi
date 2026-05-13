import { Mail, MapPin, MessageCircle } from "lucide-react";

import { SITE_ANCHORS, SITE_CONTACT, SITE_WHATSAPP } from "../../constants/siteLp2026";
import { trackLp2026Lead } from "./pixelLead";

export function SiteFooter() {
  return (
    <footer id="kontak" className="w-full min-w-0 overflow-x-clip bg-tk-primary-container py-12 text-white md:py-16">
      <div className="mx-auto flex w-full min-w-0 max-w-container-max flex-col items-start justify-between gap-10 pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] md:flex-row md:gap-12 md:px-margin-desktop">
        <div className="max-w-xs">
          <h2 className="font-tk-headline mb-3 text-2xl font-bold text-tk-primary-fixed sm:mb-4 sm:text-3xl">
            Tata Kreasi
          </h2>
          <p className="font-tk-body text-tk-body-md mb-6 text-white/80">
            Wujudkan hunian impian keluarga madani dengan kepastian hukum syariah.
          </p>
          <div className="flex gap-4">
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-tk-primary-fixed hover:text-tk-primary-container"
              href="#"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-tk-primary-fixed hover:text-tk-primary-container"
              href="#"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-tk-headline text-tk-headline-sm mb-4 text-lg font-bold text-tk-primary-fixed">
            Kontak Kami
          </h4>
          <ul className="font-tk-body text-tk-body-md space-y-3 text-white/80">
            <li className="flex items-start gap-2">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-tk-primary-fixed"
                strokeWidth={1.75}
                aria-hidden
              />
              <span>
                Jl. Arif Rahman Hakim No. 12
                <br />
                Ponorogo, Jawa Timur
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle
                className="h-5 w-5 shrink-0 text-tk-primary-fixed"
                strokeWidth={1.75}
                aria-hidden
              />
              <a
                href={SITE_CONTACT.waFooter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLp2026Lead("Footer — WhatsApp")}
                className="transition-colors hover:text-tk-primary-fixed hover:underline"
              >
                WhatsApp {SITE_WHATSAPP.replace(/^62/, "0")}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail
                className="h-5 w-5 shrink-0 text-tk-primary-fixed"
                strokeWidth={1.75}
                aria-hidden
              />
              <a
                href={`mailto:${SITE_CONTACT.email}`}
                onClick={() => trackLp2026Lead("Footer — Email", "Email Inquiry")}
                className="transition-colors hover:text-tk-primary-fixed hover:underline"
              >
                {SITE_CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-tk-headline text-tk-headline-sm mb-4 text-lg font-bold text-tk-primary-fixed">
            Tautan Penting
          </h4>
          <ul className="font-tk-body text-tk-body-md space-y-3 text-white/80">
            <li>
              <a
                className="transition-colors hover:text-tk-primary-fixed"
                href={SITE_ANCHORS.projects}
              >
                Project Portfolio
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-tk-primary-fixed" href="#">
                Syarat & Ketentuan
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-tk-primary-fixed" href="#">
                Kebijakan Privasi
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 w-full min-w-0 max-w-container-max border-t border-white/20 pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] pt-8 text-center font-tk-body text-tk-body-md text-white/60 md:px-margin-desktop">
        <p>© {new Date().getFullYear()} Tata Kreasi. All rights reserved.</p>
      </div>
    </footer>
  );
}
