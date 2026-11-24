import type { Locale } from "@/lib/locales";

export const projectIds = ["fast-loan-form", "business-process-automation"] as const;
export type ProjectId = (typeof projectIds)[number];

type ProjectTranslation = {
  name: string;
  type: string;
  role: string;
  overview: string;
  context: string;
  approach: string;
  responsibilities: readonly string[];
  outcomes: string;
  verifiedMetric?: string;
};

type Project = {
  client: string;
  publicUrl?: `https://${string}`;
  technologies: Record<Locale, readonly string[]>;
  copy: Record<Locale, ProjectTranslation>;
};

const roles = {
  en: "Full Stack Developer & Technology Consultant",
  es: "Desarrollador full stack y consultor tecnológico",
};

const loanStack = ["Next.js", "TypeScript", "Supabase", "PostgreSQL"];

export const projects: Record<ProjectId, Project> = {
  "fast-loan-form": {
    client: "Faster Multiservices / Faster Credit",
    publicUrl: "https://fast-loan-form.vercel.app/",
    technologies: {
      en: [...loanStack, "REST APIs"],
      es: [...loanStack, "APIs REST"],
    },
    copy: {
      en: {
        name: "Fast Loan Form",
        type: "Production web application",
        role: roles.en,
        overview: "A production web application that captures, manages, and tracks loan and financing applications.",
        context: "Faster Multiservices / Faster Credit needed to track applications after intake and use the information in its day-to-day operations.",
        approach: "Built the platform from scratch with Next.js and TypeScript, backed by Supabase and PostgreSQL. Implemented application management and operational reporting, and integrated the platform with business workflows.",
        responsibilities: [
          "Designed and developed the application from scratch.",
          "Own the architecture, deployment, infrastructure, maintenance, and development of new features.",
          "Implemented application management, operational reporting, and integrations with business workflows.",
        ],
        verifiedMetric: "More than 2,400 loan and financing applications recorded as of November 2026.",
        outcomes: "The count represents applications recorded, not approved loans or disbursed financing. The platform remains in production and is actively maintained.",
      },
      es: {
        name: "Fast Loan Form",
        type: "Aplicación web en producción",
        role: roles.es,
        overview: "Aplicación web en producción para registrar, gestionar y dar seguimiento a solicitudes de préstamos y financiamiento.",
        context: "Faster Multiservices / Faster Credit necesitaba dar seguimiento a las solicitudes después de recibirlas y usar esa información en sus operaciones diarias.",
        approach: "Desarrollé la plataforma desde cero con Next.js y TypeScript, con Supabase y PostgreSQL como base. Implementé la gestión de solicitudes y la generación de informes operativos e integré la plataforma con los flujos de trabajo del negocio.",
        responsibilities: [
          "Diseñé y desarrollé la aplicación desde cero.",
          "Soy responsable de la arquitectura, el despliegue, la infraestructura, el mantenimiento y el desarrollo de nuevas funcionalidades.",
          "Implementé la gestión de solicitudes, la generación de informes operativos y las integraciones con los flujos de trabajo del negocio.",
        ],
        verifiedMetric: "Más de 2.400 solicitudes de préstamos y financiamiento registradas hasta noviembre de 2026.",
        outcomes: "La cifra corresponde a solicitudes registradas, no a préstamos aprobados ni a financiamientos desembolsados. La plataforma sigue en producción y recibe mantenimiento activo.",
      },
    },
  },
  "business-process-automation": {
    client: "Faster Multiservices",
    technologies: {
      en: ["n8n", "REST APIs", "Webhooks", "Telegram integrations", "AI-assisted workflows", "Biometric attendance system integrations"],
      es: ["n8n", "APIs REST", "Webhooks", "Integraciones con Telegram", "Flujos de trabajo asistidos por IA", "Integraciones con sistemas biométricos de asistencia"],
    },
    copy: {
      en: {
        name: "Business Process Automation",
        type: "Business automation and system integrations",
        role: roles.en,
        overview: "Automated workflows for application tracking, operational reporting, and biometric attendance reporting.",
        context: "Faster Multiservices needed to automate repetitive operational tasks and make information from its systems easier to access.",
        approach: "Built workflows in n8n and connected systems through REST APIs and webhooks. The work included Telegram integrations and AI-assisted reporting.",
        responsibilities: [
          "Implemented tracking for loan and financing applications.",
          "Built operational and employee activity reporting workflows.",
          "Integrated APIs to retrieve business statistics.",
          "Integrated biometric attendance records and automated attendance reporting.",
          "Implemented AI-assisted reporting capabilities.",
        ],
        outcomes: "The workflows support application tracking and reporting across operations, employee activity, and attendance. Some AI components are in production; others are still in development.",
      },
      es: {
        name: "Automatización de procesos de negocio",
        type: "Automatización empresarial e integración de sistemas",
        role: roles.es,
        overview: "Flujos automatizados para el seguimiento de solicitudes y la generación de informes operativos y de asistencia biométrica.",
        context: "Faster Multiservices necesitaba automatizar tareas operativas repetitivas y facilitar el acceso a la información de sus sistemas.",
        approach: "Desarrollé flujos de trabajo en n8n y conecté sistemas mediante APIs REST y webhooks. El trabajo incluyó integraciones con Telegram y generación de informes asistida por IA.",
        responsibilities: [
          "Implementé el seguimiento de solicitudes de préstamos y financiamiento.",
          "Desarrollé flujos para generar informes operativos y de actividad del personal.",
          "Integré APIs para consultar estadísticas del negocio.",
          "Integré registros de asistencia biométrica y automaticé la generación de informes de asistencia.",
          "Implementé funcionalidades de generación de informes asistida por IA.",
        ],
        outcomes: "Los flujos permiten dar seguimiento a las solicitudes y generar informes de operaciones, actividad del personal y asistencia. Algunos componentes de IA están en producción; otros siguen en desarrollo.",
      },
    },
  },
};

export const projectLabels = {
  en: {
    nav: "Projects",
    section: "02 / Selected Work",
    title: "Selected Work",
    description: "Case studies in production software, business automation, and system integrations by Leandro Sánchez.",
    viewAll: "View all projects",
    back: "All projects",
    read: "Read case study",
    visit: "Visit the public application",
    client: "Client",
    role: "Role",
    overview: "Overview",
    context: "Business Context",
    approach: "Engineering Approach",
    responsibilities: "Responsibilities",
    technologies: "Technologies",
    outcomes: "Outcomes",
    verified: "Verified result",
  },
  es: {
    nav: "Proyectos",
    section: "02 / Proyectos destacados",
    title: "Proyectos destacados",
    description: "Casos de estudio de Leandro Sánchez sobre software en producción, automatización empresarial e integración de sistemas.",
    viewAll: "Ver todos los proyectos",
    back: "Todos los proyectos",
    read: "Leer el caso de estudio",
    visit: "Visitar la aplicación pública",
    client: "Cliente",
    role: "Rol",
    overview: "Descripción general",
    context: "Contexto del negocio",
    approach: "Enfoque técnico",
    responsibilities: "Responsabilidades",
    technologies: "Tecnologías",
    outcomes: "Resultados",
    verified: "Resultado verificado",
  },
} satisfies Record<Locale, Record<string, string>>;

export function isProjectId(value: string): value is ProjectId {
  return projectIds.some((id) => id === value);
}
