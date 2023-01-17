/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://nextjs-starter.roqqet.media",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
