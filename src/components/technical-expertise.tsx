import Link from "next/link";
import { expertise, expertiseCopy } from "@/content/expertise";
import { localizedHref, type Locale } from "@/lib/locales";

const sectionId = "technical-expertise";

function formatSkills(skills: (typeof expertise)[number]["skills"], locale: Locale) {
  return skills.map((item) => typeof item === "string" ? item : item[locale]).join(", ");
}

export function TechnicalExpertise({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const copy = expertiseCopy[locale];

  return (
    <section id={sectionId} aria-labelledby="expertise-heading" className="mt-[var(--section-space)]">
      <p className="font-mono text-sm tracking-wide text-accent uppercase">{copy.label}</p>
      <h2 id="expertise-heading" className="mt-3 mb-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {copy.title}
      </h2>
      {compact ? (
        <>
          <ul role="list" className="flex max-w-[70ch] flex-wrap gap-x-6 gap-y-2 border-y border-border py-4 font-mono text-sm text-muted">
            {expertise.map(({ title }) => <li key={title.en}>{title[locale]}</li>)}
          </ul>
          <Link href={`${localizedHref(locale, "about")}#${sectionId}`} className="mt-4 inline-flex min-h-11 items-center gap-2 font-medium text-accent underline underline-offset-4 hover:text-foreground">
            {copy.action} <span aria-hidden="true">→</span>
          </Link>
        </>
      ) : (
        <div className="grid gap-x-10 border-b border-border md:grid-cols-2">
          {expertise.map(({ title, skills, subgroup }) => (
            <section key={title.en} className="border-t border-border py-6 md:py-8">
              <h3 className="font-display text-xl font-semibold tracking-tight">{title[locale]}</h3>
              <p className="mt-4 text-pretty">{formatSkills(skills, locale)}</p>
              {subgroup && (
                <div className="mt-4">
                  <h4 className="font-mono text-sm text-accent">{subgroup.title[locale]}</h4>
                  <p className="mt-1 text-pretty">{formatSkills(subgroup.skills, locale)}</p>
                </div>
              )}
            </section>
          ))}
        </div>
      )}
    </section>
  );
}
