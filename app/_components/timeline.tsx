import { Experience } from '@/.contentlayer/generated'
import { formatDate } from '@/lib/utils/date'

const DATE_FORMAT = 'MMMM YYYY'

export function ExperienceItem({
	exp: { content, company, title, link, startDate, endDate, location },
}: {
	exp: Experience
}) {
	return (
		<>
			<article className="relative grid md:grid-cols-5 md:gap-10 before:content-[''] mx-12 before:block before:h-full before:absolute before:left-[-25px] md:before:left-[-37px] before:border-l-2 before:border-gray-300 dark:before:border-gray-700 md:space-x-4 pb-12">
				<div className='relative pb-12 md:col-span-2'>
					<div className='sticky top-28'>
						<svg
							className='absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-background dark:bg-dark rounded-full dark:text-gray-500'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='28'
							height='28'>
							<path
								fillRule='evenodd'
								d='M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z'
								fill='currentColor'></path>
						</svg>
						<h3 className='p-0 m-0 text-h4'>{title}</h3>

						<div className='flex items-center gap-2'>
							{link ? (
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='p-0 m-0 underline text-mini'
									href={link}>
									{company}
								</a>
							) : (
								<p className='p-0 m-0 text-mini'>{company}</p>
							)}
							<span>•</span>
							<p className='italic'>{location}</p>
						</div>
						<p className='p-0 m-0 mt-1 text-base text-secondary'>
							{formatDate(startDate, DATE_FORMAT)} -{' '}
							{endDate ? formatDate(endDate, DATE_FORMAT) : 'Present'}
						</p>
					</div>
				</div>
				<div
					className='relative pb-4 md:col-span-3 text-h6 text-secondary'
					dangerouslySetInnerHTML={{ __html: content }}></div>
			</article>
		</>
	)
}
