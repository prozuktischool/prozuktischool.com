const urljoin = require('url-join');
const config = require('./data/SiteConfig');

module.exports = {
  pathPrefix: config.pathPrefix === '' ? '/' : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    baseEditURL: config.baseEditURL,
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix
      )}/logos/logo-512.png`,
      copyright: config.copyright,
    },
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorYaml`,
  },
  plugins: [
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        commonmark: true,
        footnotes: true,
        pedantic: false,
        gfm: true,
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg version="1.1" x="0px" y="0px" viewBox="0 0 162.656 162.656" xml:space="preserve" width="0.6em" height="0.6em" fill="#7950F2" stroke="#7950F2" stroke-width="0"><path d="M151.764,10.894c-14.522-14.522-38.152-14.525-52.676-0.008l0.003,0.003L76.112,33.872l10.607,10.605l22.983-22.988 l-0.002-0.002c8.678-8.663,22.785-8.658,31.457,0.014c8.673,8.672,8.672,22.786,0,31.461l-34.486,34.484 c-4.201,4.202-9.787,6.516-15.729,6.516c-5.942,0-11.529-2.314-15.73-6.516L64.605,98.052c7.035,7.035,16.389,10.91,26.338,10.91 c9.949,0,19.303-3.875,26.335-10.91l34.487-34.484C166.284,49.043,166.284,25.413,151.764,10.894z"></path> <path d="M52.96,141.162L52.96,141.162c-8.675,8.67-22.788,8.668-31.461-0.005c-8.673-8.675-8.673-22.791-0.001-31.465L55.98,75.21 c8.675-8.674,22.789-8.674,31.462,0L98.05,64.604c-14.524-14.523-38.154-14.524-52.676,0L10.89,99.086 c-14.519,14.523-14.519,38.154,0.001,52.678c7.263,7.262,16.801,10.893,26.341,10.892c9.536,0,19.074-3.629,26.333-10.887 l0.002-0.001l22.984-22.99l-10.608-10.606L52.96,141.162z"></path> </svg>`,
              className: `header-anchor-icon`,
            },
          },
          'gatsby-remark-prismjs',
        ],
        defaultLayouts: {
          default: require.resolve('./src/views/layouts/MainLayout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg version="1.1" x="0px" y="0px" viewBox="0 0 162.656 162.656" xml:space="preserve" width="0.6em" height="0.6em" fill="#7950F2" stroke="#7950F2" stroke-width="0"><path d="M151.764,10.894c-14.522-14.522-38.152-14.525-52.676-0.008l0.003,0.003L76.112,33.872l10.607,10.605l22.983-22.988 l-0.002-0.002c8.678-8.663,22.785-8.658,31.457,0.014c8.673,8.672,8.672,22.786,0,31.461l-34.486,34.484 c-4.201,4.202-9.787,6.516-15.729,6.516c-5.942,0-11.529-2.314-15.73-6.516L64.605,98.052c7.035,7.035,16.389,10.91,26.338,10.91 c9.949,0,19.303-3.875,26.335-10.91l34.487-34.484C166.284,49.043,166.284,25.413,151.764,10.894z"></path> <path d="M52.96,141.162L52.96,141.162c-8.675,8.67-22.788,8.668-31.461-0.005c-8.673-8.675-8.673-22.791-0.001-31.465L55.98,75.21 c8.675-8.674,22.789-8.674,31.462,0L98.05,64.604c-14.524-14.523-38.154-14.524-52.676,0L10.89,99.086 c-14.519,14.523-14.519,38.154,0.001,52.678c7.263,7.262,16.801,10.893,26.341,10.892c9.536,0,19.074-3.629,26.333-10.887 l0.002-0.001l22.984-22.99l-10.608-10.606L52.96,141.162z"></path> </svg>`,
              className: `header-anchor-icon`,
            },
          },
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [config.googleAnalyticsID],
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    'gatsby-plugin-preact',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: '/logos/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logos/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/logos/logo-1024x1024.png',
            sizes: '1024x1024',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = 'প্রযুক্তি স্কুল';
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allMarkdownRemark.edges.map((edge) => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.fields.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                url: rssMetadata.site_url + edge.node.fields.slug,
                guid: rssMetadata.site_url + edge.node.fields.slug,
                custom_elements: [
                  { 'content:encoded': edge.node.html },
                  { author: config.userEmail },
                ],
              }));
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [fields___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields {
                      slug
                      date
                    }
                    frontmatter {
                      title
                      cover
                      date
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: config.siteRss,
            title: config.siteTitle,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [`PT Serif`, `Fira Code`],
        display: 'swap',
        attributes: {
          rel: 'stylesheet preload',
          onLoad: "this.onload=null;this.rel='stylesheet'",
          as: 'style',
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ],
};
