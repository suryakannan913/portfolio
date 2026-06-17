# Portfolio

A clean, minimal personal portfolio built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, and **TypeScript**.

## ✏️ Make it yours

Everything the site displays lives in **one file**: [`src/content.ts`](src/content.ts).
Open it and fill in your name, tagline, skills, projects, and experience. You
don't need to touch any other file.

- **Resume:** put your PDF at `public/resume.pdf` (the button links to `/resume.pdf`).
- **Hide a link:** set its value to `""` (empty string) in `src/content.ts`.
- **Dark mode:** automatic — follows the visitor's system setting.

## 🚀 Run locally

```bash
npm install     # first time only
npm run dev     # starts http://localhost:3000
```

Edit `src/content.ts` and the page reloads instantly.

## 🌐 Deploy for free (Vercel)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click **Add New → Project**, pick this repo, click **Deploy**.
4. Done — you get a free `your-name.vercel.app` URL. Every `git push` redeploys.

You can add a custom domain later in Vercel's project settings (free with a
domain you own).

## Build for production

```bash
npm run build
npm run start
```
