import React from 'react';
import { Helmet } from 'react-helmet';
import urljoin from 'url-join';
import config from '../../../data/SiteConfig';

const SEO = (props) => {
  const { postNode, postPath, postSEO, pageTitle } = props;
  let title = pageTitle;
  let description;
  let image;
  let postURL;
  if (postSEO) {
    const postMeta = postNode.frontmatter;
    ({ title } = postMeta);
    description = postMeta.description
      ? postMeta.description
      : postNode.excerpt;
    image = postMeta.cover || config.siteImage;
    postURL = urljoin(config.siteUrl, config.pathPrefix, postPath);
  } else {
    title = title || config.siteSlogan;
    description = config.siteDescription;
    image = config.siteImage;
  }

  image = urljoin(config.siteUrl, config.pathPrefix, image);
  const blogURL = urljoin(config.siteUrl, config.pathPrefix);
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];
  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
      }
    );
  }
  title = `${config.siteTitle} ⌇ ${title}`;
  return (
    <Helmet htmlAttributes={{ lang: 'bn' }}>
      {/* General tags */}
      <title>{`${title}`}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={`${postSEO ? postURL : blogURL}/`} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="fb:app_id"
        content={config.siteFBAppID ? config.siteFBAppID : ''}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link
        rel="preload"
        href="/assets/fonts/kalpurush.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/kalpurush.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};

export default SEO;
