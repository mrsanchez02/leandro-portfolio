import type { ProjectId } from "@/content/projects";

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale = "en" satisfies Locale;

export type LocalizedPage = "home" | "experience" | "projects" | "about" | "contact" | `projects/${ProjectId}`;

export function localizedHref(locale: Locale, page: LocalizedPage) {
  return page === "home" ? `/${locale}` : `/${locale}/${page}`;
}

export const languageNames = { en: "English", es: "Español" } satisfies Record<
  Locale,
  string
>;

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
