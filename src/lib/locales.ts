export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const languageNames = { en: "English", es: "Español" } satisfies Record<
  Locale,
  string
>;

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
