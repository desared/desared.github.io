import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://desared.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Desared Osmanllari — Data Scientist & ML Engineer",
    template: "%s | Desared Osmanllari",
  },
  description:
    "Desared Osmanllari is a Data Scientist and ML Engineer with 7+ years of experience in machine learning, data-driven application development, and AI products. Founder of ActOnData.",
  keywords: [
    "Desared Osmanllari",
    "Data Scientist",
    "ML Engineer",
    "Machine Learning",
    "Sonova Digital",
    "ActOnData",
    "RWTH Aachen",
    "Python",
    "AI",
    "Data Science portfolio",
  ],
  authors: [{ name: "Desared Osmanllari", url: BASE_URL }],
  creator: "Desared Osmanllari",
  openGraph: {
    type: "profile",
    firstName: "Desared",
    lastName: "Osmanllari",
    url: BASE_URL,
    siteName: "Desared Osmanllari",
    title: "Desared Osmanllari — Data Scientist & ML Engineer",
    description:
      "Data Scientist and ML Engineer with 7+ years of experience. Founder of ActOnData. MSc Software Systems Engineering, RWTH Aachen.",
    images: [
      {
        url: "/images/pic00.jpg",
        width: 1200,
        height: 630,
        alt: "Desared Osmanllari — Data Scientist & ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DOsmanllari",
    creator: "@DOsmanllari",
    title: "Desared Osmanllari — Data Scientist & ML Engineer",
    description:
      "Data Scientist and ML Engineer with 7+ years of experience. Founder of ActOnData.",
    images: ["/images/pic00.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/logo.png", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Desared Osmanllari",
  url: BASE_URL,
  image: `${BASE_URL}/images/pic00.jpg`,
  jobTitle: "Data Scientist & ML Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Sonova Digital",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "RWTH Aachen University",
  },
  description:
    "Data Scientist and ML Engineer with 7+ years of experience in machine learning and data-driven application development. Founder of ActOnData.",
  sameAs: [
    "https://github.com/desared",
    "https://www.linkedin.com/in/desared/",
    "https://x.com/DOsmanllari",
    "https://medium.com/@desaredosmanllari",
    "https://www.xing.com/profile/Desared_Osmanllari/web_profiles",
  ],
  knowsAbout: [
    "Machine Learning",
    "Data Science",
    "Python",
    "ML Engineering",
    "Artificial Intelligence",
    "Data Products",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
