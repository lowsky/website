module.exports = {
  siteMetadata: {
    title: `JSCraftCamp - 19+20 July 2019 in Munich`,
    description: `draft of new website for JSCraftCamp - 19+20 July 2019 in Munich.`,
    author: `@rhosts`,
  },
  pathPrefix: '/JSCraftCamp-site',
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JSCraftCamp - 19+20 July 2019 in Munich`,
        short_name: `JSCraftCamp`,
        start_url: `/`,
        background_color: `#ececec`,
        theme_color: `#ececec`,
        display: `minimal-ui`,
        icon: `src/images/jscc-logo-2019.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
