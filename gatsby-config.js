require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: `Nana's Log`,
		author: {
			name: `Yuri Na`,
			summary: `LG CNS Enterprise Application Development Associate`,
		},
		description: `Nana's Dev Log`,
		siteUrl: `https://yurinadev.github.io/`,
		social: {
			github: 'YuriNaDev',
		},
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/posts`,
				name: `posts`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				rehypePlugins: [require('rehype-slug')],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 600,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1rem`,
						},
					},
					{
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_blank',
						},
					},
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
					`gatsby-remark-prismjs`,
				],
			},
		},
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GATSBY_GOOGLE_ANALYTICS,
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Nana's Log`,
				short_name: `NanaLog`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/gatsby-icon.png`,
			},
		},
		// https://www.gatsbyjs.org/docs/adding-an-rss-feed/
		// `gatsby-plugin-feed-mdx`,
		`gatsby-plugin-remove-trailing-slashes`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		`gatsby-plugin-emotion`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
