import { Document } from 'contentlayer/core'
import { ComputedFields, defineDocumentType } from 'contentlayer/source-files'

const computedFields: ComputedFields<'Axiom'> = {
	slug: {
		type: 'string',
		resolve: (doc: Document) => {
			const axiomsPrefix = 'axioms/'
			let pathWithoutPrefix = doc._raw.flattenedPath.replace(axiomsPrefix, '')
			let pathParts = pathWithoutPrefix.split('/')
			pathParts.pop() // use .shift() to remove the first "note-name"
			pathWithoutPrefix = pathParts.join('/')
			return pathWithoutPrefix
		},
	},
	structuredData: {
		type: 'json',
		resolve: (doc: Document) => ({
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: doc.title,
			datePublished: doc.publishedAt,
			dateModified: doc.publishedAt,
			description: doc.summary,
			image: doc.image
				? `https://hasin.vercel.app//${doc.image}`
				: `https://hasin.vercel.app//og?title=${doc.title}`,
			url: `https://hasin.vercel.app//axiom/${doc._raw.flattenedPath}`,
			author: {
				'@type': 'Person',
				name: 'Hasin Raiyan',
			},
		}),
	},
}

export const Axiom = defineDocumentType(() => ({
	name: 'Axiom',
	filePathPattern: `content/axioms/**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		publishedAt: {
			type: 'string',
			required: true,
		},
		summary: {
			type: 'string',
			required: true,
		},
		image: {
			type: 'string',
			required: true,
		},
		length: {
			options: ['Medium', 'Long', 'Short'],
			default: 'Medium',
			type: 'enum',
		},
	},
	computedFields,
}))
