import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade" aria-hidden />
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 text-xs font-medium text-ink-mute animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-accent-cyan opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            <span className="font-mono uppercase tracking-[0.18em] text-ink-mute">
              Available for senior architecture & advisory engagements
            </span>
          </div>

          <h1 className="max-w-4xl display-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl animate-fade-up">
            <span className="block text-ink">{profile.name}</span>
            <span className="block italic gradient-text">
              Principal Architect — Agentic AI &amp; Cloud Platforms
            </span>
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-ink-mute animate-fade-up">
            {profile.headline}
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-ink-dim animate-fade-up">
            {profile.subhead}
          </p>

          <div className="flex flex-wrap items-center gap-3 animate-fade-up">
            <a
              href="#experience"
              className="rounded-full bg-accent-cyan/10 px-5 py-2.5 text-sm font-medium text-accent-cyan ring-1 ring-accent-cyan/30 transition-colors hover:bg-accent-cyan/20"
            >
              See experience
            </a>
            <a
              href="#projects"
              className="rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent-violet/40 hover:text-accent-violet"
            >
              Selected projects
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink-mute transition-colors hover:border-border-strong hover:text-ink"
            >
              LinkedIn ↗
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4 animate-fade-up">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs font-mono uppercase tracking-widest text-ink-dim">
                  {s.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-ink">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
