module.exports = {
  siteMetadata: {
    title: "Tom Mitchelmore",
    titleTemplate: "%s · Tom Mitchelmore",
    author: "Tom Mitchelmore",
    description:
      "Hey! I'm Tom and I'm an undergraduate student of Computer Science at the University of Southampton in the UK.\n" +
      " Currently, alongside my studies, I work for a small game server hosting company as a systems administrator\n" +
      " and am actively learning React, Java and Python.",
    url: "https://www.tommitchelmore.me",
    twitterUsername: "@tommitchelmore_",
    theme_color: '#37308b',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify-cms'
  ],
}
