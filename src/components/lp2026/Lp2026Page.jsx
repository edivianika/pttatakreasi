import { useEffect } from "react";

import {
  LP2026_EXCLUSIVE_PROJECTS,
  projectPosterUrl,
} from "../../constants/lp2026Projects";
import { LP2026_SEO, SITE_CONTACT } from "../../constants/siteLp2026";
import {
  removeJsonLdScript,
  setJsonLdScript,
  updateCanonical,
  updateMetaTag,
  updateOGTags,
  updateTitle,
  updateTwitterTags,
} from "../../utils/seoUtils";
import "../../styles/lp2026.css";
import { AdvantagesSection } from "./AdvantagesSection";
import { CtaBand } from "./CtaBand";
import { FaqSection } from "./FaqSection";
import { GallerySection } from "./GallerySection";
import { HeroSection } from "./HeroSection";
import { PrinciplesSection } from "./PrinciplesSection";
import { ProjectsSection } from "./ProjectsSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { TestimonialsSection } from "./TestimonialsSection";

export default function Lp2026Page() {
  useEffect(() => {
    document.body.classList.add("lp2026-scroll");
    return () => {
      document.body.classList.remove("lp2026-scroll");
    };
  }, []);

  useEffect(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://www.tatakreasi.com";
    const canonicalUrl = `${origin}/`;
    const imageUrl = `${origin}${LP2026_SEO.ogImagePath}`;

    updateTitle(LP2026_SEO.title);
    updateMetaTag("title", LP2026_SEO.title);
    updateMetaTag("description", LP2026_SEO.description);
    updateMetaTag("keywords", LP2026_SEO.keywords);

    updateOGTags({
      title: LP2026_SEO.title,
      description: LP2026_SEO.description,
      image: imageUrl,
      url: canonicalUrl,
      siteName: "Tata Kreasi",
      locale: "id_ID",
    });
    updateTwitterTags({
      title: LP2026_SEO.title,
      description: LP2026_SEO.description,
      image: imageUrl,
    });
    updateCanonical(canonicalUrl);

    const projectsListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Proyek hunian syariah Ponorogo — Tata Kreasi",
      description: LP2026_SEO.description,
      url: canonicalUrl,
      numberOfItems: LP2026_EXCLUSIVE_PROJECTS.length,
      itemListElement: LP2026_EXCLUSIVE_PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: project.name,
          description: project.seoDescription,
          image: projectPosterUrl(origin, project.imageBase),
          brand: {
            "@type": "Organization",
            name: "Tata Kreasi",
          },
          category: "Residential Real Estate",
        },
      })),
    };

    setJsonLdScript("lp2026-projects-itemlist", projectsListSchema);

    return () => {
      removeJsonLdScript("lp2026-projects-itemlist");
    };
  }, []);

  return (
    <div className="lp2026-root min-h-screen w-full min-w-0 overflow-x-clip bg-tk-background text-tk-on-background selection:bg-tk-primary-fixed selection:text-tk-primary">
      <SiteHeader />
      <main className="lp2026-main min-w-0">
        <HeroSection />
        <AdvantagesSection />
        <PrinciplesSection />
        <CtaBand
          variant="light"
          eyebrow="Langkah berikutnya"
          heading="Diskusikan skema syariah yang sesuai untuk keluarga Anda"
          description="Tim kami membantu menjelaskan pilihan unit, akad, dan jadwal pembayaran — tanpa riba, tanpa tekanan. Lebih cepat lewat WhatsApp."
          primaryLabel="Chat WhatsApp tim kami"
          primaryHref={SITE_CONTACT.waDiskusiSkema}
          secondaryLabel="Lihat proyek Ponorogo"
        />
        <ProjectsSection />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection />
        <CtaBand
          id="cta-closing"
          variant="dark"
          eyebrow="Masih ragu?"
          heading="Siap memilih hunian berkah di Ponorogo?"
          description="Konsultasi gratis via WhatsApp: kami pandu dari pemilihan proyek hingga gambaran akad dan legalitas."
          primaryLabel="Mulai chat WhatsApp"
          primaryHref={SITE_CONTACT.waSiapHuni}
          secondaryLabel="Lihat unit & harga"
          showSecondWhatsapp
          secondWhatsappLabel="Pertanyaan singkat"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
