/**
 * The single source of truth for the eight verticals.
 *
 * Drives: the home orbit, /group, the eight /group/[slug] pages,
 * the footer column and the nav dropdown.
 *
 * On the previous WordPress site the orbit's panel IDs were stale
 * template slugs (#legal rendered Financial Services, #hr rendered
 * Legal). Everything reads from this file so that cannot recur.
 */

export type Vertical = {
  slug: string;
  name: string;
  short: string;
  eyebrow: string;
  /** Sub-brand accent from the brand book, p27. */
  accent: string;
  accentName: string;
  /** true where the brand book gives a swatch but no hex, or none at all. */
  accentProvisional?: boolean;
  promise: string;
  body: string;
  solves?: { title: string; text: string }[];
  audiences?: string[];
  services?: { title: string; text: string }[];
  related: string[];
  /** Copy still to come from the client. */
  thin?: boolean;
};

export const VERTICALS: Vertical[] = [
  {
    slug: "advisors",
    name: "Orenda Advisors",
    short: "Advisors",
    eyebrow: "Advisory",
    accent: "#00AAC6",
    accentName: "Ocean Blue",
    promise: "Clarity before action.",
    body: "Multidisciplinary advisory for businesses, promoters, investors, funds and families, anchored in tax, finance, corporate law and regulatory discipline.",
    solves: [
      { title: "Structure before scale", text: "Restructuring, holding design and group architecture set up before growth makes them expensive to change." },
      { title: "Transactions that hold", text: "M&A, fundraising and AIF formation approached with diligence, valuation and documentation aligned." },
      { title: "Cross-border readiness", text: "GIFT City and IFSC advisory for businesses positioning to operate beyond a single jurisdiction." },
      { title: "The finance function itself", text: "Virtual CFO and ERP implementation where the reporting layer needs to catch up with the business." },
    ],
    audiences: ["Promoters", "Investors and funds", "Family offices", "Corporates", "IPO-track businesses"],
    services: [
      { title: "Restructuring and M&A", text: "Group structuring, mergers, acquisitions and divestment support." },
      { title: "Fundraising and AIF formation", text: "Capital raising, fund set-up and investor documentation." },
      { title: "GIFT City / IFSC advisory", text: "Entity structuring and regulatory positioning for the IFSC regime." },
      { title: "IPO compliance", text: "Readiness, governance and disclosure preparation ahead of listing." },
      { title: "Taxation", text: "Direct and indirect tax advisory, planning and representation." },
      { title: "Virtual CFO and ERP", text: "Outsourced finance leadership and systems implementation." },
      { title: "Generational wealth planning", text: "Succession, estate and family governance structures." },
    ],
    related: ["capital", "legal", "financial-services"],
  },
  {
    slug: "capital",
    name: "Orenda Capital",
    short: "Capital",
    eyebrow: "Capital",
    accent: "#7248F2",
    accentName: "Iris",
    promise: "Investing in possibility.",
    body: "Investment and capital advisory for businesses, promoters, investors and funds looking to structure opportunity with clarity, discipline and long-term value in mind.",
    solves: [
      { title: "Capital without direction", text: "Money that moves without a thesis. Capital is matched to a structure, not just an opportunity." },
      { title: "Fundraising readiness", text: "Businesses approach the market before the numbers, governance and story can carry the ask." },
      { title: "Access", text: "Investor and institutional relationships that individual founders rarely reach alone." },
    ],
    audiences: ["Founders raising capital", "Investors and HNIs", "Funds", "Merchant and investment bankers"],
    services: [
      { title: "Investment advisory", text: "Opportunity assessment, structuring and long-term positioning." },
      { title: "Venture capital and private equity", text: "Growth capital access across stages." },
      { title: "AIF-related advisory", text: "Alternative investment fund structuring and participation." },
      { title: "IPO advisory", text: "Route-to-listing planning and market readiness." },
      { title: "Investment banking support", text: "Transaction execution support alongside Orenda Advisors." },
    ],
    related: ["advisors", "financial-services", "creative-holdings"],
  },
  {
    slug: "financial-services",
    name: "Orenda Financial Services",
    short: "Financial Services",
    eyebrow: "Financial services",
    accent: "#265DFE",
    accentName: "Ultramarine Blue",
    promise: "Borrow with confidence.",
    body: "Loan advisory for individuals and businesses looking for the right loan, from the right lender, at the right terms. Founded in 2017, the firm compares borrower profiles across 50+ banks and NBFCs, then helps structure and negotiate the deal.",
    solves: [
      { title: "One offer is not a choice", text: "Most borrowers are shown a single option and expected to decide. Profiles are compared across 50+ lenders first." },
      { title: "Eligibility before application", text: "Understanding what a profile actually supports, before rejections start affecting the credit record." },
      { title: "Terms, not just approval", text: "Rate, tenure, structure and prepayment terms negotiated rather than accepted." },
    ],
    audiences: ["MSMEs and business owners", "Salaried professionals", "CAs and professionals", "Property owners", "Home buyers"],
    services: [
      { title: "Home loan", text: "Lender comparison and clear approval routes for home buyers." },
      { title: "Business loan", text: "Structured borrowing for business owners and MSMEs." },
      { title: "Loan against property", text: "Secured facilities against residential or commercial assets." },
      { title: "Personal loan", text: "Unsecured borrowing matched to profile and repayment reality." },
      { title: "Professional loan", text: "Practice and profession-linked financing." },
    ],
    related: ["advisors", "realtors", "capital"],
  },
  {
    slug: "creative-holdings",
    name: "Orenda Creative Holdings",
    short: "Creative Holdings",
    eyebrow: "Creatives",
    accent: "#D4145A",
    accentName: "Crimson",
    accentProvisional: true,
    promise: "Ideas as market-facing assets.",
    body: "Creative, brand and media-led business assets built to strengthen visibility, communication and enterprise value within the Group. Creative Holdings brings together Orenda's creative, brand and media interests, supporting businesses with communication-led thinking, content direction, brand building and media opportunities.",
    audiences: ["Group businesses", "Media partners", "Brand-led ventures"],
    related: ["digital", "capital", "advisors"],
    thin: true,
  },
  {
    slug: "digital",
    name: "Orenda Digital",
    short: "Digital",
    eyebrow: "Digital",
    accent: "#DF5123",
    accentName: "Flame",
    promise: "Moving value forward.",
    body: "Strategic digital growth partner for trust-led businesses that need stronger visibility, sharper communication and measurable growth. Some businesses cannot grow on visibility alone, they need credibility, consistency and a system that turns attention into trust.",
    solves: [
      { title: "Scattered digital presence", text: "Brings brand, content and platforms into one clear growth system." },
      { title: "Content without direction", text: "Builds communication around business goals, not only posting frequency." },
      { title: "Weak conversion journeys", text: "Connects digital visibility with enquiry, trust and measurable action." },
      { title: "Founder and leadership visibility", text: "Manages communication across relevant channels with strategic consistency." },
      { title: "Platform execution gaps", text: "Closes the distance between strategy and what actually ships." },
    ],
    audiences: ["Financial services", "Healthcare", "Education", "E-commerce", "Trust-led B2B"],
    services: [
      { title: "Brand and strategy", text: "Positioning, identity and communication direction." },
      { title: "Performance marketing", text: "Campaigns built around enquiry quality, not impressions." },
      { title: "Content systems", text: "Editorial, social and founder-led communication." },
      { title: "Website development", text: "Sites built for credibility and conversion." },
      { title: "SEO", text: "Organic visibility for high-consideration categories." },
    ],
    related: ["creative-holdings", "financial-services", "realtors"],
  },
  {
    slug: "realtors",
    name: "Orenda Realtors",
    short: "Realtors",
    eyebrow: "Realtors",
    accent: "#FFB94A",
    accentName: "Quiet Gold",
    accentProvisional: true,
    promise: "Landmark developments with purpose, precision and trust.",
    body: "An Ahmedabad-based real estate development company creating residential, commercial and plotting developments across strategically selected locations, combining market intelligence, meticulous planning, premium quality and disciplined execution.",
    solves: [
      { title: "Location before launch", text: "Market intelligence drives site selection rather than following it." },
      { title: "Delivery discipline", text: "Planning and execution held to the same standard as the sales promise." },
      { title: "Investment guidance", text: "Strategic real estate advice for buyers building long-term wealth, not just closing a unit." },
    ],
    audiences: ["Homeowners", "Businesses", "Land investors", "Institutional buyers"],
    services: [
      { title: "Residential developments", text: "Living spaces planned around location, quality and long-term value." },
      { title: "Commercial developments", text: "Business-focused assets in strategically selected locations." },
      { title: "Mixed-use developments", text: "Integrated schemes designed for modern urban needs." },
      { title: "Plotting and township", text: "Land-led opportunities structured for scale and clarity." },
      { title: "Land acquisition", text: "Strategic identification, acquisition and development planning." },
    ],
    related: ["financial-services", "star-holiday-homes", "legal"],
  },
  {
    slug: "legal",
    name: "Orenda Legal",
    short: "Legal",
    eyebrow: "Legal",
    accent: "#5B3FA8",
    accentName: "Violet",
    accentProvisional: true,
    promise: "Strategic legal counsel for complex matters.",
    body: "Dispute resolution, litigation and advisory for corporates, founders, HNIs and individuals who need strong representation and clear legal direction. Orenda Legal represents clients before the Supreme Court of India, various High Courts and specialised statutory tribunals.",
    solves: [
      { title: "Disputes that need strategy", text: "Litigation approached as a commercial decision, not only a procedural one." },
      { title: "Drafting that holds up", text: "Agreements and filings written to survive scrutiny rather than to close a file." },
      { title: "Protecting what was built", text: "IPR, arbitration and corporate remedies for assets already carrying value." },
    ],
    audiences: ["Corporates and businesses", "Startups", "MSMEs", "High-net-worth individuals", "Property owners and developers", "Professionals and entrepreneurs"],
    services: [
      { title: "Court litigation", text: "Supreme Court, High Courts and statutory tribunals." },
      { title: "Civil and commercial disputes", text: "Contract, property and commercial matters." },
      { title: "Criminal litigation", text: "Representation across criminal proceedings." },
      { title: "Intellectual property", text: "Trademark, copyright and IPR enforcement." },
      { title: "Arbitration", text: "Domestic and institutional arbitration." },
      { title: "Corporate legal advisory", text: "Governance, compliance and transaction counsel." },
    ],
    related: ["advisors", "realtors", "capital"],
  },
  {
    slug: "star-holiday-homes",
    name: "Orenda Star Holiday Homes LLC",
    short: "Star Holiday Homes",
    eyebrow: "Hospitality",
    accent: "#0C7074",
    accentName: "Orenda Teal",
    accentProvisional: true,
    promise: "Lifestyle-led value, beyond core finance.",
    body: "Holiday homes and hospitality-led assets within the wider Orenda ecosystem, built around lifestyle, experience and long-term value. Star Holiday Homes LLC represents the Group's presence in global hospitality and holiday home opportunities.",
    audiences: ["International investors", "Lifestyle buyers", "Hospitality partners"],
    related: ["realtors", "capital", "advisors"],
    thin: true,
  },
];

export const bySlug = (slug: string) => VERTICALS.find((v) => v.slug === slug);

/**
 * Tier 2, independent brands from the brand book's architecture.
 * Carry their own identity; no Orenda lockup. (Decision D1)
 */
export const INDEPENDENT = [
  { name: "SocAcc", note: "A complete society compliance platform." },
  { name: "dabas organic", note: "Personal care and organic products." },
  { name: "Viral X", note: "Media and audience-led ventures." },
  { name: "Future NBFC", note: "Planned, subject to regulatory approval.", planned: true },
];
