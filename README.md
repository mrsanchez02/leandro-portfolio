This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000/en](http://localhost:3000/en) for the English homepage or [http://localhost:3000/es](http://localhost:3000/es) for Spanish. `pnpm dev` runs Next.js directly, so it does not apply Vercel’s `vercel.json` redirect and `/` shows the static fallback.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

`pnpm build` exports the site to `out/`. Vercel uses `vercel.json` to send a temporary 307 redirect from `/` to `/en`. On other static hosts, `/` serves a no-index fallback with a direct link to `/en`. Serve the exported `.html` files at their extensionless paths (for example, `/en/about` → `out/en/about.html`).

After deploying, inspect the headers for `/` without following redirects: expect `307` and `Location: /en` on the primary Vercel domain.

## Contact assets

Configure an approved public email and the English and Spanish PDF paths in `contactDestinations` in `src/content/profile-pages.ts`. Store the PDFs under `public/` and use their root-relative URLs with URL-safe filenames. The email and each download are optional; a missing PDF is not linked.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
