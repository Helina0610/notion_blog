/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://notion-blog-iqyn.vercel.app/",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  // ...other options
};