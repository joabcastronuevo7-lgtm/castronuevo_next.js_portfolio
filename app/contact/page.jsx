const contacts = [
  {
    label: "Email",
    value: "joab.castronuevo.7@gmail.com",
    href: "mailto:joab.castronuevo.7@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/joabcastronuevo",
    href: "https://github.com/joabcastronuevo7-lgtm",
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen bg-slate-950 py-16 flex items-center justify-center">
      <div className="mx-auto max-w-4xl w-full space-y-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 md:p-12 shadow-2xl shadow-indigo-900/40">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-indigo-300">
            Contact
          </p>
          <h2 className="text-4xl font-semibold text-white">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-base text-slate-300">
            I&apos;m open to internships, freelance collaborations, and design/dev
            pairings. Drop a note with your project idea or just say hi—always happy
            to connect!
          </p>
        </div>

        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-8 sm:grid-cols-2">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 px-4 py-6 text-center transition hover:border-indigo-400/60 hover:bg-indigo-500/10"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">
                {item.label}
              </p>
              <p className="mt-3 text-sm font-semibold text-white">{item.value}</p>
            </a>
          ))}
        </div>

        <form className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/60 p-6 md:p-10 shadow-inner shadow-black/20">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold uppercase tracking-wider text-slate-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              className="rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-400 focus:bg-slate-900"
              placeholder="Your full name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold uppercase tracking-wider text-slate-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-400 focus:bg-slate-900"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold uppercase tracking-wider text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="min-h-[160px] rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-400 focus:bg-slate-900 resize-none"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-indigo-500 px-6 py-4 text-sm font-bold uppercase tracking-[0.4em] text-white shadow-lg shadow-indigo-900/40 transition hover:bg-indigo-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;