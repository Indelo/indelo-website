// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Indelo | Development agency',
    titleTemplate: '%s - Indelo | Development agency',
    description:
      'Indelo is a software development and design agency based in Cape Town, South Africa.',
    siteUrl: 'https://indelo.co.za',
    image: 'images/indelo.png',
  },
  plugins: [
    // SEO
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://indelo.co.za',
        sitemap: 'https://indeo.co.za/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images/`,
      },
    },
    // assets
    'gatsby-plugin-less',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/svgs`,
        },
      },
    },
    // Dev
    'gatsby-plugin-eslint',
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
};
