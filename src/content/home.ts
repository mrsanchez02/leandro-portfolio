import type { Locale } from "@/lib/locales";

export const profile = {
  name: "Leandro Sánchez",
  role: "Full Stack Software Engineer",
};

export const homeCopy = {
  en: {
    metadataTitle: profile.role,
    headline: "Hi, I'm Leandro.",
    description:
      "I build reliable software, connect systems, and turn complex business needs into practical solutions.",
    languageLabel: "Language",
    skipLink: "Skip to content",
    homeLabel: "Home",
  },
  es: {
    metadataTitle: "Ingeniero de software full stack",
    headline: "Hola, soy Leandro.",
    description:
      "Desarrollo software confiable, conecto sistemas y transformo necesidades de negocio en soluciones prácticas.",
    languageLabel: "Idioma",
    skipLink: "Ir al contenido",
    homeLabel: "Inicio",
  },
} satisfies Record<
  Locale,
  {
    metadataTitle: string;
    headline: string;
    description: string;
    languageLabel: string;
    skipLink: string;
    homeLabel: string;
  }
>;
