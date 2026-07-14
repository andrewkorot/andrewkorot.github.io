import Link from "next/link";

const links = [
  { href: "#specialties", label: "Specialties" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="group flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-border-strong bg-bg-card font-mono text-sm font-semibold text-accent-cyan">
            AK
          </span>
          <span className="hidden text-sm font-medium text-ink sm:inline">
            Andrii Korotaiev
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-ink-mute md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:andrewkorot@outlook.com"
          className="hidden rounded-full border border-accent-cyan/40 px-4 py-1.5 text-sm font-medium text-accent-cyan transition-colors hover:bg-accent-cyan/10 sm:inline-flex"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
