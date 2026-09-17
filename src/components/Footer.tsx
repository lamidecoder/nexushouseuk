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
  { label: "Instagram", href: "https://instagram.com/nexushouse" },
  { label: "LinkedIn", href: "https://linkedin.com/company/nexushouse" },
  { label: "X", href: "https://x.com/nexushouse" },
];

export function Footer() {
  const { market } = useMarket();
  const { t } = useLocale();

  return (
    <footer id="contact-footer" className="border-t border-line bg-ink px-6 pb-8 pt-20 sm:px-10">
      <div className="mx-auto max-w-content">
        <FadeUp>
          <h2 className="font-display text-fluid-xl font-medium leading-[0.95] tracking-tightest text-bone">
            HAVE AN IDEA
            <br />
            WORTH BUILDING?
          </h2>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-8">
          <MagneticButton cursor="talk" className="inline-block">
            <a
              href={`mailto:${market.contactEmail}`}
              className="inline-flex items-center gap-3 rounded-full border border-bone/30 px-6 py-3 font-mono text-sm uppercase tracking-wide text-bone transition-all duration-200 hover:border-signal hover:text-signal active:scale-95"
            >
              {market.contactEmail} →
            </a>
          </MagneticButton>
        </FadeUp>

        <div className="mt-20 grid grid-cols-2 gap-10 border-t border-line pt-10 text-sm sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo className="text-lg text-bone" />
          </div>

          <FooterColumn title="Menu">
            <FooterLink href="/work">{t.nav.work}</FooterLink>
            <FooterLink href="/services">{t.nav.services}</FooterLink>
            <FooterLink href="/studio">{t.nav.studio}</FooterLink>
            <FooterLink href="/insights">Insights</FooterLink>
            <FooterLink href="/contact">{t.nav.contact}</FooterLink>
          </FooterColumn>

          <FooterColumn title="Connect">
            {SOCIALS.map((s) => (
              <FooterLink key={s.label} href={s.href} external>
                {s.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Region">
            <div className="flex flex-col items-start gap-4">
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
