import type { Metadata } from "next";
import { LanguageSwitcher } from "@/components/language-switcher";
import { profile } from "@/content/home";

export const metadata: Metadata = {
  title: `${profile.name} — Choose a language`,
  description: `Explore ${profile.name}’s software engineering portfolio in English or Spanish.`,
};

export default function EntryPage() {
  return (
    <div>
      <h1 className="hero-heading font-display text-balance">Choose a language</h1>
      <p className="editorial-body mt-4 text-muted" lang="es">Elige un idioma</p>
      <div className="mt-8">
        <LanguageSwitcher label="Choose a language" />
      </div>
    </div>
  );
}
