import NodeAnimate from '@/app/_components/animate/node'
import { StarIcon } from '@/app/_components/icons/StarIcon'
import { ExperienceItem } from '@/app/_components/timeline'
import { ExternalLink } from '@/app/_components/external-link'
import { generateMeta, keywords, getOgImage } from '@/lib/meta'
import { allExperiences as experiences } from '@/.contentlayer/generated'
import { Metadata } from 'next'

export const metadata: Metadata = generateMeta({
	title: 'About' + ' — Hasin Raiyan',
	description: 'Get to know Hasin Raiyan, a Frontend Developer from India.',
	keywords: [...keywords, 'About'],
	...getOgImage(
		'About',
		'Get to know Hasin Raiyan, a Frontend Developer from India.'
	),
})

export default function AboutPage() {
	return (
		<div className='relative w-full h-full mb-xl mt-32'>
			<NodeAnimate>
				<h1 className='pt-xl text-secondary'>
					<span className='relative flex justify-center text-foreground'>
						<p className='relative'>
							I&apos;m Hasin.
							<span className='absolute -top-[2rem] -right-[5.5rem] scale-50'>
								<StarIcon />
							</span>
						</p>
					</span>
				</h1>
			</NodeAnimate>

			<NodeAnimate delay={0.2} className='relative container max-w-4xl m-auto'>
				<div className='flex justify-around'>
					<div className=' mt-m'>
						<h2 className='text-h2 leading-[110%] text-secondary text-center'>
						I&apos;m a web dev & UI designer with a passion for leveraging AI to create innovative and user-centric digital experiences.
						</h2>
						<p className='text-body text-secondary mt-xxs text-center'>
						In my 3 years as a tech enthusiast, I&apos;ve dived into diverse areas like coding, UI, robotics, drones, and AI/ML.  Now, I&apos;m channeling that passion into delivering exceptional front-end development and UI/UX, with the ability to tackle full-stack projects as well.
						</p>
					</div>
				</div>
			</NodeAnimate>

			<NodeAnimate
				delay={0.6}
				as='section'
				className='container mt-xl md:px-xl'>
				<StarIcon height={38} className='my-l mx-auto' />
				<h3 className='text-h3 my-s'>Experience</h3>
				{experiences.map((exp, index) => {
					return <ExperienceItem key={index} exp={exp} />
				})}
				<div className='flex mt-m'>
					<ExternalLink href='/resume'>View Resume</ExternalLink>
				</div>
			</NodeAnimate>

			<NodeAnimate
				delay={0.8}
				as='section'
				className='max-w-5xl m-auto mt-xl px-l'>
				<p className='text-body leading-[160%] text-secondary'>
				Outside of coding, my downtime crackles with ambition. Whether channeling Maldini&apos;s defensive prowess on the pitch or fueling my Formula One passion to inspire Bangladeshi fans, these experiences ignite my spirit. My heart bleeds Rossoneri for AC Milan, and the flavors and history of Italy call to me. While my academics might not boast brilliance, my curiosity and entrepreneurial spirit drive me secretly running a thriving 7 figure project .

				</p>
			</NodeAnimate>
		</div>
	)
}
