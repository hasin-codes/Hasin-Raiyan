import { allAxioms } from '@/.contentlayer/generated'
import NoteWrapper from '@/app/_components/animate/wrapper'
import { BackToTop } from '@/app/_components/back-to-top'
import { Mdx } from '@/app/_components/mdx'

import { generateMeta, getOgImage } from '@/lib/meta'
import { formatDate } from '@/lib/utils/date'
import { getNoteLenghtIcon } from '@/lib/utils/note-length'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
	params: { slug: string[] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = params.slug[0]

	const axiom = allAxioms.find((doc) => doc.slug === slug)

	if (!axiom) {
		return {
			title: '404 — Not Found',
		}
	}

	const { title, summary: description, publishedAt: publishedTime } = axiom

	const ogImage = getOgImage(title, description, {
		openGraph: {
			type: 'article',
			publishedTime,
			url: `https://www.hasinraiyan.com/axiom/${slug}`,
		},
	})

	return generateMeta({
		title,
		description,
		...ogImage,
	})
}

export const dynamic = 'force-static'

export default function Page({ params }: Props) {
	const axiom = allAxioms.find((doc) => doc.slug === params.slug[0])

	if (!axiom) {
		notFound()
	}

	const formattedDate = formatDate(axiom.publishedAt)

	return (
		<NoteWrapper backTo='/notes'>
			<script
				type='application/ld+json'
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(axiom.structuredData),
				}}></script>
			<div></div>
			<h2 className='text-h2Display text-center max-w-lg mx-auto'>
				{axiom.title}
			</h2>
			<div className='flex items-center justify-center mt-m text-link text-secondary gap-[7px]'>
				<span>
					<time title={axiom.publishedAt} dateTime={axiom.publishedAt}>
						{formattedDate}
					</time>
				</span>
				<span>•</span>
				<span className='flex items-center gap-[5px]'>
					{getNoteLenghtIcon(axiom.length)}
					<p>{axiom.length}</p>
				</span>
			</div>
			<Mdx code={axiom.body.code} />
			
			<BackToTop />
		</NoteWrapper>
	)
}
