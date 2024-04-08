import { allNotes, allProjects as projects } from '@/.contentlayer/generated'

export default async function sitemap() {
	const projectsRoutes = projects.map((project) => ({
		url: `https://hasin.vercel.app/work/${project.slug}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	const routes = ['', '/about', '/codelabs', '/notes'].map((route) => ({
		url: `https://hasin.vercel.app${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	const notesRoutes = allNotes.map((note) => ({
		url: `https://hasin.vercel.app/note/${note.slug}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	return [...routes, ...projectsRoutes, ...notesRoutes]
}
