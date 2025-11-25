/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://exam-galaxy.vercel.app",
  generateRobotsTxt: true,
  // sitemapSize: 7000, // optional
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  additionalSitemaps:[
    "https://exam-galaxy.vercel.app/sitemap.xml",
    "https://exam-galaxy.vercel.app/myfile.xml",
    "https://exam-galaxy.vercel.app/myfile2.xml",
  ]
};
