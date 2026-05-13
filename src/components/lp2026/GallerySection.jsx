import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";

import { SITE_ANCHORS, SITE_CONTACT } from "../../constants/siteLp2026";
import { trackLp2026Lead } from "./pixelLead";

/**
 * Tiga proyek — bergiliran per slot (0: Sedah, 1: Narraya, 2: Grand Sezha, 3: Sedah lagi, …).
 * Setiap gambar dipakai paling banyak sekali per render (tidak duplikat file).
 */
const GALLERY_PROJECTS = [
  {
    id: "sedah",
    images: [
      {
        path: "/sedah/sedah green residence-perumahan syariah ponorogo3.png",
        alt: "Sedah Green Residence — hunian syariah Ponorogo",
      },
      {
        path: "/sedah/sedah green residence-perumahan syariah ponorogo2.png",
        alt: "Sedah Green Residence — tampak hunian",
      },
      {
        path: "/sedah/sedah green residence-perumahan syariah ponorogo.png",
        alt: "Sedah Green Residence — kawasan perumahan",
      },
      {
        path: "/sedah/sedah green residence-perumahan syariah ponorogo4.png",
        alt: "Sedah Green Residence — inspirasi hunian",
      },
    ],
  },
  {
    id: "narraya",
    images: [
      {
        path: "/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-6.png",
        alt: "Narraya Green Residence — hunian syariah Ponorogo",
      },
      {
        path: "/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-1.png",
        alt: "Narraya Green Residence — desain modern",
      },
      {
        path: "/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-11.png",
        alt: "Narraya Green Residence — inspirasi madani",
      },
    ],
  },
  {
    id: "grandsezha",
    images: [
      {
        path: "/grandsezha/grand-sezha-1.png",
        alt: "Grand Sezha — hunian modern syariah Ponorogo",
      },
      {
        path: "/grandsezha/grand-sezha-2.png",
        alt: "Grand Sezha — cluster hunian kontemporer",
      },
      {
        path: "/grandsezha/grand-sezha-3.png",
        alt: "Grand Sezha — kawasan hunian eksklusif",
      },
    ],
  },
];

function shuffleArray(items) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function publicSrc(relativePath) {
  const base = process.env.PUBLIC_URL || "";
  return `${base}${encodeURI(relativePath)}`;
}

/** Empat sel: bergantian 3 proyek, tanpa path gambar yang sama. */
function buildUniqueRotatingCells(slotCount) {
  const usedPaths = new Set();
  const projects = GALLERY_PROJECTS.map((p) => ({
    id: p.id,
    queue: shuffleArray(p.images),
  }));

  const picks = [];
  for (let slot = 0; slot < slotCount; slot++) {
    const project = projects[slot % projects.length];
    let chosen = null;
    while (project.queue.length > 0 && !chosen) {
      const next = project.queue.shift();
      if (!usedPaths.has(next.path)) {
        chosen = next;
        usedPaths.add(next.path);
      }
    }
    if (!chosen) {
      const flat = shuffleArray(
        GALLERY_PROJECTS.flatMap((p) => p.images).filter((img) => !usedPaths.has(img.path))
      );
      chosen = flat[0];
      if (chosen) usedPaths.add(chosen.path);
    }
    if (chosen) {
      picks.push({ slot, projectId: project.id, path: chosen.path, alt: chosen.alt });
    }
  }
  return picks;
}

const CELL_LAYOUT = [
  { className: "row-span-2 col-span-2 overflow-hidden rounded-2xl ring-1 ring-black/[0.04] group" },
  { className: "overflow-hidden rounded-2xl ring-1 ring-black/[0.04] group" },
  { className: "overflow-hidden rounded-2xl ring-1 ring-black/[0.04] group" },
  { className: "col-span-2 overflow-hidden rounded-2xl ring-1 ring-black/[0.04] group" },
];

const gridEase = [0.22, 1, 0.36, 1];

export function GallerySection() {
  const prefersReducedMotion = useReducedMotion();

  const cellVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, y: 0, scale: 1 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0, y: 22, scale: 0.97 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.58, ease: gridEase },
        },
      };

  const cells = useMemo(() => {
    const picks = buildUniqueRotatingCells(CELL_LAYOUT.length);
    return CELL_LAYOUT.map((cell, index) => {
      const pick = picks[index];
      return {
        key: `gallery-madani-${index}-${pick?.path ?? index}`,
        className: cell.className,
        src: pick ? publicSrc(pick.path) : "",
        alt: pick?.alt ?? "",
      };
    });
  }, []);

  return (
    <section id="gallery" className="bg-tk-surface py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <motion.div
          className="mb-10 text-center md:mb-16"
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.35 },
                transition: { duration: 0.5, ease: gridEase },
              })}
        >
          <h2 className="font-tk-headline text-tk-headline-lg text-tk-primary">
            Gallery Inspirasi Madani
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-tk-on-surface-variant md:mt-4 md:text-base">
            Setiap sudut didesain untuk kenyamanan ibadah dan harmoni keluarga Anda.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-2.5 auto-rows-[clamp(7.25rem,20vw,10.5rem)] sm:gap-3 sm:auto-rows-[clamp(7.75rem,16vw,12rem)] md:grid-cols-4 md:gap-4 md:auto-rows-[clamp(8.25rem,10.5vw,14rem)]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.09,
                delayChildren: prefersReducedMotion ? 0 : 0.05,
              },
            },
          }}
        >
          {cells.map((item) => (
            <motion.div
              key={item.key}
              className={`relative min-h-0 min-w-0 ${item.className}`}
              variants={cellVariants}
            >
              {item.src ? (
                <motion.img
                  alt={item.alt}
                  src={item.src}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={false}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { scale: 1.04, transition: { duration: 0.55, ease: gridEase } }
                  }
                  transition={{ duration: 0.55, ease: gridEase }}
                />
              ) : null}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:mt-14 sm:flex-row sm:flex-wrap sm:justify-center"
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 12 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.4 },
                transition: { duration: 0.45, ease: gridEase, delay: 0.12 },
              })}
        >
          <a
            href={SITE_CONTACT.waDetailUnit}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLp2026Lead("Gallery — Tanya detail unit & akad (WhatsApp)")}
            className="font-tk-body text-tk-label-md inline-flex items-center justify-center gap-2 rounded-xl bg-tk-primary px-6 py-3.5 text-white shadow-md transition-all hover:bg-tk-primary/90"
          >
            Tanya detail unit &amp; akad via WhatsApp
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
          </a>
          <a
            href={SITE_ANCHORS.projects}
            className="font-tk-body text-tk-label-md inline-flex items-center justify-center rounded-xl border border-tk-outline-variant bg-white px-6 py-3.5 text-tk-primary transition-colors hover:bg-tk-surface-container"
          >
            Lihat proyek &amp; harga
          </a>
          <a
            href={SITE_ANCHORS.faq}
            className="font-tk-body text-tk-label-md inline-flex items-center justify-center px-4 py-3.5 text-tk-secondary underline-offset-4 transition-colors hover:text-tk-primary hover:underline"
          >
            Baca FAQ
          </a>
        </motion.div>
      </div>
    </section>
  );
}
