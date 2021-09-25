module.exports = {
  siteMetadata: {
    title: 'Colin Reed Portfolio',
    author: 'Hunter Chang, Colin Reed',
    description: 'Developer Portfolio based around Gatsby content',
    siteUrl: 'https://colinreed.me/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-cname'
  ],
}
