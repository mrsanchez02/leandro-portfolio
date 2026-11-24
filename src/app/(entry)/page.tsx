import type { Metadata } from "next";
import { profile } from "@/content/home";
import { localizedHref } from "@/lib/locales";

const homeHref = localizedHref("en", "home");

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  robots: { index: false, follow: true },
  alternates: { canonical: homeHref },
};

export default function EntryPage() {
  return (
    <main className="page-container editorial-section">
      <h1 className="hero-heading font-display text-balance">{profile.name}</h1>
      <p className="editorial-body mt-4 text-muted">{profile.role}</p>
      <a href={homeHref} className="mt-6 inline-flex min-h-11 items-center font-medium text-accent underline underline-offset-4 hover:text-foreground">
        Go to the homepage
      </a>
    </main>
  );
}
