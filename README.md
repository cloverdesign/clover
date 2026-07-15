# Clover

Marketing site for Clover — a design studio elevating African businesses into
timeless brands.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- TypeScript
- Tailwind CSS 3
- [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/) for animation
- Deployed on Vercel

## Getting started

Requires Node 18+ and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev        # start the dev server at http://localhost:3000
```

## Scripts

| Command          | Description                    |
| ---------------- | ------------------------------ |
| `pnpm dev`       | Start the development server   |
| `pnpm build`     | Create a production build      |
| `pnpm start`     | Serve the production build     |
| `pnpm lint`      | Run ESLint (`next lint`)       |
| `pnpm typecheck` | Type-check with `tsc --noEmit` |

## Structure

```
src/
  app/            Routes (App Router): /, /about, /works, /works/[id], /contact
  components/     UI components (global + home sections)
  animations/     Reusable animation helpers (Magnetic)
  data/           Static content (works, team, services, testimonials)
  hooks/          Custom hooks
public/assets/    Images and video
```
