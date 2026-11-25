import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { statSync } from "node:fs";
import { join } from "node:path";
import { SiteShell } from "@/components/site-shell";
import { profile } from "@/content/home";
import { contactCopy, contactDestinations, contactProfiles } from "@/content/profile-pages";
import { isLocale, type Locale } from "@/lib/locales";
import { pageMetadata } from "@/lib/seo";

type ContactPageProps = PageProps<"/[locale]/contact">;

function availableResumeHref(locale: Locale) {
  const href = contactDestinations.resumes[locale];
  // Resolve against the files that Next.js copies into the static export.
  return statSync(join(process.cwd(), "public", href.slice(1)), { throwIfNoEntry: false })?.isFile() ? href : undefined;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = contactCopy[locale];

  return pageMetadata(locale, "contact", `${copy.title} — ${profile.name}`, copy.description);
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = contactCopy[locale];
  const resumeHref = availableResumeHref(locale);

  return (
    <SiteShell locale={locale} page="contact">
      <header>
        <p className="font-mono text-sm tracking-wide text-accent uppercase">{copy.label}</p>
        <h1 className="hero-heading mt-5 font-display text-balance">{copy.title}</h1>
        <p className="editorial-body mt-6 max-w-[60ch] text-pretty">{copy.summary}</p>
        <p className="editorial-body mt-4 max-w-[60ch] text-pretty text-muted">{copy.consulting}</p>
        <a href={`mailto:${contactDestinations.email}`} className="mt-6 inline-flex min-h-11 items-center gap-2 bg-accent px-4 py-2 font-medium text-background hover:bg-foreground">
          {copy.email} <span aria-hidden="true">→</span>
        </a>
      </header>
      {resumeHref && (
        <section aria-labelledby="resumes-heading" className="mt-8 max-w-[60ch] border-t border-border pt-6 md:mt-12">
          <h2 id="resumes-heading" className="font-display text-xl font-semibold tracking-tight">{copy.resumes}</h2>
          <a href={resumeHref} download hrefLang={locale} className="mt-2 inline-flex min-h-11 items-center gap-2 font-medium text-accent underline underline-offset-4 hover:text-foreground">
            <span>{copy.resumeDownload}</span> <span aria-hidden="true">↓</span>
          </a>
        </section>
      )}
      {contactProfiles.length > 0 && (
        <section aria-labelledby="profiles-heading" className="mt-8 max-w-[60ch] border-t border-border pt-6 md:mt-12">
          <h2 id="profiles-heading" className="font-display text-xl font-semibold tracking-tight">{copy.profiles}</h2>
          <ul role="list" className="mt-2 flex flex-wrap gap-x-6">
            {contactProfiles.map(({ name, href }) => (
              <li key={href}>
                <a href={href} className="inline-flex min-h-11 items-center gap-2 font-medium text-accent underline underline-offset-4 hover:text-foreground">
                  {name} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </SiteShell>
  );
}
