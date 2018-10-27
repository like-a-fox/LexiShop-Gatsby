// Initialize dotenv
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});
const config = require('gatsby-plugin-config');

module.exports = {
  siteMetadata: {
    title: "Lexi's Store",
    author: "Xeiko",
    description: "Minimalist Version Of Lexi's Store"
  },
  pathPrefix: '/',
  plugins: [
      {
        resolve: 'gatsby-source-moltin',
        options: {
          key:
            process.env.MOLTIN_CLIENT_ID,
          products: ['main_image', 'brands', 'files', 'categories'],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
          name: 'pages',
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'img',
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // trackingId: `ADD YOUR TRACKING ID HERE`,
        },
      },
      {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          // Setting a color is optional.
          color: `tomato`,
          // Disable the loading spinner.
          showSpinner: false,
        },
      },
      'gatsby-plugin-styled-components',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'By The Horns Art',
          short_name: 'By The Horns',
          start_url: '/',
          icons: [
            {
              src: `/favicon-192x192.png`,
              sizes: `192x192`,
              type: `image/png`,
            },
            {
              src: `/favicon-512x512.png`,
              sizes: `512x512`,
              type: `image/png`,
            },
          ],
        },
      },
      `gatsby-plugin-offline`,
      `gatsby-plugin-react-helmet`,
      'gatsby-plugin-react-next',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    `gatsby-plugin-sass`
  ],
}
