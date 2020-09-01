const { convertNumbers } = require('bn-number-utils');

const config = {
  siteTitle: 'প্রযুক্তি স্কুল',
  siteTitleShort: 'প্রযুক্তি স্কুল',
  siteSlogan: 'শিখতে চাই, তাই শেখাই :)',
  siteTitleAlt: 'প্রযুক্তি স্কুল',
  siteLogo: '/logos/logo-1024.png',
  siteImage: '/assets/images/seo-bg.jpg',
  siteUrl: 'https://prozuktischool.com/',
  siteHost: 'prozuktischool.com',
  pathPrefix: '/',
  siteDescription:
    'বাংলা ভাষাভাষী মানুষদের জন্য প্রযুক্তি শেখার ও শেখানোর পাঠশালা',
  siteRss: '/rss.xml',
  siteFBAppID: '265319551346158',
  googleAnalyticsID: 'UA-129538625-1',
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY',
  userTwitter: 'prozuktischool',
  themeColor: '#7950F2',
  backgroundColor: '#1c1826',
  baseEditURL:
    'https://github.com/bdTechies/prozuktischool.com/edit/develop/content',
  copyright: `লেখস্বত্ব &copy;
  ${convertNumbers(2016)} - ${convertNumbers(new Date().getFullYear())}
  <a href="https://prozuktischool.com/">প্রযুক্তি স্কুল</a>`,
};

if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
