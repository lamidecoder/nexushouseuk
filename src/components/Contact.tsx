"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMarket } from "@/lib/market/MarketProvider";
import { SITE_INSTAGRAM_URL, SITE_INSTAGRAM_HANDLE } from "@/lib/market/config";
import { FAQS } from "@/lib/data/faqs";
import { SectionLabel } from "./SectionLabel";
import { FadeUp } from "./RevealText";
import { MagneticButton } from "./MagneticButton";
import { VideoBubble } from "./VideoBubble";

const PROJECT_TYPES = ["Website", "App", "Software", "SaaS", "AI", "Digital Experience", "Something else"];
const HEARD_FROM = ["Search", "Referral", "Social media", "LinkedIn", "Instagram", "Other"];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const { market } = useMarket();
  const [projectType, setProjectType] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [heardFrom, setHeardFrom] = useState("");
  const [message, setMessage] = useState("");
  const [updates, setUpdates] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, projectType, message, email, phone, heardFrom, updates, market: market.id }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section id="contact" className="relative bg-ink px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-content">
          <FadeUp>
            <SectionLabel index="08" title="Contact" />
          </FadeUp>
          <FadeUp delay={0.05} className="mt-6 flex items-start justify-between gap-6">
            <h2 className="font-display text-fluid-xl font-medium leading-[0.95] tracking-tightest text-bone">
              {market.contactHeadline}
            </h2>
            <div className="hidden shrink-0 sm:block">
              <VideoBubble />
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-4 max-w-md text-bone/60">{market.contactSub}</p>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-2 sm:hidden">
            <VideoBubble />
          </FadeUp>

          <FadeUp delay={0.12}>
            <p className="mt-10 max-w-lg text-sm text-bone/50">
              Prefer not to use a form?{" "}
              <a href={`mailto:${market.contactEmail}`} className="text-bone/70 underline decoration-line underline-offset-4 hover:text-signal">
                Email us at {market.contactEmail}
              </a>{" "}
              or{" "}
              <a
                href={SITE_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/70 underline decoration-line underline-offset-4 hover:text-signal"
              >
                message us on Instagram {SITE_INSTAGRAM_HANDLE}
              </a>{" "}
              for a faster reply.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <form onSubmit={handleSubmit} className="mt-10 max-w-2xl">
              <fieldset>
                <legend className="font-mono text-xs uppercase tracking-widest text-bone/40">
                  What are you building?
                </legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={projectType === type}
                      onClick={() => setProjectType(type)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all duration-150 active:scale-95 ${
                        projectType === type
                          ? "border-signal bg-signal text-ink"
                          : "border-bone/20 text-bone/70 hover:border-bone/50"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="font-mono text-xs uppercase tracking-widest text-bone/40">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="mt-4 w-full border-b border-line bg-transparent py-3 text-lg text-bone outline-none transition-colors placeholder:text-bone/25 focus:border-signal"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="font-mono text-xs uppercase tracking-widest text-bone/40">
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="mt-4 w-full border-b border-line bg-transparent py-3 text-lg text-bone outline-none transition-colors placeholder:text-bone/25 focus:border-signal"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="font-mono text-xs uppercase tracking-widest text-bone/40">
                    Phone <span className="normal-case text-bone/30">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 234 567 8900"
                    className="mt-4 w-full border-b border-line bg-transparent py-3 text-lg text-bone outline-none transition-colors placeholder:text-bone/25 focus:border-signal"
                  />
                </div>
                <div>
                  <label htmlFor="contact-heard" className="font-mono text-xs uppercase tracking-widest text-bone/40">
                    How did you hear about us? <span className="normal-case text-bone/30">(optional)</span>
                  </label>
                  <select
                    id="contact-heard"
                    value={heardFrom}
                    onChange={(e) => setHeardFrom(e.target.value)}
                    className="mt-4 w-full border-b border-line bg-transparent py-3 text-lg text-bone outline-none transition-colors focus:border-signal"
                  >
                    <option value="" className="bg-ink">
                      Select one
                    </option>
                    {HEARD_FROM.map((opt) => (
                      <option key={opt} value={opt} className="bg-ink">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-10">
                <label htmlFor="contact-message" className="font-mono text-xs uppercase tracking-widest text-bone/40">
                  Tell us about it
                </label>
                <textarea
                  id="contact-message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="A sentence or two is plenty."
                  className="mt-4 w-full resize-none border-b border-line bg-transparent py-3 font-display text-2xl font-medium tracking-tight text-bone outline-none transition-colors placeholder:text-bone/25 focus:border-signal sm:text-3xl"
                />
              </div>

              <label className="mt-8 flex cursor-pointer items-start gap-3 text-sm text-bone/50">
                <input
                  type="checkbox"
                  checked={updates}
                  onChange={(e) => setUpdates(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-line bg-transparent accent-signal"
                />
                Keep me updated on Nexushouse news and writing.
              </label>

              <p className="mt-4 text-xs text-bone/40">
                By submitting this form you accept our{" "}
                <Link href="/legal" className="underline decoration-line underline-offset-4 hover:text-signal">
                  Privacy Policy
                </Link>
                .
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <MagneticButton cursor="talk" className="inline-block">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-full bg-signal px-8 py-4 font-mono text-sm font-medium uppercase tracking-wide text-ink transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:active:scale-100"
                  >
                    {status === "submitting" ? "Sending…" : "Send message →"}
                  </button>
                </MagneticButton>

                <a
                  href={SITE_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm uppercase tracking-wide text-bone/60 underline decoration-line underline-offset-4 hover:text-signal"
                >
                  or message us on Instagram
                </a>

                {status === "success" && <p className="text-sm text-signal">Thanks. We&apos;ll be in touch shortly.</p>}
                {status === "error" && (
                  <p className="text-sm text-bone/60">
                    Something went wrong. Email us directly at {market.contactEmail}.
                  </p>
                )}
              </div>
            </form>
          </FadeUp>
        </div>
      </section>

      <FaqSection />
    </>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative border-t border-line bg-ink px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <FadeUp>
          <SectionLabel index="09" title="Anything else?" />
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-6 max-w-md font-display text-fluid-lg font-medium leading-[1.05] tracking-tightest text-bone">
            The answers to your questions.
          </h2>
        </FadeUp>

        <div className="mt-12 flex flex-col divide-y divide-line border-t border-line">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <FadeUp key={faq.question} delay={i * 0.03}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-medium tracking-tight text-bone sm:text-xl">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signal/40 text-signal transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 text-bone/60">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
