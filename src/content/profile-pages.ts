import type { Locale } from "@/lib/locales";

export const aboutCopy = {
  en: {
    nav: "About",
    label: "03 / About",
    title: "About me",
    summary: "I build enterprise web and mobile applications and connect the systems behind them.",
    intro: "I’m a Full Stack Software Engineer based in the Dominican Republic. My work spans enterprise web and mobile applications, backend APIs, and system integration.",
    approach: "I start by understanding where a process breaks down. That guides the architecture: what to automate, where AI can help, and what to keep simple so the software is easier to maintain and operate.",
    action: "More about me",
  },
  es: {
    nav: "Perfil",
    label: "03 / Perfil",
    title: "Sobre mí",
    summary: "Desarrollo aplicaciones web y móviles empresariales e integro los sistemas que las sustentan.",
    intro: "Soy ingeniero de software full stack y vivo en República Dominicana. Mi trabajo abarca aplicaciones web y móviles empresariales, APIs de backend e integración de sistemas.",
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
  },
  es: {
    title: "Contacto",
    label: "05 / Contacto",
    summary: "Me interesan las oportunidades laborales en ingeniería de software full stack, especialmente los puestos remotos e internacionales.",
    consulting: "También considero proyectos de consultoría independiente en integración de sistemas y automatización de procesos.",
    description: "Contacta a Leandro Sánchez para hablar sobre puestos de ingeniería de software o consultoría independiente.",
    action: "Ponerse en contacto",
    profiles: "Perfiles en línea",
  },
} satisfies Record<Locale, Record<string, string>>;

export const contactProfiles: readonly { name: string; href: `https://${string}` }[] = [
  { name: "LinkedIn", href: "https://do.linkedin.com/in/jsanchez-castillo" },
  { name: "GitHub", href: "https://github.com/mrsanchez02" },
];
