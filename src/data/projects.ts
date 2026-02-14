import type { Lang } from "./translations";

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  liveLink?: string;
  image: string;
  metrics: { value: string; label: string }[];
  sections: { title: string; content: string }[];
  technologies: string[];
}

const projectDetails: Record<Lang, ProjectDetail[]> = {
  en: [
    {
      slug: "ai-personal-assistant",
      title: "AI Personal Assistant",
      subtitle: "ClawdBot",
      description:
        "A 24/7 AI-powered personal assistant that lives inside your chat apps. It manages calendars, searches the web in real time, sends proactive reminders, and runs workflows — all from Telegram.",
      image: "/images/clawd_bot.jpg",
      metrics: [
        { value: "24/7", label: "Always On" },
        { value: "Free", label: "Infrastructure" },
        { value: "6", label: "Integrations" },
        { value: "Real-time", label: "Web Search" },
      ],
      sections: [
        {
          title: "The Challenge",
          content:
            "Most AI tools like ChatGPT are general-purpose interfaces — reactive and session-based. You visit them, ask a question, and leave. But a true personal assistant should work for you around the clock: managing calendars, sending reminders, running workflows, and searching the web — even while you're walking down the street. The goal was to build exactly that, without expensive hardware.",
        },
        {
          title: "Our Approach",
          content:
            "The assistant runs on an AWS EC2 free-tier instance, using the Gemini API for reasoning (pay-as-you-go). Telegram serves as the primary interface, though it can be swapped for WhatsApp or iMessage. The Brave Search API enables real-time web searches, while the Google Calendar API acts as the execution layer for managing appointments. A custom calendar Skill serves as the decision layer, guiding how and when the Calendar API is used.",
        },
        {
          title: "Key Features",
          content:
            "Always-On Design — unlike session-based AI tools, ClawdBot is a persistent assistant that works proactively in the background. Calendar Management — add, modify, or delete appointments through natural conversation. Proactive Reminders — the assistant sends notifications without being asked. Real-Time Web Search — fetches live information from the internet via Brave Search. Workflow Automation — runs multi-step workflows triggered by simple chat commands. Skill-Based Architecture — a custom decision layer determines how and when each API is invoked.",
        },
        {
          title: "Results & Impact",
          content:
            "The project demonstrates that building a serious AI assistant doesn't require shiny new hardware — just a server, the right APIs, and a mindset shift from tools to agents. The system runs reliably 24/7 on free-tier infrastructure, handles calendar operations, web searches, and proactive notifications, all through a simple Telegram conversation.",
        },
      ],
      technologies: [
        "AWS EC2",
        "Gemini API",
        "Telegram Bot API",
        "Brave Search API",
        "Google Calendar API",
        "Python",
      ],
    },
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
    {
      slug: "customer-segmentation",
      title: "Predictive Analytics for Arvato Financial Services",
      subtitle: "Customer Segmentation",
      description:
        "A data-driven customer acquisition strategy combining unsupervised segmentation with supervised learning to identify high-value prospects from 891K+ demographic records.",
      image: "/images/pic02.jpg",
      metrics: [
        { value: "891K+", label: "Records Analyzed" },
        { value: "0.79", label: "ROC-AUC Score" },
        { value: "366", label: "Features Processed" },
        { value: "6", label: "Segments Identified" },
      ],
      sections: [
        {
          title: "The Challenge",
          content:
            "Arvato Financial Services needed a smarter approach to customer acquisition for a German mail-order company. Traditional broad marketing was inefficient and costly. The project provided four datasets: a general population of 891,211 individuals with 366 features, 191,652 existing customers, and two campaign datasets for training and evaluation.",
        },
        {
          title: "Data Preprocessing & Feature Engineering",
          content:
            "Processing involved handling missing values, encoding categorical variables, and transforming mixed-type columns. Principal Component Analysis (PCA) retained 200 components preserving 95% of the total variance, reducing dimensionality while maintaining signal integrity across all 366 original features.",
        },
        {
          title: "Unsupervised Learning — Segmentation",
          content:
            "KMeans clustering segmented both populations into six optimal clusters. A critical finding emerged: 99.9% of existing customers concentrated in a single cluster (Cluster 2), which represented only 31% of the general population. This revealed a clear, actionable profile of the ideal customer and highlighted untapped prospect segments.",
        },
        {
          title: "Supervised Learning & Results",
          content:
            "Multiple algorithms were evaluated including Logistic Regression, Random Forest, AdaBoost, and Gradient Boosting. Gradient Boosting achieved the best performance with a training accuracy of 0.935 and a final test ROC-AUC of 0.79. The result is a complete, end-to-end customer acquisition pipeline enabling precision targeting to reduce acquisition costs while improving conversion rates.",
        },
      ],
      technologies: [
        "Python",
        "scikit-learn",
        "XGBoost",
        "PCA",
        "KMeans",
        "pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      slug: "risk-assessment",
      title: "Dynamic Risk Assessment System",
      subtitle: "ML DevOps",
      description:
        "An automated ML system that predicts client attrition risk for a company managing 10,000 corporate clients, with continuous monitoring, retraining, and API-based predictions.",
      image: "/images/pic03.png",
      metrics: [
        { value: "10K", label: "Clients Monitored" },
        { value: "Auto", label: "Retraining" },
        { value: "Full", label: "Diagnostics" },
        { value: "REST", label: "API Serving" },
      ],
      sections: [
        {
          title: "The Challenge",
          content:
            "A company managing 10,000 corporate clients needed a way to proactively identify accounts at risk of attrition. Manual monitoring was not scalable, and static models quickly became outdated as client behavior shifted over time. The goal was to build a dynamic system that could automatically detect data drift, retrain models, and serve predictions through a live API.",
        },
        {
          title: "Our Approach",
          content:
            "The system implements a complete ML lifecycle: automated data ingestion that detects and compiles new training data, model training with scikit-learn for attrition prediction, and a Flask-based REST API that serves predictions and performance metrics. DVC-style diagnostics generate dataset statistics and timing analyses to monitor model health.",
        },
        {
          title: "Automation & Monitoring",
          content:
            "Full process orchestration is achieved through cron job scheduling. The system automatically checks for new data, retrains models when data drift is detected, generates confusion matrix visualizations, and produces automated reporting documents. API endpoints expose model predictions, scoring metrics, and diagnostic summaries.",
        },
        {
          title: "Results & Impact",
          content:
            "The architecture delivers a self-maintaining risk assessment pipeline. New data is automatically ingested, models are retrained without manual intervention, and predictions are served with sub-second latency. The reporting layer ensures full visibility into model performance over time, enabling proactive client retention strategies.",
        },
      ],
      technologies: [
        "Python",
        "Flask",
        "scikit-learn",
        "pandas",
        "Matplotlib",
        "cron",
        "REST API",
      ],
    },
    {
      slug: "ml-pipeline",
      title: "ML Pipeline for Short-Term Rental Prices in NYC",
      subtitle: "Reproducible ML Workflow",
      description:
        "A fully reproducible machine learning pipeline for predicting short-term rental prices in New York City, designed to retrain weekly as new data arrives.",
      image: "/images/pic06.png",
      metrics: [
        { value: "100%", label: "Reproducible" },
        { value: "Weekly", label: "Retraining" },
        { value: "Full", label: "Versioning" },
        { value: "Auto", label: "Validation" },
      ],
      sections: [
        {
          title: "The Challenge",
          content:
            "Property management companies need reliable price estimates for short-term rentals based on comparable properties. The rental market changes rapidly, so models must be retrained frequently with new data. A one-off model is not enough — what's needed is a reproducible pipeline that can be run end-to-end or step-by-step, with full experiment tracking and artifact versioning.",
        },
        {
          title: "Our Approach",
          content:
            "The pipeline is orchestrated with MLflow, with each step (data download, preprocessing, EDA, data validation, train/test split, model training, evaluation) as an independent component. Weights & Biases handles artifact storage and experiment tracking. Hydra manages configuration via YAML files, enabling multi-run hyperparameter sweeps without code changes.",
        },
        {
          title: "Data Quality & Validation",
          content:
            "Automated data cleaning removes price outliers (keeping the $10–$350 per night range), handles missing values, and converts temporal data to proper formats. Testing thresholds validate dataset integrity by checking row counts and price distributions against reference datasets, catching data quality issues before they reach the model.",
        },
        {
          title: "Results & Impact",
          content:
            "The pipeline trains a Random Forest model with hyperparameter optimization, producing versioned artifacts at every stage. It supports running the complete pipeline or individual steps, making it suitable for both weekly automated retraining and ad-hoc experimentation. Full reproducibility is guaranteed through MLflow orchestration and W&B artifact tracking.",
        },
      ],
      technologies: [
        "Python",
        "MLflow",
        "Weights & Biases",
        "Hydra",
        "scikit-learn",
        "pandas",
        "Conda",
      ],
    },
  ],
  de: [
    {
      slug: "ai-personal-assistant",
      title: "KI-Assistent",
      subtitle: "ClawdBot",
      description:
        "Ein 24/7-KI-Assistent, der in Ihren Chat-Apps lebt. Er verwaltet Kalender, durchsucht das Web in Echtzeit, sendet proaktive Erinnerungen und führt Workflows aus — alles über Telegram.",
      image: "/images/clawd_bot.jpg",
      metrics: [
        { value: "24/7", label: "Immer aktiv" },
        { value: "Gratis", label: "Infrastruktur" },
        { value: "6", label: "Integrationen" },
        { value: "Echtzeit", label: "Websuche" },
      ],
      sections: [
        {
          title: "Die Herausforderung",
          content:
            "Die meisten KI-Tools wie ChatGPT sind allgemeine Interfaces — reaktiv und sitzungsbasiert. Man besucht sie, stellt eine Frage und geht. Ein echter persönlicher Assistent sollte jedoch rund um die Uhr für Sie arbeiten: Kalender verwalten, Erinnerungen senden, Workflows ausführen und das Web durchsuchen — selbst wenn Sie gerade unterwegs sind. Das Ziel war, genau das zu bauen, ohne teure Hardware.",
        },
        {
          title: "Unser Ansatz",
          content:
            "Der Assistent läuft auf einer AWS EC2 Free-Tier-Instanz und nutzt die Gemini API für das Reasoning (nutzungsbasiert). Telegram dient als primäres Interface, kann aber gegen WhatsApp oder iMessage ausgetauscht werden. Die Brave Search API ermöglicht Echtzeit-Websuchen, während die Google Calendar API als Ausführungsschicht für die Terminverwaltung dient. Ein benutzerdefinierter Kalender-Skill fungiert als Entscheidungsschicht und steuert, wie und wann die Calendar API verwendet wird.",
        },
        {
          title: "Hauptfunktionen",
          content:
            "Always-On Design — im Gegensatz zu sitzungsbasierten KI-Tools ist ClawdBot ein persistenter Assistent, der proaktiv im Hintergrund arbeitet. Kalenderverwaltung — Termine hinzufügen, ändern oder löschen durch natürliche Konversation. Proaktive Erinnerungen — der Assistent sendet Benachrichtigungen ohne Aufforderung. Echtzeit-Websuche — holt live Informationen aus dem Internet über Brave Search. Workflow-Automatisierung — führt mehrstufige Workflows durch einfache Chat-Befehle aus. Skill-basierte Architektur — eine benutzerdefinierte Entscheidungsschicht bestimmt, wie und wann jede API aufgerufen wird.",
        },
        {
          title: "Ergebnisse & Wirkung",
          content:
            "Das Projekt zeigt, dass der Bau eines ernsthaften KI-Assistenten keine teure Hardware erfordert — nur einen Server, die richtigen APIs und einen Perspektivwechsel von Tools zu Agenten. Das System läuft zuverlässig 24/7 auf Free-Tier-Infrastruktur, verarbeitet Kalenderoperationen, Websuchen und proaktive Benachrichtigungen — alles über eine einfache Telegram-Konversation.",
        },
      ],
      technologies: [
        "AWS EC2",
        "Gemini API",
        "Telegram Bot API",
        "Brave Search API",
        "Google Calendar API",
        "Python",
      ],
    },
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
    {
      slug: "customer-segmentation",
      title: "Prädiktive Analytik für Arvato Financial Services",
      subtitle: "Kundensegmentierung",
      description:
        "Eine datengetriebene Kundenakquisitionsstrategie, die unüberwachte Segmentierung mit überwachtem Lernen kombiniert, um hochwertige Interessenten aus 891K+ demografischen Datensätzen zu identifizieren.",
      image: "/images/pic02.jpg",
      metrics: [
        { value: "891K+", label: "Datensätze analysiert" },
        { value: "0,79", label: "ROC-AUC Score" },
        { value: "366", label: "Features verarbeitet" },
        { value: "6", label: "Segmente identifiziert" },
      ],
      sections: [
        {
          title: "Die Herausforderung",
          content:
            "Arvato Financial Services benötigte einen intelligenteren Ansatz zur Kundenakquise für ein deutsches Versandhandelsunternehmen. Traditionelles Breitenmarketing war ineffizient und kostspielig. Das Projekt umfasste vier Datensätze: eine Grundgesamtheit von 891.211 Personen mit 366 Merkmalen, 191.652 Bestandskunden sowie zwei Kampagnendatensätze für Training und Evaluation.",
        },
        {
          title: "Datenvorverarbeitung & Feature Engineering",
          content:
            "Die Verarbeitung umfasste den Umgang mit fehlenden Werten, die Kodierung kategorischer Variablen und die Transformation gemischter Spaltentypen. Die Hauptkomponentenanalyse (PCA) behielt 200 Komponenten bei und bewahrte 95% der Gesamtvarianz, wodurch die Dimensionalität reduziert und gleichzeitig die Signalintegrität über alle 366 ursprünglichen Features erhalten wurde.",
        },
        {
          title: "Unüberwachtes Lernen — Segmentierung",
          content:
            "KMeans-Clustering segmentierte beide Populationen in sechs optimale Cluster. Ein entscheidendes Ergebnis: 99,9% der Bestandskunden konzentrierten sich in einem einzigen Cluster (Cluster 2), der nur 31% der Grundgesamtheit ausmachte. Dies enthüllte ein klares, handlungsrelevantes Profil des idealen Kunden und zeigte unerschlossene Interessentensegmente auf.",
        },
        {
          title: "Überwachtes Lernen & Ergebnisse",
          content:
            "Mehrere Algorithmen wurden evaluiert, darunter Logistische Regression, Random Forest, AdaBoost und Gradient Boosting. Gradient Boosting erzielte die beste Leistung mit einer Trainingsgenauigkeit von 0,935 und einem finalen Test-ROC-AUC von 0,79. Das Ergebnis ist eine vollständige End-to-End-Kundenakquisitions-Pipeline, die präzises Targeting zur Senkung der Akquisekosten bei gleichzeitiger Steigerung der Konversionsraten ermöglicht.",
        },
      ],
      technologies: [
        "Python",
        "scikit-learn",
        "XGBoost",
        "PCA",
        "KMeans",
        "pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      slug: "risk-assessment",
      title: "Dynamisches Risikobewertungssystem",
      subtitle: "ML DevOps",
      description:
        "Ein automatisiertes ML-System zur Vorhersage des Abwanderungsrisikos von Kunden für ein Unternehmen mit 10.000 Firmenkunden, mit kontinuierlichem Monitoring, Retraining und API-basierten Vorhersagen.",
      image: "/images/pic03.png",
      metrics: [
        { value: "10K", label: "Kunden überwacht" },
        { value: "Auto", label: "Retraining" },
        { value: "Voll", label: "Diagnostik" },
        { value: "REST", label: "API-Serving" },
      ],
      sections: [
        {
          title: "Die Herausforderung",
          content:
            "Ein Unternehmen mit 10.000 Firmenkunden benötigte eine Möglichkeit, abwanderungsgefährdete Konten proaktiv zu identifizieren. Manuelles Monitoring war nicht skalierbar, und statische Modelle veralteten schnell mit sich änderndem Kundenverhalten. Das Ziel war ein dynamisches System, das automatisch Datendrift erkennt, Modelle neu trainiert und Vorhersagen über eine Live-API bereitstellt.",
        },
        {
          title: "Unser Ansatz",
          content:
            "Das System implementiert einen vollständigen ML-Lebenszyklus: automatisierte Datenerfassung, die neue Trainingsdaten erkennt und zusammenstellt, Modelltraining mit scikit-learn zur Abwanderungsvorhersage und eine Flask-basierte REST-API, die Vorhersagen und Leistungsmetriken bereitstellt. Diagnostik-Module generieren Datensatzstatistiken und Timing-Analysen zur Überwachung der Modellgesundheit.",
        },
        {
          title: "Automatisierung & Monitoring",
          content:
            "Vollständige Prozessorchestrierung wird durch Cron-Job-Scheduling erreicht. Das System prüft automatisch auf neue Daten, trainiert Modelle bei erkanntem Datendrift neu, generiert Konfusionsmatrix-Visualisierungen und erstellt automatisierte Berichte. API-Endpunkte stellen Modellvorhersagen, Scoring-Metriken und Diagnosezusammenfassungen bereit.",
        },
        {
          title: "Ergebnisse & Wirkung",
          content:
            "Die Architektur liefert eine selbstwartende Risikobewertungs-Pipeline. Neue Daten werden automatisch erfasst, Modelle ohne manuellen Eingriff neu trainiert und Vorhersagen mit Sub-Sekunden-Latenz bereitgestellt. Die Reporting-Schicht gewährleistet volle Transparenz über die Modellleistung im Zeitverlauf und ermöglicht proaktive Kundenbindungsstrategien.",
        },
      ],
      technologies: [
        "Python",
        "Flask",
        "scikit-learn",
        "pandas",
        "Matplotlib",
        "cron",
        "REST API",
      ],
    },
    {
      slug: "ml-pipeline",
      title: "ML-Pipeline für Kurzzeitvermietungspreise in NYC",
      subtitle: "Reproduzierbarer ML-Workflow",
      description:
        "Eine vollständig reproduzierbare Machine-Learning-Pipeline zur Vorhersage von Kurzzeitvermietungspreisen in New York City, die für wöchentliches Retraining mit neuen Daten ausgelegt ist.",
      image: "/images/pic06.png",
      metrics: [
        { value: "100%", label: "Reproduzierbar" },
        { value: "Wöchentl.", label: "Retraining" },
        { value: "Voll", label: "Versionierung" },
        { value: "Auto", label: "Validierung" },
      ],
      sections: [
        {
          title: "Die Herausforderung",
          content:
            "Immobilienverwaltungsunternehmen benötigen zuverlässige Preisschätzungen für Kurzzeitvermietungen basierend auf vergleichbaren Objekten. Der Mietmarkt ändert sich schnell, sodass Modelle regelmäßig mit neuen Daten neu trainiert werden müssen. Ein einmaliges Modell reicht nicht — benötigt wird eine reproduzierbare Pipeline, die end-to-end oder schrittweise ausgeführt werden kann, mit vollständigem Experiment-Tracking und Artefakt-Versionierung.",
        },
        {
          title: "Unser Ansatz",
          content:
            "Die Pipeline wird mit MLflow orchestriert, wobei jeder Schritt (Datendownload, Vorverarbeitung, EDA, Datenvalidierung, Train/Test-Split, Modelltraining, Evaluation) eine unabhängige Komponente ist. Weights & Biases übernimmt Artefaktspeicherung und Experiment-Tracking. Hydra verwaltet die Konfiguration über YAML-Dateien und ermöglicht Multi-Run-Hyperparameter-Sweeps ohne Codeänderungen.",
        },
        {
          title: "Datenqualität & Validierung",
          content:
            "Automatisierte Datenbereinigung entfernt Preisausreißer (Beibehaltung des Bereichs 10–350 $ pro Nacht), behandelt fehlende Werte und konvertiert zeitliche Daten in korrekte Formate. Test-Schwellenwerte validieren die Datensatzintegrität durch Prüfung von Zeilenanzahlen und Preisverteilungen gegen Referenzdatensätze und erkennen Datenqualitätsprobleme, bevor sie das Modell erreichen.",
        },
        {
          title: "Ergebnisse & Wirkung",
          content:
            "Die Pipeline trainiert ein Random-Forest-Modell mit Hyperparameter-Optimierung und erzeugt versionierte Artefakte in jeder Phase. Sie unterstützt sowohl die vollständige Pipeline-Ausführung als auch einzelne Schritte und eignet sich damit für wöchentliches automatisiertes Retraining und Ad-hoc-Experimente. Vollständige Reproduzierbarkeit ist durch MLflow-Orchestrierung und W&B-Artefakt-Tracking garantiert.",
        },
      ],
      technologies: [
        "Python",
        "MLflow",
        "Weights & Biases",
        "Hydra",
        "scikit-learn",
        "pandas",
        "Conda",
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
