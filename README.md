# Orenda Holdings

Demo build of a new site for **Orenda Holdings**, a multi-sector business and
investment group. Built with Next.js 16, React 19, TypeScript and Tailwind v4.

> **Status: demo.** The home page is the deliverable. Every other route renders a
> coming-soon page. Some content is placeholder and is labelled as such on screen.

## Running locally

```bash
npm install
npm run dev
```

## What is built

The home page follows one flow:

1. **Hero** with two audiences, For Investors and For Founders
2. **Data** band, the Group in figures
3. **The Group**, eight verticals on an interactive orbit
4. **About**, founders plus core values
5. **Our Investments**
6. **Media**, press, podcasts, events, case studies and insights
7. **What next**, splitting investors from founders seeking capital

## The data spine

Everything about the eight verticals reads from `src/data/verticals.ts`: the
orbit, the nav, the footer and any future vertical page. The previous WordPress
site drove its orbit from hardcoded panel IDs that had drifted out of sync, so
`#legal` rendered Financial Services and `#hr` rendered Legal. A single source
removes that whole class of bug.

Other data files:

| File | Holds |
|---|---|
| `src/data/verticals.ts` | The eight verticals, with each one's brand accent |
| `src/data/team.ts` | Leadership, with photo paths |
| `src/data/investments.ts` | Portfolio rows |
| `src/data/media.ts` | Press, podcast, event, case study, insight, plus core values |

## The mark

`src/components/Starburst.tsx` draws the Orenda mark rather than shipping it as
an image. Per the brand book it is four things fused: a central core, the Aum
resonance of the "O", the twenty-four spokes of the Ashoka Chakra, and rays
shaped as candlesticks. Generating it means one source for every lockup, sharp
at any size, and a colour prop per vertical.

## Placeholder content

Two things are deliberately marked **SAMPLE** in the interface and must be
replaced before this is published anywhere real:

- `src/data/investments.ts`, portfolio entries
- `src/data/media.ts`, press and appearance entries

No real press coverage, events or holdings have been invented. Replace the
records and delete the `sample` flag.

Team photographs are absent. Each person falls back to a monogram panel until a
file appears in `public/team/`, named as in `src/data/team.ts`.

## Typography

The brand book specifies **Stolzl** and **Acumin Variable**, both commercial
licences that are not yet cleared. Standing in: **Instrument Serif** for the
editorial voice and **Jost**, the closest free relative to Stolzl, for interface
text. Swap them once the licences are in place.

## Palette

Navy leads and gold is the single accent, following the brand book's instruction
that Midnight Blue should lead with the accent used sparingly. Each vertical
keeps its own colour from the brand book's sub-brand system, used only as a
small mark.
