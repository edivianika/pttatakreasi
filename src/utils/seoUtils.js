/**
 * SEO Utility Functions
 * Utility untuk mengelola meta tags secara dinamis
 */

/**
 * Update document title
 */
export const updateTitle = (title) => {
  if (typeof document !== 'undefined') {
    document.title = title;
  }
};

/**
 * Update or create meta tag
 */
export const updateMetaTag = (name, content, property = false) => {
  if (typeof document === 'undefined') return;

  const attribute = property ? 'property' : 'name';
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
};

/**
 * Update Open Graph tags
 */
export const updateOGTags = (data) => {
  const {
    title,
    description,
    image,
    url,
    type = 'website',
    siteName = 'TKBM - Tata Kreasi Bangun Mandiri',
    locale = 'id_ID'
  } = data;

  if (title) updateMetaTag('og:title', title, true);
  if (description) updateMetaTag('og:description', description, true);
  if (image) updateMetaTag('og:image', image, true);
  if (url) updateMetaTag('og:url', url, true);
  updateMetaTag('og:type', type, true);
  updateMetaTag('og:site_name', siteName, true);
  updateMetaTag('og:locale', locale, true);
};

/**
 * Update Twitter Card tags
 */
export const updateTwitterTags = (data) => {
  const {
    title,
    description,
    image,
    card = 'summary_large_image'
  } = data;

  updateMetaTag('twitter:card', card, true);
  if (title) updateMetaTag('twitter:title', title, true);
  if (description) updateMetaTag('twitter:description', description, true);
  if (image) updateMetaTag('twitter:image', image, true);
};

/**
 * Update canonical URL
 */
export const updateCanonical = (url) => {
  if (typeof document === 'undefined') return;

  let link = document.querySelector('link[rel="canonical"]');
  
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
};

/**
 * Update all SEO meta tags for a page
 */
export const updatePageSEO = (config) => {
  const {
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    structuredData
  } = config;

  // Update title
  if (title) {
    updateTitle(title);
  }

  // Update basic meta tags
  if (description) {
    updateMetaTag('description', description);
  }

  if (keywords && Array.isArray(keywords)) {
    updateMetaTag('keywords', keywords.join(', '));
  }

  // Update Open Graph
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullImageUrl = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : null;
  const fullUrl = url ? (url.startsWith('http') ? url : `${baseUrl}${url}`) : null;

  updateOGTags({
    title,
    description,
    image: fullImageUrl,
    url: fullUrl || (typeof window !== 'undefined' ? window.location.href : ''),
    type
  });

  // Update Twitter Card
  updateTwitterTags({
    title,
    description,
    image: fullImageUrl
  });

  // Update canonical
  if (fullUrl) {
    updateCanonical(fullUrl);
  } else if (typeof window !== 'undefined') {
    updateCanonical(window.location.href);
  }

  // Add structured data if provided
  if (structuredData) {
    let script = document.querySelector('script[type="application/ld+json"]');
    
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData, null, 2);
  }
};

/**
 * Get structured data for real estate project
 */
export const getProjectStructuredData = (projectData) => {
  const {
    name,
    description,
    price,
    location,
    image,
    url,
    type
  } = projectData;

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": name,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ponorogo",
      "addressRegion": "Jawa Timur",
      "addressCountry": "ID",
      "streetAddress": location
    },
    "price": price,
    "priceCurrency": "IDR",
    "image": image,
    "url": url,
    "category": type,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "price": price
    },
    "seller": {
      "@type": "RealEstateAgent",
      "name": "TKBM - Tata Kreasi Bangun Mandiri",
      "url": "https://www.tatakreasi.com"
    }
  };
};

/**
 * Default SEO config for TKBM
 */
export const defaultSEOConfig = {
  siteName: 'TKBM - Tata Kreasi Bangun Mandiri',
  baseUrl: 'https://www.tatakreasi.com',
  defaultImage: '/logo.png',
  defaultTitle: 'TKBM - Developer Properti Syariah Terpercaya | Hunian Halal di Ponorogo',
  defaultDescription: 'Tata Kreasi Bumi Madani (TKBM) adalah developer properti syariah terpercaya di Ponorogo. Hunian halal tanpa riba dengan fasilitas lengkap.',
  defaultKeywords: [
    'developer properti syariah',
    'hunian halal ponorogo',
    'rumah syariah',
    'kpr syariah',
    'tanpa riba',
    'developer ponorogo'
  ]
};

