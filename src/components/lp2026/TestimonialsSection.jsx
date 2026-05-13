import { useEffect } from "react";

const PERMALINKS = [
  "https://www.instagram.com/reel/DP6Ajq2iVzN/?utm_source=ig_embed&utm_campaign=loading",
  "https://www.instagram.com/reel/DTGzRpzExZp/?utm_source=ig_embed&utm_campaign=loading",
];

const embedBlockStyle = {
  background: "#FFF",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
  margin: 1,
  maxWidth: "min(540px, 100%)",
  minWidth: 0,
  padding: 0,
  width: "100%",
  boxSizing: "border-box",
};

function processInstagramEmbeds() {
  window.instgrm?.Embeds?.process();
}

export function TestimonialsSection() {
  useEffect(() => {
    const existing =
      document.querySelector('script[src="https://www.instagram.com/embed.js"]') ??
      document.querySelector('script[src="//www.instagram.com/embed.js"]');

    if (existing) {
      processInstagramEmbeds();
      return undefined;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    script.onload = processInstagramEmbeds;
    document.body.appendChild(script);

    return undefined;
  }, []);

  return (
    <section
      id="testimoni"
      className="border-y border-tk-outline-variant/40 bg-tk-surface-container-low/60 py-section-gap"
    >
      <div className="mx-auto w-full min-w-0 max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 text-center md:mb-16">
          <p className="font-tk-body text-tk-label-md mb-3 uppercase tracking-widest text-tk-secondary">
            Testimonial
          </p>
          <h2 className="font-tk-headline text-tk-headline-lg text-tk-primary md:leading-tight">
            Kisah Bahagia Keluarga Madani
          </h2>
          <p className="font-tk-body text-tk-body-md mx-auto mt-4 max-w-2xl text-tk-on-surface-variant">
            Mendengarkan langsung pengalaman mereka yang telah mewujudkan hunian impian tanpa riba.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 justify-items-stretch gap-8 sm:justify-items-center lg:grid-cols-2 lg:gap-10">
          {PERMALINKS.map((permalink) => (
            <div
              key={permalink}
              className="min-w-0 w-full max-w-[540px] justify-self-center overflow-hidden rounded-[2rem] border border-tk-outline-variant/50 bg-white p-4 shadow-md ring-1 ring-black/[0.03] sm:p-6"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={permalink}
                data-instgrm-version="14"
                style={embedBlockStyle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
