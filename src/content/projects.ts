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
        overview: "A production platform for capturing, managing, and tracking loan and financing applications.",
        context: "Faster Credit needed a centralized way to receive applications, monitor their status, and make application data available for daily operations and reporting.",
        approach: "I designed and built the application from scratch using Next.js, TypeScript, Supabase, and PostgreSQL. The platform combines application management, reporting capabilities, and integrations with operational workflows.",
        responsibilities: [
          "As the project's sole developer, I am responsible for its architecture, implementation, deployment, maintenance, and continued development.",
        ],
        verifiedMetric: "More than 2,400 loan and financing applications recorded as of November 2026.",
        outcomes: "This figure represents recorded applications, not approved or disbursed operations.",
      },
      es: {
        name: "Fast Loan Form",
        type: "Aplicación web en producción",
        role: roles.es,
        overview: "Plataforma en producción para registrar, gestionar y dar seguimiento a solicitudes de préstamos y financiamientos.",
        context: "Faster Credit necesitaba centralizar la recepción de solicitudes, dar seguimiento a sus estados y disponer de la información para sus operaciones y reportes diarios.",
        approach: "Diseñé y desarrollé la aplicación desde cero utilizando Next.js, TypeScript, Supabase y PostgreSQL. La plataforma integra gestión de solicitudes, generación de reportes y conexiones con procesos operativos.",
        responsibilities: [
          "Como único desarrollador del proyecto, soy responsable de su arquitectura, implementación, despliegue, mantenimiento y evolución.",
        ],
        verifiedMetric: "Más de 2,400 solicitudes de préstamos y financiamientos registradas hasta noviembre de 2026.",
        outcomes: "Esta cifra corresponde a solicitudes registradas, no a operaciones aprobadas o desembolsadas.",
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
        overview: "Business process automation through system integrations, operational reporting, and AI-assisted workflows.",
        context: "Faster Multiservices needed to reduce repetitive manual tasks and make operational information easier to access across its systems.",
        approach: "I developed n8n workflows that connect business applications through REST APIs, webhooks, and Telegram integrations. These workflows support reporting, application monitoring, and biometric attendance processes.",
        responsibilities: [
          "Built workflows to track loan and financing applications and employee activity.",
          "Integrated business APIs to retrieve operational statistics.",
          "Connected biometric attendance records to automated reporting processes.",
          "Developed AI-assisted reporting capabilities, with some components deployed and others still under development.",
        ],
        outcomes: "Operational workflows support application monitoring and reporting across business activities and attendance records.",
      },
      es: {
        name: "Automatización de procesos de negocio",
        type: "Automatización empresarial e integración de sistemas",
        role: roles.es,
        overview: "Automatización de procesos empresariales mediante integración de sistemas, reportes operativos y flujos de trabajo asistidos por IA.",
        context: "Faster Multiservices necesitaba reducir tareas manuales repetitivas y facilitar el acceso a información operativa procedente de distintos sistemas.",
        approach: "Desarrollé flujos de trabajo con n8n que conectan aplicaciones empresariales mediante APIs REST, webhooks e integraciones con Telegram. Estas automatizaciones facilitan el seguimiento de solicitudes, la generación de reportes y el procesamiento de registros biométricos de asistencia.",
        responsibilities: [
          "Implementé flujos para consultar solicitudes de préstamos, financiamientos y actividad del personal.",
          "Integré APIs para obtener estadísticas operativas.",
          "Conecté registros biométricos de asistencia con procesos automatizados de reportes.",
          "Desarrollé funcionalidades de generación de reportes asistidos por IA, con componentes en producción y otros todavía en desarrollo.",
        ],
        outcomes: "Los flujos permiten consultar información y generar reportes relacionados con las solicitudes, las operaciones empresariales y los registros de asistencia.",
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
    responsibilities: "My Role",
    technologies: "Technologies",
    outcomes: "Outcome",
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
    approach: "Solución técnica",
    responsibilities: "Mi responsabilidad",
    technologies: "Tecnologías",
    outcomes: "Resultado",
    verified: "Resultado verificado",
  },
} satisfies Record<Locale, Record<string, string>>;

export function isProjectId(value: string): value is ProjectId {
  return projectIds.some((id) => id === value);
}
