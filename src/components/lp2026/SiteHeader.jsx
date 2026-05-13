import { Link } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";

import { SITE_ANCHORS, SITE_CONTACT } from "../../constants/siteLp2026";
import { trackLp2026Lead } from "./pixelLead";

const SCROLL_PARALLAX_X = 0.06;
const SCROLL_PARALLAX_Y = 0.035;
const MOUSE_PARALLAX_MAX = 10;

export function SiteHeader() {
  const headerRef = useRef(null);
  const rafRef = useRef(0);
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [finePointer, setFinePointer] = useState(true);

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

      <nav className="relative z-10 mx-auto flex w-full max-w-container-max items-center justify-between gap-4 px-margin-mobile py-3.5 md:px-margin-desktop md:py-4">
        <Link
          to="/"
          className="font-tk-headline shrink-0 text-lg font-bold tracking-tight text-tk-primary-fixed sm:text-tk-headline-sm"
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
          onClick={() => trackLp2026Lead("Header — Konsultasi WA")}
          className="shrink-0 rounded-full bg-tk-primary-fixed px-4 py-2 font-tk-body text-tk-label-md text-tk-primary shadow-sm transition-all duration-150 ease-in-out hover:bg-tk-primary-fixed-dim hover:shadow-md active:scale-95 sm:px-5 sm:py-2.5 md:px-6"
        >
          Konsultasi WA
        </a>
      </nav>
    </header>
  );
}
