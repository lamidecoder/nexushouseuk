import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Privacy",
  description: "Privacy policy and terms of use for Nexushouse.",
};

const EFFECTIVE_DATE = "17 September 2026";

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-24 pt-32 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-widest text-bone/50">Legal</p>
      <h1 className="mt-6 font-display text-fluid-lg font-medium tracking-tightest text-bone">
        Legal &amp; Privacy
      </h1>
      <p className="mt-4 text-sm text-bone/50">Effective {EFFECTIVE_DATE}</p>

      <div className="mt-12 flex flex-col gap-12 text-bone/70">
        <section className="flex flex-col gap-4">
          <h2 className="font-display text-2xl font-medium tracking-tight text-bone">Privacy policy</h2>
          <p>
            Nexushouse (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains
            what we collect on this website, why, and what rights you have over it.
          </p>

          <h3 className="mt-4 font-medium text-bone">What we collect</h3>
          <p>
            The only personal information we collect is what you choose to give us: your name,
            email address and project details, submitted through the contact form. We do not use
            third-party analytics, advertising trackers or tracking cookies on this site.
          </p>

          <h3 className="mt-4 font-medium text-bone">Local preferences</h3>
          <p>
            Your region, language and light or dark theme choices are stored in your browser&apos;s
            local storage, on your device only. We never see this data, it is not sent to our
            servers, and it stays on your device until you clear your browser storage.
          </p>

          <h3 className="mt-4 font-medium text-bone">How we use your information</h3>
          <p>
            Contact form submissions are used solely to respond to your enquiry. We do not sell,
            rent or share your information with third parties for marketing purposes. We may use a
            third-party email or CRM provider to manage enquiries; if so, that provider processes
            your data only on our instructions and under an appropriate data processing agreement.
          </p>

          <h3 className="mt-4 font-medium text-bone">How long we keep it</h3>
          <p>
            We keep contact form submissions for as long as reasonably needed to respond to your
            enquiry and maintain a record of business communications, and delete them sooner on
            request.
          </p>

          <h3 className="mt-4 font-medium text-bone">Your rights</h3>
          <p>
            Depending on where you are, you have rights over your personal data under the Nigeria
            Data Protection Act (NDPR), UK GDPR or EU GDPR. These typically include the right to
            access, correct, delete or port your data, and to object to or restrict how it is used.
            To exercise any of these rights, contact us using the details below.
          </p>

          <h3 className="mt-4 font-medium text-bone">Contact</h3>
          <p>
            Questions about this policy or your data can be sent to{" "}
            <a
              href="mailto:hello@nexushouse.com"
              className="text-bone underline decoration-line underline-offset-4 hover:text-signal"
            >
              hello@nexushouse.com
            </a>
            .
          </p>
        </section>

        <section className="flex flex-col gap-4 border-t border-line pt-12">
          <h2 className="font-display text-2xl font-medium tracking-tight text-bone">Terms of use</h2>
          <p>
            By using this website, you agree to these terms. If you don&apos;t agree with them,
            please don&apos;t use the site.
          </p>

          <h3 className="mt-4 font-medium text-bone">Using this site</h3>
          <p>
            You may browse this website and use the contact form to reach us for legitimate
            business enquiries. You agree not to misuse the site: no attempts to disrupt it, scrape
            it at scale, or use it for unlawful purposes.
          </p>

          <h3 className="mt-4 font-medium text-bone">Content and intellectual property</h3>
          <p>
            The design, code, text and visuals on this site belong to Nexushouse unless otherwise
            noted, and may not be copied or reused without permission. Project names, logos and
            descriptions referenced in our work section belong to their respective owners and are
            shown to describe work we have done for or with them.
          </p>

          <h3 className="mt-4 font-medium text-bone">No warranty</h3>
          <p>
            This website is provided as is. We take reasonable care to keep it accurate and
            available, but make no guarantee that it will be error-free or uninterrupted.
          </p>

          <h3 className="mt-4 font-medium text-bone">Changes</h3>
          <p>
            We may update these terms and our privacy policy from time to time. The effective date
            at the top of this page reflects the most recent update.
          </p>
        </section>
      </div>
    </div>
  );
}
