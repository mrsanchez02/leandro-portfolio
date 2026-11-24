import Link from "next/link";
import { projectIds, projectLabels, projects } from "@/content/projects";
import { localizedHref, type Locale } from "@/lib/locales";

export function ProjectList({ locale, headingLevel }: { locale: Locale; headingLevel: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const labels = projectLabels[locale];

  return (
    <ul role="list" className="divide-y divide-border border-y border-border">
      {projectIds.map((id) => {
        const project = projects[id];
        const { name, type, role, overview, verifiedMetric } = project.copy[locale];

        return (
          <li key={id} className="grid gap-x-10 gap-y-3 py-6 md:grid-cols-[14rem_minmax(0,1fr)] md:py-8">
            <p className="font-mono text-sm leading-relaxed text-muted">{type}</p>
            <div className="min-w-0 max-w-[68ch]">
              <Heading className="font-display text-2xl font-semibold tracking-tight text-balance">{name}</Heading>
              <p className="mt-1 font-medium">{role}</p>
              <p className="editorial-body mt-3 text-muted">{overview}</p>
              <ul role="list" aria-label={labels.technologies} className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-muted">
                {project.technologies[locale].map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              {verifiedMetric && <p className="mt-4 font-medium text-accent">{verifiedMetric}</p>}
              <Link href={localizedHref(locale, `projects/${id}`)} className="mt-3 inline-flex min-h-11 items-center gap-2 font-medium text-accent underline underline-offset-4 hover:text-foreground">
                {labels.read}<span className="sr-only"> — {name}</span> <span aria-hidden="true">→</span>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
