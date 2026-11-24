import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { profile } from "@/content/home";
import { contactCopy, contactProfiles } from "@/content/profile-pages";
import { isLocale, localizedHref } from "@/lib/locales";

type ContactPageProps = PageProps<"/[locale]/contact">;

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = contactCopy[locale];

  return {
    title: `${copy.title} — ${profile.name}`,
    description: copy.description,
    alternates: { canonical: localizedHref(locale, "contact") },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = contactCopy[locale];

  return (
    <SiteShell locale={locale} page="contact">
      <header>
        <p className="font-mono text-sm tracking-wide text-accent uppercase">{copy.label}</p>
        <h1 className="hero-heading mt-5 font-display text-balance">{copy.title}</h1>
        <p className="editorial-body mt-6 max-w-[60ch] text-pretty">{copy.summary}</p>
        <p className="editorial-body mt-4 max-w-[60ch] text-pretty text-muted">{copy.consulting}</p>
      </header>
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
