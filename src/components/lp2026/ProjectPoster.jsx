import { useEffect, useRef, useState } from "react";

const POSTER_SIZES =
  "(max-width: 639px) min(100vw - 2.5rem, 20rem), (max-width: 1023px) min(45vw, 22rem), min(28vw, 320px)";

const publicUrl = (path) => `${process.env.PUBLIC_URL || ""}${path}`;

/**
 * Poster proyek: lazy via Intersection Observer + srcset 480/800px (file terkompresi).
 */
export function ProjectPoster({ imageBase, alt, width, height, badge, badgeClass }) {
  const rootRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "280px 0px", threshold: 0.01 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const src480 = publicUrl(`/images/projects/${imageBase}-480.jpg`);
  const src800 = publicUrl(`/images/projects/${imageBase}-800.jpg`);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto w-full max-w-[20rem] overflow-hidden rounded-t-[2rem] bg-gradient-to-b from-tk-surface-container-low to-tk-surface-container sm:max-w-[22rem] md:mx-0 md:max-w-none"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {!shouldLoad ? (
        <div
          className="absolute inset-0 animate-pulse bg-tk-surface-container-high"
          aria-hidden
        />
      ) : null}

      {shouldLoad ? (
        <picture className="absolute inset-0 flex items-center justify-center">
          <source type="image/jpeg" srcSet={`${src480} 480w, ${src800} 800w`} sizes={POSTER_SIZES} />
          <img
            alt={alt}
            src={src800}
            srcSet={`${src480} 480w, ${src800} 800w`}
            sizes={POSTER_SIZES}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="h-full w-full object-contain object-center transition-opacity duration-500 ease-out"
          />
        </picture>
      ) : null}

      {badge ? (
        <div
          className={`pointer-events-none absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm backdrop-blur-sm sm:left-5 sm:top-5 sm:px-4 sm:py-1.5 sm:text-xs ${badgeClass ?? ""}`}
        >
          {badge}
        </div>
      ) : null}
    </div>
  );
}
