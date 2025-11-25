import Image from "next/image";

const statItems = [
  { label: "Projects", value: "3" },
  { label: "Skills", value: "React · Next · Tailwind" },
  { label: "Focus", value: "UI Engineering" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 py-16 flex items-center justify-center">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-3 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-indigo-200 mx-auto md:mx-0">
            Front-End Developer
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.5em] text-slate-400">
              Joab Castronuevo
            </p>
            <h1 className="text-4xl font-semibold text-white md:text-6xl">
              I build expressive interfaces that balance craft and speed.
            </h1>
            <p className="text-lg text-slate-300">
              I specialize in translating Figma concepts into performant,
              accessible experiences with React, Next.js, and Tailwind. I love
              working with teams that iterate quickly and value design systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              className="rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-indigo-900/40 transition hover:bg-indigo-400"
              href="/about-me"
            >
              View profile
            </a>
            <a
              className="rounded-full border border-slate-700 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-slate-200 transition hover:border-indigo-400 hover:text-white"
              href="/contact"
            >
              Contact me
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {statItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto max-w-[420px] rounded-[36px] border border-indigo-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl shadow-indigo-900/60">
            <div className="absolute -top-6 left-8 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs uppercase tracking-[0.4em] text-slate-300">
              Portrait
            </div>
            <Image
              src="/profile.jpg"
              width={600}
              height={700}
              alt="Joab Castronuevo portrait"
              className="rounded-[28px] border border-slate-800 object-cover"
              priority
            />
            <div className="mt-6 space-y-2 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">
                Currently
              </p>
              <p className="text-lg font-semibold text-white">
                Shipping portfolio experiments
              </p>
              <p className="text-sm text-slate-400">
                Exploring motion design, building component libraries, and
                mentoring classmates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
