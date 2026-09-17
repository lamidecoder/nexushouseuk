import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { THEME_INIT_SCRIPT } from "@/lib/theme/ThemeProvider";

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
    default: "Nexushouse — Digital, Software & IT Solutions",
    template: "%s — Nexushouse",
  },
  description:
    "Nexushouse is a team of designers, engineers and IT professionals connecting strategy, design and technology — websites, digital products, mobile apps, software, AI, cloud infrastructure, cybersecurity and IT support.",
  openGraph: {
    title: "Nexushouse — Digital, Software & IT Solutions",
    description:
      "Strategy × Design × Technology × People. Nexushouse builds digital products and runs the IT infrastructure underneath them.",
    url: SITE_URL,
    siteName: "Nexushouse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexushouse — Digital, Software & IT Solutions",
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
    "Nexushouse is a team of designers, engineers and IT professionals connecting strategy, design and technology — digital products and the IT infrastructure that runs them.",
  sameAs: [
    "https://instagram.com/nexushouse",
    "https://linkedin.com/company/nexushouse",
    "https://x.com/nexushouse",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
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
