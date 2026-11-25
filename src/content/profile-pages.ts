import type { Locale } from "@/lib/locales";

export const aboutCopy = {
  en: {
    nav: "About",
    label: "03 / About",
    title: "About me",
    summary: "I build enterprise web and mobile applications and connect the systems behind them.",
    intro: "I work in full stack software development from the Dominican Republic. I build enterprise web and mobile applications, develop backend APIs, and integrate systems to solve problems in day-to-day business operations.",
    approach: "I start by understanding where a process breaks down. That guides the architecture: what to automate, where AI can help, and what to keep simple so the software is easier to maintain and operate.",
    action: "More about me",
  },
  es: {
    nav: "Perfil",
    label: "03 / Perfil",
    title: "Sobre mí",
    summary: "Desarrollo aplicaciones web y móviles empresariales e integro los sistemas que las sustentan.",
    intro: "Me dedico al desarrollo de software full stack desde República Dominicana. Creo aplicaciones web y móviles empresariales, desarrollo APIs de backend e integro sistemas para resolver problemas en la operación diaria de las empresas.",
    approach: "Empiezo por entender dónde falla un proceso. Eso orienta la arquitectura: qué automatizar, dónde puede ayudar la IA y qué conviene mantener simple para facilitar el mantenimiento y la operación del software.",
    action: "Más sobre mí",
  },
} satisfies Record<Locale, Record<string, string>>;

export const contactCopy = {
  en: {
    title: "Contact",
    label: "05 / Contact",
    summary: "I’m open to full stack software engineering roles, especially remote and international opportunities.",
    consulting: "I also consider independent consulting on system integration and workflow automation.",
    description: "Connect with Leandro Sánchez about software engineering roles or independent consulting.",
    action: "Get in touch",
    profiles: "Online profiles",
    email: "Send an email",
    resumes: "Résumé",
    resumeDownload: "Download English résumé (PDF)",
  },
  es: {
    title: "Contacto",
    label: "05 / Contacto",
    summary: "Me interesan las oportunidades laborales en ingeniería de software full stack, especialmente los puestos remotos e internacionales.",
    consulting: "También considero proyectos de consultoría independiente en integración de sistemas y automatización de procesos.",
    description: "Contacta a Leandro Sánchez para hablar sobre puestos de ingeniería de software o consultoría independiente.",
    action: "Ponerse en contacto",
    profiles: "Perfiles en línea",
    email: "Enviar un correo",
    resumes: "Currículum",
    resumeDownload: "Descargar currículum en español (PDF)",
  },
} satisfies Record<Locale, Record<string, string>>;

export const contactDestinations = {
  email: "mrsanchez.dev@gmail.com",
  resumes: {
    en: "/resume/Leandro-Sanchez-CV-EN.pdf",
    es: "/resume/Leandro-Sanchez-CV-ES.pdf",
  } satisfies Record<Locale, `/${string}.pdf`>,
};

export const contactProfiles: readonly { name: string; href: `https://${string}` }[] = [
  { name: "LinkedIn", href: "https://do.linkedin.com/in/jsanchez-castillo" },
  { name: "GitHub", href: "https://github.com/mrsanchez02" },
];
