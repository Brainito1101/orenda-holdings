/**
 * Validates the SEO tags in the prerendered HTML produced by `next build`.
 *
 * Checks, per route: a title within the length Google renders, a description
 * within the length Google renders, keywords, a self-referencing canonical,
 * and a robots directive that matches whether the route is meant to be indexed.
 *
 * Run after a build:  npm run seo:check
 *
 * Statically prerendered routes are read straight from .next/server/app.
 * Dynamically rendered routes (/contact reads ?vertical=) have no prerendered
 * file, so they are fetched over HTTP instead — start `npm start` first, or
 * point SEO_CHECK_URL at a running instance. If the server is not up, those
 * routes are reported as skipped rather than passing silently.
 */
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const TITLE_MAX = 60;
const DESC_MIN = 70;
const DESC_MAX = 160;
const ORIGIN = "https://orendagroup.in";

/**
 * Must be given explicitly. Guessing localhost:3000 is dangerous — another
 * project's dev server may be sitting on it, and the check then silently
 * validates the wrong application.
 */
const LOCAL = process.env.SEO_CHECK_URL;

// route -> [prerendered html file, should be indexable, dynamic?]
const ROUTES = [
  ["/", "index.html", true],
  ["/about", "about.html", true],
  ["/group", "group.html", true],
  ["/contact", "contact.html", true, true], // dynamic: reads ?vertical=
  ["/leadership", "leadership.html", true],
  ["/group/advisors", "group/advisors.html", true],
  ["/group/financial-services", "group/financial-services.html", true],
  ["/group/capital", "group/capital.html", true],
  ["/group/realtors", "group/realtors.html", true],
  ["/group/legal", "group/legal.html", true],
  ["/group/digital", "group/digital.html", true],
  ["/group/creative-holdings", "group/creative-holdings.html", true],
  ["/group/star-holiday-homes", "group/star-holiday-homes.html", true],
  ["/investments", "investments.html", false],
  ["/investors", "investors.html", false],
  ["/founders", "founders.html", false],
];

const decode = (s) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const meta = (html, name) => {
  const m = html.match(new RegExp(`<meta name="${name}" content="([^"]*)"`, "i"));
  return m ? decode(m[1]) : null;
};

let failures = 0;
let checked = 0;
let skipped = 0;
const rows = [];

for (const [route, file, indexable, dynamic] of ROUTES) {
  const path = `.next/server/app/${file}`;
  let html;
  if (dynamic) {
    // No prerendered file exists for a dynamic route; ask a running server.
    if (!LOCAL) {
      console.warn(
        `SKIP     ${route}  (dynamic route - set SEO_CHECK_URL to a running instance to check it)`
      );
      skipped++;
      continue;
    }
    try {
      const res = await fetch(`${LOCAL}${route}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      html = await res.text();
    } catch (err) {
      console.error(`FAIL     ${route}  could not fetch ${LOCAL}${route}: ${err.message}`);
      failures++;
      continue;
    }
  } else if (!existsSync(path)) {
    console.error(`MISSING  ${route}  (${path} not found - run \`npm run build\` first)`);
    failures++;
    continue;
  } else {
    html = await readFile(path, "utf8");
  }
  const fail = (msg) => {
    console.error(`FAIL  ${route}  ${msg}`);
    failures++;
  };

  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? decode(titleMatch[1]) : null;
  const desc = meta(html, "description");
  const keywords = meta(html, "keywords");
  const robots = meta(html, "robots");
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]*)"/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : null;

  if (!title) fail("no <title>");
  else if (title.length > TITLE_MAX) fail(`title ${title.length} chars (max ${TITLE_MAX}): "${title}"`);

  if (!desc) fail("no meta description");
  else if (desc.length > DESC_MAX) fail(`description ${desc.length} chars (max ${DESC_MAX})`);
  else if (desc.length < DESC_MIN) fail(`description ${desc.length} chars (min ${DESC_MIN})`);

  if (!keywords) fail("no meta keywords");
  if (!robots) fail("no meta robots");

  const expected = route === "/" ? ORIGIN : `${ORIGIN}${route}`;
  if (!canonical) fail("no canonical link");
  else if (canonical.replace(/\/$/, "") !== expected.replace(/\/$/, ""))
    fail(`canonical is "${canonical}", expected "${expected}"`);

  if (robots) {
    const isNoindex = /noindex/.test(robots);
    if (indexable && isNoindex) fail(`expected indexable but robots="${robots}"`);
    if (!indexable && !isNoindex) fail(`expected noindex but robots="${robots}"`);
  }

  checked++;
  rows.push({
    route,
    title: title?.length ?? 0,
    desc: desc?.length ?? 0,
    kw: keywords ? keywords.split(",").length : 0,
    robots: robots ?? "-",
  });
}

const pad = (s, n) => String(s).padEnd(n);
console.log(`\n${pad("route", 30)}${pad("title", 7)}${pad("desc", 6)}${pad("kw", 4)}robots`);
console.log("-".repeat(72));
for (const r of rows) {
  console.log(`${pad(r.route, 30)}${pad(r.title, 7)}${pad(r.desc, 6)}${pad(r.kw, 4)}${r.robots}`);
}
console.log(
  `\n${checked}/${ROUTES.length} routes checked` +
    (skipped ? `, ${skipped} skipped` : "") +
    " - " +
    (failures === 0 ? "all SEO tags valid" : `${failures} problem(s)`)
);

process.exit(failures === 0 ? 0 : 1);
