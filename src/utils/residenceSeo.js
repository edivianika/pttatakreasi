import residences from '../data/residenceSeo.json';

const origin = 'https://www.tatakreasi.com';

// Shared by browser navigation and the build-time HTML renderer.
export function getResidenceSEO(key) {
  const project = residences[key];
  const url = `${origin}${project.path}`;
  const image = `${origin}${project.image}`;
  const projectId = `${url}#residence`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url,
        name: project.title, description: project.description, inLanguage: 'id-ID',
        isPartOf: { '@id': `${origin}/#website` },
        publisher: { '@id': `${origin}/#organization` },
        mainEntity: { '@id': projectId },
        primaryImageOfPage: { '@type': 'ImageObject', url: image, caption: project.imageAlt },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'ResidentialComplex', '@id': projectId,
        name: project.name, description: project.description, url, image,
        address: {
          '@type': 'PostalAddress', streetAddress: project.streetAddress,
          addressLocality: 'Ponorogo', addressRegion: 'Jawa Timur', addressCountry: 'ID',
        },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Tata Kreasi', item: `${origin}/` },
          { '@type': 'ListItem', position: 2, name: project.name, item: url },
        ],
      },
    ],
  };
  return { ...project, url, image, structuredData, siteName: 'Tata Kreasi', omitGeoCoordinates: true };
}
