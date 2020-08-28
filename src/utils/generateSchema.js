import config from '../../data/SiteConfig';

export default function generateSchema(pageMeta) {
  const {
    title,
    author,
    url,
    image,
    description,
    keywords,
    createdAt,
    updatedAt,
    type = 'Article',
  } = pageMeta;

  const schema = {
    '@context': 'https://schema.org',
    '@type': type,

    ...(type === 'Person' && {
      name: author.fullName,
      url: `${config.siteUrl}/authors/${author.id}/`,
      sameAs: [`https://twitter.com/${author.twitter}`],
    }),

    ...(type !== 'Person' && {
      publisher: {
        '@type': 'Organization',
        name: config.siteTitle,
        logo: {
          '@type': 'ImageObject',
          url: `${config.siteUrl}${config.siteLogo}`,
          width: 1024,
          height: 1024,
        },
      },
      ...(author && {
        author: {
          '@type': 'Person',
          name: author.fullName,
          url: `${config.siteUrl}/authors/${author.id}/`,
          sameAs: [`https://twitter.com/${author.twitter}`],
        },
      }),
      ...(createdAt && {
        datePublished: new Date(createdAt).toISOString(),
      }),
      ...(updatedAt && {
        dateModified: new Date(updatedAt).toISOString(),
      }),

      ...(title && { headline: title }),
      url: url || `${config.siteUrl}/`,
      ...(keywords && { keywords: keywords.join(', ') }),

      image: {
        '@type': 'ImageObject',
        url: image || `${config.siteUrl}${config.siteImage}`,
        width: 1280,
        height: 720,
      },
      description: description || config.siteDescription,
    }),

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${config.siteUrl}/`,
    },
  };

  return schema;
}
