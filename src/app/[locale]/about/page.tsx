import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { TechnicalExpertise } from "@/components/technical-expertise";
import { profile } from "@/content/home";
import { aboutCopy } from "@/content/profile-pages";
import { isLocale } from "@/lib/locales";
import { pageMetadata } from "@/lib/seo";

type AboutPageProps = PageProps<"/[locale]/about">;

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = aboutCopy[locale];

  return pageMetadata(locale, "about", `${copy.title} — ${profile.name}`, copy.intro);
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = aboutCopy[locale];

  return (
    <SiteShell locale={locale} page="about">
      <header>
        <p className="font-mono text-sm tracking-wide text-accent uppercase">{copy.label}</p>
        <h1 className="hero-heading mt-5 font-display text-balance">{copy.title}</h1>
        <div className="editorial-body mt-6 max-w-[65ch] space-y-4 text-pretty text-muted">
          <p>{copy.intro}</p>
          <p>{copy.approach}</p>
        </div>
      </header>
      <TechnicalExpertise locale={locale} />
    </SiteShell>
  );
}
