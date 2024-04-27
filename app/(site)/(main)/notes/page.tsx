import { generateMeta, getOgImage, keywords } from '@/lib/meta'
import { Metadata } from 'next'
import { allNotes } from 'contentlayer/generated'
import NodeAnimate from '@/app/_components/animate/node'
import { NoteItem } from '@/app/_components/note'

export const metadata: Metadata = generateMeta({
	title: 'Blogs' + ' - Hasin Raiyan',
	description: 'Diving into Dev: Thoughts on code, design, and more.',
	keywords: [...keywords, 'Blogs', 'Thoughts', 'Code', 'Design', 'Hasin Blog', 'Hasin Raiyan Blog', 'Md Hasin Raiyan Blog', 'Hasin Articles', 'Raiyan Articles', 'Md Hasin Raiyan Articles', 'Hasin Blog Posts', 'Raiyan Blog Posts', 'Md Hasin Raiyan Blog Posts', 'Hasin Latest Blogs', 'Raiyan Latest Blogs', 'Md Hasin Raiyan Latest Blogs', 'Hasin Insights', 'Raiyan Insights', 'Md Hasin Raiyan Insights', 'Hasin Tips', 'Raiyan Tips', 'Md Hasin Raiyan Tips', 'Hasin Tutorials', 'Raiyan Tutorials', 'Md Hasin Raiyan Tutorials', 'Hasin Guides', 'Raiyan Guides', 'Md Hasin Raiyan Guides', 'Hasin News', 'Raiyan News', 'Md Hasin Raiyan News', 'Hasin Updates', 'Raiyan Updates', 'Md Hasin Raiyan Updates', 'Hasin Thoughts', 'Raiyan Thoughts', 'Md Hasin Raiyan Thoughts', 'Hasin Opinions', 'Raiyan Opinions', 'Md Hasin Raiyan Opinions', 'Hasin Analysis', 'Raiyan Analysis', 'Md Hasin Raiyan Analysis', 'Hasin Reviews', 'Raiyan Reviews', 'Md Hasin Raiyan Reviews', 'Hasin Case Studies', 'Raiyan Case Studies', 'Md Hasin Raiyan Case Studies', 'Hasin Experiences', 'Raiyan Experiences', 'Md Hasin Raiyan Experiences', 'Hasin Projects', 'Raiyan Projects', 'Md Hasin Raiyan Projects', 'Hasin Portfolio', 'Raiyan Portfolio', 'Md Hasin Raiyan Portfolio', 'Hasin Showcase', 'Raiyan Showcase', 'Md Hasin Raiyan Showcase', 'Hasin Journey', 'Raiyan Journey', 'Md Hasin Raiyan Journey', 'Hasin Challenges', 'Raiyan Challenges', 'Md Hasin Raiyan Challenges', 'Hasin Success Stories', 'Raiyan Success Stories', 'Md Hasin Raiyan Success Stories', 'Hasin Failures', 'Raiyan Failures', 'Md Hasin Raiyan Failures', 'Hasin Lessons Learned', 'Raiyan Lessons Learned', 'Md Hasin Raiyan Lessons Learned', 'Hasin Inspirations', 'Raiyan Inspirations', 'Md Hasin Raiyan Inspirations', 'Hasin Motivation', 'Raiyan Motivation', 'Md Hasin Raiyan Motivation', 'Hasin Ideas', 'Raiyan Ideas', 'Md Hasin Raiyan Ideas', 'Hasin Innovations', 'Raiyan Innovations', 'Md Hasin Raiyan Innovations', 'Hasin Trends', 'Raiyan Trends', 'Md Hasin Raiyan Trends', 'Hasin Best Practices', 'Raiyan Best Practices', 'Md Hasin Raiyan Best Practices', 'Hasin Strategies', 'Raiyan Strategies', 'Md Hasin Raiyan Strategies', 'Hasin Solutions', 'Raiyan Solutions', 'Md Hasin Raiyan Solutions', 'Hasin Technologies', 'Raiyan Technologies', 'Md Hasin Raiyan Technologies', 'Hasin Tools', 'Raiyan Tools', 'Md Hasin Raiyan Tools', 'Hasin Resources', 'Raiyan Resources', 'Md Hasin Raiyan Resources', 'Hasin Events', 'Raiyan Events', 'Md Hasin Raiyan Events', 'Hasin Conferences', 'Raiyan Conferences', 'Md Hasin Raiyan Conferences', 'Hasin Workshops', 'Raiyan Workshops', 'Md Hasin Raiyan Workshops', 'Hasin Seminars', 'Raiyan Seminars', 'Md Hasin Raiyan Seminars', 'Hasin Interviews', 'Raiyan Interviews', 'Md Hasin Raiyan Interviews', 'Hasin Collaborations', 'Raiyan Collaborations', 'Md Hasin Raiyan Collaborations', 'Hasin Partnerships', 'Raiyan Partnerships', 'Md Hasin Raiyan Partnerships', 'Hasin Community', 'Raiyan Community', 'Md Hasin Raiyan Community', 'Hasin Networking', 'Raiyan Networking', 'Md Hasin Raiyan Networking', 'Hasin Industry Insights', 'Raiyan Industry Insights', 'Md Hasin Raiyan Industry Insights', 'Hasin Raiyan Blog', 'Md Hasin Raiyan Articles', 'Hasin Raiyan Blog Posts', 'Hasin Raiyan Latest Blogs', 'Hasin Raiyan Insights', 'Hasin Raiyan Tips', 'Hasin Raiyan Tutorials', 'Hasin Raiyan Guides', 'Hasin Raiyan News', 'Hasin Raiyan Updates', 'Hasin Raiyan Thoughts', 'Hasin Raiyan Opinions', 'Hasin Raiyan Analysis', 'Hasin Raiyan Reviews', 'Hasin Raiyan Case Studies', 'Hasin Raiyan Experiences', 'Hasin Raiyan Projects', 'Hasin Raiyan Portfolio', 'Hasin Raiyan Showcase', 'Hasin Raiyan Journey', 'Hasin Raiyan Challenges', 'Hasin Raiyan Success Stories', 'Hasin Raiyan Failures', 'Hasin Raiyan Lessons Learned', 'Hasin Raiyan Inspirations', 'Hasin Raiyan Motivation', 'Hasin Raiyan Ideas', 'Hasin Raiyan Innovations', 'Hasin Raiyan Trends', 'Hasin Raiyan Best Practices', 'Hasin Raiyan Strategies', 'Hasin Raiyan Solutions', 'Hasin Raiyan Technologies', 'Hasin Raiyan Tools', 'Hasin Raiyan Resources', 'Hasin Raiyan Events', 'Hasin Raiyan Conferences', 'Hasin Raiyan Workshops', 'Hasin Raiyan Seminars', 'Hasin Raiyan Interviews', 'Hasin Raiyan Collaborations', 'Hasin Raiyan Partnerships', 'Hasin Raiyan Community', 'Hasin Raiyan Networking', 'Hasin Raiyan Industry Insights', 'Hasin Raiyan Expertise', 'Hasin Raiyan Skills', 'Hasin Raiyan Learning', 'Hasin Raiyan Education', 'Hasin Raiyan Development', 'Hasin Raiyan Growth', 'Hasin Raiyan Challenges', 'Hasin Raiyan Solutions', 'Hasin Raiyan Successes', 'Hasin Raiyan Failures', 'Hasin Raiyan Lessons Learned', 'Hasin Raiyan Inspirations', 'Hasin Raiyan Motivation', 'Hasin Raiyan Ideas', 'Hasin Raiyan Innovations', 'Hasin Raiyan Trends', 'Hasin Raiyan Best Practices', 'Hasin Raiyan Strategies', 'Hasin Raiyan Solutions', 'Hasin Raiyan Technologies', 'Hasin Raiyan Tools', 'Hasin Raiyan Resources', 'Hasin Raiyan Events', 'Hasin Raiyan Conferences', 'Hasin Raiyan Workshops', 'Hasin Raiyan Seminars', 'Hasin Raiyan Interviews', 'Hasin Raiyan Collaborations', 'Hasin Raiyan Partnerships', 'Hasin Raiyan Community', 'Hasin Raiyan Networking', 'Hasin Raiyan Industry Insights', 'Hasin Raiyan Expertise', 'Hasin Raiyan Skills', 'Hasin Raiyan Learning', 'Hasin Raiyan Education', 'Hasin Raiyan Development', 'Hasin Raiyan Growth', 'Hasin Raiyan Challenges', 'Hasin Raiyan Solutions', 'Hasin Raiyan Successes', 'Hasin Raiyan Failures', 'Hasin Raiyan Lessons Learned', 'Hasin Raiyan Inspirations', 'Hasin Raiyan Motivation', 'Hasin Raiyan Ideas', 'Hasin Raiyan Innovations', 'Hasin Raiyan Trends', 'Hasin Raiyan Best Practices', 'Hasin Raiyan Strategies', 'Hasin Raiyan Solutions', 'Hasin Raiyan Technologies', 'Hasin Raiyan Tools', 'Hasin Raiyan Resources', 'Hasin Raiyan Events', 'Hasin Raiyan Conferences', 'Hasin Raiyan Workshops', 'Hasin Raiyan Seminars', 'Hasin Raiyan Interviews', 'Hasin Raiyan Collaborations', 'Hasin Raiyan Partnerships', 'Hasin Raiyan Community', 'Hasin Raiyan Networking', 'Hasin Raiyan Industry Insights', 'Hasin Raiyan Expertise', 'Hasin Raiyan Skills', 'Hasin Raiyan Learning', 'Hasin Raiyan Education', 'Hasin Raiyan Development', 'Hasin Raiyan Growth', 'Hasin Raiyan Challenges', 'Hasin Raiyan Solutions', 'Hasin Raiyan Successes', 'Hasin Raiyan Failures', 'Hasin Raiyan Lessons Learned', 'Hasin Raiyan Inspirations', 'Hasin Raiyan Motivation', 'Hasin Raiyan Ideas', 'Hasin Raiyan Innovations', 'Hasin Raiyan Trends', 'Hasin Raiyan Best Practices', 'Hasin Raiyan Strategies', 'Hasin Raiyan Solutions', 'Hasin Raiyan Technologies', 'Hasin Raiyan Tools', 'Hasin Raiyan Resources', 'Hasin Raiyan Events', 'Hasin Raiyan Conferences', 'Hasin Raiyan Workshops', 'Hasin Raiyan Seminars', 'Hasin Raiyan Interviews', 'Hasin Raiyan Collaborations', 'Hasin Raiyan Partnerships', 'Hasin Raiyan Community', 'Hasin Raiyan Networking', 'Hasin Raiyan Industry Insights' ],
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
