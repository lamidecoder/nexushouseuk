"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { CountrySelector } from "./CountrySelector";
import { LanguageSelector } from "./LanguageSelector";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { MagneticButton } from "./MagneticButton";

const LINKS = [
  { key: "work", href: "/work" },
  { key: "services", href: "/#services" },
  { key: "studio", href: "/#studio" },
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useLocale();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
        <motion.nav
          layout
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`flex w-full items-center justify-between border border-transparent px-4 py-3 transition-colors duration-500 sm:px-5 ${
            scrolled
              ? "max-w-[860px] rounded-full border-line bg-ink/80 backdrop-blur-xl"
              : "max-w-content rounded-full bg-transparent"
          }`}
        >
          <Link href="/" className="text-sm sm:text-base" data-cursor="explore">
            <Logo className="text-bone" />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-wide text-bone/70 transition-colors hover:text-bone"
                >
                  {t.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <CountrySelector />
            <LanguageSelector />
            <MagneticButton cursor="talk">
              <Link
                href="/#contact"
                className="rounded-full bg-signal px-4 py-2 font-mono text-xs font-medium uppercase tracking-wide text-ink transition-transform"
              >
                {t.nav.contact} →
              </Link>
            </MagneticButton>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className="h-px w-5 bg-bone" />
            <span className="h-px w-5 bg-bone" />
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>{menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}</AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const { t } = useLocale();
  const items = [...LINKS.map((l) => ({ label: t.nav[l.key], href: l.href })), { label: t.nav.contact, href: "/#contact" }];

  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 100% 0%)" }}
      animate={{ clipPath: "circle(150% at 100% 0%)" }}
      exit={{ clipPath: "circle(0% at 100% 0%)" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[80] flex flex-col bg-ink px-6 pt-6"
    >
      <div className="flex items-center justify-between">
        <Logo className="text-bone" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="relative h-9 w-9"
        >
          <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-bone" />
          <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-bone" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2">
        {items.map((item, i) => (
          <motion.div
            key={item.href + item.label}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="block py-2 font-display text-fluid-lg font-medium tracking-tightest text-bone"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      <div className="flex items-center justify-between border-t border-line py-6">
        <CountrySelector />
        <LanguageSelector />
      </div>
    </motion.div>
  );
}
