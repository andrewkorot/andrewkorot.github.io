import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-ink-dim md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. {profile.location}.
        </p>
        <p className="font-mono text-xs uppercase tracking-widest">
          Designed & built with Next.js · Tailwind
        </p>
      </div>
    </footer>
  );
}
