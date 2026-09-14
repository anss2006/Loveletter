# digital love letter

A scroll-driven love letter: a thread connects two points and visually
closes the distance as she reads, ending in a soft burst of light when
she presses for a hug.

## Before you deploy — edit one file

Everything personal lives in **`src/config.ts`**. Nothing else needs to
change:

- `yourName` / `herName`
- `startDate` — for the "days together" count
- Either `distanceKmOverride` (a plain number) **or** both `yourCity` /
  `herCity` lat-lon (distance is calculated automatically)
- `letter` — one array entry per paragraph
- `letterOpening` / `letterClosing`

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Deploy

Same pipeline as usual — push to GitHub, Vercel picks it up:

```bash
npm run build   # sanity-checks the TypeScript + production build first
git init
git add .
git commit -m "digital love letter"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Then import the repo in Vercel (or `vercel --prod` if you have the CLI).
Framework preset: **Vite**. No environment variables needed.

## What's in here

- `src/config.ts` — the only file with personal content
- `src/components/ThreadPath.tsx` — the scroll-linked thread
- `src/components/Letter.tsx` — the paragraphs, revealing as she scrolls
- `src/components/LiveStats.tsx` — the days/km counter
- `src/components/HugBurst.tsx` — the closing button + particle burst
- `src/components/FireflyLayer.tsx` — ambient drift + tap-to-spark
- `src/components/StarField.tsx` — the background
- `src/components/ThemeToggle.tsx` — dark/light switch, remembers your choice
- `src/hooks/` — the day counter, distance calc, and theme logic
- `src/styles/global.css` — every color, font, and animation

## Notes on the build

- No animation library — the thread draw and paragraph reveals run on
  native CSS scroll-driven animation (`animation-timeline`), same
  approach as the anniversary site. Chrome, Edge, and Safari (26+) run
  the real scroll-linked version; anything else (Firefox included, as
  of mid-2026) gets a static but fully readable fallback — nothing
  breaks, it just doesn't animate.
- Respects `prefers-reduced-motion` throughout.
- Theme defaults to system preference, then remembers whatever you
  pick after that (stored in `localStorage`).
- The "hug burst" renders as soft glowing light rather than literal
  heart shapes — kept it consistent with the starfield/firefly motif
  already running through the page rather than switching visual
  languages right at the end.
