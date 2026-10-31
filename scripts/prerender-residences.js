/* Render the same React pages and SEO data used in the browser, for every visitor. */
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { MemoryRouter } = require('react-router-dom');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'src') + path.sep;
const loadJS = require.extensions['.js'];
function loadSource(module, filename) {
  if (!filename.startsWith(source)) return loadJS(module, filename);
  const { code } = babel.transformFileSync(filename, {
    babelrc: false, configFile: false,
    presets: [[require.resolve('@babel/preset-react'), { runtime: 'automatic' }]],
    plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
  });
  module._compile(code, filename);
}
require.extensions['.js'] = loadSource;
require.extensions['.jsx'] = loadSource;
require.extensions['.css'] = () => {};

const { getResidenceSEO } = require('../src/utils/residenceSeo');
const pages = [
  ['sedah', require('../src/components/SedahResidencePage').default],
  ['narraya', require('../src/components/narraya/NarrayaPage').default],
];
const template = fs.readFileSync(path.join(root, 'build/index.html'), 'utf8');
const escape = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function meta(html, attribute, name, value) {
  // Replace both name/property variants so inherited Twitter tags cannot disagree.
  const pattern = new RegExp(`<meta\\b[^>]*(?:name|property)=["']${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`, 'gi');
  return html.replace(pattern, '').replace('</head>', `<meta ${attribute}="${name}" content="${escape(value)}" /></head>`);
}

for (const [key, Component] of pages) {
  const seo = getResidenceSEO(key);
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escape(seo.title)}</title>`);
  const values = {
    title: seo.title, description: seo.description, keywords: seo.keywords.join(', '),
    'twitter:card': 'summary_large_image', 'twitter:url': seo.url,
    'twitter:title': seo.title, 'twitter:description': seo.description,
    'twitter:image': seo.image, 'twitter:image:alt': seo.imageAlt,
    'theme-color': seo.themeColor,
  };
  for (const [name, value] of Object.entries(values)) html = meta(html, 'name', name, value);
  const og = {
    'og:type': 'website', 'og:locale': 'id_ID', 'og:site_name': 'Tata Kreasi',
    'og:title': seo.title, 'og:description': seo.description, 'og:url': seo.url,
    'og:image': seo.image, 'og:image:alt': seo.imageAlt,
  };
  for (const [name, value] of Object.entries(og)) html = meta(html, 'property', name, value);
  html = html.replace(/<meta\b[^>]*name=["'](?:geo.position|ICBM)["'][^>]*>/gi, '');
  // No inherited image dimensions: the selected project images have different ratios.
  html = html.replace(/<meta\b[^>]*property=["']og:image:(?:width|height)["'][^>]*>/gi, '');
  html = html.replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, '');
  html = html.replace(/<link\b[^>]*rel=["']alternate["'][^>]*hreflang=["'][^"']*["'][^>]*>/gi, '');
  const graph = JSON.stringify(seo.structuredData).replace(/</g, '\\u003c');
  html = html.replace('</head>', `<link rel="canonical" href="${seo.url}" /><link rel="alternate" hreflang="id" href="${seo.url}" /><link rel="alternate" hreflang="x-default" href="${seo.url}" /><script type="application/ld+json" id="page-jsonld">${graph}</script></head>`);
  const content = renderToString(React.createElement(MemoryRouter, { initialEntries: [seo.path] }, React.createElement(Component)));
  if (!html.includes('<div id="root"></div>')) throw new Error('Build template root was not found');
  html = html.replace('<div id="root"></div>', () => `<div id="root">${content}</div>`);
  html = html.replace('<noscript>You need to enable JavaScript to run this app.</noscript>', '<noscript>Informasi proyek tersedia di halaman ini. Aktifkan JavaScript untuk menggunakan denah interaktif dan virtual tour.</noscript>');
  const directory = path.join(root, 'build', seo.path.slice(1));
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), html);
  console.log(`Rendered SEO HTML: ${seo.path}`);
}
