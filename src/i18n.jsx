import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      contact: "Contact",
      cta: "Start a project",
      home: "DNX Lab homepage",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    hero: {
      eyebrow: "IT · SOFTWARE · AUTOMATION",
      title1: "Digital solutions.",
      title2: "Built properly.",
      description:
        "DNX Lab develops web applications, IT solutions and automations for individuals and small businesses. Direct, efficient and without unnecessary complexity.",
      cta: "Start a project",
      secondary: "View services",
      trust: ["Direct communication", "No-obligation enquiry", "Focus on solutions that work"],
      discover: "Discover more",
      cards: ["Web development", "IT solutions", "Automation", "Smart Home"],
    },
    services: {
      eyebrow: "01 / SERVICES",
      title: "Technology that solves a problem.",
      intro:
        "No off-the-shelf solution when the task needs something else. DNX Lab combines development, IT and automation into practical solutions.",
      items: [
        {
          title: "Web development",
          description:
            "Modern websites and web applications with clean architecture, responsive UI and a focus on performance.",
          tags: ["React", "Vite", "Next.js"],
        },
        {
          title: "IT solutions",
          description:
            "Troubleshooting, optimisation and technical support for devices, systems and digital workflows.",
          tags: ["Diagnosis", "Optimisation", "Support"],
        },
        {
          title: "Smart Home",
          description:
            "Planning and setup of connected systems for more comfort, control and reliable processes.",
          tags: ["Setup", "Integration", "Automation"],
        },
        {
          title: "Automation",
          description:
            "Digitise repetitive tasks and design workflows that reduce manual work and unnecessary steps.",
          tags: ["Workflows", "Scripting", "Tools"],
        },
        {
          title: "Custom software",
          description:
            "Small to medium software solutions for concrete requirements — pragmatically planned and built in modules.",
          tags: ["Fullstack", "APIs", "Databases"],
        },
      ],
    },
    process: {
      eyebrow: "02 / PROCESS",
      title: "From enquiry to solution.",
      intro:
        "The process stays deliberately lean. Understand first, then build — without unnecessary loops.",
      steps: [
        { title: "Enquiry", text: "Briefly describe what you need. No complicated briefings required." },
        { title: "Analysis", text: "We clarify requirements, existing systems and the most sensible solution path." },
        { title: "Implementation", text: "Development, setup or optimisation focused on a clean, reliable result." },
        { title: "Handover", text: "A working solution, clear explanation and understandable next steps." },
      ],
      note: "Already have a specific problem? Skip the rest and talk directly about the solution.",
    },
    contact: {
      eyebrow: "03 / CONTACT",
      title1: "Tell us",
      title2: "what you need.",
      description:
        "Website, IT issue, Smart Home or custom software: a short description is enough for the first step.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      topic: "Topic",
      topicPlaceholder: "Please select",
      topics: ["Web development", "IT solution", "Smart Home", "Automation", "Custom software", "Other"],
      message: "Project / issue",
      messagePlaceholder: "Briefly describe how DNX Lab can help ...",
      submit: "Send enquiry",
      sending: "Sending ...",
      success: "Enquiry sent successfully.",
      error: "Sending failed. Please contact us by email.",
      note: "No-obligation enquiry · Prompt response",
    },
    footer: {
      tagline: "IT · Software · Automation",
      legal: "Legal notice",
      privacy: "Privacy policy",
    },
    legal: {
      legalLabel: "LEGAL",
      imprintTitle: "Legal notice",
      privacyTitle: "Privacy policy",
      imprint: [
        "Information according to § 5 TMG",
        "Francisco Daniel Lirola Rodríguez\nMühlbergstr. 8\n69483 Wald-Michelbach\nGermany",
        "Email: contact@dnxlab.de",
        "Responsible for content according to § 18 Abs. 2 MStV:\nDaniel Rodríguez",
      ],
      privacy: [
        "The protection of your personal data is important to us. This page provides basic information about the processing of personal data when visiting this website.",
        "When accessing the website, technically necessary data, in particular IP address, date and time, as well as browser and system information, may be processed by the hosting provider.",
        "If you use the contact form, the information you enter is processed to handle your enquiry.",
        "For questions about data protection, you can contact DNX Lab at contact@dnxlab.de.",
      ],
    },
  },
  de: {
    nav: {
      services: "Leistungen",
      process: "Ablauf",
      contact: "Kontakt",
      cta: "Projekt anfragen",
      home: "DNX Lab Startseite",
      menuOpen: "Menü öffnen",
      menuClose: "Menü schließen",
    },
    hero: {
      eyebrow: "IT · SOFTWARE · AUTOMATION",
      title1: "Digitale Lösungen.",
      title2: "Sauber umgesetzt.",
      description:
        "DNX Lab entwickelt Webanwendungen, IT-Lösungen und Automatisierungen für Privatkunden und kleine Unternehmen. Direkt, effizient und ohne unnötige Komplexität.",
      cta: "Projekt anfragen",
      secondary: "Leistungen ansehen",
      trust: ["Direkte Kommunikation", "Unverbindliche Anfrage", "Fokus auf funktionierende Lösungen"],
      discover: "Mehr entdecken",
      cards: ["Webentwicklung", "IT-Lösungen", "Automatisierung", "Smart Home"],
    },
    services: {
      eyebrow: "01 / LEISTUNGEN",
      title: "Technik, die ein Problem löst.",
      intro:
        "Keine Lösungen von der Stange, wenn die Aufgabe etwas anderes braucht. DNX Lab verbindet Entwicklung, IT und Automatisierung zu praktischen Lösungen.",
      items: [
        { title: "Webentwicklung", description: "Moderne Websites und Webanwendungen mit sauberer Architektur, responsivem UI und Fokus auf Performance.", tags: ["React", "Vite", "Next.js"] },
        { title: "IT-Lösungen", description: "Fehleranalyse, Optimierung und technische Unterstützung für Geräte, Systeme und digitale Arbeitsabläufe.", tags: ["Diagnose", "Optimierung", "Support"] },
        { title: "Smart Home", description: "Planung und Einrichtung vernetzter Systeme für mehr Komfort, Kontrolle und zuverlässige Abläufe.", tags: ["Setup", "Integration", "Automation"] },
        { title: "Automatisierung", description: "Wiederkehrende Aufgaben digitalisieren und Prozesse so gestalten, dass weniger manuelle Arbeit nötig ist.", tags: ["Workflows", "Scripting", "Tools"] },
        { title: "Individuelle Software", description: "Kleine bis mittlere Softwarelösungen für konkrete Anforderungen – pragmatisch geplant und modular umgesetzt.", tags: ["Fullstack", "APIs", "Datenbanken"] },
      ],
    },
    process: {
      eyebrow: "02 / ABLAUF",
      title: "Direkt von der Anfrage zur Lösung.",
      intro: "Der Ablauf bleibt bewusst schlank. Erst verstehen, dann umsetzen – ohne unnötige Schleifen.",
      steps: [
        { title: "Anfrage", text: "Kurz beschreiben, was gebraucht wird. Ohne komplizierte Briefings." },
        { title: "Analyse", text: "Anforderungen, bestehende Systeme und der sinnvollste Lösungsweg werden geklärt." },
        { title: "Umsetzung", text: "Entwicklung, Einrichtung oder Optimierung mit Fokus auf eine saubere Lösung." },
        { title: "Übergabe", text: "Funktionierende Lösung, klare Erklärung und nachvollziehbare nächste Schritte." },
      ],
      note: "Du hast bereits ein konkretes Problem? Dann überspringen wir den Rest und sprechen direkt über die Lösung.",
    },
    contact: {
      eyebrow: "03 / KONTAKT",
      title1: "Erzählen Sie uns,",
      title2: "was Sie brauchen.",
      description: "Ob Website, IT-Problem, Smart Home oder individuelle Software: Eine kurze Beschreibung reicht für den ersten Schritt.",
      name: "Name",
      namePlaceholder: "Ihr Name",
      email: "E-Mail",
      emailPlaceholder: "ihre@email.de",
      topic: "Thema",
      topicPlaceholder: "Bitte auswählen",
      topics: ["Webentwicklung", "IT-Lösung", "Smart Home", "Automatisierung", "Individuelle Software", "Sonstiges"],
      message: "Projekt / Problem",
      messagePlaceholder: "Kurz beschreiben, wobei DNX Lab helfen soll ...",
      submit: "Anfrage senden",
      sending: "Wird gesendet ...",
      success: "Anfrage erfolgreich gesendet.",
      error: "Senden fehlgeschlagen. Bitte per E-Mail kontaktieren.",
      note: "Unverbindliche Anfrage · Antwort zeitnah",
    },
    footer: { tagline: "IT · Software · Automation", legal: "Impressum", privacy: "Datenschutz" },
    legal: {
      legalLabel: "LEGAL",
      imprintTitle: "Impressum",
      privacyTitle: "Datenschutzerklärung",
      imprint: [
        "Angaben gemäß § 5 TMG",
        "Francisco Daniel Lirola Rodríguez\nMühlbergstr. 8\n69483 Wald-Michelbach\nDeutschland",
        "E-Mail: contact@dnxlab.de",
        "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:\nDaniel Rodríguez",
      ],
      privacy: [
        "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Seite enthält die grundlegenden Informationen zur Verarbeitung personenbezogener Daten beim Besuch dieser Website.",
        "Beim Aufruf der Website können technisch erforderliche Daten, insbesondere IP-Adresse, Datum und Uhrzeit sowie Browser- und Systeminformationen, durch den Hosting-Anbieter verarbeitet werden.",
        "Wenn Sie das Kontaktformular verwenden, werden die von Ihnen eingegebenen Angaben zur Bearbeitung Ihrer Anfrage verarbeitet.",
        "Bei Fragen zum Datenschutz können Sie sich über contact@dnxlab.de an DNX Lab wenden.",
      ],
    },
  },
  es: {
    nav: {
      services: "Servicios",
      process: "Proceso",
      contact: "Contacto",
      cta: "Iniciar proyecto",
      home: "Página de inicio de DNX Lab",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
    },
    hero: {
      eyebrow: "IT · SOFTWARE · AUTOMATIZACIÓN",
      title1: "Soluciones digitales.",
      title2: "Bien ejecutadas.",
      description:
        "DNX Lab desarrolla aplicaciones web, soluciones IT y automatizaciones para particulares y pequeñas empresas. Directo, eficiente y sin complejidad innecesaria.",
      cta: "Iniciar proyecto",
      secondary: "Ver servicios",
      trust: ["Comunicación directa", "Consulta sin compromiso", "Enfoque en soluciones que funcionan"],
      discover: "Descubrir más",
      cards: ["Desarrollo web", "Soluciones IT", "Automatización", "Smart Home"],
    },
    services: {
      eyebrow: "01 / SERVICIOS",
      title: "Tecnología que resuelve problemas.",
      intro:
        "No utilizamos soluciones estándar cuando el problema necesita otra cosa. DNX Lab combina desarrollo, IT y automatización para crear soluciones prácticas.",
      items: [
        { title: "Desarrollo web", description: "Webs y aplicaciones modernas con arquitectura limpia, interfaz responsive y foco en rendimiento.", tags: ["React", "Vite", "Next.js"] },
        { title: "Soluciones IT", description: "Diagnóstico, optimización y soporte técnico para dispositivos, sistemas y flujos de trabajo digitales.", tags: ["Diagnóstico", "Optimización", "Soporte"] },
        { title: "Smart Home", description: "Planificación y configuración de sistemas conectados para mejorar el confort, el control y la fiabilidad.", tags: ["Setup", "Integración", "Automatización"] },
        { title: "Automatización", description: "Digitalización de tareas repetitivas y creación de procesos que reducen el trabajo manual.", tags: ["Workflows", "Scripting", "Herramientas"] },
        { title: "Software a medida", description: "Soluciones de software pequeñas y medianas para necesidades concretas, planificadas de forma pragmática y modular.", tags: ["Fullstack", "APIs", "Bases de datos"] },
      ],
    },
    process: {
      eyebrow: "02 / PROCESO",
      title: "De la consulta a la solución.",
      intro: "El proceso se mantiene deliberadamente sencillo. Primero entendemos, después construimos, sin pasos innecesarios.",
      steps: [
        { title: "Consulta", text: "Explica brevemente qué necesitas. No hace falta un briefing complicado." },
        { title: "Análisis", text: "Aclaramos requisitos, sistemas existentes y el camino más adecuado para resolverlo." },
        { title: "Implementación", text: "Desarrollo, configuración u optimización con foco en un resultado limpio y fiable." },
        { title: "Entrega", text: "Una solución funcional, una explicación clara y próximos pasos comprensibles." },
      ],
      note: "¿Ya tienes un problema concreto? Saltamos el resto y hablamos directamente de la solución.",
    },
    contact: {
      eyebrow: "03 / CONTACTO",
      title1: "Cuéntanos",
      title2: "qué necesitas.",
      description: "Web, problema IT, Smart Home o software a medida: una breve descripción es suficiente para empezar.",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "E-mail",
      emailPlaceholder: "tu@email.com",
      topic: "Tema",
      topicPlaceholder: "Selecciona una opción",
      topics: ["Desarrollo web", "Solución IT", "Smart Home", "Automatización", "Software a medida", "Otro"],
      message: "Proyecto / problema",
      messagePlaceholder: "Describe brevemente cómo puede ayudarte DNX Lab ...",
      submit: "Enviar consulta",
      sending: "Enviando ...",
      success: "Consulta enviada correctamente.",
      error: "No se ha podido enviar. Contacta por e-mail.",
      note: "Consulta sin compromiso · Respuesta rápida",
    },
    footer: { tagline: "IT · Software · Automatización", legal: "Aviso legal", privacy: "Privacidad" },
    legal: {
      legalLabel: "LEGAL",
      imprintTitle: "Aviso legal",
      privacyTitle: "Política de privacidad",
      imprint: [
        "Información conforme al § 5 TMG",
        "Francisco Daniel Lirola Rodríguez\nMühlbergstr. 8\n69483 Wald-Michelbach\nAlemania",
        "E-mail: contact@dnxlab.de",
        "Responsable del contenido conforme al § 18 Abs. 2 MStV:\nDaniel Rodríguez",
      ],
      privacy: [
        "La protección de sus datos personales es importante para nosotros. Esta página contiene información básica sobre el tratamiento de datos personales al visitar este sitio web.",
        "Al acceder al sitio web, el proveedor de alojamiento puede tratar datos técnicamente necesarios, en particular la dirección IP, fecha y hora e información del navegador y del sistema.",
        "Si utiliza el formulario de contacto, los datos introducidos se tratarán para gestionar su consulta.",
        "Para cuestiones relacionadas con la privacidad, puede contactar con DNX Lab en contact@dnxlab.de.",
      ],
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("dnx-language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("dnx-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
