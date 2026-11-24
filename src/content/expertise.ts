import type { Locale } from "@/lib/locales";

type LocalizedText = Record<Locale, string>;
type Technology = string | LocalizedText;

export const expertiseGroups = ["applied", "practical", "training", "additional"] as const;
type ExpertiseGroup = (typeof expertiseGroups)[number];

// Practical projects demonstrate hands-on use, not production use or formal training.
// Use the training group only when the training itself is documented.
export const expertise: readonly {
  title: LocalizedText;
  skills: Partial<Record<ExpertiseGroup, readonly Technology[]>>;
}[] = [
  {
    title: { en: "Frontend & Mobile", es: "Frontend y móvil" },
    skills: {
      applied: ["React", "Next.js", "TypeScript", "React Native"],
      practical: ["Tailwind CSS"], // This portfolio.
    },
  },
  {
    title: { en: "Backend & APIs", es: "Backend y APIs" },
    skills: {
      applied: ["Node.js", "NestJS", { en: "REST APIs", es: "APIs REST" }],
      practical: ["Express"], // Public express-hbs project.
      additional: ["C#", "ASP.NET Core"],
    },
  },
  {
    title: { en: "Data & Infrastructure", es: "Datos e infraestructura" },
    skills: {
      applied: ["PostgreSQL", "SQL Server", "Supabase", "Git", "GitHub Actions", "Vercel"],
      practical: ["Docker"], // Docker Compose configurations in public projects, including go-gorm-db.
    },
  },
  {
    title: { en: "Automation & AI", es: "Automatización e IA" },
    skills: {
      applied: [
        "Webhooks",
        "n8n",
        { en: "API Integrations", es: "Integraciones con APIs" },
        { en: "AI-assisted Workflows", es: "Flujos de trabajo asistidos por IA" },
      ],
      additional: [{ en: "LLM Integrations", es: "Integraciones con LLM" }],
    },
  },
];

export const expertiseCopy = {
  en: {
    label: "04 / Expertise",
    title: "Technical Expertise",
    applied: "Used in professional projects",
    practical: "Hands-on project experience",
    training: "Formal training",
    additional: "Additional skills",
    action: "Explore technical expertise",
  },
  es: {
    label: "04 / Tecnologías",
    title: "Experiencia técnica",
    applied: "En proyectos profesionales",
    practical: "Experiencia práctica en proyectos",
    training: "Formación formal",
    additional: "Conocimientos adicionales",
    action: "Explorar la experiencia técnica",
  },
} satisfies Record<Locale, Record<string, string>>;
