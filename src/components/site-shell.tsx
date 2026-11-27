import Link from "next/link";
import type { ReactNode } from "react";
import { experienceCopy } from "@/content/experience";
import { homeCopy, profile } from "@/content/home";
import { aboutCopy, contactCopy } from "@/content/profile-pages";
import { projectLabels } from "@/content/projects";
import { localizedHref, type Locale, type LocalizedPage } from "@/lib/locales";
import { LanguageSwitcher } from "./language-switcher";

export function SiteShell({
  locale,
  page = "home",
  children,
}: {
  locale: Locale;
  page?: LocalizedPage;
  children: ReactNode;
}) {
  const copy = homeCopy[locale];
  const navItems = [
    { page: "experience", label: experienceCopy[locale].navLabel },
    { page: "projects", label: projectLabels[locale].nav },
    { page: "about", label: aboutCopy[locale].nav },
    { page: "contact", label: contactCopy[locale].nav },
  ] as const;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-10 bg-surface px-4 py-3 text-accent focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        {copy.skipLink}
      </a>
      <header className="border-b border-border">
        <div className="page-container grid min-h-20 grid-cols-[1fr_auto] items-center gap-x-3 py-2 md:grid-cols-[1fr_auto_auto] md:gap-x-6 md:py-3">
          <Link
            href={localizedHref(locale, "home")}
            aria-current={page === "home" ? "page" : undefined}
            className="inline-flex min-h-11 items-center justify-self-start font-display text-lg font-semibold tracking-tight hover:text-accent"
          >
            {profile.name}<span className="sr-only"> — {copy.homeLabel}</span>
          </Link>
          <LanguageSwitcher label={copy.languageLabel} locale={locale} page={page} />
          <nav aria-label={copy.navigationLabel} className="col-span-full flex flex-wrap items-center justify-between gap-x-1.5 text-sm md:col-span-1 md:justify-start md:gap-x-5 md:text-base">
            {navItems.map((item) => {
              const current = page === item.page;
              const active = current || (item.page === "projects" && page.startsWith("projects/"));
              return (
                <Link
                  key={item.page}
                  href={localizedHref(locale, item.page)}
                  aria-current={current ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center font-medium underline-offset-4 hover:text-accent hover:underline ${
                    active ? "text-accent underline" : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
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
