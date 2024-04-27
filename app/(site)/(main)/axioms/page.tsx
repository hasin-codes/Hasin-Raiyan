import { generateMeta, getOgImage, keywords,  } from '@/lib/meta'
import { Metadata } from 'next'
import { allAxioms } from 'contentlayer/generated'
import NodeAnimate from '@/app/_components/animate/node'
import { AxiomItem } from '@/app/_components/axiom'

export const metadata: Metadata = generateMeta({
	title: 'Shaping My World: A Look at My Values',
	description: 'My Fabric of Reality :  An invitation to understand my philosophy, values, and guiding principles.',
	keywords: [...keywords, 'philosophy', 'beliefs', 'values', 'ethics', 'worldview', 'perspective', 'principles', 'morals', 'ideology', 'personal philosophy', 'core beliefs', 'guiding principles', 'foundation', 'decision-making', 'critical thinking', 'self-discovery', 'exploration',"Hasin Raiyan's philosophy", "Hasin Raiyan's beliefs", "Hasin Raiyan's values", "Hasin Raiyan's worldview", "Hasin Raiyan's perspective", "Hasin Raiyan's ethics", "Know Hasin Raiyan", "Understand Hasin Raiyan", 'Raiyans philosophy', 'Raiyans beliefs', 'Raiyans values', 'Raiyans worldview', 'Raiyans perspective', 'Raiyans ethics', 'Know Raiyan', 'Understand Raiyan', "Md Hasin Raiyan's philosophy", "Md Hasin Raiyan's beliefs", "Md Hasin Raiyan's values", "Md Hasin Raiyan's worldview", "Md Hasin Raiyan's perspective", "Md Hasin Raiyan's ethics", "Know Md Hasin Raiyan", "Understand Md Hasin Raiyan", "Know about Hasin Raiyan's philosophy", "Know about Hasin Raiyan's beliefs", "Know about Hasin Raiyan's values", "Know about Hasin Raiyan's worldview", "Know about Hasin Raiyan's perspective", "Know about Hasin Raiyan's ethics", "Understand Hasin Raiyan's philosophy", "Understand Hasin Raiyan's beliefs", "Understand Hasin Raiyan's values", "Understand Hasin Raiyan's worldview", "Understand Hasin Raiyan's perspective", "Understand Hasin Raiyan's ethics", "Know about Raiyan's philosophy", "Know about Raiyan's beliefs", "Know about Raiyan's values", "Know about Raiyan's worldview", "Know about Raiyan's perspective", "Know about Raiyan's ethics", "Understand Raiyan's philosophy", "Understand Raiyan's beliefs", "Understand Raiyan's values", "Understand Raiyan's worldview", "Understand Raiyan's perspective", "Understand Raiyan's ethics", "Know about Md Hasin Raiyan's philosophy", "Know about Md Hasin Raiyan's beliefs", "Know about Md Hasin Raiyan's values", "Know about Md Hasin Raiyan's worldview", "Know about Md Hasin Raiyan's perspective", "Know about Md Hasin Raiyan's ethics", "Understand Md Hasin Raiyan's philosophy", "Understand Md Hasin Raiyan's beliefs", "Understand Md Hasin Raiyan's values", "Understand Md Hasin Raiyan's worldview", "Understand Md Hasin Raiyan's perspective", "Understand Md Hasin Raiyan's ethics", "Hasin Raiyan's principles", "Hasin Raiyan's morals", "Hasin Raiyan's ideology", "Hasin Raiyan's personal philosophy", "Hasin Raiyan's core beliefs", "Hasin Raiyan's guiding principles", "Hasin Raiyan's foundation", "Hasin Raiyan's decision-making", "Hasin Raiyan's critical thinking", "Hasin Raiyan's self-discovery", "Hasin Raiyan's exploration", "Raiyan's principles", "Raiyan's morals", "Raiyan's ideology", "Raiyan's personal philosophy", "Raiyan's core beliefs", "Raiyan's guiding principles", "Raiyan's foundation", "Raiyan's decision-making", "Raiyan's critical thinking", "Raiyan's self-discovery", "Raiyan's exploration", "Md Hasin Raiyan's principles", "Md Hasin Raiyan's morals", "Md Hasin Raiyan's ideology", "Md Hasin Raiyan's personal philosophy", "Md Hasin Raiyan's core beliefs", "Md Hasin Raiyan's guiding principles", "Md Hasin Raiyan's foundation", "Md Hasin Raiyan's decision-making", "Md Hasin Raiyan's critical thinking", "Md Hasin Raiyan's self-discovery", "Md Hasin Raiyan's exploration" ],
	...getOgImage(
		'Axiom',
		'My Fabric of Reality :  An invitation to understand my philosophy, values, and guiding principles.'
	),
})

export default async function AxiomsPage() {
	return (
		<div className='relative container w-full h-full mb-xl'>
			<NodeAnimate>
				<h2 className='pt-32 text-center text-h2'>Axiom</h2>
			</NodeAnimate>
			<NodeAnimate delay={0.2} className='relative max-w-3xl m-auto'>
				<p className='text-center text-body text-secondary'>
				My Fabric of Reality :  An invitation to understand my philosophy, values, and guiding principles.
				</p>
			</NodeAnimate>

			<section className='px-xxs md:px-l pb-l'>
				<div className='max-w-4xl grid grid-cols-1 grid-rows-[auto] gap-6 mt-l mx-auto'>
					{allAxioms.map((axiom, index) => {
						return (
							<NodeAnimate delay={index * 0.2 + 0.4} key={axiom._id}>
								<AxiomItem axiom={axiom} />
							</NodeAnimate>
						)
					})}
				</div>
			</section>
		</div>
	)
}







