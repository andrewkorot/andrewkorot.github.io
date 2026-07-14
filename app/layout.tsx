import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrii Korotaiev — Principal Architect, AI & Cloud",
  description:
    "20+ years architecting Agentic AI, cloud platforms, and large-scale enterprise systems across Azure, AWS, and GCP.",
  openGraph: {
    title: "Andrii Korotaiev — Principal Architect, AI & Cloud",
    description:
      "Agentic AI, Semantic Kernel, multi-cloud platforms, RAG pipelines, and enterprise modernization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
