import type { Locale } from "@/lib/locales";

type ExperienceCopy = {
  role: string;
  engagement?: string;
  summary: string;
  responsibilities: readonly string[];
  result?: string;
};

type Experience = {
  company: string;
  start: `${number}-${number}`;
  end?: `${number}-${number}`;
  copy: Record<Locale, ExperienceCopy>;
};

export const experience: readonly Experience[] = [
  {
    company: "Faster Multiservices",
    start: "2025-06",
    copy: {
      en: {
        role: "Full Stack Developer & Technology Consultant",
        engagement: "Independent Contractor",
        summary: "Designed and maintain a production loan application platform, while developing automation and reporting solutions for daily business operations.",
        responsibilities: [
          "I work as an independent developer and technology consultant, building software and integrating solutions that support Faster Multiservices' daily operations.",
          "Designed, built, and maintain Fast Loan Form, a production platform for managing loan and financing applications using Next.js, TypeScript, Supabase, and PostgreSQL.",
          "Own the application lifecycle, including architecture, deployment, infrastructure, maintenance, and ongoing feature development.",
          "Develop automation workflows with n8n for application tracking, operational reporting, and biometric attendance integration.",
          "Connect business systems through REST APIs, webhooks, and AI-assisted reporting workflows.",
          "Advise stakeholders on technology decisions and opportunities to improve operational processes.",
        ],
        result: "More than 2,400 loan and financing applications recorded as of November 2026.",
      },
      es: {
        role: "Desarrollador full stack y consultor tecnológico",
        engagement: "Contratista independiente",
        summary: "Diseñé y mantengo una plataforma de gestión de solicitudes de préstamos y financiamientos, junto con soluciones de automatización y reportes operativos.",
        responsibilities: [
          "Trabajo como desarrollador independiente y consultor tecnológico, implementando soluciones de software e integraciones que apoyan las operaciones diarias de Faster Multiservices.",
          "Diseñé, desarrollé y mantengo Fast Loan Form, una plataforma de gestión de solicitudes de préstamos y financiamientos con Next.js, TypeScript, Supabase y PostgreSQL.",
          "Soy responsable del ciclo de vida de la aplicación: arquitectura, despliegue, infraestructura, mantenimiento y nuevas funcionalidades.",
          "Desarrollo automatizaciones con n8n para seguimiento de solicitudes, reportes operativos e integración de registros biométricos de asistencia.",
          "Conecto sistemas empresariales mediante APIs REST, webhooks y flujos de generación de reportes asistidos por IA.",
          "Asesoro a los responsables de la empresa en decisiones tecnológicas y mejoras de sus procesos operativos.",
        ],
        result: "Más de 2,400 solicitudes de préstamos y financiamientos registradas hasta noviembre de 2026.",
      },
    },
  },
  {
    company: "Valego Consulting",
    start: "2023-09",
    end: "2026-01",
    copy: {
      en: {
        role: "Software Developer",
        summary: "Built enterprise web and mobile applications, collaborated on .NET-backed systems, and led PDF reporting implementations.",
        responsibilities: [
          "Developed enterprise web and mobile applications as part of cross-functional teams, collaborating across frontend development, backend integrations, and business functionality.",
          "Built and maintained web and mobile features using React, React Native, TypeScript, and REST APIs.",
          "Collaborated with developers working on .NET backends, integrating APIs, executing SQL Server queries, and troubleshooting data-related functionality.",
          "Led PDF reporting implementations with PDFMake across multiple enterprise projects.",
          "Took ownership of contract management functionality for a hotel administration platform, including customer and agency data capture and contract generation.",
          "Collaborated with developers, project managers, and product managers using Git, GitHub Actions, Playwright, Asana, and Scrum practices.",
        ],
      },
      es: {
        role: "Desarrollador de software",
        summary: "Desarrollé aplicaciones empresariales web y móviles, colaboré en sistemas con backend .NET y lideré implementaciones de reportes PDF.",
        responsibilities: [
          "Desarrollé aplicaciones empresariales web y móviles como parte de equipos multidisciplinarios, colaborando en frontend, integraciones backend y funcionalidades de negocio.",
          "Desarrollé y mantuve funcionalidades web y móviles utilizando React, React Native, TypeScript y APIs REST.",
          "Colaboré con desarrolladores backend .NET en la integración de APIs, consultas SQL Server y depuración de funcionalidades relacionadas con datos.",
          "Lideré la implementación de reportes PDF utilizando PDFMake en múltiples proyectos empresariales.",
          "Fui responsable del módulo de gestión de contratos de una plataforma de administración hotelera, incluyendo captura de datos de clientes y agencias, y generación de contratos.",
          "Trabajé con desarrolladores, responsables de proyectos y de producto, utilizando Git, GitHub Actions, Playwright, Asana y prácticas de Scrum.",
        ],
      },
    },
  },
  {
    company: "Media Revolution SRL",
    start: "2023-04",
    end: "2023-08",
    copy: {
      en: {
        role: "Full Stack Developer",
        summary: "Developed fintech dashboards and applications, contributing to frontend, backend, and mobile development.",
        responsibilities: [
          "Contributed to fintech applications and administrative platforms for cryptocurrency management, working across web, backend, and mobile development.",
          "Developed administrative dashboards and web application features using React, Next.js, and TypeScript.",
          "Contributed to backend functionality and REST API development with NestJS.",
          "Participated in mobile application development using React Native.",
        ],
      },
      es: {
        role: "Desarrollador full stack",
        summary: "Desarrollé aplicaciones y paneles de administración fintech, participando en el desarrollo frontend, backend y móvil.",
        responsibilities: [
          "Participé en el desarrollo de aplicaciones fintech y plataformas administrativas para la gestión de criptomonedas, trabajando en frontend, backend y desarrollo móvil.",
          "Desarrollé paneles administrativos y funcionalidades web utilizando React, Next.js y TypeScript.",
          "Contribuí al desarrollo de funcionalidades backend y APIs REST utilizando NestJS.",
          "Participé en el desarrollo de aplicaciones móviles con React Native.",
        ],
      },
    },
  },
];

export const experienceCopy = {
  en: {
    navLabel: "Experience",
    sectionLabel: "01 / Experience",
    title: "Professional Experience",
    description: "Software development and technology consulting experience at Faster Multiservices, Valego Consulting, and Media Revolution SRL.",
    viewAll: "View full experience",
    present: "Present",
    resultLabel: "Verified result",
  },
  es: {
    navLabel: "Experiencia",
    sectionLabel: "01 / Experiencia",
    title: "Experiencia profesional",
    description: "Experiencia en desarrollo de software y consultoría tecnológica en Faster Multiservices, Valego Consulting y Media Revolution SRL.",
    viewAll: "Ver toda la experiencia",
    present: "Actualidad",
    resultLabel: "Resultado verificado",
  },
} satisfies Record<Locale, Record<string, string>>;
