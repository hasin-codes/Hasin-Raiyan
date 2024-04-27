import { notFound } from 'next/navigation'
import AnimationWrapper from '@/app/_components/animate/wrapper'
import { Metadata } from 'next'
import { generateMeta, getOgImage, keywords } from '@/lib/meta'
import { allProjects as projects } from 'contentlayer/generated'
import Image from 'next/image'
import { ExternalLink } from '@/app/_components/external-link'

interface Props {
	params: { slug: string[] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = params.slug[0]

	const project = projects.find((project) => project.slug === slug)

	if (!project) {
		return {
			title: '404 — Not Found',
		}
	}

	const { title, overview } = project

	const ogImage = getOgImage(title, overview, {
		openGraph: {
			type: 'article',
			url: `https://www.hasinraiyan.com//note/${slug}`,
		},
	})

	return generateMeta({
		title: title + ' — Hasin Raiyan',
		description: overview,
		keywords: [...keywords, 'Projects', 'Work', title, 'Hasin Projects', 'Hasin Portfolio', 'Hasin Skills', 'Know Hasin', 'About Hasin', 'Who is Hasin', 'Hasin Raiyan Projects', 'Hasin Raiyan Portfolio', 'Hasin Raiyan Skills', 'Know Hasin Raiyan', 'About Hasin Raiyan', 'Who is Hasin Raiyan', 'Hasin Raiyan', 'Raiyan Hasin', 'Md Hasin Raiyan', 'Md Raiyan Hasin', 'Hasin Md Raiyan', 'Raiyan Md Hasin', 'Md Hasin', 'Hasin Md', 'F1RST GEAR Hasin Projects', 'F1RST GEAR Hasin Portfolio', 'F1RST GEAR Hasin Skills', 'Know F1RST GEAR Hasin', 'About F1RST GEAR Hasin', 'Who is F1RST GEAR Hasin', 'Hasin Club Projects', 'Hasin Club Portfolio', 'Hasin Club Skills', 'Know Hasin Club', 'About Hasin Club', 'Who is Hasin Club', 'Rajshahi Cantonment Public IT Club Hasin Projects', 'Rajshahi Cantonment Public IT Club Hasin Portfolio', 'Rajshahi Cantonment Public IT Club Hasin Skills', 'Know Rajshahi Cantonment Public IT Club Hasin', 'About Rajshahi Cantonment Public IT Club Hasin', 'Who is Rajshahi Cantonment Public IT Club Hasin', 'Mediaverse Hasin Projects', 'Mediaverse Hasin Portfolio', 'Mediaverse Hasin Skills', 'Know Mediaverse Hasin', 'About Mediaverse Hasin', 'Who is Mediaverse Hasin', 'Zlatan Fan Hasin Projects', 'Zlatan Fan Hasin Portfolio', 'Zlatan Fan Hasin Skills', 'Know Zlatan Fan Hasin', 'About Zlatan Fan Hasin', 'Who is Zlatan Fan Hasin', 'Hasin Raiyan Projects', 'Hasin Raiyan Portfolio', 'Hasin Raiyan Skills', 'Know Hasin Raiyan', 'About Hasin Raiyan', 'Who is Hasin Raiyan', 'Hasin Projects', 'Hasin Portfolio', 'Hasin Skills', 'Know Hasin', 'About Hasin', 'Who is Hasin', 'Raiyan Projects', 'Raiyan Portfolio', 'Raiyan Skills', 'Know Raiyan', 'About Raiyan', 'Who is Raiyan', 'Md Hasin Raiyan Projects', 'Md Hasin Raiyan Portfolio', 'Md Hasin Raiyan Skills', 'Know Md Hasin Raiyan', 'About Md Hasin Raiyan', 'Who is Md Hasin Raiyan', 'F1RST GEAR Hasin Raiyan Projects', 'F1RST GEAR Hasin Raiyan Portfolio', 'F1RST GEAR Hasin Raiyan Skills', 'Know F1RST GEAR Hasin Raiyan', 'About F1RST GEAR Hasin Raiyan', 'Who is F1RST GEAR Hasin Raiyan', 'Hasin Club Raiyan Projects', 'Hasin Club Raiyan Portfolio', 'Hasin Club Raiyan Skills', 'Know Hasin Club Raiyan', 'About Hasin Club Raiyan', 'Who is Hasin Club Raiyan', 'Rajshahi Cantonment Public IT Club Hasin Raiyan Projects', 'Rajshahi Cantonment Public IT Club Hasin Raiyan Portfolio', 'Rajshahi Cantonment Public IT Club Hasin Raiyan Skills', 'Know Rajshahi Cantonment Public IT Club Hasin Raiyan',  'About Rajshahi Cantonment Public IT Club Hasin Raiyan', 'Who is Rajshahi Cantonment Public IT Club Hasin Raiyan', 'Mediaverse Hasin Raiyan Projects', 'Mediaverse Hasin Raiyan Portfolio', 'Mediaverse Hasin Raiyan Skills', 'Know Mediaverse Hasin Raiyan', 'About Mediaverse Hasin Raiyan', 'Who is Mediaverse Hasin Raiyan', 'Zlatan Fan Hasin Raiyan Projects', 'Zlatan Fan Hasin Raiyan Portfolio', 'Zlatan Fan Hasin Raiyan Skills', 'Know Zlatan Fan Hasin Raiyan', 'About Zlatan Fan Hasin Raiyan', 'Who is Zlatan Fan Hasin Raiyan', 'Raiyan Projects', 'Raiyan Portfolio', 'Raiyan Skills', 'Know Raiyan', 'About Raiyan', 'Who is Raiyan', 'Hasin Raiyan Projects', 'Hasin Raiyan Portfolio', 'Hasin Raiyan Skills', 'Know Hasin Raiyan', 'About Hasin Raiyan', 'Who is Hasin Raiyan', 'Hasin Projects', 'Hasin Portfolio', 'Hasin Skills', 'Know Hasin', 'About Hasin', 'Who is Hasin', 'Md Hasin Raiyan Projects', 'Md Hasin Raiyan Portfolio', 'Md Hasin Raiyan Skills', 'Know Md Hasin Raiyan', 'About Md Hasin Raiyan', 'Who is Md Hasin Raiyan', 'F1RST GEAR Raiyan Projects', 'F1RST GEAR Raiyan Portfolio', 'F1RST GEAR Raiyan Skills', 'Know F1RST GEAR Raiyan', 'About F1RST GEAR Raiyan', 'Who is F1RST GEAR Raiyan', 'Hasin Club Raiyan Projects', 'Hasin Club Raiyan Portfolio', 'Hasin Club Raiyan Skills', 'Know Hasin Club Raiyan', 'About Hasin Club Raiyan', 'Who is Hasin Club Raiyan', 'Rajshahi Cantonment Public IT Club Raiyan Projects', 'Rajshahi Cantonment Public IT Club Raiyan Portfolio', 'Rajshahi Cantonment Public IT Club Raiyan Skills', 'Know Rajshahi Cantonment Public IT Club Raiyan', 'About Rajshahi Cantonment Public IT Club Raiyan', 'Who is Rajshahi Cantonment Public IT Club Raiyan', 'Mediaverse Raiyan Projects', 'Mediaverse Raiyan Portfolio', 'Mediaverse Raiyan Skills', 'Know Mediaverse Raiyan', 'About Mediaverse Raiyan', 'Who is Mediaverse Raiyan', 'Zlatan Fan Raiyan Projects', 'Zlatan Fan Raiyan Portfolio', 'Zlatan Fan Raiyan Skills', 'Know Zlatan Fan Raiyan', 'About Zlatan Fan Raiyan', 'Who is Zlatan Fan Raiyan', 'Md Hasin Raiyan Projects', 'Md Hasin Raiyan Portfolio', 'Md Hasin Raiyan Skills', 'Know Md Hasin Raiyan', 'About Md Hasin Raiyan', 'Who is Md Hasin Raiyan', 'Hasin Raiyan Md Projects', 'Hasin Raiyan Md Portfolio', 'Hasin Raiyan Md Skills', 'Know Hasin Raiyan Md', 'About Hasin Raiyan Md', 'Who is Hasin Raiyan Md', 'Hasin Md Raiyan Projects', 'Hasin Md Raiyan Portfolio', 'Hasin Md Raiyan Skills', 'Know Hasin Md Raiyan', 'About Hasin Md Raiyan', 'Who is Hasin Md Raiyan', 'Raiyan Md Hasin Projects', 'Raiyan Md Hasin Portfolio', 'Raiyan Md Hasin Skills', 'Know Raiyan Md Hasin', 'About Raiyan Md Hasin', 'Who is Raiyan Md Hasin', 'Raiyan Hasin Md Projects', 'Raiyan Hasin Md Portfolio', 'Raiyan Hasin Md Skills', 'Know Raiyan Hasin Md', 'About Raiyan Hasin Md', 'Who is Raiyan Hasin Md', 'Md Raiyan Hasin Projects', 'Md Raiyan Hasin Portfolio', 'Md Raiyan Hasin Skills', 'Know Md Raiyan Hasin', 'About Md Raiyan Hasin', 'Who is Md Raiyan Hasin', 'Md Hasin Projects', 'Md Hasin Portfolio', 'Md Hasin Skills', 'Know Md Hasin', 'About Md Hasin', 'Who is Md Hasin', 'F1RST GEAR Md Hasin Raiyan Projects', 'F1RST GEAR Md Hasin Raiyan Portfolio', 'F1RST GEAR Md Hasin Raiyan Skills', 'Know F1RST GEAR Md Hasin Raiyan', 'About F1RST GEAR Md Hasin Raiyan', 'Who is F1RST GEAR Md Hasin Raiyan', 'Hasin Club Md Hasin Raiyan Projects', 'Hasin Club Md Hasin Raiyan Portfolio', 'Hasin Club Md Hasin Raiyan Skills', 'Know Hasin Club Md Hasin Raiyan', 'About Hasin Club Md Hasin Raiyan', 'Who is Hasin Club Md Hasin Raiyan', 'Rajshahi Cantonment Public IT Club Md Hasin Raiyan Projects', 'Rajshahi Cantonment Public IT Club Md Hasin Raiyan Portfolio', 'Rajshahi Cantonment Public IT Club Md Hasin Raiyan Skills', 'Know Rajshahi Cantonment Public IT Club Md Hasin Raiyan', 'About Rajshahi Cantonment Public IT Club Md Hasin Raiyan', 'Who is Rajshahi Cantonment Public IT Club Md Hasin', 'Mediaverse Md Hasin Raiyan Projects', 'Mediaverse Md Hasin Raiyan Portfolio', 'Mediaverse Md Hasin Raiyan Skills', 'Know Mediaverse Md Hasin Raiyan', 'About Mediaverse Md Hasin Raiyan', 'Who is Mediaverse Md Hasin Raiyan', 'Zlatan Fan Md Hasin Raiyan Projects', 'Zlatan Fan Md Hasin Raiyan Portfolio', 'Zlatan Fan Md Hasin Raiyan Skills', 'Know Zlatan Fan Md Hasin Raiyan', 'About Zlatan Fan Md Hasin Raiyan', 'Who is Zlatan Fan Md Hasin Raiyan', 'RAJCPSC', 'Rajshahi Cantonment Public School and College', 'Fabiha',  'Fabiha Ismam Irtiza', 'Fabiha love', 'Fabiha crush', 'Fabiha is my crush', 'I love Fabiha', 'Fabiha Raiyan', 'Fabiha Hasin', 'Fabiha Md Hasin Raiyan'],
		...ogImage,
	})
}

export default function Page({ params }: Props) {
	const project = projects.find((project) => project.slug === params.slug[0])

	if (!project) {
		notFound()
	}

	return (
		<AnimationWrapper backTo='/'>
			<section className='max-w-5xl mx-auto mt-l'>
				<div>
					<h2 className='text-h2'>{project.title}</h2>
					<div className='flex flex-col md:flex-row gap-l mt-xs'>
						<div className='flex-1'>
							<h3 className='text-h4 font-secondary'>{project.overview}</h3>
							<div className='flex gap-3 mt-xs'>
								{project.links?.map((link) => (
									<ExternalLink key={link.name} href={link.href}>
										{link.name}
									</ExternalLink>
								))}
							</div>
						</div>
						<div className='flex-1'>
							{project.content?.map((content, index) => (
								<p key={index} className='text-body text-secondary mb-xs'>
									{content}
								</p>
							))}
						</div>
					</div>
				</div>
			</section>
			<div className='max-w-5xl mx-auto mt-m'>
				<div className='flex items-center w-full justify-center'>
					<Image
						src={project.cover}
						alt='Main Image'
						width={1000}
						height={620}
						priority
						quality={50}
						className='rounded-3xl mt-auto'
					/>
				</div>
			</div>
		</AnimationWrapper>
	)
}
