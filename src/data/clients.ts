/**
 * Client logos for the home page marquee.
 *
 * Files live in /public/clients. They arrived with spaces and an ampersand in
 * the filenames, which are legal in URLs but awkward to encode consistently,
 * so they were renamed to kebab-case.
 *
 * `name` is the alt text, so it is the company's full name rather than the
 * filename.
 */

export type Client = {
  name: string;
  /** Path under /public. */
  logo: string;
};

export const CLIENTS: Client[] = [
  { name: "Aercon Microns Private Limited", logo: "/clients/aercon-microns.jpg" },
  { name: "Alltech India Limited", logo: "/clients/alltech-india.webp" },
  { name: "Calistta Healthcare", logo: "/clients/calistta-healthcare.webp" },
  { name: "Creanza Ceramic Private Limited", logo: "/clients/creanza-ceramic.svg" },
  { name: "EPCM Service and Supply Private Limited", logo: "/clients/epcm-service-and-supply.png" },
  { name: "Freightfox", logo: "/clients/freightfox.svg" },
  { name: "Innovation & Automation", logo: "/clients/innovation-and-automation.png" },
  { name: "Karnavati Seeds Private Limited", logo: "/clients/karnavati-seeds.png" },
  { name: "Kaypee Polyfab Private Limited", logo: "/clients/kaypee-polyfab.png" },
  {
    name: "Parul Innovation & Entrepreneurship Research Centre",
    logo: "/clients/parul-innovation-research-centre.svg",
  },
  { name: "Proptech Cleardeals", logo: "/clients/proptech-cleardeals.png" },
  { name: "Soul Sutra", logo: "/clients/soul-sutra.webp" },
];
