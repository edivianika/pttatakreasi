import { ArrowRight } from "lucide-react";

import { SITE_ANCHORS, SITE_CONTACT } from "../../constants/siteLp2026";

const galleryImages = [
  {
    alt: "Hunian modern luas dengan integrasi indoor-outdoor",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAto7PhMuolTzv5sbDfjrp9G6QGISnqaSvs5dbSDdDd4dKAyTozGYCjSGXoGQD7VJRSUj75061q-SOCZ2y23RrJrP5WaQ3KE-10y1yraBHRSPXLIyS0pdSkfokE-aJTTa6M5g0iA1rjJelHY6dV4hT0gt1BnDZ7obT_B3SDJROhScBTSlVqQ-gpzc8Y1K20EoHkbnMiuRGcVN6VX25yPk3IQXoR-Ptd9v9eUHzLM0J-nyfgndYyIF9MjyYKrE7qzg7PbDS81sRUy6M",
    className: "row-span-2 col-span-2 overflow-hidden rounded-2xl group",
  },
  {
    alt: "Kamar tidur minimalis dengan jendela lebar",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDymMx7uVJumeBTPCXe_UHjivP9mgriUkB5JR2eDnMZPtJzeO_y81MH-1v1b-OsXMA1SHwIloukGLvvmurEZipq1qtcUBGat-EEQRwwlIWa0SSZ2Tf6CZtmhcx3LCZSKR19UwGRbupVziOHK1hK3dAo3oKs4PncTut3W0DaVRpZ4mE6YqG2NO6NOQdF-RefG_vZE6l-8JWi3a8Tqld3JpUOfQwncBUHsLFYnUl5clB8NvSqyAHhPDtezNdFe1cb_WMG206HN5SW8Dw",
    className: "overflow-hidden rounded-2xl group",
  },
  {
    alt: "Dapur modern dengan island marmer",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy7EoNP3VrC4gbKLCO7dS5b3H08O0i5JeruzjKlys4lG1ytPAZfmHjSQHEKAPsj_PRh96bKoIahYn2CrQCaAb7647ECrPJhjnQtswDAMqLFOQYf3yUfG5_yCezOVQhsOiQezyW3nY0zLbh0TApxk16s0SZ1UwbEx1UzsPJljbx9NcIYzUjQ0OOmxZoOL-KR_H60bw7wVL3Md9VjZLIeHdlRzx_98QmuVZPMaDhx-ct2STIz0sPacKQDXGFOYsxq75m_bfuczkt0kE",
    className: "overflow-hidden rounded-2xl group",
  },
  {
    alt: "Area patio dengan furnitur outdoor pada golden hour",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzpXPQMdYcpBlmbjjfuKj0UHaPiTWFFseaZNqWcsy0oG7H-LYmO5RI2GfA_9_8D4NQ5xLAGmqs39uptuYXRROjFe_OVbH1GrpxyOqtRCop4UHiIF33AOf82Ts_yYFVTdOcF6bhliruJjsCMB6eWrWJYZQxSbi1rg1E82uLr5HLIzz8hrKWk8d8xToy3kJpRRkbbKId6735dtqEVQn_SaN08N1W3XvMogdMFwpFN5FyhKdY1Mx9pgoo262qE4J6njKaC75Eeb13SVY",
    className: "col-span-2 overflow-hidden rounded-2xl group",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-tk-surface py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="font-tk-headline text-tk-headline-lg text-tk-primary">
            Gallery Inspirasi Madani
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-tk-on-surface-variant">
            Setiap sudut didesain untuk kenyamanan ibadah dan harmoni keluarga Anda.
          </p>
        </div>
        <div className="auto-rows-[250px] grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((item) => (
            <div key={item.src} className={`relative ${item.className}`}>
              <img
                alt={item.alt}
                src={item.src}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:mt-14 sm:flex-row sm:flex-wrap sm:justify-center">
          <a
            href={SITE_CONTACT.waDetailUnit}
            target="_blank"
            rel="noopener noreferrer"
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
        </div>
      </div>
    </section>
  );
}
