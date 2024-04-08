import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: 'https://hasin.vercel.app/sitemap.xml',
		host: 'https://hasin.vercel.app',
	}
}
