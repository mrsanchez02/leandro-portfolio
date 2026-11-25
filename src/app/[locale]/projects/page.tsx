import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectList } from "@/components/project-list";
import { SiteShell } from "@/components/site-shell";
import { profile } from "@/content/home";
import { projectLabels } from "@/content/projects";
import { isLocale } from "@/lib/locales";
import { pageMetadata } from "@/lib/seo";

type ProjectsPageProps = PageProps<"/[locale]/projects">;

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { title, description } = projectLabels[locale];
  return pageMetadata(locale, "projects", `${title} — ${profile.name}`, description);
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const labels = projectLabels[locale];
  return (
    <SiteShell locale={locale} page="projects">
      <header className="mb-8 md:mb-12">
        <p className="font-mono text-sm tracking-wide text-accent uppercase">{labels.section}</p>
        <h1 className="hero-heading mt-5 font-display text-balance">{labels.title}</h1>
      </header>
      <ProjectList locale={locale} headingLevel={2} />
    </SiteShell>
  );
}
