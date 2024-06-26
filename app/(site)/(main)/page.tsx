import WorkCard from '@/app/_components/work/work-card'
import { generateMeta } from '@/lib/meta'
import { Metadata } from 'next'
import NodeAnimate from '@/app/_components/animate/node'
import { allProjects } from 'contentlayer/generated'

export const metadata: Metadata = generateMeta()

export default function Home() {
	return (
		<div className='relative container w-full h-full mb-xl'>
			<NodeAnimate>
				<h1 className='pt-32 text-secondary'>
					
					<span className='flex justify-center'>Hi. I am Hasin.</span>
				</h1>
			</NodeAnimate>
			<NodeAnimate delay={0.2} className='relative max-w-3xl m-auto px-6'>
				<p className='text-center text-body text-secondary'>
				I love building visually compelling and intuitive web experiences, leveraging original concepts and proven development practices across the stack.
				</p>
			</NodeAnimate>
			<NodeAnimate
				delay={0.4}
				as='section'
				className='flex gap-6 md:mt-l mt-xl px-3 md:px-7'>
				<div className='max-w-content flex flex-col md:flex-row flex-wrap gap-x-10 gap-y-10 md:gap-y-20 mx-auto'>
					{allProjects.map((project) => {
						return (
							<WorkCard
								key={project.title}
								to={project.slug}
								src={project.cover}
								alt={project.title}
							/>
						)
					})}
				</div>
			</NodeAnimate>
		</div>
	)
}

