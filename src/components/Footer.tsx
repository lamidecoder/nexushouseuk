"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { CountrySelector } from "./CountrySelector";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";
import { useMarket } from "@/lib/market/MarketProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { FadeUp } from "./RevealText";
import { MagneticButton } from "./MagneticButton";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/nexushouse", icon: "instagram" },
  { label: "LinkedIn", href: "https://linkedin.com/company/nexushouse", icon: "linkedin" },
  { label: "X", href: "https://x.com/nexushouse", icon: "x" },
] as const;

function SocialIcon({ icon }: { icon: (typeof SOCIALS)[number]["icon"] }) {
  const paths: Record<(typeof SOCIALS)[number]["icon"], React.ReactNode> = {
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" />
      </>
    ),
    linkedin: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8.2" cy="8.5" r="1" fill="currentColor" />
        <path d="M8.2 11v5M12 16v-3.2c0-1.5 2.5-1.7 2.5 0V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    x: <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
  };
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      {paths[icon]}
    </svg>
  );
}

const TAGLINE_WORDS = ["Building what's next.", "Building what's next.", "Building what's next."];

export function Footer() {
  const { market } = useMarket();
  const { t } = useLocale();

  return (
    <footer id="contact-footer" className="border-t border-line bg-ink pb-8 pt-20">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-10">
          <FadeUp delay={0.05} className="flex gap-3 sm:flex-col">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-bone/[0.06] text-bone/70 transition-colors duration-200 hover:bg-signal hover:text-ink"
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </FadeUp>

          <div className="flex-1 rounded-[32px] border border-line bg-ink-soft p-8 sm:p-12">
            <FadeUp>
              <h2 className="font-display text-fluid-lg font-medium leading-[0.98] tracking-tightest text-bone">
                Have an idea worth building?
              </h2>
            </FadeUp>

            <FadeUp delay={0.1} className="mt-8 flex flex-wrap items-center gap-5">
              <MagneticButton cursor="talk" className="inline-block">
                <a
                  href={`mailto:${market.contactEmail}`}
                  className="inline-flex items-center gap-3 rounded-full bg-signal px-6 py-3 font-mono text-sm font-medium uppercase tracking-wide text-ink transition-transform duration-200 active:scale-95"
                >
                  Start a project →
                </a>
              </MagneticButton>
              <span className="font-mono text-xs uppercase tracking-wide text-bone/40">{market.contactEmail}</span>
            </FadeUp>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-line pt-10 text-sm sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo className="text-lg text-bone" />
          </div>

          <FooterColumn title="Explore">
            <FooterLink href="/work">{t.nav.work}</FooterLink>
            <FooterLink href="/services">{t.nav.services}</FooterLink>
            <FooterLink href="/studio">{t.nav.studio}</FooterLink>
            <FooterLink href="/insights">Insights</FooterLink>
          </FooterColumn>

          <FooterColumn title="Learn">
            <FooterLink href="/contact">{t.nav.contact}</FooterLink>
            <FooterLink href="/legal">Legal &amp; Privacy</FooterLink>
          </FooterColumn>

          <FooterColumn title="Get in touch">
            <a href={`mailto:${market.contactEmail}`} className="text-bone/70 transition-colors hover:text-signal">
              {market.contactEmail}
            </a>
            {market.showWhatsapp && market.whatsappNumber && (
              <a
                href={`https://wa.me/${market.whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/70 transition-colors hover:text-signal"
              >
                WhatsApp
              </a>
            )}
            <div className="mt-2 flex flex-col items-start gap-4">
              <CountrySelector />
              <LanguageSelector />
              <ThemeToggle className="-ml-1" />
            </div>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nexushouse. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal" className="hover:text-bone/70">
              Legal &amp; Privacy ({market.legalFramework})
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mt-10 overflow-hidden border-t border-line py-6">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[...TAGLINE_WORDS, ...TAGLINE_WORDS].map((word, i) => (
            <span key={i} className="mx-6 font-display text-3xl font-medium tracking-tight text-bone/15 sm:text-5xl">
              {word}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-bone/40">{title}</p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-bone/70 transition-colors hover:text-signal"
    >
      {children}
    </Link>
  );
}
