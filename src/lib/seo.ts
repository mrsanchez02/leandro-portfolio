import type { Metadata } from "next";
import { profile } from "@/content/home";
import type { Locale, LocalizedPage } from "./locales";
import { localizedUrls } from "./site-url";

const socialLocales = { en: "en_US", es: "es_DO" } satisfies Record<Locale, string>;

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
    },
    twitter: { card: "summary", title, description },
  };
}
