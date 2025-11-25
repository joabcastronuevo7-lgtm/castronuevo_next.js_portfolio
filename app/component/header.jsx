import Link from "next/link"

const navLink =
  "text-xs font-semibold uppercase tracking-[0.35em] text-slate-200 hover:text-white transition-colors";

const RootHeader = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-indigo-700 shadow-lg shadow-indigo-500/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8 md:py-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-indigo-200">
            Portfolio
          </p>
          <h1 className="text-xl font-bold text-white md:text-2xl">Joab Castronuevo</h1>
        </div>
        <nav className="flex items-center gap-4 md:gap-6 lg:gap-8 flex-wrap justify-end">
          <Link className={navLink} href="/home">
            Home
          </Link>
          <Link className={navLink} href="/about-me">
            About Me
          </Link>
          <Link className={navLink} href="/skills-and-expertise">
            Skills
          </Link>
          <Link className={navLink} href="/projects">
            Projects
          </Link>
          <Link className={navLink} href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default RootHeader;