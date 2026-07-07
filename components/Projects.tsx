import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-3">
          <span className="eyebrow">03 — Selected Projects</span>
          <h2 className="section-title">Case studies in agentic AI and platform design.</h2>
          <p className="max-w-3xl text-ink-mute">
            A few engagements that reflect the kind of architecture work I lead — AI-ready
            platforms, cross-cloud agent frameworks, and large enterprise modernization.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="card flex flex-col p-7">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-violet">
                  {p.org}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                {p.blurb}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-ink-mute">
                {p.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-accent-cyan" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border pt-5">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
