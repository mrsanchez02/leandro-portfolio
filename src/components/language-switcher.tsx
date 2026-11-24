import { languageNames, locales, type Locale } from "@/lib/locales";

export function LanguageSwitcher({
  label,
  locale,
}: {
  label: string;
  locale?: Locale;
}) {
  return (
    <nav aria-label={label}>
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {locales.map((language) => {
          const current = language === locale;
          return (
            <li key={language}>
              <a
                href={`/${language}`}
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
