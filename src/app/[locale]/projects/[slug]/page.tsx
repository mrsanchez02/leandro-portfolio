import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";
import { profile } from "@/content/home";
import { isProjectId, projectIds, projectLabels, projects } from "@/content/projects";
import { isLocale, localizedHref } from "@/lib/locales";

type ProjectPageProps = PageProps<"/[locale]/projects/[slug]">;

export const dynamicParams = false;

export function generateStaticParams() {
  return projectIds.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isProjectId(slug)) notFound();

  const { name, overview } = projects[slug].copy[locale];
  return { title: `${name} — ${profile.name}`, description: overview };
}

function CaseStudySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-x-10 gap-y-3 border-t border-border py-6 md:grid-cols-[14rem_minmax(0,1fr)] md:py-8">
      <h2 className="font-display text-xl font-semibold tracking-tight">{title}</h2>
      <div className="editorial-body min-w-0 max-w-[68ch] text-muted">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isProjectId(slug)) notFound();

  const project = projects[slug];
  const copy = project.copy[locale];
  const labels = projectLabels[locale];
  return (
    <SiteShell locale={locale} page={`projects/${slug}`}>
      <article>
        <header className="mb-8 md:mb-12">
          <Link href={localizedHref(locale, "projects")} className="inline-flex min-h-11 items-center gap-2 font-medium text-accent underline underline-offset-4 hover:text-foreground">
            <span aria-hidden="true">←</span> {labels.back}
          </Link>
          <p className="mt-6 font-mono text-sm tracking-wide text-accent uppercase">{copy.type}</p>
          <h1 className="hero-heading mt-5 font-display text-balance">{copy.name}</h1>
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="font-mono text-sm text-muted">{labels.client}</dt>
              <dd className="mt-1">{project.client}</dd>
            </div>
            <div>
              <dt className="font-mono text-sm text-muted">{labels.role}</dt>
              <dd className="mt-1">{copy.role}</dd>
            </div>
          </dl>
        </header>
        <div className="border-b border-border">
          <CaseStudySection title={labels.overview}>
            <p>{copy.overview}</p>
            {project.publicUrl && (
              <a href={project.publicUrl} className="mt-2 inline-flex min-h-11 items-center font-medium text-accent underline underline-offset-4 hover:text-foreground">
                {labels.visit}
              </a>
            )}
          </CaseStudySection>
          <CaseStudySection title={labels.context}><p>{copy.context}</p></CaseStudySection>
          <CaseStudySection title={labels.approach}><p>{copy.approach}</p></CaseStudySection>
          <CaseStudySection title={labels.responsibilities}>
            <ul className="list-disc space-y-2 pl-5 marker:text-accent">
              {copy.responsibilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </CaseStudySection>
          <CaseStudySection title={labels.technologies}>
            <ul role="list" className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
              {project.technologies[locale].map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </CaseStudySection>
          <CaseStudySection title={labels.outcomes}>
            {copy.verifiedMetric && (
              <p className="mb-3 border-l-2 border-accent pl-4">
                <strong className="font-medium text-accent">{labels.verified}:</strong> {copy.verifiedMetric}
              </p>
            )}
            <p>{copy.outcomes}</p>
          </CaseStudySection>
        </div>
      </article>
    </SiteShell>
  );
}
