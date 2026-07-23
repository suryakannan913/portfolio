# Portfolio data

Everything the site displays lives in this folder. Components never contain
content — edit these files, push to `main`, and Vercel redeploys automatically.

```
src/data/
├── profile.ts      → name, tagline, socials, headshot, about paragraphs, page intros
├── skills.ts       → skill groups (skills page + home preview + stat strip count)
├── experience.ts   → work history (newest first)
├── education.ts    → schools + certifications
├── projects/       → ONE FILE PER PROJECT + index.ts for display order
└── types.ts        → shared TypeScript shapes
```

## Add a project

1. Copy an existing file in `projects/` (e.g. `hexopolis.ts`) and rename it
   to your project's slug (`my-project.ts`).
2. Edit the fields. The `slug` becomes the URL: `/projects/my-project`.
3. In `projects/index.ts`, import it and add it to the array — position in
   the array = position on the site.

Everything else is automatic: the projects page, the home-grid preview, the
case-study page, the sitemap, and the stat-strip count all read from that array.

## Add photos

Drop image files here:

```
public/images/
├── profile/     → headshot (square, ~800×800)
└── projects/    → project covers (16:9, ~1200×675) and case-study
                   screenshots (~1600px wide)
```

Then point the matching field at the file (paths start at `public/`, so
`public/images/projects/foo.png` → `"/images/projects/foo.png"`):

| Where it shows              | File to edit          | Field                          |
| --------------------------- | --------------------- | ------------------------------ |
| About page headshot         | `profile.ts`          | `profile.headshot`             |
| Project card + case-study cover | `projects/<slug>.ts` | `image`                     |
| Case-study gallery grid     | `projects/<slug>.ts`  | `caseStudy.images` (src + alt) |

Until a field is set, the site shows a dashed `// filename.png` placeholder
in that spot, so you can always see where art will land.

Prefer `.png` for UI screenshots and `.jpg` for photos. Next.js optimizes
and resizes them automatically at request time.

## Other conventions

- **Resume:** replace `public/resume.pdf` — the viewer and download button
  pick it up with no code change.
- **Hexopolis live demo:** set `NEXT_PUBLIC_HEXOPOLIS_URL` in `.env.local`
  (dev) or Vercel → Settings → Environment Variables (prod). The demo iframe
  on its case-study page appears whenever the variable is set.
- **Types:** if you need a new field (say, `award` on a project), add it to
  `types.ts` first — the compiler will then guide you to every file affected.
