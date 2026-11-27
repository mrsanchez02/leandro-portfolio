import type { Locale } from "@/lib/locales";

export const aboutCopy = {
  en: {
    nav: "About",
    label: "03 / About",
    title: "About me",
    summary: "I build enterprise web and mobile applications and connect the systems behind them.",
    intro: "I'm a Full Stack Software Engineer based in the Dominican Republic, with experience building enterprise web and mobile applications, integrating backend services, and automating business processes.",
    approach: [
      "I enjoy understanding how systems work, identifying opportunities for improvement, and turning complex requirements into practical solutions.",
      "My approach is driven by maintainability, simplicity, and real-world impact. Whether I'm developing an application, connecting services, or introducing automation and AI, I focus on choosing the right solution for the problem rather than adding complexity for its own sake.",
    ],
    action: "More about me",
  },
  es: {
    nav: "Perfil",
    label: "03 / Perfil",
    title: "Sobre mí",
    summary: "Desarrollo aplicaciones web y móviles empresariales e integro los sistemas que las sustentan.",
    intro: "Soy desarrollador de software Full Stack, radicado en República Dominicana, con experiencia en aplicaciones empresariales web y móviles, integración de servicios backend y automatización de procesos de negocio.",
    approach: [
      "Disfruto entender cómo funcionan los sistemas, identificar oportunidades de mejora y transformar requerimientos complejos en soluciones prácticas.",
      "Mi enfoque prioriza la mantenibilidad, la simplicidad y los resultados reales. Ya sea desarrollando una aplicación, conectando servicios o incorporando automatización e inteligencia artificial, procuro elegir la solución adecuada para cada problema, sin añadir complejidad innecesaria.",
    ],
    action: "Más sobre mí",
  },
} satisfies Record<Locale, { approach: readonly string[] } & Record<string, string | readonly string[]>>;

export const contactCopy = {
  en: {
    nav: "Contact",
    title: "Let's connect.",
    label: "05 / Contact",
    summary: "I'm interested in Full Stack Software Engineering opportunities, particularly remote and international roles where I can contribute to building reliable, maintainable software.",
    consulting: "I'm also open to discussing independent consulting projects involving software development, system integrations, and workflow automation.",
    closing: "Feel free to reach out.",
    description: "Connect with Leandro Sánchez about software engineering roles or independent consulting.",
    action: "Get in touch",
    profiles: "Online profiles",
    email: "Send an email",
    resumes: "Résumé",
    resumeDownload: "Download English résumé (PDF)",
  },
  es: {
    nav: "Contacto",
    title: "Hablemos.",
    label: "05 / Contacto",
    summary: "Me interesan las oportunidades laborales como desarrollador de software Full Stack, especialmente en equipos remotos e internacionales donde pueda contribuir al desarrollo de soluciones confiables y fáciles de mantener.",
    consulting: "También estoy abierto a conversar sobre proyectos de consultoría independiente relacionados con desarrollo de software, integración de sistemas y automatización de procesos.",
    closing: "Si quieres conversar sobre alguna oportunidad, puedes escribirme.",
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
