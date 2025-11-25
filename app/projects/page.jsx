import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with cart management, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["Next.js", "TypeScript", "Prisma", "WebSockets"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tech: ["React", "Tailwind CSS", "OpenWeather API"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for tracking social media performance with data visualization, export features, and custom reports.",
    tech: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    link: "#",
    github: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-indigo-300">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Featured Projects
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-300">
            A collection of projects I&apos;ve built, from full-stack applications
            to interactive web experiences. Each project represents a learning
            journey and a step toward better engineering.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-900/20 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute right-6 top-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-indigo-200">
                  Featured
                </div>
              )}
              
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    View Live
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400 transition-colors hover:text-slate-300"
                  >
                    GitHub
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-sm text-slate-400">
            Want to see more? Check out my GitHub or get in touch.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/joabcastronuevo7-lgtm"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-slate-200 transition hover:border-indigo-400 hover:text-white"
            >
              View All on GitHub
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-indigo-900/40 transition hover:bg-indigo-400"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main> 
  );
};

export default Projects;