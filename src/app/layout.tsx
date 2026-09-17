import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://nexushouse.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nexushouse — Digital Agency & Product Studio",
    template: "%s — Nexushouse",
  },
  description:
    "Nexushouse is a digital agency and product studio connecting strategy, design and technology — building websites, digital products, mobile apps, software and AI products.",
  openGraph: {
    title: "Nexushouse — Digital Agency & Product Studio",
    description:
      "Strategy × Design × Technology × People. Nexushouse builds websites, digital products, mobile apps, software and AI products.",
    url: SITE_URL,
    siteName: "Nexushouse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexushouse — Digital Agency & Product Studio",
    description: "Strategy × Design × Technology × People.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexushouse",
  url: SITE_URL,
  description:
    "Nexushouse is a digital agency and product studio connecting strategy, design and technology.",
  sameAs: [
    "https://instagram.com/nexushouse",
    "https://linkedin.com/company/nexushouse",
    "https://x.com/nexushouse",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-signal px-4 py-2 font-mono text-xs uppercase text-ink transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Providers>
          <Navigation />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
