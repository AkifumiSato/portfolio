let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Akifumi Sato portfolio',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "AKIFUMI SATO",
        short_name: "AKIFUMI SATO",
        start_url: "/",
        background_color: "#00C5B2",
        theme_color: "#00C5B2",
        display: "browser",
        icon: "static/favicon-32.png",
        icons: [
          {
            src: `static/favicon-32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `static/favicon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `static/favicon-512.png`,
            sizes: `512x512`,
            type: `image/svg`,
          },
        ],
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
