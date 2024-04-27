import { generateMeta, getOgImage, keywords } from '@/lib/meta'
import { Metadata } from 'next'
import { allNotes } from 'contentlayer/generated'
import NodeAnimate from '@/app/_components/animate/node'
import { NoteItem } from '@/app/_components/note'

export const metadata: Metadata = generateMeta({
	title: 'Blogs' + ' - Hasin Raiyan',
	description: 'Diving into Dev: Thoughts on code, design, and more.',
	keywords: [...keywords, 'Blogs', 'Thoughts', 'Code', 'Design', 'Hasin Raiyan Blog', 'Md Hasin Raiyan Articles', 'Hasin Raiyan Blog Posts', 'Hasin Raiyan Latest Blogs', 'Hasin Raiyan Insights', 'Hasin Raiyan Tips', 'Hasin Raiyan Tutorials', 'Hasin Raiyan Guides', 'Hasin Raiyan News', 'Hasin Raiyan Updates', 'Hasin Raiyan Thoughts', 'Hasin Raiyan Opinions', 'Hasin Raiyan Analysis', 'Hasin Raiyan Reviews', 'Hasin Raiyan Case Studies', 'Hasin Raiyan Experiences', 'Hasin Raiyan Projects', 'Hasin Raiyan Portfolio', 'Hasin Raiyan Showcase', 'Hasin Raiyan Journey', 'Hasin Raiyan Challenges', 'Hasin Raiyan Success Stories', 'Hasin Raiyan Failures', 'Hasin Raiyan Lessons Learned', 'Hasin Raiyan Inspirations', 'Hasin Raiyan Motivation', 'Hasin Raiyan Ideas', 'Hasin Raiyan Innovations', 'Hasin Raiyan Trends', 'Hasin Raiyan Best Practices', 'Hasin Raiyan Strategies', 'Hasin Raiyan Solutions', 'Hasin Raiyan Technologies', 'Hasin Raiyan Tools', 'Hasin Raiyan Resources', 'Hasin Raiyan Events', 'Hasin Raiyan Conferences', 'Hasin Raiyan Workshops', 'Hasin Raiyan Seminars', 'Hasin Raiyan Interviews', 'Hasin Raiyan Collaborations', 'Hasin Raiyan Partnerships', 'Hasin Raiyan Community', 'Hasin Raiyan Networking', 'Hasin Raiyan Industry Insights', 'Hasin Raiyan Expertise', 'Hasin Raiyan Skills', 'Hasin Raiyan Learning', 'Hasin Raiyan Education', 'Hasin Raiyan Development', 'Hasin Raiyan Growth', 'Hasin Raiyan Challenges', 'Hasin Raiyan Solutions', 'Hasin Raiyan Successes', 'Hasin Raiyan Failures', 'Hasin Raiyan Lessons Learned', 'Hasin Raiyan Inspirations', 'Hasin Raiyan Motivation', 'Hasin Raiyan Ideas', 'Hasin Raiyan Innovations', 'Hasin Raiyan Trends', 'Hasin Raiyan Best Practices', 'Hasin Raiyan Strategies', 'Hasin Raiyan Solutions', 'Hasin Raiyan Technologies', 'Hasin Raiyan Tools', 'Hasin Raiyan Resources', 'Hasin Raiyan Events', 'Hasin Raiyan Conferences', 'Hasin Raiyan Workshops', 'Hasin Raiyan Seminars', 'Hasin Raiyan Interviews', 'Hasin Raiyan Collaborations', 'Hasin Raiyan Partnerships', 'Hasin Raiyan Community', 'Hasin Raiyan Networking', 'Hasin Raiyan Industry Insights', 'Hasin Raiyan Expertise', 'Hasin Raiyan Skills', 'Hasin Raiyan Learning', 'Hasin Raiyan Education', 'Hasin Raiyan Development', 'Hasin Raiyan Growth', 'Hasin Raiyan Challenges', 'Hasin Raiyan Solutions', 'Hasin Raiyan Successes', 'Hasin Raiyan Failures', 'Hasin Raiyan Lessons Learned', 'Hasin Raiyan Inspirations', 'Hasin Raiyan Motivation', 'Hasin Raiyan Ideas', 'Hasin Raiyan Innovations', 'Hasin Raiyan Trends', 'Hasin Raiyan Best Practices', 'Hasin Raiyan Strategies', 'Hasin Raiyan Solutions', 'Hasin Raiyan Technologies', 'Hasin Raiyan Tools', 'Hasin Raiyan Resources', 'Hasin Raiyan Events', 'Hasin Raiyan Conferences', 'Hasin Raiyan Workshops', 'Hasin Raiyan Seminars', 'Hasin Raiyan Interviews', 'Hasin Raiyan Collaborations', 'Hasin Raiyan Partnerships', 'Hasin Raiyan Community', 'Hasin Raiyan Networking', 'Hasin Raiyan Industry Insights', 'Hasin Raiyan Expertise', 'Hasin Raiyan Skills', 'Hasin Raiyan Learning', 'Hasin Raiyan Education', 'Hasin Raiyan Development', 'Hasin Raiyan Growth', 'Hasin Raiyan Challenges', 'Hasin Raiyan Solutions', 'Hasin Raiyan Successes', 'Hasin Raiyan Failures', 'Hasin Raiyan Lessons Learned', 'Hasin Raiyan Inspirations', 'Hasin Raiyan Motivation', 'Hasin Raiyan Ideas', 'Hasin Raiyan Innovations', 'Hasin Raiyan Trends', 'Hasin Raiyan Best Practices', 'Hasin Raiyan Strategies', 'Hasin Raiyan Solutions', 'Hasin Raiyan Technologies', 'Hasin Raiyan Tools', 'Hasin Raiyan Resources', 'Hasin Raiyan Events', 'Hasin Raiyan Conferences', 'Hasin Raiyan Workshops', 'Hasin Raiyan Seminars', 'Hasin Raiyan Interviews', 'Hasin Raiyan Collaborations', 'Hasin Raiyan Partnerships', 'Hasin Raiyan Community', 'Hasin Raiyan Networking', 'Hasin Raiyan Industry Insights' ],
	...getOgImage(
		'Blogs',
		'Diving into Dev: Thoughts on code, design, and more.'
	),
})

export default async function NotesPage() {
	return (
		<div className='relative container w-full h-full mb-xl'>
			<NodeAnimate>
				<h2 className='pt-32 text-center text-h2'>Blogs</h2>
			</NodeAnimate>
			<NodeAnimate delay={0.2} className='relative max-w-3xl m-auto'>
				<p className='text-center text-body text-secondary'>
					Diving into Dev: Thoughts on code, design and more.
				</p>
			</NodeAnimate>

			<section className='px-xxs md:px-l pb-l'>
				<div className='max-w-4xl grid grid-cols-1 grid-rows-[auto] gap-6 mt-l mx-auto'>
					{allNotes.map((note, index) => {
						return (
							<NodeAnimate delay={index * 0.2 + 0.4} key={note._id}>
								<NoteItem note={note} />
							</NodeAnimate>
						)
					})}
				</div>
			</section>
		</div>
	)
}
