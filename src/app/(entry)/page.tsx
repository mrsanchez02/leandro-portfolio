import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/home";
import { defaultLocale, localizedHref } from "@/lib/locales";
import { localizedUrls } from "@/lib/site-url";

const homeHref = localizedHref(defaultLocale, "home");
const canonical = localizedUrls("home")?.[defaultLocale];

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  robots: { index: false, follow: true },
  alternates: canonical ? { canonical } : undefined,
};

export default function EntryPage() {
  return (
    <main className="page-container editorial-section">
      <h1 className="hero-heading font-display text-balance">{profile.name}</h1>
      <p className="editorial-body mt-4 text-muted">{profile.role}</p>
      <Link href={homeHref} className="mt-6 inline-flex min-h-11 items-center font-medium text-accent underline underline-offset-4 hover:text-foreground">
        Go to the homepage
      </Link>
    </main>
  );
}
