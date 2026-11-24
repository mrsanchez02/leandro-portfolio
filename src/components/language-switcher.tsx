import { languageNames, locales, localizedHref, type Locale, type LocalizedPage } from "@/lib/locales";

export function LanguageSwitcher({
  label,
  locale,
  page = "home",
}: {
  label: string;
  locale?: Locale;
  page?: LocalizedPage;
}) {
  return (
    <nav aria-label={label}>
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {locales.map((language) => {
          const current = language === locale;
          return (
            <li key={language}>
              <a
                href={localizedHref(language, page)}
                hrefLang={language}
                lang={language}
                aria-current={current ? "page" : undefined}
                className={`inline-flex min-h-11 items-center font-medium underline-offset-4 hover:text-accent hover:underline ${
                  current || (!locale && language === "en")
                    ? "text-accent underline"
                    : "text-muted"
                }`}
              >
                {languageNames[language]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
