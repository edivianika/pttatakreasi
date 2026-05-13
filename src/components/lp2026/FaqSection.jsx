import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Bagaimana skema pembayaran syariah di Tata Kreasi?",
    a: "Kami memakai akad jual beli atau sewa beli murni ke developer—tanpa perantara bank, tanpa bunga, dan tanpa pola angsuran yang menyertakan riba. Nominal cicilan dan jadwalnya transparan sejak awal sesuai kesepakatan akad.",
  },
  {
    q: "Apakah saya bisa mengubah layout atau denah rumah?",
    a: "Bisa. Tersedia layanan konsultasi denah bagian dalam (custom) agar sesuai kebutuhan keluarga, tanpa biaya tambahan untuk penyesuaian wajar—dengan catatan tidak mengubah tampak depan (fasad) yang sudah ditetapkan kawasan.",
  },
  {
    q: "Apakah benar garansinya 5 tahun?",
    a: "Ya. Kami memberikan garansi struktur bangunan hingga 5 tahun sejak serah terima kunci, sesuai ketentuan yang tercantum di dokumen pembelian. Cakupan dan pengecualian dijelaskan saat presentasi unit agar Anda jelas sebelum menandatangani—silakan tanyakan detailnya ke tim sales kami.",
  },
  {
    q: "Apakah ada denda jika cicilan terlambat?",
    a: "Skema kami dirancang tanpa denda bank dan tanpa sanksi bunga. Keterlambatan dibahas berdasarkan komunikasi dan itikad baik sesuai kesepakatan akad syariah; fokus kami menjaga kejelasan jadwal dan solusi yang adil, bukan membebani penalti seperti pola konvensional.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-tk-surface-container-low py-section-gap">
      <div className="mx-auto max-w-3xl px-margin-mobile md:px-margin-desktop">
        <h2 className="font-tk-headline text-tk-headline-lg mb-8 text-center text-tk-primary md:mb-12">
          Pertanyaan Populer
        </h2>
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-tk-outline-variant bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-tk-surface-container sm:gap-4 sm:p-5 md:p-6"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                >
                  <span className="font-tk-headline text-base font-bold leading-snug text-tk-primary sm:text-lg md:text-xl">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-tk-primary transition-transform duration-200 sm:h-6 sm:w-6 ${open ? "rotate-180" : ""}`}
                    strokeWidth={2}
                    aria-hidden
                  />
                </button>
                {open ? (
                  <div className="font-tk-body text-tk-body-md px-4 pb-4 pt-0 leading-relaxed text-tk-on-surface-variant sm:px-5 sm:pb-5 md:px-6 md:pb-6">
                    {item.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
