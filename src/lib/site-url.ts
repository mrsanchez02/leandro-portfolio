import { defaultLocale, localizedHref, type Locale, type LocalizedPage } from "./locales";

function productionOrigin() {
  // Never infer the canonical origin from a deployment URL or request host.
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") return;

  const configured = process.env.SITE_URL?.trim();
  if (!configured) return;

  const url = URL.canParse(configured) ? new URL(configured) : undefined;
  const host = url?.hostname;
  if (
    !/^https:\/\/[a-z0-9.-]+\/?$/i.test(configured) ||
    !url || !host ||
    !/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+(?:[a-z]{2,63}|xn--[a-z0-9-]{1,59})$/.test(host) ||
    /(?:^|\.)(?:localhost|local|internal|test|invalid|example)$/.test(host) ||
    /(?:^|\.)example\.(?:com|net|org)$/.test(host) ||
    (host.endsWith(".vercel.app") && host !== process.env.VERCEL_PROJECT_PRODUCTION_URL)
  ) {
    throw new Error("SITE_URL must be the public HTTPS production origin (no path, port, or preview hostname).");
  }

  return url.origin;
}

export const siteOrigin = productionOrigin();

export function localizedUrls(page: LocalizedPage): Record<Locale | "x-default", string> | undefined {
  if (!siteOrigin) return;

  return {
    en: siteOrigin + localizedHref("en", page),
    es: siteOrigin + localizedHref("es", page),
    "x-default": siteOrigin + localizedHref(defaultLocale, page),
  };
}
