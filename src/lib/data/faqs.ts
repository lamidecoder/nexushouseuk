export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "How long does a project usually take?",
    answer:
      "It depends on the scope. A marketing website is a different timeline to a custom platform. We'll give you a realistic estimate once we understand what you actually need, not a generic promise upfront.",
  },
  {
    question: "How much does it cost?",
    answer:
      "There's no fixed price list, every project is quoted against its own scope. Tell us what you're building and we'll come back with a clear estimate.",
  },
  {
    question: "We have a limited budget, will you still work with us?",
    answer:
      "Tell us what you're working with. We'd rather be upfront about what's realistic for that budget than overpromise and cut corners later.",
  },
  {
    question: "Do you outsource any of the work?",
    answer:
      "No. Design, engineering, and the IT infrastructure work are all handled by the same in-house team, not handed off to a separate agency or contractor pool.",
  },
  {
    question: "Do you work with businesses outside your home market?",
    answer:
      "Yes. We work remotely with clients internationally as well as locally, the country selector in the header just tailors contact details and compliance notes to where you are.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "We'll reply within one working day, usually to ask a few clarifying questions or set up a short call before anything gets quoted.",
  },
];
