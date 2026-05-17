const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(__dirname, "..", "build");
const indexPath = path.join(buildDir, "index.html");
const routeDir = path.join(buildDir, "sedah-green-residence");
const routePath = path.join(routeDir, "index.html");

const seo = {
  title: "Sedah Green Residence | Rumah Syariah Ponorogo Tanpa Riba",
  description:
    "Sedah Green Residence adalah hunian syariah di Ponorogo untuk keluarga Muslim. Skema tanpa riba, tanpa denda, tanpa sita. Cek pricelist dan jadwalkan survey lokasi.",
  keywords:
    "sedah green residence, rumah syariah ponorogo, perumahan syariah ponorogo, rumah tanpa riba ponorogo, rumah keluarga muslim ponorogo",
  canonical: "https://www.tatakreasi.com/sedah-green-residence",
  image: "https://www.tatakreasi.com/images/projects/sedah-green-800.jpg",
  whatsapp:
    "https://wa.me/6287716154900?text=Assalamualaikum%2C%20saya%20tertarik%20dengan%20Sedah%20Green%20Residence.%20Mohon%20info%20pricelist%2C%20unit%20tersedia%2C%20dan%20jadwal%20survey%20lokasinya.",
};

function replaceTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
}

function replaceMetaName(html, name, content) {
  const escaped = escapeAttr(content);
  const pattern = new RegExp(`<meta\\s+name=["']${escapeRegExp(name)}["'][^>]*>`, "i");
  const tag = `<meta name="${name}" content="${escaped}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `        ${tag}\n    </head>`);
}

function replaceMetaProperty(html, property, content) {
  const escaped = escapeAttr(content);
  const pattern = new RegExp(`<meta\\s+property=["']${escapeRegExp(property)}["'][^>]*>`, "i");
  const tag = `<meta property="${property}" content="${escaped}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `        ${tag}\n    </head>`);
}

function replaceCanonical(html, href) {
  const tag = `<link rel="canonical" href="${escapeAttr(href)}" />`;
  return html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, tag);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const prerenderStyles = `
        <style id="sedah-green-prerender-style">
            .sedah-prerender {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                color: #123225;
                background: #fbf8f1;
                line-height: 1.6;
                padding: 28px 18px 48px;
            }
            .sedah-prerender__wrap {
                max-width: 980px;
                margin: 0 auto;
            }
            .sedah-prerender h1 {
                font-size: clamp(2rem, 6vw, 3.75rem);
                line-height: 1.08;
                margin: 18px 0;
            }
            .sedah-prerender h2 {
                font-size: 1.45rem;
                margin: 30px 0 12px;
            }
            .sedah-prerender p {
                color: #596755;
                margin: 0 0 12px;
            }
            .sedah-prerender ul {
                padding-left: 1.15rem;
            }
            .sedah-prerender li {
                margin: 0.35rem 0;
            }
            .sedah-prerender a {
                color: #123225;
                font-weight: 700;
            }
            .sedah-prerender__cta {
                display: inline-block;
                margin: 16px 0 8px;
                padding: 13px 20px;
                border-radius: 999px;
                background: #123225;
                color: #fff !important;
                text-decoration: none;
            }
            .sedah-prerender__grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: 14px;
                margin: 18px 0;
            }
            .sedah-prerender__card {
                border: 1px solid #eadfca;
                border-radius: 8px;
                background: #fff;
                padding: 16px;
            }
            .sedah-prerender__image {
                max-width: 100%;
                border-radius: 8px;
                margin: 18px 0;
            }
        </style>`;

const staticContent = `
        <main class="sedah-prerender" data-prerender="sedah-green-residence">
            <div class="sedah-prerender__wrap">
                <p><strong>Tata Kreasi / PT Tata Kreasi Bumi Madani</strong></p>
                <h1>Rumah Syariah Nyaman di Ponorogo untuk Keluarga Muslim</h1>
                <p>
                    Sedah Green Residence adalah hunian syariah di Sedah, Ponorogo
                    dengan akad syar'i: tanpa riba, tanpa denda, dan tanpa sita.
                    Calon pembeli dapat mengecek pricelist, stok unit, pilihan tipe,
                    dan jadwal survey lokasi melalui WhatsApp.
                </p>
                <a class="sedah-prerender__cta" href="${seo.whatsapp}">
                    Cek Pricelist &amp; Unit Tersedia
                </a>
                <img
                    class="sedah-prerender__image"
                    src="/sedah/sedah green residence-perumahan syariah ponorogo.png"
                    alt="Kawasan Sedah Green Residence Ponorogo"
                    width="800"
                    height="533"
                />

                <section>
                    <h2>Harga, tipe, dan survey Sedah Green Residence</h2>
                    <div class="sedah-prerender__grid">
                        <article class="sedah-prerender__card">
                            <h3>Mulai Rp 204 jutaan</h3>
                            <p>
                                Harga promo dapat berubah: Tipe 36/66 mulai Rp 204.674.887
                                dan Tipe 45/77 mulai Rp 231.401.929.
                            </p>
                        </article>
                        <article class="sedah-prerender__card">
                            <h3>Tipe 36/66 dan 45/77</h3>
                            <p>
                                Dua pilihan rumah untuk keluarga muda atau keluarga yang
                                membutuhkan ruang lebih lega.
                            </p>
                        </article>
                        <article class="sedah-prerender__card">
                            <h3>Bonus siap huni</h3>
                            <p>Bonus pembelian: free canopy, tandon air, dan listrik 1300 watt.</p>
                        </article>
                        <article class="sedah-prerender__card">
                            <h3>Bisa survey lokasi</h3>
                            <p>
                                Lihat virtual tour lebih dulu, lalu jadwalkan kunjungan jika
                                cocok dengan kebutuhan keluarga.
                            </p>
                        </article>
                    </div>
                </section>

                <section>
                    <h2>Lokasi dan visual kawasan</h2>
                    <p>
                        Sedah Green Residence berada di Sedah, Ponorogo. Tersedia
                        <a href="/sedah-virtual">virtual tour Sedah Green Residence</a>
                        sebagai gambaran awal sebelum survey lokasi.
                    </p>
                    <p>
                        Siteplan dan detail rute survey dapat diminta melalui WhatsApp
                        Tata Kreasi.
                    </p>
                </section>

                <section>
                    <h2>Skema syariah</h2>
                    <ul>
                        <li>Akad dibicarakan jelas di awal.</li>
                        <li>Tanpa riba.</li>
                        <li>Tanpa denda keterlambatan.</li>
                        <li>Tanpa sita.</li>
                    </ul>
                </section>

                <section>
                    <h2>Pertanyaan umum</h2>
                    <h3>Bagaimana cara cek pricelist dan unit tersedia?</h3>
                    <p>
                        Klik tombol WhatsApp untuk meminta pricelist terbaru, stok unit,
                        dan jadwal survey lokasi.
                    </p>
                    <h3>Apakah bisa survey lokasi dulu?</h3>
                    <p>
                        Bisa. Tim Tata Kreasi dapat membantu mengatur jadwal survey lokasi
                        di Sedah, Ponorogo.
                    </p>
                </section>
            </div>
        </main>`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Sedah Green Residence",
  description: seo.description,
  image: seo.image,
  url: seo.canonical,
  brand: {
    "@type": "Brand",
    name: "Tata Kreasi",
  },
  category: "Residential Real Estate",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "IDR",
    lowPrice: "204674887",
    highPrice: "231401929",
    availability: "https://schema.org/InStock",
    url: seo.canonical,
  },
};

if (!fs.existsSync(indexPath)) {
  console.error("Build index.html not found. Run this script after `npm run build`.");
  process.exit(1);
}

let html = fs.readFileSync(indexPath, "utf8");

html = replaceTitle(html, seo.title);
html = replaceMetaName(html, "title", seo.title);
html = replaceMetaName(html, "description", seo.description);
html = replaceMetaName(html, "keywords", seo.keywords);
html = replaceMetaName(html, "twitter:url", seo.canonical);
html = replaceMetaName(html, "twitter:title", seo.title);
html = replaceMetaName(html, "twitter:description", seo.description);
html = replaceMetaName(html, "twitter:image", seo.image);
html = replaceMetaName(html, "twitter:image:alt", "Sedah Green Residence - rumah syariah Ponorogo tanpa riba");
html = replaceMetaProperty(html, "og:url", seo.canonical);
html = replaceMetaProperty(html, "og:title", seo.title);
html = replaceMetaProperty(html, "og:description", seo.description);
html = replaceMetaProperty(html, "og:image", seo.image);
html = replaceMetaProperty(html, "og:image:width", "640");
html = replaceMetaProperty(html, "og:image:height", "800");
html = replaceMetaProperty(html, "og:image:alt", "Sedah Green Residence - rumah syariah Ponorogo tanpa riba");
html = replaceCanonical(html, seo.canonical);
html = html.replace(
  /<link\s+rel=["']alternate["']\s+hreflang=["']id["'][^>]*>/i,
  `<link rel="alternate" hreflang="id" href="${seo.canonical}" />`
);
html = html.replace(
  /<link\s+rel=["']alternate["']\s+hreflang=["']x-default["'][^>]*>/i,
  `<link rel="alternate" hreflang="x-default" href="${seo.canonical}" />`
);
html = html.replace("</head>", `${prerenderStyles}\n        <script type="application/ld+json" id="sedah-green-prerender-jsonld">${JSON.stringify(structuredData)}</script>\n    </head>`);
html = html.replace(
  "<noscript>You need to enable JavaScript to run this app.</noscript>",
  `<noscript><p>Sedah Green Residence dapat dibaca tanpa JavaScript. Gunakan tautan WhatsApp di halaman ini untuk cek pricelist dan unit tersedia.</p></noscript>`
);
html = html.replace('<div id="root"></div>', `<div id="root">${staticContent}</div>`);

fs.mkdirSync(routeDir, { recursive: true });
fs.writeFileSync(routePath, html);

console.log(`Pre-rendered Sedah Green Residence route: ${path.relative(process.cwd(), routePath)}`);
