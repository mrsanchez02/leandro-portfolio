import Link from "next/link";
import { languageNames, locales, localizedHref, type Locale, type LocalizedPage } from "@/lib/locales";

export function LanguageSwitcher({
  label,
  locale,
  page = "home",
}: {
  label: string;
  locale: Locale;
  page?: LocalizedPage;
}) {
  return (
    <nav aria-label={label}>
      <ul role="list" className="flex items-center">
        {locales.map((language) => {
          const current = language === locale;
          return (
            <li key={language}>
              <Link
                href={localizedHref(language, page)}
                hrefLang={language}
                lang={language}
                aria-label={languageNames[language]}
                aria-current={current ? "page" : undefined}
                className={`inline-flex min-h-11 min-w-11 items-center justify-center font-mono text-sm font-medium uppercase underline-offset-4 hover:text-accent hover:underline ${
                  current
                    ? "text-accent underline"
                    : "text-muted"
                }`}
              >
                {language}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
