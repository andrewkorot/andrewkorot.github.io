import { skillGroups, education, certifications } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-3">
          <span className="eyebrow">04 — Skills, Education & Certifications</span>
          <h2 className="section-title">The stack behind the architecture.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.label} className="card p-6">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent-cyan">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <span key={i} className="chip">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-violet">
              Education
            </h3>
            <ul className="space-y-3">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="text-sm font-semibold text-ink">{e.degree}</p>
                  <p className="text-sm text-ink-mute">{e.school}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-violet">
              Certifications
            </h3>
            <ul className="space-y-2 text-sm text-ink-mute">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-accent-mint" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
