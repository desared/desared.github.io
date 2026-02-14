export type Lang = "en" | "de";

export const translations = {
  en: {
    nav: {
      brand: "~/data_scientist",
      about: "About",
      portfolio: "Portfolio",
      talks: "Talks",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      label: "DATA SCIENTIST & ML ENGINEER",
      greeting: "Hi, I'm",
      name: "Desared Osmanllari",
      description:
        "Passionate Data Scientist with over 7 years of experience specialising in data-driven application development and machine learning.",
      cta: "More About Me",
    },
    about: {
      title: "About Me",
      intro:
        "My current role centers on enhancing customer acquisition processes, improving conversion rates, and optimizing budget allocation; all while nurturing a passion for technological innovation and operational excellence.",
      cards: [
        {
          title: "Data Science Expert",
          description: "Senior Data Scientist at Sonova Digital",
          icon: "search" as const,
        },
        {
          title: "Education",
          description:
            "MSc in Software Systems Engineering from RWTH Aachen University",
          icon: "graduation" as const,
        },
        {
          title: "ML Engineer",
          description: "Certified Machine Learning Engineer",
          icon: "cloud" as const,
        },
      ],
      cta: "Explore My Projects",
    },
    portfolio: {
      title: "Featured Projects",
      intro:
        "A selection of academic research and open-source machine learning projects demonstrating end-to-end ML solutions.",
      projects: [
        {
          title: "AI-based Decision Simulator",
          description:
            "Ask anything and the AI-powered simulator will model the outcomes.",
          image: "/images/shouldi.png",
          link: "https://shouldi.io",
          slug: "ai-decision-simulator",
        },
        {
          title: "AI Personal Assistant",
          description:
            "24/7 AI assistant with Calendar, Web Search & Telegram integration.",
          image: "/images/clawd_bot.jpg",
          link: "/images/clawd.gif",
          slug: "ai-personal-assistant",
        },
        {
          title: "MLOPS",
          description:
            "Machine Learning Model Deployment using Heroku and FastAPI.",
          image: "/images/pic01.jpg",
          link: "https://github.com/desared/Deploying-ML-Model-Heroku-FastAPI",
          slug: "ml-platform",
        },
        {
          title: "Customer Segmentation",
          description:
            "Customer Segmentation Report for Arvato Financial Services.",
          image: "/images/pic02.jpg",
          link: "https://github.com/desared/Arvato-Bertelsmann-Customer-Acquisition",
          slug: "customer-segmentation",
        },
        {
          title: "Risk Assessment",
          description:
            "Create, deploy, and monitor a dynamic risk assessment system.",
          image: "/images/pic03.png",
          link: "https://github.com/desared/Dynamic-Risk-Assessment-System",
          slug: "risk-assessment",
        },
        {
          title: "ML Pipeline",
          description:
            "ML Pipeline for Short-Term Rental Prices in NYC.",
          image: "/images/pic06.png",
          link: "https://github.com/desared/ML-pipeline-rental-prices",
          slug: "ml-pipeline",
        },
      ],
      cta: "View My Talks",
    },
    talks: {
      title: "Invited Talks",
      intro:
        "Sharing insights on data science at industry conferences and events.",
      entries: [
        {
          title: "AI, Data Analytics & Insights Summit 2025",
          date: "November 13-14, 2025",
          topic:
            "Lead Scoring Model: Enhancing CRM processes with predictive analytics",
          organizer: "Organized by BERRY Professionals",
          image: "/images/talk-ai-summit-2025.jpg",
        },
      ],
      cta: "View Technical Skills",
    },
    skills: {
      title: "Technical Expertise",
      intro:
        "My technical foundation combines statistical analysis with software engineering.",
      certifications: {
        title: "Certifications",
        items: [
          {
            name: "Machine Learning DevOps Engineer",
            link: "https://www.udacity.com/certificate/DK9DKALA",
          },
          {
            name: "Deep Learning Nanodegree",
            link: "https://www.udacity.com/certificate/TSU4GTKC",
          },
          {
            name: "Machine Learning Engineer Nanodegree",
            link: "https://www.udacity.com/certificate/35K4M2VH",
          },
        ],
      },
      techStack: {
        title: "Tech Stack",
        categories: [
          { label: "Programming", items: ["Python", "R", "SQL"] },
          { label: "Cloud-based", items: ["GCP", "Databricks"] },
          { label: "Engineering", items: ["Spark", "Airflow", "Docker"] },
          {
            label: "Frameworks",
            items: ["TensorFlow", "Keras", "Scikit-Learn", "FastAPI"],
          },
        ],
      },
      languages: {
        title: "Languages",
        items: [
          { name: "Albanian", flag: "/images/al.png", level: "Native Speaker" },
          {
            name: "English",
            flag: "/images/en.png",
            level: "Full Proficiency",
          },
          {
            name: "German",
            flag: "/images/de.png",
            level: "Working Proficiency",
          },
        ],
      },
      cta: "Get In Touch",
    },
    contact: {
      title: "Let's Connect",
      intro:
        "Interested in collaborating on data science projects or discussing opportunities? I'd love to hear from you.",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        sending: "Sending...",
        success:
          "Thank you! Your message has been sent successfully. I will get back to you soon.",
        error:
          "Oops! Something went wrong. Please try again or contact me directly via email.",
      },
    },
    footer: {
      copyright: "Desared Osmanllari. All rights reserved.",
    },
  },
  de: {
    nav: {
      brand: "~/data_scientist",
      about: "Über mich",
      portfolio: "Portfolio",
      talks: "Vorträge",
      skills: "Kompetenzen",
      contact: "Kontakt",
    },
    hero: {
      label: "DATA SCIENTIST & ML ENGINEER",
      greeting: "Hallo, ich bin",
      name: "Desared Osmanllari",
      description:
        "Leidenschaftlicher Data Scientist mit über 7 Jahren Erfahrung in datengetriebener Anwendungsentwicklung und maschinellem Lernen.",
      cta: "Mehr über mich",
    },
    about: {
      title: "Über mich",
      intro:
        "In meiner aktuellen Position optimiere ich Kundenakquisitionsprozesse, steigere Conversion-Raten und verbessere die Budgetallokation – stets getrieben von einer Leidenschaft für technologische Innovation und operative Exzellenz.",
      cards: [
        {
          title: "Data Science Experte",
          description: "Senior Data Scientist bei Sonova Digital",
          icon: "search" as const,
        },
        {
          title: "Bildung",
          description:
            "MSc in Software Systems Engineering, RWTH Aachen University",
          icon: "graduation" as const,
        },
        {
          title: "ML Engineer",
          description: "Zertifizierter Machine Learning Engineer",
          icon: "cloud" as const,
        },
      ],
      cta: "Projekte entdecken",
    },
    portfolio: {
      title: "Ausgewählte Projekte",
      intro:
        "Eine Auswahl akademischer Forschungs- und Open-Source Machine Learning Projekte mit End-to-End ML-Lösungen.",
      projects: [
        {
          title: "KI-basierter Entscheidungssimulator",
          description:
            "Stellen Sie eine beliebige Frage und der KI-Simulator modelliert die Ergebnisse.",
          image: "/images/shouldi.png",
          link: "https://shouldi.io",
          slug: "ai-decision-simulator",
        },
        {
          title: "KI-Assistent",
          description:
            "24/7-KI-Assistent mit Kalender-, Websuche- und Telegram-Integration.",
          image: "/images/clawd_bot.jpg",
          link: "/images/clawd.gif",
          slug: "ai-personal-assistant",
        },
        {
          title: "MLOPS",
          description:
            "Machine Learning Modell-Deployment mit Heroku und FastAPI.",
          image: "/images/pic01.jpg",
          link: "https://github.com/desared/Deploying-ML-Model-Heroku-FastAPI",
          slug: "ml-platform",
        },
        {
          title: "Kundensegmentierung",
          description:
            "Kundensegmentierungsbericht für Arvato Financial Services.",
          image: "/images/pic02.jpg",
          link: "https://github.com/desared/Arvato-Bertelsmann-Customer-Acquisition",
          slug: "customer-segmentation",
        },
        {
          title: "Risikobewertung",
          description:
            "Entwicklung, Bereitstellung und Monitoring eines dynamischen Risikobewertungssystems.",
          image: "/images/pic03.png",
          link: "https://github.com/desared/Dynamic-Risk-Assessment-System",
          slug: "risk-assessment",
        },
        {
          title: "ML Pipeline",
          description:
            "ML-Pipeline zur Preisvorhersage für Kurzzeitvermietungen in NYC.",
          image: "/images/pic06.png",
          link: "https://github.com/desared/ML-pipeline-rental-prices",
          slug: "ml-pipeline",
        },
      ],
      cta: "Meine Vorträge ansehen",
    },
    talks: {
      title: "Fachvorträge",
      intro:
        "Fachliche Einblicke in Data Science auf Konferenzen und Branchenveranstaltungen.",
      entries: [
        {
          title: "AI, Data Analytics & Insights Summit 2025",
          date: "13.-14. November 2025",
          topic:
            "Lead Scoring Modell: Verbesserung von CRM-Prozessen mit Predictive Analytics",
          organizer: "Organisiert von BERRY Professionals",
          image: "/images/talk-ai-summit-2025.jpg",
        },
      ],
      cta: "Technische Kompetenzen",
    },
    skills: {
      title: "Technische Expertise",
      intro:
        "Meine technische Grundlage verbindet statistische Analyse mit Softwareentwicklung.",
      certifications: {
        title: "Zertifizierungen",
        items: [
          {
            name: "Machine Learning DevOps Engineer",
            link: "https://www.udacity.com/certificate/DK9DKALA",
          },
          {
            name: "Deep Learning Nanodegree",
            link: "https://www.udacity.com/certificate/TSU4GTKC",
          },
          {
            name: "Machine Learning Engineer Nanodegree",
            link: "https://www.udacity.com/certificate/35K4M2VH",
          },
        ],
      },
      techStack: {
        title: "Tech Stack",
        categories: [
          { label: "Programmierung", items: ["Python", "R", "SQL"] },
          { label: "Cloud-basiert", items: ["GCP", "Databricks"] },
          { label: "Engineering", items: ["Spark", "Airflow", "Docker"] },
          {
            label: "Frameworks",
            items: ["TensorFlow", "Keras", "Scikit-Learn", "FastAPI"],
          },
        ],
      },
      languages: {
        title: "Sprachen",
        items: [
          {
            name: "Albanisch",
            flag: "/images/al.png",
            level: "Muttersprache",
          },
          {
            name: "Englisch",
            flag: "/images/en.png",
            level: "Verhandlungssicher",
          },
          {
            name: "Deutsch",
            flag: "/images/de.png",
            level: "Gute Kenntnisse",
          },
        ],
      },
      cta: "Kontakt",
    },
    contact: {
      title: "Kontakt aufnehmen",
      intro:
        "Sie interessieren sich für eine Zusammenarbeit bei Data-Science-Projekten oder möchten neue Möglichkeiten besprechen? Ich freue mich auf Ihre Nachricht.",
      form: {
        name: "Ihr Name",
        email: "Ihre E-Mail",
        subject: "Betreff",
        message: "Ihre Nachricht",
        submit: "Nachricht senden",
        sending: "Wird gesendet...",
        success:
          "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich bald bei Ihnen.",
        error:
          "Ups! Etwas ist schief gelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt per E-Mail.",
      },
    },
    footer: {
      copyright: "Desared Osmanllari. Alle Rechte vorbehalten.",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
