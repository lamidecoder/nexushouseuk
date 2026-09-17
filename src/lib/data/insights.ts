export interface Insight {
  slug: string;
  index: string;
  title: string;
  dek: string;
  readingTime: string;
  body: string[];
}

export const INSIGHTS: Insight[] = [
  {
    slug: "design-and-it-one-team",
    index: "01",
    title: "Why we don't separate design from IT",
    dek: "Most agencies hand a finished design to a separate IT team and hope it survives contact with reality. We build both under one roof, on purpose.",
    readingTime: "4 min read",
    body: [
      "A lot of digital projects fail quietly. Not in a dramatic way, just a slow drift between what was designed and what actually ships. The interface looks right in the mockup. Then it meets a database that can't return data fast enough, a server that isn't configured for the traffic, or a login flow nobody stress tested. The design wasn't wrong. It just never met the infrastructure it had to live on.",
      "That's the gap we built Nexushouse to close. Design and IT are usually treated as two different jobs, handled by two different teams, sometimes two different companies. The design team hands off a finished file. The IT team inherits the consequences. Neither one is fully accountable for the result, because neither one owns the whole thing.",
      "We do it differently. The people who shape how a product looks and feels are in the same conversations as the people who keep it running, secure and fast. That means performance and security constraints show up in week one, not week twelve. It means a decision about hosting or infrastructure is made with the user experience in mind, not just the invoice.",
      "It also means when something breaks, which it eventually will, there's one team that understands the whole system: the interface, the code behind it and the servers underneath. Not a support ticket bouncing between two vendors who each think it's the other one's problem.",
      "This isn't a claim that separate specialists can't do good work. Plenty do. It's a bet that for most businesses, a single team that treats the product and its infrastructure as one job produces something more reliable, end to end, than two teams that each own half of it.",
    ],
  },
  {
    slug: "website-app-or-platform",
    index: "02",
    title: "How to choose between a website, an app and a platform",
    dek: "A practical way to think about the decision, before you spend money building the wrong thing.",
    readingTime: "5 min read",
    body: [
      "This question comes up in almost every first conversation we have with a new client: should this be a website, a mobile app, or a full platform? The honest answer is that most businesses default to whichever one sounds most impressive, rather than whichever one actually fits what they're trying to do. Here's a simpler way to think about it.",
      "Start with a website if people need to find you, understand what you do, and take one clear action: book a call, make an enquiry, buy something occasionally. Websites are cheap to build well, easy to update, and work on every device without asking anyone to install anything. If your business model doesn't depend on people coming back daily, a website is very often the right and complete answer.",
      "Consider a mobile app when people need to use your product often, ideally daily or weekly, and when native device features genuinely matter: push notifications, offline access, the camera, location. An app that nobody has a reason to open twice a week is a maintenance cost with no return. Be honest with yourself about usage frequency before committing to one.",
      "Reach for a platform when there are multiple types of users doing different things inside the same system: customers, staff, administrators, and each needs their own view and permissions. Platforms are the most expensive and slowest option to build properly, so they're worth it when the complexity is real, not when it just sounds more serious than 'a website'.",
      "The failure mode we see most often is businesses starting with a platform or an app when a well-built website would have done the job for a fraction of the cost and been live months sooner. Start with the smallest thing that actually solves the problem. You can always build up from a website that works. It's much harder to recover the time and budget spent on a platform nobody needed yet.",
    ],
  },
  {
    slug: "small-business-security-mistake",
    index: "03",
    title: "The most common security mistake small businesses make",
    dek: "It isn't a sophisticated attack. It's usually something boring, avoidable, and free to fix.",
    readingTime: "4 min read",
    body: [
      "When people imagine a cybersecurity incident, they picture something dramatic: a skilled attacker, custom malware, a targeted campaign. In our experience doing IT support and security work, most incidents that actually hit small and mid-sized businesses are much less exciting than that, and much easier to have prevented.",
      "The single most common issue is reused or weak passwords with no second factor of authentication. One email account gets compromised, usually through a password reused from an unrelated breach somewhere else on the internet, and that one account becomes the way into everything else: file storage, banking, customer records. Multi-factor authentication on your important accounts closes most of this door for free, and takes a few minutes to set up.",
      "The second most common issue is no real backup strategy. Not 'we have a backup' as an idea, but an actual, tested, working restore process that someone has verified recently. Ransomware and simple hardware failure both end the same way for a business without one: total loss, or a ransom payment as the only remaining option.",
      "The third is unpatched software. Operating systems, plugins, and business software all receive security updates that fix known vulnerabilities. Skipping them because an update might break something familiar is a very common, very understandable choice that also leaves a known, documented hole open to anyone looking for it.",
      "None of this requires an enterprise security budget. It requires someone responsible for actually doing it: turning on MFA everywhere it's offered, running a real backup schedule, keeping software current, and having a plan for when something does go wrong. That's most of what our managed IT and support work looks like in practice. Less firefighting, more of the boring maintenance that prevents the fire in the first place.",
    ],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return INSIGHTS.find((i) => i.slug === slug);
}
