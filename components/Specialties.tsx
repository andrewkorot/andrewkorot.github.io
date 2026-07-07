import { specialties } from "@/lib/data";

export function Specialties() {
  return (
    <section id="specialties" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-3">
          <span className="eyebrow">01 — Core Specialties</span>
          <h2 className="section-title">
            Where I architect, build, and lead.
          </h2>
          <p className="max-w-3xl text-ink-mute">
            From agentic AI orchestration to multi-cloud platform design — these are the
            areas where I deliver strategy, hands-on architecture, and scalable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {specialties.map((s, i) => (
            <article
              key={s.title}
              className="card p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="font-mono text-xs text-accent-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-ink">{s.title}</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-ink-mute">
                {s.blurb}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
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
