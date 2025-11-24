const skillGroups = [
  {
    title: "Frontend Core",
    items: ["HTML5", "CSS3 / SCSS", "TypeScript", "React", "Next.js"],
    description: "Reusable components, SSR/ISR, and accessibility-first workflows.",
  },
  {
    title: "Styling & Systems",
    items: ["Tailwind CSS", "Framer Motion", "Storybook", "Design Tokens"],
    description: "Rapid prototyping plus scalable design systems and motion.",
  },
  {
    title: "Tooling & Collaboration",
    items: ["Git / GitHub", "Figma Handoff", "Vercel", "Notion"],
    description: "Async collaboration, reviews, and shipping with confidence.",
  },
];

const Skills = () => {
  return (
    <section className="min-h-[80vh] bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl space-y-12 rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl shadow-indigo-900/40">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-indigo-300">
            Skills & Expertise
          </p>
          <h2 className="text-4xl font-semibold text-white">
            Building polished interfaces, end to end
          </h2>
          <p className="text-base text-slate-300">
            I pair product thinking with a refined UI toolkit—balancing rapid iteration
            with clean, maintainable code.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-indigo-200">
                {group.title}
              </p>
              <ul className="space-y-2 text-sm text-white">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400">{group.description}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-indigo-500/30 bg-indigo-500/10 p-8 text-center text-white">
          <p className="text-sm uppercase tracking-[0.4em] text-indigo-200">
            Currently Learning
          </p>
          <p className="mt-4 text-2xl font-semibold">Advanced animation and 3D UI with React Three Fiber</p>
          <p className="mt-2 text-sm text-indigo-100">
            Experimenting with motion systems to elevate storytelling in interfaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;