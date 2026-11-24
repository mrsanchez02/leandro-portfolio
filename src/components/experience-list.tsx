import { experience, experienceCopy } from "@/content/experience";
import type { Locale } from "@/lib/locales";

export function ExperienceList({ locale, detailed = false }: { locale: Locale; detailed?: boolean }) {
  const labels = experienceCopy[locale];
  const month = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const formatMonth = (value: string) => month.format(new Date(`${value}-01T00:00:00Z`));
  const CompanyHeading = detailed ? "h2" : "h3";

  return (
    <ol role="list" className="divide-y divide-border border-y border-border">
      {experience.map(({ company, start, end, copy }) => {
        const { role, engagement, summary, responsibilities, result } = copy[locale];

        return (
          <li key={company} className="grid gap-x-10 gap-y-3 py-6 md:grid-cols-[14rem_minmax(0,1fr)] md:py-8">
            <div className="font-mono text-sm leading-relaxed text-muted">
              <p>
                <time dateTime={start}>{formatMonth(start)}</time>
                {" – "}
                {end ? <time dateTime={end}>{formatMonth(end)}</time> : labels.present}
              </p>
              {engagement && <p className="mt-1">{engagement}</p>}
            </div>
            <div className="min-w-0 max-w-[68ch]">
              <CompanyHeading className="font-display text-2xl font-semibold tracking-tight text-balance">
                {company}
              </CompanyHeading>
              <p className="editorial-body mt-1 font-medium">{role}</p>
              {detailed ? (
                <>
                  <ul className="editorial-body mt-4 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                    {responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                  {result && (
                    <p className="editorial-body mt-5 border-l-2 border-accent pl-4 text-muted">
                      <strong className="font-medium text-accent">{labels.resultLabel}:</strong> {result}
                    </p>
                  )}
                </>
              ) : (
                <p className="editorial-body mt-2 text-muted">{summary}</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
