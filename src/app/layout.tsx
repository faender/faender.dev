import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faender — AI / Backend Engineer",
  description: "Portfolio of Faender. AI + backend engineering, LLM systems, practical projects.",
  metadataBase: new URL("https://faender.dev"),
  openGraph: {
    title: "Faender — AI / Backend Engineer",
    description: "AI + backend engineering, LLM systems, practical projects.",
    url: "https://faender.dev",
    siteName: "faender.dev",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
