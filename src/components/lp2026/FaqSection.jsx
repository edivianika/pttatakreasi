import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Bagaimana skema pembayaran syariah di Tata Kreasi?",
    a: "Kami menggunakan akad murni jual beli atau sewa beli tanpa melibatkan bank pihak ketiga. Anda mencicil langsung ke developer dengan harga yang sudah disepakati di awal tanpa ada bunga atau denda.",
  },
  {
    q: "Apakah saya bisa mendesain ulang layout rumah?",
    a: "Tentu. Kami menyediakan layanan free custom denah bagian dalam sesuai kebutuhan keluarga Anda, selama tidak merubah tampak depan (fasad) bangunan.",
  },
  {
    q: "Berapa lama estimasi waktu serah terima unit?",
    a: "Untuk unit indent, estimasi pembangunan adalah 4-6 bulan setelah DP lunas atau sesuai kesepakatan akad. Kami juga memiliki unit ready stock yang siap huni.",
  },
  {
    q: "Bagaimana dengan legalitas sertifikat?",
    a: "Sertifikat Hak Milik (SHM) dan IMB sudah pecah per kavling. Anda dapat langsung melihat legalitasnya di kantor kami sebelum melakukan transaksi.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-tk-surface-container-low py-section-gap">
      <div className="mx-auto max-w-3xl px-margin-mobile md:px-margin-desktop">
        <h2 className="font-tk-headline text-tk-headline-lg mb-12 text-center text-tk-primary">
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
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-tk-surface-container"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                >
                  <span className="font-tk-headline text-xl font-bold text-tk-primary">{item.q}</span>
                  <ChevronDown
                    className={`h-6 w-6 shrink-0 text-tk-primary transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    strokeWidth={2}
                    aria-hidden
                  />
                </button>
                {open ? (
                  <div className="font-tk-body text-tk-body-md px-6 pb-6 leading-relaxed text-tk-on-surface-variant">
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
