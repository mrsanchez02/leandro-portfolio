export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

const pagePaths = { home: "", experience: "/experience" } as const;

export type LocalizedPage = keyof typeof pagePaths;

export function localizedHref(locale: Locale, page: LocalizedPage) {
  return `/${locale}${pagePaths[page]}`;
}

export const languageNames = { en: "English", es: "Español" } satisfies Record<
  Locale,
  string
>;

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
