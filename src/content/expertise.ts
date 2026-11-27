import type { Locale } from "@/lib/locales";

type LocalizedText = Record<Locale, string>;
type Technology = string | LocalizedText;

type CompetencyGroup = {
  title: LocalizedText;
  skills: readonly Technology[];
};

// Competencies are listed separately from professional experience.
export const expertise: readonly (CompetencyGroup & { subgroup?: CompetencyGroup })[] = [
  {
    title: { en: "Frontend & Mobile", es: "Frontend y móvil" },
    skills: ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS"],
  },
  {
    title: { en: "Backend & APIs", es: "Backend y APIs" },
    skills: [
      "Node.js", "NestJS", "Express", "C#", "ASP.NET Core", "Entity Framework Core",
      { en: "REST APIs", es: "APIs REST" },
    ],
    subgroup: {
      title: { en: "Architecture & Practices", es: "Arquitectura y prácticas" },
      skills: [
        "Clean Architecture",
        "SOLID",
        { en: "Dependency Injection", es: "Inyección de dependencias" },
        { en: "JWT Authentication", es: "Autenticación con JWT" },
        { en: "Automated Testing", es: "Pruebas automatizadas" },
      ],
    },
  },
  {
    title: { en: "Data & Infrastructure", es: "Datos e infraestructura" },
    skills: ["PostgreSQL", "SQL Server", "Supabase", "Docker", "Git", "GitHub Actions", "Vercel"],
  },
  {
    title: { en: "Automation & AI", es: "Automatización e IA" },
    skills: [
      "n8n",
      "Webhooks",
      { en: "API Integrations", es: "Integraciones con APIs" },
      { en: "AI Agents", es: "Agentes de IA" },
      { en: "LLM Integrations", es: "Integraciones con LLM" },
    ],
  },
];

export const expertiseCopy = {
  en: {
    label: "04 / Expertise",
    title: "Technical Expertise",
    action: "Explore technical expertise",
  },
  es: {
    label: "04 / Tecnologías",
    title: "Experiencia técnica",
    action: "Explorar la experiencia técnica",
  },
} satisfies Record<Locale, Record<string, string>>;
