import { allNotes, allProjects as projects } from '@/.contentlayer/generated'

export default async function sitemap() {
	const projectsRoutes = projects.map((project) => ({
		url: `https://www.hasinraiyan.com//work/${project.slug}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	const routes = ['', '/about', '/codelabs', '/notes'].map((route) => ({
		url: `https://www.hasinraiyan.com${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	const notesRoutes = allNotes.map((note) => ({
		url: `https://www.hasinraiyan.com//note/${note.slug}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	return [...routes, ...projectsRoutes, ...notesRoutes]
}
