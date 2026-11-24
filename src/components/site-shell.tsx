import type { ReactNode } from "react";
import { experienceCopy } from "@/content/experience";
import { homeCopy, profile } from "@/content/home";
import { localizedHref, type Locale, type LocalizedPage } from "@/lib/locales";
import { LanguageSwitcher } from "./language-switcher";

export function SiteShell({
  locale,
  page = "home",
  children,
}: {
  locale?: Locale;
  page?: LocalizedPage;
  children: ReactNode;
}) {
  const copy = homeCopy[locale ?? "en"];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-10 bg-surface px-4 py-3 text-accent focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        {copy.skipLink}
      </a>
      <header className="border-b border-border">
        <div className="page-container flex min-h-20 flex-wrap items-center justify-between gap-x-6 py-3">
          {locale ? (
            <>
              <a
                href={localizedHref(locale, "home")}
                className="inline-flex min-h-11 items-center font-display text-lg font-semibold tracking-tight hover:text-accent"
              >
                {profile.name}<span className="sr-only"> — {copy.homeLabel}</span>
              </a>
              <div className="flex flex-wrap items-center gap-x-6">
                <nav aria-label={copy.navigationLabel}>
                  <a
                    href={localizedHref(locale, "experience")}
                    aria-current={page === "experience" ? "page" : undefined}
                    className="inline-flex min-h-11 items-center font-medium text-muted underline-offset-4 hover:text-accent hover:underline aria-[current=page]:text-accent aria-[current=page]:underline"
                  >
                    {experienceCopy[locale].navLabel}
                  </a>
                </nav>
                <LanguageSwitcher label={copy.languageLabel} locale={locale} page={page} />
              </div>
            </>
          ) : (
            <span className="font-display text-lg font-semibold tracking-tight">{profile.name}</span>
          )}
        </div>
      </header>
      <main id="main-content" tabIndex={-1} className="page-container editorial-section flex-1">
        {children}
      </main>
      <footer className="border-t border-border">
        <div className="page-container flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-6 text-sm text-muted">
          <p>{profile.name}</p>
          <p className="font-mono" lang="en">{profile.role}</p>
        </div>
      </footer>
    </>
  );
}
