"use client";

import { useState } from "react";
import { useMarket } from "@/lib/market/MarketProvider";
import { SectionLabel } from "./SectionLabel";
import { FadeUp } from "./RevealText";
import { MagneticButton } from "./MagneticButton";

const PROJECT_TYPES = ["Website", "App", "Software", "SaaS", "AI", "Digital Experience", "Something else"];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const { market } = useMarket();
  const [projectType, setProjectType] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectType, message, email, market: market.id }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-ink px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <FadeUp>
          <SectionLabel index="06" title="Contact" />
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-6 font-display text-fluid-xl font-medium leading-[0.95] tracking-tightest text-bone">
            {market.contactHeadline}
          </h2>
          <p className="mt-4 max-w-md text-bone/60">{market.contactSub}</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <form onSubmit={handleSubmit} className="mt-16 max-w-2xl">
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
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
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

            <div className="mt-10">
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

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <MagneticButton cursor="talk" className="inline-block">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="rounded-full bg-signal px-8 py-4 font-mono text-sm font-medium uppercase tracking-wide text-ink transition-opacity disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending…" : "Let&apos;s talk →"}
                </button>
              </MagneticButton>

              {market.showWhatsapp && market.whatsappNumber && (
                <a
                  href={`https://wa.me/${market.whatsappNumber.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm uppercase tracking-wide text-bone/60 underline decoration-line underline-offset-4 hover:text-signal"
                >
                  or WhatsApp us
                </a>
              )}

              {status === "success" && <p className="text-sm text-signal">Thanks — we&apos;ll be in touch shortly.</p>}
              {status === "error" && (
                <p className="text-sm text-bone/60">
                  Something went wrong — email us directly at {market.contactEmail}.
                </p>
              )}
            </div>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
