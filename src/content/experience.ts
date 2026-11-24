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
        summary: "Build and maintain Fast Loan Form and automate operational workflows.",
        responsibilities: [
          "Designed and developed Fast Loan Form and continue to maintain it using Next.js, TypeScript, Supabase, and PostgreSQL.",
          "Own application architecture, deployment, infrastructure, maintenance, and feature development.",
          "Built n8n workflows for application tracking, operational reporting, and biometric attendance monitoring.",
          "Integrated APIs, webhooks, and AI-assisted reporting capabilities.",
          "Advise business stakeholders on technology decisions.",
        ],
        result: "More than 2,400 loan and financing applications recorded as of November 2026.",
      },
      es: {
        role: "Desarrollador full stack y consultor tecnológico",
        engagement: "Contratista independiente",
        summary: "Desarrollo y mantengo Fast Loan Form y automatizo procesos operativos.",
        responsibilities: [
          "Diseñé y desarrollé Fast Loan Form, y sigo manteniéndolo con Next.js, TypeScript, Supabase y PostgreSQL.",
          "Soy responsable de la arquitectura, el despliegue, la infraestructura, el mantenimiento y el desarrollo de funcionalidades de la aplicación.",
          "Creé flujos de trabajo en n8n para el seguimiento de solicitudes, la elaboración de informes operativos y el control biométrico de asistencia.",
          "Integré APIs, webhooks y funcionalidades de generación de informes asistida por IA.",
          "Asesoro a las partes interesadas del negocio en la toma de decisiones tecnológicas.",
        ],
        result: "Más de 2.400 solicitudes de préstamos y financiamiento registradas hasta noviembre de 2026.",
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
        summary: "Built enterprise web and mobile applications and led PDF reporting implementations.",
        responsibilities: [
          "Developed enterprise web and mobile applications with React, React Native, and TypeScript.",
          "Worked with REST APIs and applications backed by .NET and SQL Server.",
          "Collaborated on backend integrations, SQL queries, debugging, and data-related functionality.",
          "Led PDFMake reporting implementations across multiple projects.",
          "Owned contract management functionality for a hotel administration platform.",
          "Collaborated with developers, project managers, and product managers using Git, GitHub Actions, Playwright, Asana, and Scrum practices.",
        ],
      },
      es: {
        role: "Desarrollador de software",
        summary: "Desarrollé aplicaciones web y móviles empresariales y lideré la implementación de informes en PDF.",
        responsibilities: [
          "Desarrollé aplicaciones web y móviles empresariales con React, React Native y TypeScript.",
          "Trabajé con APIs REST y aplicaciones con backend en .NET y bases de datos SQL Server.",
          "Colaboré en integraciones de backend, consultas SQL, depuración y funcionalidades relacionadas con datos.",
          "Lideré la implementación de informes con PDFMake en varios proyectos.",
          "Fui responsable de la funcionalidad de gestión de contratos para una plataforma de administración hotelera.",
          "Colaboré con desarrolladores, responsables de proyectos y responsables de producto usando Git, GitHub Actions, Playwright y Asana, y aplicando prácticas de Scrum.",
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
        summary: "Built fintech applications and administrative dashboards for cryptocurrency management.",
        responsibilities: [
          "Developed fintech applications and administrative dashboards for cryptocurrency management with React and Next.js.",
          "Contributed to backend functionality using NestJS and REST APIs.",
          "Participated in mobile development using React Native.",
        ],
      },
      es: {
        role: "Desarrollador full stack",
        summary: "Desarrollé aplicaciones fintech y paneles administrativos para la gestión de criptomonedas.",
        responsibilities: [
          "Desarrollé aplicaciones fintech y paneles administrativos para la gestión de criptomonedas con React y Next.js.",
          "Contribuí al desarrollo de funcionalidades de backend con NestJS y APIs REST.",
          "Participé en el desarrollo móvil con React Native.",
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
