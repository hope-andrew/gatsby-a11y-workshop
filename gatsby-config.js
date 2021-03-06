const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Building Accessible Sites with Gatsby`,
    description:
      `Learn the necessary techniques and tools for building inclusive web applications with Gatsby.`,
    author: `@marcysutton`,
  },
  pathPrefix: "/gatsby-a11y-workshop",
  plugins: [
    {
      resolve: `gatsby-theme-mdx-deck`,
      options: {
        mdx: true,
        // source directory for decks
        contentPath: `src/slides`,
        basePath: '/slides',
      },
    },
    `gatsby-plugin-sass`,
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
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-a11y-workshop`,
        short_name: `gatsbya11y`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/blueicon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // `gatsby-plugin-offline`,
  ],
}
