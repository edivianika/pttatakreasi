import { useEffect } from "react";

import { SITE_CONTACT } from "../../constants/siteLp2026";
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

export default function Lp2026Page() {
  useEffect(() => {
    document.body.classList.add("lp2026-scroll");
    return () => {
      document.body.classList.remove("lp2026-scroll");
    };
  }, []);

  return (
    <div className="lp2026-root min-h-screen bg-tk-background text-tk-on-background selection:bg-tk-primary-fixed selection:text-tk-primary">
      <SiteHeader />
      <main className="lp2026-main">
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
