import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { SITE_ANCHORS, SITE_CONTACT } from "../../constants/siteLp2026";
import { trackLp2026Engagement, trackLp2026WhatsAppLead } from "./pixelLead";

/** https://www.youtube.com/watch?v=KRElbl1vzqE */
const HERO_VIDEO_ID = "KRElbl1vzqE";

const SCROLL_PARALLAX_FACTOR = 0.38;
const MOUSE_PARALLAX_MAX_PX = 14;
const MOUSE_PARALLAX_OVERLAY = 0.35;

export function HeroSection() {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [finePointer, setFinePointer] = useState(true);
  const rafRef = useRef(0);

  useEffect(() => {
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqFine = window.matchMedia("(pointer: fine)");
    setReducedMotion(mqReduce.matches);
    setFinePointer(mqFine.matches);

    const onChangeReduce = () => setReducedMotion(mqReduce.matches);
    const onChangeFine = () => setFinePointer(mqFine.matches);
    mqReduce.addEventListener("change", onChangeReduce);
    mqFine.addEventListener("change", onChangeFine);
    return () => {
      mqReduce.removeEventListener("change", onChangeReduce);
      mqFine.removeEventListener("change", onChangeFine);
    };
  }, []);

  const updateScrollParallax = useCallback(() => {
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
      rafRef.current = window.requestAnimationFrame(updateScrollParallax);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion, updateScrollParallax]);

  const onMouseMove = useCallback(
    (e) => {
      if (reducedMotion || !finePointer || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({
        x: nx * MOUSE_PARALLAX_MAX_PX * -1,
        y: ny * MOUSE_PARALLAX_MAX_PX * -0.65,
      });
    },
    [reducedMotion, finePointer]
  );

  const onMouseLeave = useCallback(() => {
    setMouse({ x: 0, y: 0 });
  }, []);

  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",
    loop: "1",
    playlist: HERO_VIDEO_ID,
    modestbranding: "1",
    rel: "0",
    playsinline: "1",
    iv_load_policy: "3",
    fs: "0",
    disablekb: "1",
  });
  const embedSrc = `https://www.youtube-nocookie.com/embed/${HERO_VIDEO_ID}?${params.toString()}`;

  let videoTranslateY = 0;
  let overlayTranslateY = 0;
  if (!reducedMotion && sectionRef.current) {
    const rect = sectionRef.current.getBoundingClientRect();
    const heroTop = scrollY + rect.top;
    const raw = scrollY - heroTop;
    videoTranslateY = raw * SCROLL_PARALLAX_FACTOR;
    overlayTranslateY = raw * SCROLL_PARALLAX_FACTOR * MOUSE_PARALLAX_OVERLAY;
  }

  const contentTransform =
    reducedMotion || !finePointer ? undefined : `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative flex min-h-[85svh] items-center overflow-hidden bg-tk-primary py-14 pb-[max(3.5rem,env(safe-area-inset-bottom))] pt-[max(3.5rem,env(safe-area-inset-top))] md:min-h-[700px] md:py-0 lg:h-[921px]"
    >
      <div
        className="hero-video-wrap z-0 will-change-transform"
        style={{
          transform: reducedMotion ? undefined : `translate3d(0, ${videoTranslateY}px, 0)`,
        }}
      >
        <iframe
          src={embedSrc}
          title="Video latar beranda"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div
          className="hero-video-overlay absolute inset-0 z-10 will-change-transform"
          aria-hidden
          style={
            reducedMotion ? undefined : { transform: `translate3d(0, ${overlayTranslateY}px, 0)` }
          }
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[12] h-28 bg-gradient-to-b from-tk-primary via-tk-primary/75 to-transparent will-change-transform md:h-36"
          aria-hidden
          style={
            reducedMotion
              ? undefined
              : { transform: `translate3d(0, ${overlayTranslateY * 0.6}px, 0)` }
          }
        />
      </div>

      <div
        className="relative z-20 mx-auto w-full max-w-container-max px-margin-mobile text-white transition-transform duration-200 ease-out will-change-transform md:px-margin-desktop"
        style={contentTransform ? { transform: contentTransform } : undefined}
      >
        <div className="max-w-3xl">
          <h1 className="font-tk-headline text-tk-display-lg mb-4 leading-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.55)] md:mb-6 md:text-balance">
            Bangun Masa Depan Berkah Tanpa Riba
          </h1>
          <p className="font-tk-body text-tk-body-lg mb-8 leading-relaxed text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.45)] md:mb-10">
            Wujudkan hunian impian keluarga madani Anda dengan kepastian hukum syariah 100%. Tanpa
            Riba, Tanpa Denda, dan Tanpa Sita. Keberkahan dimulai dari akad yang halal.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={SITE_CONTACT.waHero}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLp2026WhatsAppLead("Hero — Amankan unit")}
                className="font-tk-body text-tk-label-md inline-flex items-center justify-center gap-2 rounded-lg bg-tk-primary px-6 py-3.5 text-white shadow-lg shadow-black/25 transition-all hover:bg-tk-primary/90 md:px-8 md:py-4"
              >
                Amankan Unit Sekarang
                <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
              </a>
              <a
                href={SITE_ANCHORS.projects}
                onClick={() => trackLp2026Engagement("Hero — Lihat katalog proyek")}
                className="font-tk-body text-tk-label-md inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-white shadow-lg shadow-black/20 backdrop-blur-sm transition-all hover:bg-white/20 md:px-8 md:py-4"
              >
                Lihat Katalog Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
