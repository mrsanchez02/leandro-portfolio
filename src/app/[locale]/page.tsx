import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { homeCopy, profile } from "@/content/home";
import { isLocale } from "@/lib/locales";

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

  return (
    <section aria-labelledby="hero-heading">
      <p className="font-mono text-sm tracking-wide text-accent" lang="en">{profile.role}</p>
      <h1 id="hero-heading" className="hero-heading mt-5 font-display text-balance">{headline}</h1>
      <p className="editorial-body mt-6 max-w-[52ch] text-pretty text-muted">{description}</p>
      <div aria-hidden="true" className="mt-10 flex items-center gap-3 text-sm">
        <span className="font-mono text-accent">{"//"}</span>
        <span className="h-px w-12 bg-border" />
      </div>
    </section>
  );
}
