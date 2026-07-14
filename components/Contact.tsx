import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="card relative overflow-hidden p-10 md:p-14">
          <div className="bg-grid-fade absolute inset-0 opacity-60" aria-hidden />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">05 — Let's talk</span>
              <h2 className="mt-3 display-serif text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                <span className="italic gradient-text">
                  Architecting agentic AI and cloud platforms.
                </span>
              </h2>
              <p className="mt-4 text-ink-mute">
                Open to senior architect, principal, and advisory roles focused on
                agentic AI, multi-cloud platforms, and enterprise modernization.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-accent-cyan/10 px-5 py-2.5 text-center font-medium text-accent-cyan ring-1 ring-accent-cyan/30 transition-colors hover:bg-accent-cyan/20"
              >
                {profile.email}
              </a>
              {profile.telegram && (
                <a
                  href={profile.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-5 py-2.5 text-center font-medium text-ink-mute transition-colors hover:border-border-strong hover:text-ink"
                >
                  Telegram ↗
                </a>
              )}
              {profile.whatsapp && (
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-5 py-2.5 text-center font-medium text-ink-mute transition-colors hover:border-border-strong hover:text-ink"
                >
                  WhatsApp ↗
                </a>
              )}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-5 py-2.5 text-center font-medium text-ink-mute transition-colors hover:border-border-strong hover:text-ink"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
