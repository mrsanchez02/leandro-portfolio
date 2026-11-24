import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExperienceList } from "@/components/experience-list";
import { ProjectList } from "@/components/project-list";
import { SiteShell } from "@/components/site-shell";
import { experienceCopy } from "@/content/experience";
import { homeCopy, profile } from "@/content/home";
import { projectLabels } from "@/content/projects";
import { isLocale, localizedHref } from "@/lib/locales";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return {
    title: `${profile.name} — ${homeCopy[locale].metadataTitle}`,
    description: homeCopy[locale].description,
  };
}

export default async function LocaleHome({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { headline, description } = homeCopy[locale];
  const experience = experienceCopy[locale];
  const work = projectLabels[locale];

  return (
    <SiteShell locale={locale}>
      <section aria-labelledby="hero-heading">
        <p className="font-mono text-sm tracking-wide text-accent" lang="en">{profile.role}</p>
        <h1 id="hero-heading" className="hero-heading mt-5 font-display text-balance">{headline}</h1>
        <p className="editorial-body mt-6 max-w-[52ch] text-pretty text-muted">{description}</p>
        <div aria-hidden="true" className="mt-10 flex items-center gap-3 text-sm">
          <span className="font-mono text-accent">{"//"}</span>
          <span className="h-px w-12 bg-border" />
        </div>
      </section>
      <section aria-labelledby="experience-heading" className="mt-[var(--section-space)]">
        <p className="font-mono text-sm tracking-wide text-accent uppercase">{experience.sectionLabel}</p>
        <h2 id="experience-heading" className="mt-3 mb-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {experience.title}
        </h2>
        <ExperienceList locale={locale} />
        <Link href={localizedHref(locale, "experience")} className="mt-4 inline-flex min-h-11 items-center gap-2 font-medium text-accent underline underline-offset-4 hover:text-foreground">
          {experience.viewAll} <span aria-hidden="true">→</span>
        </Link>
      </section>
      <section aria-labelledby="work-heading" className="mt-[var(--section-space)]">
        <p className="font-mono text-sm tracking-wide text-accent uppercase">{work.section}</p>
        <h2 id="work-heading" className="mt-3 mb-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {work.title}
        </h2>
        <ProjectList locale={locale} headingLevel={3} />
        <Link href={localizedHref(locale, "projects")} className="mt-4 inline-flex min-h-11 items-center gap-2 font-medium text-accent underline underline-offset-4 hover:text-foreground">
          {work.viewAll} <span aria-hidden="true">→</span>
        </Link>
      </section>
    </SiteShell>
  );
}
