import React from 'react';
import { Helmet } from 'react-helmet';
import urljoin from 'url-join';
import config from '../../../data/SiteConfig';
import { generateSchema } from '../../utils';

const SEO = (props) => {
  const { postNode, postSEO, pageType } = props;

  let {
    pagePath: url = '/',
    pageTitle: title,
    author,
    description,
    image,
    keywords,
    createdAt,
    updatedAt,
  } = props;

  if (postSEO) {
    const postMeta = postNode.frontmatter;
    ({
      title,
      date: createdAt,
      updatedAt,
      author,
      tags: keywords,
      id: url,
    } = postMeta);
    description = postMeta.description
      ? postMeta.description
      : postNode.excerpt;
    image = postMeta.cover || config.siteImage;
  } else {
    title = title || config.siteSlogan;
    description = config.siteDescription;
    image = config.siteImage;
  }

  image = urljoin(config.siteUrl, config.pathPrefix, image);
  url = urljoin(config.siteUrl, config.pathPrefix, url);

  title = `${config.siteTitle} ⌇ ${title}`;

  const schemaOrgJSONLD = generateSchema({
    author,
    image,
    description,
    url,
    title,
    keywords,
    updatedAt,
    createdAt,
    type: pageType,
  });

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
      <meta property="og:url" content={`${url}`} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
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
        href="https://cdn.statically.io/gh/sh4hids/bangla-web-fonts/3001c8a97c10c7361df532d076bd8dc4c50219ae/kalpurush/kalpurush.css"
        rel="stylesheet preload"
        crossOrigin="anonymous"
        as="style"
      />
    </Helmet>
  );
};

export default SEO;
