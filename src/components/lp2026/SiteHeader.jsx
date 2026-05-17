import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { SITE_ANCHORS, SITE_CONTACT } from "../../constants/siteLp2026";
import { trackLp2026Lead } from "./pixelLead";

const SCROLL_PARALLAX_X = 0.06;
const SCROLL_PARALLAX_Y = 0.035;
const MOUSE_PARALLAX_MAX = 10;

const NAV_LINKS = [
  { href: SITE_ANCHORS.projects, label: "Proyek" },
  { href: SITE_ANCHORS.advantages, label: "Keunggulan" },
  { href: SITE_ANCHORS.prinsip, label: "Prinsip" },
  { href: SITE_ANCHORS.gallery, label: "Galeri" },
  { href: SITE_ANCHORS.testimoni, label: "Testimoni" },
  { href: SITE_ANCHORS.faq, label: "FAQ" },
  { href: SITE_ANCHORS.kontak, label: "Kontak" },
];

const linkClassDesktop =
  "font-tk-body text-tk-label-md whitespace-nowrap text-white/85 transition-colors hover:text-tk-primary-fixed";

export function SiteHeader() {
  const headerRef = useRef(null);
  const rafRef = useRef(0);
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [finePointer, setFinePointer] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqFine = window.matchMedia("(pointer: fine)");
    setReducedMotion(mqReduce.matches);
    setFinePointer(mqFine.matches);

    const onReduce = () => setReducedMotion(mqReduce.matches);
    const onFine = () => setFinePointer(mqFine.matches);
    mqReduce.addEventListener("change", onReduce);
    mqFine.addEventListener("change", onFine);
    return () => {
      mqReduce.removeEventListener("change", onReduce);
      mqFine.removeEventListener("change", onFine);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const flushScroll = useCallback(() => {
    rafRef.current = 0;
    if (reducedMotion) {
      setScrollY(0);
      return;
    }
    setScrollY(window.scrollY);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(flushScroll);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion, flushScroll]);

  const onMouseMove = useCallback(
    (e) => {
      if (reducedMotion || !finePointer || !headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({
        x: nx * MOUSE_PARALLAX_MAX * -1,
        y: ny * MOUSE_PARALLAX_MAX * -0.55,
      });
    },
    [reducedMotion, finePointer]
  );

  const onMouseLeave = useCallback(() => {
    setMouse({ x: 0, y: 0 });
  }, []);

  const bgTransform = reducedMotion
    ? undefined
    : `translate3d(${scrollY * SCROLL_PARALLAX_X + mouse.x}px, ${scrollY * SCROLL_PARALLAX_Y + mouse.y}px, 0)`;

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      ref={headerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="sticky top-0 z-50 w-full overflow-hidden border-b border-tk-primary-fixed/25 bg-tk-primary-container/95 shadow-[0_8px_28px_-8px_rgba(1,45,29,0.55)] backdrop-blur-md supports-[backdrop-filter]:bg-tk-primary-container/90"
    >
      <div
        className="pointer-events-none absolute -inset-[22%] z-0 will-change-transform"
        aria-hidden
        style={{ transform: bgTransform }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_15%_-10%,rgba(193,236,212,0.2),transparent_52%),radial-gradient(ellipse_80%_55%_at_95%_40%,rgba(1,45,29,0.55),transparent_48%),linear-gradient(108deg,rgba(27,67,50,0.97)_0%,rgba(1,45,29,0.92)_42%,rgba(27,67,50,0.96)_100%)]" />
      </div>

      <nav
        className="relative z-10 mx-auto flex w-full max-w-container-max items-center justify-between gap-3 px-margin-mobile py-3.5 md:gap-4 md:px-margin-desktop md:py-4"
        aria-label="Navigasi utama"
      >
        <Link
          to="/"
          className="font-tk-headline min-w-0 shrink text-lg font-bold tracking-tight text-tk-primary-fixed sm:text-tk-headline-sm"
          onClick={closeMenu}
        >
          Tata Kreasi
        </Link>

        <div className="hidden items-center gap-4 xl:gap-6 min-[1100px]:flex">
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href} className={linkClassDesktop}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 min-[1100px]:gap-4">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 text-white transition-colors hover:border-tk-primary-fixed hover:bg-white/10 hover:text-tk-primary-fixed min-[1100px]:hidden"
            aria-expanded={menuOpen}
            aria-controls="lp2026-nav-drawer"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
          </button>
          <a
            href={SITE_CONTACT.waConsultation}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLp2026Lead("Header — Konsultasi WA")}
            className="rounded-full bg-tk-primary-fixed px-3.5 py-2 font-tk-body text-tk-label-md text-tk-primary shadow-sm transition-all duration-150 ease-in-out hover:bg-tk-primary-fixed-dim hover:shadow-md active:scale-95 sm:px-5 sm:py-2.5 md:px-6"
          >
            <span className="hidden sm:inline">Konsultasi WA</span>
            <span className="sm:hidden">WA</span>
          </a>
        </div>
      </nav>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[60] bg-black/45 min-[1100px]:hidden"
            aria-label="Tutup menu"
            onClick={closeMenu}
          />
          <div
            id="lp2026-nav-drawer"
            className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,20rem)] flex-col border-l border-tk-primary-fixed/30 bg-tk-primary-container shadow-2xl min-[1100px]:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
          >
            <div className="flex items-center justify-between border-b border-white/15 px-4 py-3">
              <span className="font-tk-headline text-sm font-semibold text-tk-primary-fixed">Menu</span>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white/90 hover:bg-white/10 hover:text-tk-primary-fixed"
                aria-label="Tutup"
                onClick={closeMenu}
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-tk-body text-tk-label-md rounded-lg px-3 py-3 text-white/90 transition-colors hover:bg-white/10 hover:text-tk-primary-fixed"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
