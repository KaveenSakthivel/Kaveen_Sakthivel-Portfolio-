// SEO Utilities for Kaveen Portfolio

export const seoConfig = {
  siteName: 'Kaveen Sakthivel | Digital Marketing & SEO Specialist',
  siteUrl: 'https://kaveen-portfolio.manus.space',
  description: 'Digital Marketing Specialist helping brands grow through SEO, content marketing, and data-driven strategies.',
  keywords: 'Digital Marketing, SEO Specialist, Content Marketing, Social Media Marketing, Business Development',
  author: 'Kaveen Sakthivel',
  location: 'Coimbatore, Tamil Nadu',
};

export const updateMetaTags = (title: string, description: string, keywords?: string) => {
  // Update title
  document.title = title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
  
  // Update meta keywords
  if (keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  }
};

export const generateSchemaMarkup = (type: string, data: any) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Kaveen Sakthivel',
    jobTitle: 'Digital Marketing Specialist | SEO Specialist',
    url: seoConfig.siteUrl,
    sameAs: ['https://linkedin.com/in/kaveen-sakthivel'],
    location: {
      '@type': 'Place',
      name: seoConfig.location,
    },
  };
  
  return { ...baseSchema, ...data };
};

export const structuredData = {
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kaveen Sakthivel',
    jobTitle: 'Digital Marketing Specialist | SEO Specialist',
    url: seoConfig.siteUrl,
    sameAs: ['https://linkedin.com/in/kaveen-sakthivel'],
    location: {
      '@type': 'Place',
      name: seoConfig.location,
    },
  },
  
  service: (title: string, description: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: description,
    provider: {
      '@type': 'Person',
      name: 'Kaveen Sakthivel',
    },
  }),
  
  article: (title: string, description: string, datePublished: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: datePublished,
    author: {
      '@type': 'Person',
      name: 'Kaveen Sakthivel',
    },
  }),
};
