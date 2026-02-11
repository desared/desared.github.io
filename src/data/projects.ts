import type { Lang } from "./translations";

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  liveLink: string;
  image: string;
  metrics: { value: string; label: string }[];
  sections: { title: string; content: string }[];
  technologies: string[];
}

const projectDetails: Record<Lang, ProjectDetail[]> = {
  en: [
    {
      slug: "ai-decision-simulator",
      title: "AI-based Decision Simulator",
      subtitle: "shouldi.io",
      description:
        "Ask anything and the AI-powered simulator will model the outcomes. Type \"Should I...?\" and receive a comprehensive decision analysis powered by advanced AI.",
      liveLink: "https://shouldi.io",
      image: "/images/shouldi.png",
      metrics: [
        { value: "1K+", label: "Users" },
        { value: "<5s", label: "Analysis Time" },
        { value: "100%", label: "Data Encrypted" },
        { value: "24/7", label: "Availability" },
      ],
      sections: [
        {
          title: "The Challenge",
          content:
            "Decision-making typically relies on intuition and incomplete information. We developed shouldi.io to democratize access to analytical decision support — a capability previously available only through expensive consultants or complex analytical tools.",
        },
        {
          title: "Our Approach",
          content:
            "We built a modern web platform using Next.js and React 19 with TypeScript on the frontend, powered by Google Generative AI (Gemini) as the core AI engine. The system uses Cloud Firestore for secure, user-scoped data storage with full encryption. Interactive visualizations are rendered with Recharts, and the UI is built with shadcn/ui and Tailwind CSS for a polished, responsive experience.",
        },
        {
          title: "Key Features",
          content:
            "Probabilistic Modeling — generates outcome probabilities with confidence ranges across multiple dimensions. Instant Analysis — results delivered in seconds. Natural Language Input — simple, conversational question format. Scenario Comparison — side-by-side outcome analysis. PDF Export & Dashboard — shareable results and access to past analyses. Decision Templates — pre-built scenarios for common life decisions.",
        },
        {
          title: "Results & Impact",
          content:
            "Over 1,000 users have generated thousands of analyses with sub-5-second response times. The platform maintains full user privacy through encrypted, user-scoped data architecture and is available around the clock with consistent performance.",
        },
      ],
      technologies: [
        "Next.js",
        "React 19",
        "TypeScript",
        "Google Gemini AI",
        "Firebase Auth",
        "Cloud Firestore",
        "Recharts",
        "shadcn/ui",
        "Tailwind CSS",
      ],
    },
    {
      slug: "ml-platform",
      title: "End-to-End ML Model Platform",
      subtitle: "MLOps Pipeline",
      description:
        "A production-grade machine learning pipeline spanning from data versioning and model training to API serving and cloud deployment with full CI/CD automation.",
      liveLink:
        "https://github.com/desared/Deploying-ML-Model-Heroku-FastAPI",
      image: "/images/pic01.jpg",
      metrics: [
        { value: "100%", label: "CI/CD Automated" },
        { value: "<1s", label: "API Latency" },
        { value: "Full", label: "Data Versioning" },
        { value: "Auto", label: "Cloud Deploy" },
      ],
      sections: [
        {
          title: "The Challenge",
          content:
            "Organizations struggle with deploying ML models to production. Data scientists build models in notebooks but lack the infrastructure skills needed to deliver a live, scalable API endpoint. This project aimed to bridge that gap through a complete, production-ready deployment pipeline.",
        },
        {
          title: "Our Approach",
          content:
            "We built an end-to-end pipeline using the Census Income dataset. The solution includes data cleaning and preprocessing using scikit-learn for binary classification, a FastAPI REST API with Pydantic validation and Swagger documentation, and DVC (Data Version Control) for artifact versioning with AWS S3 storage. The API exposes two endpoints: GET for health checks and POST for income predictions.",
        },
        {
          title: "Testing & Quality",
          content:
            "Comprehensive testing covers both model and API layers. The approach includes unit tests, API contract testing, slice-based performance analysis across demographic subgroups, and a documented model card addressing intended use, training data, and ethical considerations. GitHub Actions handles CI/CD with flake8 linting and pytest testing.",
        },
        {
          title: "Results & Impact",
          content:
            "The architecture delivers a fully automated path from code change to live API. The system achieves sub-second prediction latency, automatic validation on every push, and complete model traceability through DVC versioning. Deployment to Heroku is fully automated with S3 model artifact retrieval.",
        },
      ],
      technologies: [
        "Python",
        "FastAPI",
        "scikit-learn",
        "Heroku",
        "GitHub Actions",
        "DVC",
        "AWS S3",
        "pytest",
        "Pydantic",
      ],
    },
  ],
  de: [
    {
      slug: "ai-decision-simulator",
      title: "KI-basierter Entscheidungssimulator",
      subtitle: "shouldi.io",
      description:
        "Stellen Sie eine beliebige Frage und der KI-Simulator modelliert die Ergebnisse. Geben Sie \"Should I...?\" ein und erhalten Sie eine umfassende Entscheidungsanalyse.",
      liveLink: "https://shouldi.io",
      image: "/images/shouldi.png",
      metrics: [
        { value: "1K+", label: "Nutzer" },
        { value: "<5s", label: "Analysezeit" },
        { value: "100%", label: "Verschlüsselt" },
        { value: "24/7", label: "Verfügbarkeit" },
      ],
      sections: [
        {
          title: "Die Herausforderung",
          content:
            "Entscheidungsfindung basiert typischerweise auf Intuition und unvollständigen Informationen. Wir haben shouldi.io entwickelt, um analytische Entscheidungsunterstützung zu demokratisieren — eine Fähigkeit, die zuvor nur durch teure Berater oder komplexe Analysetools verfügbar war.",
        },
        {
          title: "Unser Ansatz",
          content:
            "Wir haben eine moderne Webplattform mit Next.js und React 19 mit TypeScript im Frontend aufgebaut, angetrieben von Google Generative AI (Gemini) als KI-Engine. Das System nutzt Cloud Firestore für sichere, nutzerbezogene Datenspeicherung mit vollständiger Verschlüsselung. Interaktive Visualisierungen werden mit Recharts gerendert, und die Benutzeroberfläche basiert auf shadcn/ui und Tailwind CSS.",
        },
        {
          title: "Hauptfunktionen",
          content:
            "Probabilistische Modellierung — generiert Ergebniswahrscheinlichkeiten mit Konfidenzintervallen über mehrere Dimensionen. Sofortanalyse — Ergebnisse in Sekunden. Natürliche Spracheingabe — einfaches, konversationelles Frageformat. Szenariovergleich — Ergebnisanalyse nebeneinander. PDF-Export & Dashboard — teilbare Ergebnisse und Zugriff auf vergangene Analysen. Entscheidungsvorlagen — vorgefertigte Szenarien für häufige Lebensentscheidungen.",
        },
        {
          title: "Ergebnisse & Wirkung",
          content:
            "Über 1.000 Nutzer haben Tausende von Analysen mit Antwortzeiten unter 5 Sekunden generiert. Die Plattform gewährleistet vollständige Privatsphäre durch verschlüsselte, nutzerbezogene Datenarchitektur und ist rund um die Uhr mit konstanter Leistung verfügbar.",
        },
      ],
      technologies: [
        "Next.js",
        "React 19",
        "TypeScript",
        "Google Gemini AI",
        "Firebase Auth",
        "Cloud Firestore",
        "Recharts",
        "shadcn/ui",
        "Tailwind CSS",
      ],
    },
    {
      slug: "ml-platform",
      title: "End-to-End ML-Modell-Plattform",
      subtitle: "MLOps Pipeline",
      description:
        "Eine produktionsreife Machine-Learning-Pipeline von der Datenversionierung und Modelltraining bis zum API-Serving und Cloud-Deployment mit vollständiger CI/CD-Automatisierung.",
      liveLink:
        "https://github.com/desared/Deploying-ML-Model-Heroku-FastAPI",
      image: "/images/pic01.jpg",
      metrics: [
        { value: "100%", label: "CI/CD Automatisiert" },
        { value: "<1s", label: "API-Latenz" },
        { value: "Voll", label: "Datenversionierung" },
        { value: "Auto", label: "Cloud Deploy" },
      ],
      sections: [
        {
          title: "Die Herausforderung",
          content:
            "Unternehmen haben Schwierigkeiten, ML-Modelle in die Produktion zu bringen. Data Scientists erstellen Modelle in Notebooks, verfügen aber nicht über die Infrastrukturkenntnisse, die für einen skalierbaren API-Endpunkt erforderlich sind. Dieses Projekt zielte darauf ab, diese Lücke durch eine vollständige, produktionsreife Deployment-Pipeline zu schließen.",
        },
        {
          title: "Unser Ansatz",
          content:
            "Wir haben eine End-to-End-Pipeline mit dem Census Income Datensatz aufgebaut. Die Lösung umfasst Datenbereinigung und Vorverarbeitung mit scikit-learn für binäre Klassifikation, eine FastAPI REST-API mit Pydantic-Validierung und Swagger-Dokumentation sowie DVC (Data Version Control) für Artefakt-Versionierung mit AWS S3 Storage. Die API bietet zwei Endpunkte: GET für Health Checks und POST für Einkommensprognosen.",
        },
        {
          title: "Tests & Qualität",
          content:
            "Umfassende Tests decken sowohl Modell- als auch API-Schichten ab. Der Ansatz umfasst Unit-Tests, API-Vertragstests, schichtbasierte Leistungsanalyse über demografische Untergruppen und eine dokumentierte Model Card zu Verwendungszweck, Trainingsdaten und ethischen Aspekten. GitHub Actions übernimmt CI/CD mit flake8-Linting und pytest-Tests.",
        },
        {
          title: "Ergebnisse & Wirkung",
          content:
            "Die Architektur liefert einen vollständig automatisierten Pfad vom Code-Commit bis zur Live-API. Das System erreicht Sub-Sekunden-Vorhersagelatenz, automatische Validierung bei jedem Push und vollständige Modellrückverfolgbarkeit durch DVC-Versionierung. Das Deployment auf Heroku ist vollständig automatisiert mit S3-Modellartefakt-Abruf.",
        },
      ],
      technologies: [
        "Python",
        "FastAPI",
        "scikit-learn",
        "Heroku",
        "GitHub Actions",
        "DVC",
        "AWS S3",
        "pytest",
        "Pydantic",
      ],
    },
  ],
};

export function getProjectBySlug(
  slug: string,
  lang: Lang
): ProjectDetail | undefined {
  return projectDetails[lang].find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectDetails.en.map((p) => p.slug);
}
