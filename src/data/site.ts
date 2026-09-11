/**
 * Content shared across pages: the group tagline, the process, the
 * ecosystem summary, the founding story and contact particulars.
 * Kept separate from verticals.ts (which is one company per record)
 * so page-level copy doesn't get tangled up with the company data model.
 */

export const TAGLINE = "Time is no barrier in everything we do.";

export const STATS = [
  { n: "15+", l: "Years of combined leadership experience" },
  { n: "8", l: "Companies under one group" },
  { n: "6", l: "Sectors served" },
];

export const PROCESS = [
  { n: "01", k: "Understand", v: "Every engagement starts with the client's actual objective, not a template." },
  { n: "02", k: "Structure", v: "We design the right legal, tax, and capital structure before we design anything else." },
  { n: "03", k: "Advise", v: "Practical, commercially viable, regulation-first recommendations." },
  { n: "04", k: "Execute", v: "Coordinated delivery across the relevant Orenda vertical." },
  { n: "05", k: "Protect", v: "Ongoing compliance and advisory, not a one-time transaction." },
];

export const ECOSYSTEM = [
  { slug: "advisors", name: "Orenda Advisors", verb: "structures." },
  { slug: "capital", name: "Orenda Capital", verb: "funds." },
  { slug: "financial-services", name: "Orenda Financial Services", verb: "lends." },
  { slug: "realtors", name: "Orenda Realtors", verb: "builds." },
  { slug: "legal", name: "Orenda Legal", verb: "protects." },
  { slug: "digital", name: "Orenda Digital", verb: "grows." },
];

export const BELIEFS = [
  {
    k: "Integrated over fragmented.",
    v: "Tax, law, capital, and real estate rarely sit in separate boxes in the real world. We don't treat them that way either.",
  },
  {
    k: "Practical over theoretical.",
    v: "Every recommendation has to survive contact with a regulator, a lender, or a courtroom. We design for that.",
  },
  {
    k: "Long-term over transactional.",
    v: "We stay with clients through the paperwork, the approval, and everything that comes after - not just the deal.",
  },
];

export const WHO_WE_SERVE = [
  "Promoters and entrepreneurs",
  "Investors and HNIs",
  "Startups and MSMEs",
  "Corporates undertaking M&A or restructuring",
  "Family-owned businesses",
  "Funds preparing to raise or deploy capital",
];

/**
 * The official Orenda Holdings accounts (the parent brand, not the individual
 * verticals — those carry their own handles in verticals.ts). Kept as plain
 * data so it can also feed the `sameAs` array if Organization structured data
 * is added later.
 */
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/orendaholdingsofficial/" },
  { label: "Facebook", href: "https://www.facebook.com/orendaholdingsofficial" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/orenda-holdings/" },
] as const;

type ContactDetails = {
  emails: { label: string; address: string }[];
  offices: { label: string; lines: string[] }[];
  hours: string;
  city: string;
  /**
   * No number has been supplied yet. Set it here and the contact page renders
   * a Phone block automatically — nothing else needs changing.
   */
  phone?: string;
};

export const CONTACT: ContactDetails = {
  emails: [
    { label: "General enquiries", address: "inquiry@orendagroup.in" },
    { label: "Careers and recruitment", address: "hr@orendagroup.in" },
  ],
  offices: [
    {
      label: "Registered Office",
      lines: [
        "Pinnacle Business Park, Synergy Tower",
        "Corporate Rd, Prahlad Nagar",
        "Ahmedabad, Gujarat 380015",
      ],
    },
    {
      label: "Corporate Office",
      lines: [
        "Z2, Floor 28, Opp Baghbaan Party Plot",
        "Zydus Hospital Road, Thaltej",
        "Ahmedabad, Gujarat 380059",
      ],
    },
  ],
  hours: "10:00 AM - 7:00 PM",
  city: "Ahmedabad",
};

/** The address to show wherever only one will fit. */
export const PRIMARY_EMAIL = CONTACT.emails[0].address;

export const STORY = [
  "Orenda Holdings LLP was founded in 2026 in Ahmedabad, with a simple premise: the gap between a promoter with an idea and an investor with capital should be shorter, clearer, and easier to cross.",
  "We started as advisors. We've since grown into a group that structures capital, builds real assets, argues cases, and grows brands - all solutions under one roof, so that our clients don't have to coordinate five different firms to get one thing done right.",
];
