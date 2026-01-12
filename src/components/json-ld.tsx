export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sites Pro',
    url: 'https://sitespro.org',
    logo: 'https://sitespro.org/logo-dark.svg',
    description:
      'Product-grade websites, platforms and AI automations built to scale.',
    sameAs: [
      'https://www.linkedin.com/company/sites-pro/',
      'https://t.me/IljaFinTech',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@sitespro.org',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Europe',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sites Pro',
    url: 'https://sitespro.org',
    description:
      'Product-grade websites, platforms and AI automations built to scale.',
    publisher: {
      '@type': 'Organization',
      name: 'Sites Pro',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServicesJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        position: 1,
        name: 'Website Development',
        description:
          'High-performance websites built for growth. Scalable, fast and product-ready.',
        provider: {
          '@type': 'Organization',
          name: 'Sites Pro',
        },
        serviceType: 'Web Development',
      },
      {
        '@type': 'Service',
        position: 2,
        name: 'Web Platform Development',
        description:
          'Product-grade web applications and platforms. Built for complexity, scale and long-term use.',
        provider: {
          '@type': 'Organization',
          name: 'Sites Pro',
        },
        serviceType: 'Application Development',
      },
      {
        '@type': 'Service',
        position: 3,
        name: 'AI & Automations',
        description:
          'AI-powered automations for digital products and workflows. Reduce manual work and improve efficiency.',
        provider: {
          '@type': 'Organization',
          name: 'Sites Pro',
        },
        serviceType: 'AI Automation',
      },
      {
        '@type': 'Service',
        position: 4,
        name: 'Digital Consulting',
        description:
          'Strategic digital consulting to guide your transformation. We help you design, validate and scale digital solutions.',
        provider: {
          '@type': 'Organization',
          name: 'Sites Pro',
        },
        serviceType: 'Consulting',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
