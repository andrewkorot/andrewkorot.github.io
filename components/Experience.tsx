import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-3">
          <span className="eyebrow">02 — Experience</span>
          <h2 className="section-title">20+ years across architecture and engineering.</h2>
          <p className="max-w-3xl text-ink-mute">
            From principal architecture for AI-ready platforms to co-founding multi-cloud
            SaaS products — a continuous track record of leading large, complex systems.
          </p>
        </div>

        <ol className="relative space-y-10 border-l border-border pl-6 md:pl-8">
          {experience.map((role) => (
            <li key={role.company + role.period} className="relative">
              <span className="absolute -left-[33px] top-2 grid h-4 w-4 place-items-center md:-left-[41px]">
                <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_0_4px_rgba(34,211,238,0.15)]" />
              </span>

              <div className="card p-6 md:p-7">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-lg font-semibold text-ink">
                    {role.company}{" "}
                    <span className="font-normal text-ink-mute">
                      — {role.title}
                    </span>
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-dim">
                    {role.period}
                  </span>
                </div>

                {role.tags && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {role.tags.map((t) => (
                      <span key={t} className="chip chip-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink-mute">
                  {role.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-accent-violet" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
