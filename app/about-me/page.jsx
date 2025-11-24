const badges = [
  "React",
  "Tailwind CSS",
  "Next.js",
  "Accessibility",
  "UI Prototyping",
  "Team Collaboration",
];

const AboutMe = () => {
  return (
    <section className="min-h-[80vh] bg-slate-950 py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl shadow-indigo-900/50 md:flex-row">
        <div className="space-y-6 md:w-1/2">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">
            About Me
          </p>
          <h2 className="text-4xl font-semibold text-white">
            Joab Castronuevo
          </h2>
          <p className="text-lg leading-relaxed text-slate-200">
            I&apos;m a front-end developer focused on crafting responsive,
            accessible experiences. I translate design systems into clean,
            component-driven code using React, Next.js, and Tailwind, all while
            keeping performance and accessibility top of mind.
          </p>
          <p className="text-slate-300">
            Outside of shipping pixel-perfect features, you&apos;ll find me
            sketching at cafés, exploring new hiking trails with my camera, or
            prototyping indie game concepts. I&apos;m actively looking for an
            internship where I can collaborate with other curious builders and
            continue leveling up my craft.
          </p>
          <div className="flex flex-wrap gap-3">
            {badges.map((label) => (
              <span
                key={label}
                className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-200"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-8 rounded-2xl border border-slate-800 bg-slate-950/70 p-8">
          <div>
            <p className="text-sm font-semibold uppercase text-slate-400">
              Currently
            </p>
            <p className="text-2xl font-medium text-white">
              Front-end freelancer &amp; CS student
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Building mini projects, mentoring classmates, and refining my
              design-to-code workflow.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-slate-400">
              Goals
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-200">
              <li>Ship a polished design system component library</li>
              <li>Lead accessibility improvements on a live product</li>
              <li>Contribute to an open-source UI toolkit</li>
            </ul>
          </div>
          <a
            className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-indigo-900/40 transition hover:bg-indigo-400"
            href="mailto:hello@joabcastronuevo.dev"
          >
            Let&apos;s collaborate
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;