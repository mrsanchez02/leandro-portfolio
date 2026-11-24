import type { Locale } from "@/lib/locales";

type LocalizedText = Record<Locale, string>;
type Technology = string | LocalizedText;

// Keep additional skills separate unless their use is documented in experience or case studies.
export const expertise: readonly {
  title: LocalizedText;
  applied: readonly Technology[];
  additional: readonly Technology[];
}[] = [
  {
    title: { en: "Frontend & Mobile", es: "Frontend y móvil" },
    applied: ["React", "Next.js", "TypeScript", "React Native"],
    additional: ["Tailwind CSS"],
  },
  {
    title: { en: "Backend & APIs", es: "Backend y APIs" },
    applied: ["Node.js", "NestJS", { en: "REST APIs", es: "APIs REST" }],
    additional: ["Express", "C#", "ASP.NET Core"],
  },
  {
    title: { en: "Data & Infrastructure", es: "Datos e infraestructura" },
    applied: ["PostgreSQL", "SQL Server", "Supabase", "Git", "GitHub Actions", "Vercel"],
    additional: ["Docker"],
  },
  {
    title: { en: "Automation & AI", es: "Automatización e IA" },
    applied: [
      "Webhooks",
      "n8n",
      { en: "API Integrations", es: "Integraciones con APIs" },
      { en: "AI-assisted Workflows", es: "Flujos de trabajo asistidos por IA" },
    ],
    additional: [{ en: "LLM Integrations", es: "Integraciones con LLM" }],
  },
];

export const expertiseCopy = {
  en: {
    label: "04 / Expertise",
    title: "Technical Expertise",
    applied: "Used in professional projects",
    additional: "Additional skills and training",
    action: "Explore technical expertise",
  },
  es: {
    label: "04 / Tecnologías",
    title: "Experiencia técnica",
    applied: "En proyectos profesionales",
    additional: "Conocimientos adicionales y formación",
    action: "Explorar la experiencia técnica",
  },
} satisfies Record<Locale, Record<string, string>>;
