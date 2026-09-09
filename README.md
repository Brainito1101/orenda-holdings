# Orenda Holdings

Site for **Orenda Holdings**, a multi-sector business and investment group.
Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind v4.
Every route is statically generated; there is no server-side code.

## Running locally

```bash
npm install
npm run dev
```

```bash
npm run build   # production build, prerenders all routes
npm run lint    # eslint
```

## Routes

| Route | Page |
|---|---|
| `/` | Home: hero, stats, about, the vertical orbit, process, ecosystem, contact |
| `/about` | Founding story, beliefs, who we serve |
| `/group` | Index of the eight verticals |
| `/group/[slug]` | One page per vertical, generated from `verticals.ts` |
| `/leadership` | The two founders |
| `/investments` | Portfolio rows (placeholder content, see below) |
| `/investors`, `/founders` | Holding pages |

Note: `/investments`, `/investors` and `/founders` build and render, but nothing
in the header, footer or page bodies links to them. They are reachable by URL
only until they are added to the navigation.

## The data spine

Everything about the verticals reads from `src/data/verticals.ts`: the home
orbit, `/group`, the eight `/group/[slug]` pages and the footer column. The
previous WordPress site drove its orbit from hardcoded panel IDs that had
drifted out of sync, so `#legal` rendered Financial Services and `#hr` rendered
Legal. A single source removes that whole class of bug.

| File | Holds |
|---|---|
| `src/data/verticals.ts` | The eight verticals, each with its brand accent |
| `src/data/site.ts` | Tagline, stats, process, ecosystem, beliefs, contact |
| `src/data/team.ts` | `FOUNDERS` (rendered) and `TEAM` (not yet rendered) |
| `src/data/investments.ts` | Portfolio rows |

## The mark

`src/components/Starburst.tsx` draws the Orenda mark rather than shipping it as
an image. Per the brand book it is four things fused: a central core, the Aum
resonance of the "O", the twenty-four spokes of the Ashoka Chakra, and rays
shaped as candlesticks. Generating it means one source for every lockup, sharp
at any size, and a colour prop per vertical.

## Placeholder content

`src/data/investments.ts` is demo content. Every record is flagged `sample: true`
and renders with a visible **SAMPLE** tag. Replace the records and drop the flag
before this goes anywhere real.

Team photographs are absent. Each person falls back to a designed monogram panel
until a file appears in `public/team/`, named as in `src/data/team.ts`.

## Typography

The brand book specifies **Stolzl** and **Acumin Variable**, both commercial
licences that are not yet cleared. **Manrope** stands in for both and is the only
family the interface loads or renders — a global rule in `globals.css` forces it
across the whole document. Swap it once the licences are in place.

## Known gaps

- Both forms are inert. `InquiryForm` shows a success state without sending
  anything, and the footer newsletter field discards the address. Neither has a
  server action or API route behind it.
- `npm run lint` reports one error in `Header.tsx` (`setState` called inside an
  effect to close the mobile menu on navigation) and three `no-img-element`
  warnings for the two logos and the remote hero image.
