const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const prismicHtmlSerializer = require("./src/gatsby/htmlSerializer")
const prismicLinkResolver = require("./src/gatsby/linkResolver")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Donner Son Travail | Une aventure philanthropique `,
    description: `Bienvenue dans mon aventure philanthropique qui est partie d’une réflexion sur mon engagement dans ma société et qui s’est transformée en l’idée que je vous expose dans ce site.`,
    author: `@romain`,
    siteUrl: `https://donnersontravail.com/presentation`,
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-emotion",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "bruno-site",
        accessToken: `${process.env.API_KEY}`,
        // Get the correct URLs in blog posts
        shouldDownloadImage: () => true,

        // PrismJS highlighting for labels and slices
        // Get the correct URLs in blog posts
        linkResolver: () => prismicLinkResolver,
        // PrismJS highlighting for labels and slices
        htmlSerializer: () => prismicHtmlSerializer,

        schemas: {
          homepage: require("./src/schemas/homepage.json"),
          menu: require("./src/schemas/menu.json"),
          page_1: require("./src/schemas/page_1.json"),
          page_2: require("./src/schemas/page_2.json"),
          page_3: require("./src/schemas/page_3.json"),
          page_4: require("./src/schemas/page_4.json"),
          page_5: require("./src/schemas/page_5.json"),
          page_6: require("./src/schemas/page_6.json"),
          page_7: require("./src/schemas/page_7.json"),
          page_8: require("./src/schemas/page_8.json"),
          page_9: require("./src/schemas/page_9.json"),
          page_10: require("./src/schemas/page_10.json"),
          page_11: require("./src/schemas/page_11.json"),
          page_12: require("./src/schemas/page_12.json"),
          page_13: require("./src/schemas/page_13.json"),
          page_14: require("./src/schemas/page_14.json"),
          page_15: require("./src/schemas/page_15.json"),
          page_16: require("./src/schemas/page_16.json"),
          page_17: require("./src/schemas/page_17.json"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "~": path.join(__dirname, "src/"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bruno-website`,
        short_name: `bruno`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
    `gatsby-plugin-eslint`,
    "gatsby-plugin-offline",
  ],
}
