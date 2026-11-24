import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceList } from "@/components/experience-list";
import { SiteShell } from "@/components/site-shell";
import { experienceCopy } from "@/content/experience";
import { profile } from "@/content/home";
import { isLocale } from "@/lib/locales";

type ExperiencePageProps = PageProps<"/[locale]/experience">;

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { title, description } = experienceCopy[locale];
  return { title: `${title} — ${profile.name}`, description };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { sectionLabel, title } = experienceCopy[locale];
  return (
    <SiteShell locale={locale} page="experience">
      <header className="mb-8 md:mb-12">
        <p className="font-mono text-sm tracking-wide text-accent uppercase">{sectionLabel}</p>
        <h1 className="hero-heading mt-5 font-display text-balance">{title}</h1>
      </header>
      <ExperienceList locale={locale} detailed />
    </SiteShell>
  );
}
