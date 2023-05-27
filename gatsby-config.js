/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `SFL Website v2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-mdx",
  //"gatsby-plugin-google-gtag", 
  "gatsby-plugin-sitemap",  
  "gatsby-plugin-sass",
  "gatsby-plugin-antd",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};