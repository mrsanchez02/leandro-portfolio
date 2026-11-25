# Leandro Sánchez — Portfolio

## Local development

Run `pnpm install` and `pnpm dev`. Open `/en` for English or `/es` for Spanish. Next.js development does not apply `vercel.json`, so `/` shows a static, noindex fallback with a link to `/en`.

## Production configuration

1. Set `SITE_URL` in Vercel’s **Production** environment to the verified public HTTPS origin. Use only the host, with no path, port, query, or fragment. Keep Vercel’s system environment variables enabled so the build can identify previews. If using a stable `vercel.app` production domain, it must match `VERCEL_PROJECT_PRODUCTION_URL` exactly; deployment-specific URLs are not accepted.
2. Run `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build`. The static site is exported to `out/`. On non-Vercel hosts, serve extensionless routes from their corresponding `.html` files (for example, `/en/about` from `out/en/about.html`).
3. On the production domain, verify `/` returns `308` with `Location: /en`. Verify `/en`, `/es`, and case studies have matching self-canonicals and reciprocal language alternates, and that `/robots.txt` advertises a populated `/sitemap.xml`.

Without `SITE_URL`, or in a Vercel preview, localized HTML is `noindex, follow`. Canonical URLs, hreflang, social page URLs, and the Person identity URL are omitted; the sitemap has no URL entries and is not advertised. `noindex` is not access control; use deployment protection if previews must be private.

Social metadata currently has no dedicated share image. Supply an approved image if image previews are required. For Windows static-export QA, Next.js 16.4.6 can emit nested segment prefetch files where the browser requests dotted filenames. Confirm prefetch responses on the Linux/Vercel build; normal navigation and full route payloads worked in local testing.

## Contact and résumés

The verified email, profiles, and PDF paths are managed in `src/content/profile-pages.ts`. Email is the primary action on each Contact page. Keep the approved PDFs in source control at:

- `public/resume/Leandro-Sanchez-CV-EN.pdf` for `/en/contact`
- `public/resume/Leandro-Sanchez-CV-ES.pdf` for `/es/contact`

A download only appears if its PDF is present at build time. The existing PDFs are untagged; review the public contact details they expose and consider tagged versions for better document accessibility before launch.
