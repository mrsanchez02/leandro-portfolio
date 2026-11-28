import type { Metadata } from "next";
import { profile } from "@/content/home";
import type { Locale, LocalizedPage } from "./locales";
import { localizedUrls, siteOrigin } from "./site-url";

const socialLocales = { en: "en_US", es: "es_DO" } satisfies Record<Locale, string>;
const socialImage = siteOrigin ? {
  url: new URL("/og/portfolio-og-en.png", siteOrigin),
  width: 1200,
  height: 630,
  type: "image/png",
  alt: `${profile.name} — ${profile.role.en}. React · TypeScript · .NET · Node.js · Automation.`,
} : undefined;

export function pageMetadata(locale: Locale, page: LocalizedPage, title: string, description: string): Metadata {
  const languages = localizedUrls(page);
  const canonical = languages?.[locale];

  return {
    title,
    description,
    alternates: canonical ? { canonical, languages } : undefined,
    robots: canonical ? undefined : { index: false, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: profile.name,
      type: "website",
      locale: socialLocales[locale],
      alternateLocale: socialLocales[locale === "en" ? "es" : "en"],
      images: socialImage ? [socialImage] : undefined,
    },
    twitter: {
      card: socialImage ? "summary_large_image" : "summary",
      title,
      description,
      images: socialImage ? [{ url: socialImage.url, alt: socialImage.alt }] : undefined,
    },
  };
}
